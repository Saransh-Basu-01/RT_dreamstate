import { SiteHeader } from "@/components/layout";
import { PropertyGrid } from "@/components/home/property-grid";
import { PropertySearch } from "@/components/home/property-search";

export default function BuyLandPage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* Navbar */}
      <SiteHeader />

      {/* Land Hero And Search Section */}
      <section className="px-4 pb-6 pt-32 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Buy land in Kathmandu Valley
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c2c6d6]">
            Compare residential plots by aana price, road access, facing,
            utility access, and growth forecast.
          </p>
          <div className="mt-10">
            <PropertySearch />
          </div>
        </div>
      </section>

      {/* Land Listings Section */}
      <PropertyGrid category="land" title="Land Listings" />
    </main>
  );
}
