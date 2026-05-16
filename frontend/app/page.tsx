import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Brain,
  ChartNoAxesCombined,
  Landmark,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { PropertyGrid } from "@/components/property-grid";
import { PropertySearch } from "@/components/property-search";
import { buyCategories, communities } from "@/lib/properties";

const aiSuite = [
  {
    icon: ChartNoAxesCombined,
    title: "Investment Analytics",
    copy: "Forecast ROI using Kathmandu Valley demand, land value movement, and rental yield signals.",
  },
  {
    icon: Brain,
    title: "Virtual Advisor",
    copy: "Guide buyers, sellers, tenants, and landlords through pricing, documents, and next steps.",
  },
  {
    icon: Bot,
    title: "Smart Valuation",
    copy: "Estimate fair market value from neighborhood sales, amenities, road access, and property type.",
  },
  {
    icon: Landmark,
    title: "Mortgage Assistant",
    copy: "Compare financing options and affordability ranges in Nepalese rupees.",
  },
];

const barHeights = ["42%", "50%", "46%", "66%", "72%", "84%", "93%"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0c10] text-[#e2e2e8]">
      {/* Navbar */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-[900px] overflow-hidden pt-6">
        <div className="absolute inset-0">
          <img
            alt="Kathmandu Valley"
            className="h-full w-full object-cover opacity-70"
            src="/assets/house.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.25),#0a0c10)]" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-12">
          <h1 className="max-w-5xl text-4xl font-black leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discover Your Dream Space
          </h1>
          <p className="mt-3 text-xl font-medium text-white sm:text-2xl">
            Find properties to rent, buy or invest in Kathmandu Valley.
          </p>
          <div className="mt-6 w-full">
            <PropertySearch />
          </div>
        </div>
      </section>



      {/* Buy Categories Section */}
      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#adc6ff]/20 bg-[#adc6ff]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#adc6ff]">
              <Sparkles className="size-4" />
              Buy in Kathmandu Valley
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start with the property type
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.05em] text-[#adc6ff] hover:underline"
            href="/buy"
          >
            Explore Buy <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {buyCategories.map((category) => (
            <Link
              className="rounded-xl border border-white/10 bg-white/[0.05] p-8 transition hover:border-[#adc6ff]/40 hover:bg-white/[0.08]"
              href={category.href}
              key={category.href}
            >
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              <p className="mt-3 leading-7 text-[#c2c6d6]">{category.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-bold text-[#4cd7f6]">
                View listings <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Listings Section */}
      <PropertyGrid />

      {/* AI Suite Section */}
      <section className="bg-[#0c0e12] px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The DreamState AI Suite
            </h2>
            <p className="mt-3 text-[#c2c6d6]">
              AI tools for property valuation, market prediction, matching, CRM,
              photo tagging, and document automation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiSuite.map(({ icon: Icon, title, copy }) => (
              <article
                className="rounded-xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl transition hover:border-[#adc6ff]/30 hover:bg-white/[0.09]"
                key={title}
              >
                <Icon className="mb-6 size-10 text-[#adc6ff]" aria-hidden />
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="leading-7 text-[#c2c6d6]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
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

      {/* Communities Section */}
      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-12">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Kathmandu Valley Communities
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {communities.map((community) => (
            <article className="group relative h-[400px] overflow-hidden rounded-xl" key={community.name}>
              <img
                alt={`${community.name} real estate community`}
                className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                src={community.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10]/95 via-[#0a0c10]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 sm:p-8">
                <div>
                  <h3 className="mb-2 text-3xl font-bold text-white">{community.name}</h3>
                  <p className="text-[#c2c6d6]">{community.copy}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-[#adc6ff]">{community.units}</div>
                  <div className="text-xs font-bold uppercase tracking-[0.08em] text-[#c2c6d6]">
                    Active Units
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
