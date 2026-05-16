import { TrendingDown, TrendingUp } from "lucide-react";

const barHeights = ["42%", "50%", "46%", "66%", "72%", "84%", "93%"];

export function MarketInsightsSection() {
  return (
    // Market Insights Section
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-12">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1e2024] p-6 md:p-12">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="lg:w-1/3">
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Kathmandu Market Insights
            </h2>
            <p className="mb-8 leading-7 text-[#c2c6d6]">
              AI signals show stronger demand around Ring Road access,
              Lalitpur apartments, and Bhaktapur residential land.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-[#0a0c10]/60 p-4">
                <span className="text-sm font-semibold uppercase tracking-[0.05em] text-[#c2c6d6]">
                  Supply Volume
                </span>
                <span className="inline-flex items-center gap-2 font-bold text-[#ffb4ab]">
                  Tight <TrendingDown className="size-4" />
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-[#0a0c10]/60 p-4">
                <span className="text-sm font-semibold uppercase tracking-[0.05em] text-[#c2c6d6]">
                  Buyer Intent
                </span>
                <span className="inline-flex items-center gap-2 font-bold text-[#4cd7f6]">
                  Rising <TrendingUp className="size-4" />
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-[#adc6ff]/20 bg-[#adc6ff]/10 p-4">
                <span className="text-sm font-semibold uppercase tracking-[0.05em] text-[#adc6ff]">
                  Average Budget
                </span>
                <span className="font-bold text-[#adc6ff]">NPR 2.4 Cr</span>
              </div>
            </div>
          </div>
          <div className="min-h-[340px] lg:w-2/3">
            <div className="flex h-full flex-col justify-between rounded-xl bg-[#282a2e] p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#c2c6d6]">
                  Valley Price Growth Trend
                </span>
                <span className="rounded bg-[#4cd7f6]/20 px-3 py-1 text-xs font-bold text-[#4cd7f6]">
                  Live Forecast
                </span>
              </div>
              <div className="flex flex-1 items-end gap-2 py-10">
                {barHeights.map((height, index) => (
                  <div
                    className="relative w-full rounded-t-lg bg-[#adc6ff]/20 transition hover:bg-[#adc6ff]/45"
                    key={height}
                    style={{ height }}
                  >
                    {index === 5 ? (
                      <span className="absolute -top-4 left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#4cd7f6] shadow-[0_0_12px_#4cd7f6]" />
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="flex justify-between border-t border-white/5 pt-4 text-xs font-semibold text-[#c2c6d6]">
                <span>2024</span>
                <span>2025</span>
                <span>Projected 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
