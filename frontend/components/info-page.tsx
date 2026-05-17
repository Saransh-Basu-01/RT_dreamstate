import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout";
import { PropertySearch } from "@/components/home/property-search";

export function InfoPage({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions: string[];
}) {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* Navbar */}
      <SiteHeader />

      {/* Page Hero And Search Section */}
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#c2c6d6]">{description}</p>
          <div className="mt-10">
            <PropertySearch />
          </div>

          {/* Action Cards Section */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {actions.map((action) => (
              <article
                className="rounded-xl border border-white/10 bg-white/[0.05] p-8"
                key={action}
              >
                <h2 className="text-2xl font-bold">{action}</h2>
                <p className="mt-3 leading-7 text-[#c2c6d6]">
                  AI-assisted workflow for Kathmandu Valley real estate decisions.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-bold text-[#4cd7f6]">
                  Continue <ArrowRight className="size-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
