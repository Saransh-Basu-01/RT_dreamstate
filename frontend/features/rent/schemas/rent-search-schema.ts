import { z } from "zod";

export const rentSearchSchema = z.object({
  query: z.string().trim().max(120, "Search must be under 120 characters"),
  propertyType: z.string().trim(),
  bedrooms: z.string().trim(),
  budget: z.string().trim(),
});

export type RentSearchSchema = z.infer<typeof rentSearchSchema>;
