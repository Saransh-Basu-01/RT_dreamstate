import { BadgeCheck, Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import { properties, type PropertyCategory } from "@/lib/properties";

export function PropertyGrid({
  title = "AI Curated For You",
  category,
}: {
  title?: string;
  category?: PropertyCategory;
}) {
  const visibleProperties = category
    ? properties.filter((property) => property.category === category)
    : properties.slice(0, 3);

  return (
    // Property Listings Section
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="mt-2 text-[#c2c6d6]">
          Kathmandu Valley listings ranked with AI match, price signals, and growth potential.
        </p>
      </div>
      {/* Property Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {visibleProperties.map((property) => (
          <article
            className="group overflow-hidden rounded-xl border border-white/10 bg-[#1a1c20] transition hover:border-[#adc6ff]/40"
            key={`${property.location}-${property.price}`}
          >
            <div className="h-64 overflow-hidden">
              <img
                alt={`${property.location} property`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                src={property.image}
              />
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#adc6ff]/20 bg-[#adc6ff]/10 px-3 py-1 text-xs font-bold text-[#adc6ff]">
                  <BadgeCheck className="size-3.5" aria-hidden />
                  {property.match}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#c2c6d6]">
                  <MapPin className="size-3.5" />
                  {property.location}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">{property.price}</h3>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#c2c6d6]">
                <span className="inline-flex items-center gap-1">
                  <BedDouble className="size-4" /> {property.beds}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Bath className="size-4" /> {property.baths}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Ruler className="size-4" /> {property.area}
                </span>
                <span className="font-extrabold text-[#4cd7f6]">{property.growth}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
