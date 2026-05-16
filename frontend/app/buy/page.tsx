import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout";
import { PropertyGrid } from "@/components/property-grid";
import { PropertySearch } from "@/components/property-search";
import { buyCategories } from "@/lib/properties";

export default function BuyPage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* Navbar */}
      <SiteHeader />

      {/* Buy Hero And Search Section */}
      <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Buy property in Kathmandu Valley
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c2c6d6]">
            Compare houses, land, and apartments with Nepalese rupee pricing,
            location intelligence, and AI match scoring.
          </p>
          <div className="mt-10">
            <PropertySearch />
          </div>

          {/* Buy Category Cards Section */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {buyCategories.map((category) => (
              <Link
                className="rounded-xl border border-white/10 bg-white/[0.05] p-8 transition hover:border-[#adc6ff]/40"
                href={category.href}
                key={category.href}
              >
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <p className="mt-3 leading-7 text-[#c2c6d6]">{category.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-bold text-[#4cd7f6]">
                  Open page <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Buy Listings Section */}
      <PropertyGrid title="Featured Buy Listings" />
    </main>
  );
}
