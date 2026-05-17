"use client";

import { RentListingCard } from "@/features/rent/components/rent-listing-card";
import { useRentListings } from "@/features/rent/hooks/use-rent-listings";
import type { RentListing } from "@/features/rent/types/rent-listing";

export function RentListingsSection({ initialListings }: { initialListings: RentListing[] }) {
  const { data = initialListings, isError, isLoading } = useRentListings();

  if (isLoading) {
    return (
      <div className="space-y-5">
        {[1, 2, 3].map((item) => (
          <div className="h-[320px] rounded-lg border border-white/10 bg-white/[0.04]" key={item} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-white/10 bg-[#1a1c20] p-8 text-[#c2c6d6]">
        We could not load rental listings right now.
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="rounded-lg border border-white/10 bg-[#1a1c20] p-8 text-[#c2c6d6]">
        No rental listings match the current filters.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {data.map((listing) => (
        <RentListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
