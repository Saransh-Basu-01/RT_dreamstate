import { SiteHeader } from "@/components/layout";
import { PropertyGrid } from "@/components/property-grid";
import { PropertySearch } from "@/components/property-search";

export default function BuyApartmentPage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* Navbar */}
      <SiteHeader />

      {/* Apartment Hero And Search Section */}
      <section className="px-4 pb-6 pt-32 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Buy apartments in Kathmandu Valley
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c2c6d6]">
            Discover apartments in Lalitpur and Kathmandu with amenities,
            parking, security, and rental yield signals.
          </p>
          <div className="mt-10">
            <PropertySearch />
          </div>
        </div>
      </section>

      {/* Apartment Listings Section */}
      <PropertyGrid category="apartment" title="Apartment Listings" />
    </main>
  );
}
