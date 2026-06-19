import { Router } from "express";
import { db } from "@workspace/db";
import { tripsTable } from "@workspace/db";
import { eq, and } from "drizzle-orm";
import {
  ListTripsQueryParams,
  GetTripParams,
} from "@workspace/api-zod";

const router = Router();

router.get("/trips/summary", async (req, res) => {
  try {
    const trips = await db.select().from(tripsTable);
    const longTrips = trips.filter((t) => t.type === "long").length;
    const shortTrips = trips.filter((t) => t.type === "short").length;

    const quarters = ["Q1", "Q2", "Q3", "Q4"];
    const byQuarter = quarters.map((quarter) => ({
      quarter,
      count: trips.filter((t) => t.quarter === quarter).length,
    }));

    res.json({
      totalTrips: trips.length,
      longTrips,
      shortTrips,
      byQuarter,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to fetch trips summary");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/trips", async (req, res) => {
  const parseResult = ListTripsQueryParams.safeParse(req.query);
  if (!parseResult.success) {
    res.status(400).json({ error: "Invalid query parameters" });
    return;
  }

  const { quarter, type } = parseResult.data;

  try {
    const conditions = [];
    if (quarter) conditions.push(eq(tripsTable.quarter, quarter));
    if (type) conditions.push(eq(tripsTable.type, type));

    const trips =
      conditions.length > 0
        ? await db
            .select()
            .from(tripsTable)
            .where(and(...conditions))
        : await db.select().from(tripsTable);

    res.json(trips);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch trips");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/trips/:id", async (req, res) => {
  const parseResult = GetTripParams.safeParse({ id: Number(req.params.id) });
  if (!parseResult.success) {
    res.status(400).json({ error: "Invalid trip id" });
    return;
  }

  try {
    const [trip] = await db
      .select()
      .from(tripsTable)
      .where(eq(tripsTable.id, parseResult.data.id));

    if (!trip) {
      res.status(404).json({ error: "Trip not found" });
      return;
    }

    res.json(trip);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch trip");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
