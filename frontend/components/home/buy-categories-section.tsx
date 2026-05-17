import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { buyCategories } from "@/lib/properties";

export function BuyCategoriesSection() {
  return (
    // Buy Categories Section
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
  );
}
