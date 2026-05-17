import Image from "next/image";
import {
  BedDouble,
  Building2,
  CalendarClock,
  CheckCircle2,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { RentListing } from "@/features/rent/types/rent-listing";

export function RentListingCard({ listing }: { listing: RentListing }) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/10 bg-[#1a1c20] transition hover:border-[#adc6ff]/40">
      <div className="grid md:grid-cols-[330px_1fr]">
        <div className="relative min-h-[260px] overflow-hidden">
          <Image
            alt={`${listing.title} in ${listing.location}`}
            className="object-cover"
            fill
            sizes="(min-width: 768px) 330px, 100vw"
            src={listing.image}
          />
          <span className="absolute left-4 top-4 rounded-full bg-[#111318]/85 px-3 py-1 text-xs font-black text-white backdrop-blur">
            {listing.photos} photos
          </span>
          <button
            aria-label={`Save ${listing.title}`}
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-[#111318]/75 text-white backdrop-blur transition hover:text-[#adc6ff]"
            type="button"
          >
            <Heart className="size-5" />
          </button>
        </div>

        <div className="flex min-w-0 flex-col p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {listing.badges.map((badge) => (
              <span
                className="inline-flex items-center gap-1 rounded-full border border-[#adc6ff]/20 bg-[#adc6ff]/10 px-3 py-1 text-xs font-bold text-[#adc6ff]"
                key={badge}
              >
                <CheckCircle2 className="size-3.5" />
                {badge}
              </span>
            ))}
          </div>

          <p className="text-sm font-bold text-[#4cd7f6]">{listing.type}</p>
          <div className="mt-2 flex flex-wrap items-end gap-x-2 gap-y-1">
            <h3 className="text-3xl font-black tracking-normal text-white">{listing.price}</h3>
            <span className="pb-1 text-sm font-semibold text-[#8c909f]">{listing.cadence}</span>
          </div>
          <h4 className="mt-3 text-xl font-bold leading-snug text-white">{listing.title}</h4>
          <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#c2c6d6]">
            <MapPin className="size-4 text-[#adc6ff]" />
            {listing.location}
          </p>

          <div className="mt-5 flex flex-wrap gap-4 border-y border-white/10 py-4 text-sm font-bold text-[#c2c6d6]">
            <span className="inline-flex items-center gap-2">
              <BedDouble className="size-4 text-[#adc6ff]" />
              {listing.beds}
            </span>
            <span>{listing.baths} baths</span>
            <span>{listing.area}</span>
            <span className="inline-flex items-center gap-2 text-[#8c909f]">
              <CalendarClock className="size-4" />
              {listing.listed}
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#c2c6d6]">
              <Building2 className="size-4 text-[#4cd7f6]" />
              {listing.agent}
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#adc6ff]/10 px-3 text-sm font-bold text-[#adc6ff] transition hover:bg-[#adc6ff]/20"
                type="button"
              >
                <Phone className="size-4" />
                Call
              </button>
              <button
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-white/[0.06] px-3 text-sm font-bold text-white transition hover:bg-white/10"
                type="button"
              >
                <Mail className="size-4" />
                Email
              </button>
              <button
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#4cd7f6]/10 px-3 text-sm font-bold text-[#4cd7f6] transition hover:bg-[#4cd7f6]/20"
                type="button"
              >
                <MessageCircle className="size-4" />
                Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
