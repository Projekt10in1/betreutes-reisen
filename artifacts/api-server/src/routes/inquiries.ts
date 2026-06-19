import { Router } from "express";
import { db } from "@workspace/db";
import { inquiriesTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { CreateInquiryBody, ListInquiriesQueryParams } from "@workspace/api-zod";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "betreutes2024";

const router = Router();

router.post("/inquiries", async (req, res) => {
  const parseResult = CreateInquiryBody.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({ error: "Ungültige Eingabe", details: parseResult.error.issues });
    return;
  }

  const { name, email, phone, careLevel, limitations, wishDestination, message } =
    parseResult.data;

  try {
    const [inquiry] = await db
      .insert(inquiriesTable)
      .values({
        name,
        email,
        phone,
        careLevel,
        limitations: limitations ?? null,
        wishDestination: wishDestination ?? null,
        message,
      })
      .returning();

    res.status(201).json(inquiry);
  } catch (err) {
    req.log.error({ err }, "Failed to create inquiry");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/inquiries", async (req, res) => {
  const parseResult = ListInquiriesQueryParams.safeParse(req.query);
  if (!parseResult.success) {
    res.status(400).json({ error: "Invalid query parameters" });
    return;
  }

  const { adminPassword } = parseResult.data;

  if (adminPassword !== ADMIN_PASSWORD) {
    res.status(401).json({ error: "Nicht autorisiert" });
    return;
  }

  try {
    const inquiries = await db
      .select()
      .from(inquiriesTable)
      .orderBy(desc(inquiriesTable.createdAt));

    res.json(inquiries);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch inquiries");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
