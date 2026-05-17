import { Bell, Map, Star } from "lucide-react";
import type { RentInsight } from "@/features/rent/types/rent-listing";

const mapMarkers = [
  { position: "left-12 top-10", price: "55k" },
  { position: "right-14 top-20", price: "32k" },
  { position: "left-28 bottom-12", price: "135k" },
];

export function RentSidebar({ insights }: { insights: RentInsight[] }) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-lg border border-white/10 bg-[#111318] p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-black text-white">Rental map</h3>
          <Map className="size-5 text-[#adc6ff]" />
        </div>
        <div className="relative h-56 overflow-hidden rounded-md border border-white/10 bg-[#0a0c10]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(173,198,255,0.08)_1px,transparent_1px),linear-gradient(rgba(76,215,246,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
          {mapMarkers.map((marker) => (
            <span
              className={`absolute ${marker.position} rounded-full bg-[#adc6ff] px-3 py-1 text-xs font-black text-[#00285d] shadow-lg shadow-[#adc6ff]/20`}
              key={marker.price}
            >
              {marker.price}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#4cd7f6]/20 bg-[#4cd7f6]/10 p-5">
        <h3 className="text-xl font-black text-white">Create a rent alert</h3>
        <p className="mt-2 text-sm leading-6 text-[#c2c6d6]">
          Get matched when a verified home fits your budget, area, and move-in date.
        </p>
        <button
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#4cd7f6] px-4 text-sm font-black uppercase tracking-[0.08em] text-[#003640] transition hover:bg-white"
          type="button"
        >
          <Bell className="size-4" />
          Set alert
        </button>
      </div>

      <div className="rounded-lg border border-white/10 bg-[#111318] p-5">
        <h3 className="mb-4 text-xl font-black text-white">Market pulse</h3>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div className="flex items-start justify-between gap-4" key={insight.label}>
              <div>
                <p className="text-sm font-semibold text-[#8c909f]">{insight.label}</p>
                <p className="mt-1 text-sm text-[#c2c6d6]">{insight.note}</p>
              </div>
              <p className="text-right text-lg font-black text-[#adc6ff]">{insight.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-[#111318] p-5">
        <p className="inline-flex items-center gap-2 text-sm font-bold text-[#adc6ff]">
          <Star className="size-4" />
          Renter tip
        </p>
        <p className="mt-3 text-sm leading-6 text-[#c2c6d6]">
          Shortlist homes with recent photos first, then compare commute and parking before
          scheduling visits.
        </p>
      </div>
    </aside>
  );
}
