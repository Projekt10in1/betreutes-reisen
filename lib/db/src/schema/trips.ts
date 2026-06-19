import { pgTable, serial, text, boolean, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const tripsTable = pgTable("trips", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  quarter: varchar("quarter", { length: 2 }).notNull(),
  type: varchar("type", { length: 10 }).notNull(),
  imageUrl: text("image_url").notNull(),
  duration: text("duration"),
  destination: text("destination"),
  price: text("price"),
  wheelchairAccessible: boolean("wheelchair_accessible").notNull().default(false),
  walkingAidFriendly: boolean("walking_aid_friendly").notNull().default(false),
  highCareNeed: boolean("high_care_need").notNull().default(false),
});

export const insertTripSchema = createInsertSchema(tripsTable).omit({ id: true });
export type InsertTrip = z.infer<typeof insertTripSchema>;
export type Trip = typeof tripsTable.$inferSelect;
