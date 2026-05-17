import type { RentCategory } from "@/features/rent/types/rent-listing";

export function RentCategoryChips({ categories }: { categories: RentCategory[] }) {
  return (
    <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
      {categories.map((type) => (
        <button
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-[#c2c6d6] transition hover:border-[#adc6ff]/50 hover:text-[#adc6ff]"
          key={type.label}
          type="button"
        >
          {type.label} <span className="text-[#8c909f]">({type.count})</span>
        </button>
      ))}
    </div>
  );
}
