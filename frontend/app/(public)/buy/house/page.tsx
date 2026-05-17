import { SiteHeader } from "@/components/layout";
import { PropertyGrid } from "@/components/home/property-grid";
import { PropertySearch } from "@/components/home/property-search";

export default function BuyHousePage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* Navbar */}
      <SiteHeader />

      {/* House Hero And Search Section */}
      <section className="px-4 pb-6 pt-32 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Buy houses in Kathmandu Valley
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c2c6d6]">
            Independent homes in Budhanilkantha, Hattigauda, Bhaisepati,
            Maharajgunj, and nearby residential neighborhoods.
          </p>
          <div className="mt-10">
            <PropertySearch />
          </div>
        </div>
      </section>

      {/* House Listings Section */}
      <PropertyGrid category="house" title="House Listings" />
    </main>
  );
}
