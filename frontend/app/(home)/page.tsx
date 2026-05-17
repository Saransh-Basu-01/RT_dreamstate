import {
  AiSuiteSection,
  BuyCategoriesSection,
  CommunitiesSection,
  HeroSection,
  MarketInsightsSection,
} from "@/components/home";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { PropertyGrid } from "@/components/home/property-grid";
import { TravelTimeSearch } from "@/components/home/travel-time-search";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0c10] text-[#e2e2e8]">
      {/* Navbar */}
      <SiteHeader />

      <HeroSection />
      <TravelTimeSearch />
      <BuyCategoriesSection />

      {/* Featured Listings Section */}
      <PropertyGrid />

      <AiSuiteSection />
      <MarketInsightsSection />
      <CommunitiesSection />

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
