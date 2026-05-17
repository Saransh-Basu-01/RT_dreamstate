import { RentCategoryChips } from "@/features/rent/components/rent-category-chips";
import { RentHeroSection } from "@/features/rent/components/rent-hero-section";
import { RentListingsSection } from "@/features/rent/components/rent-listings-section";
import { RentResultsToolbar } from "@/features/rent/components/rent-results-toolbar";
import { RentSidebar } from "@/features/rent/components/rent-sidebar";
import type { RentCategory, RentInsight, RentListing } from "@/features/rent/types/rent-listing";

type RentPageViewProps = {
  categories: RentCategory[];
  insights: RentInsight[];
  listings: RentListing[];
};

export function RentPageView({ categories, insights, listings }: RentPageViewProps) {
  return (
    <div className="bg-[#0a0c10] text-white">
      <RentHeroSection />

      <section className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-12">
        <RentResultsToolbar />
        <RentCategoryChips categories={categories} />

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <RentListingsSection initialListings={listings} />
          <RentSidebar insights={insights} />
        </div>
      </section>
    </div>
  );
}
