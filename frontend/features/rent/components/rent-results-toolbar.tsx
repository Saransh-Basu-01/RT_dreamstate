import { Bell, Map, SlidersHorizontal } from "lucide-react";

export function RentResultsToolbar() {
  return (
    <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div>
        <p className="text-sm font-semibold text-[#8c909f]">Rent / Kathmandu Valley</p>
        <h2 className="mt-2 text-3xl font-black tracking-normal text-white">
          2,681 rental properties
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-bold text-[#c2c6d6] transition hover:border-[#adc6ff]/50 hover:text-[#adc6ff]"
          type="button"
        >
          <Map className="size-4" />
          Map view
        </button>
        <button
          className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#4cd7f6]/30 bg-[#4cd7f6]/10 px-4 text-sm font-bold text-[#4cd7f6] transition hover:bg-[#4cd7f6]/20"
          type="button"
        >
          <Bell className="size-4" />
          Create alert
        </button>
        <button
          className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-bold text-[#c2c6d6] transition hover:border-[#adc6ff]/50 hover:text-[#adc6ff]"
          type="button"
        >
          <SlidersHorizontal className="size-4" />
          Sort: Featured
        </button>
      </div>
    </div>
  );
}
