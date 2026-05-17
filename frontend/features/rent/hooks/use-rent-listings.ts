"use client";

import { useQuery } from "@tanstack/react-query";
import { rentQueryKeys } from "@/features/rent/constants/rent-query-keys";
import { getRentListings } from "@/features/rent/services/rent-service";
import type { RentSearchFilters } from "@/features/rent/types/rent-listing";

export function useRentListings(filters?: Partial<RentSearchFilters>) {
  return useQuery({
    queryKey: [rentQueryKeys.listings, filters],
    queryFn: () => getRentListings(filters),
  });
}
