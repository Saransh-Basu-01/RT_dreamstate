import { rentCategories, rentInsights, rentListings } from "@/features/rent/data/rent-listings";
import type { RentSearchFilters } from "@/features/rent/types/rent-listing";

export async function getRentListings(filters?: Partial<RentSearchFilters>) {
  void filters;
  return rentListings;
}

export async function getRentCategories() {
  return rentCategories;
}

export async function getRentInsights() {
  return rentInsights;
}
