import { ShieldCheck, Sparkles } from "lucide-react";
import { RentSearchForm } from "@/features/rent/components/rent-search-form";

export function RentHeroSection() {
  return (
    <section className="border-b border-white/10 bg-[#111318] pt-28">
      <div className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4cd7f6]/25 bg-[#4cd7f6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#4cd7f6]">
              <Sparkles className="size-4" />
              Rent with confidence
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Rental homes across Kathmandu Valley
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c2c6d6]">
              Search verified apartments, houses, studios, and furnished rentals ranked by budget
              fit, commute comfort, and listing freshness.
            </p>
          </div>

          <div className="rounded-lg border border-[#adc6ff]/20 bg-[#adc6ff]/10 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 size-6 text-[#adc6ff]" />
              <div>
                <h2 className="text-xl font-bold text-white">RT SafeRent check</h2>
                <p className="mt-2 text-sm leading-6 text-[#c2c6d6]">
                  Prioritize listings with owner verification, current photos, and broker response
                  tracking before you visit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <RentSearchForm />
      </div>
    </section>
  );
}
