"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  rentSearchSchema,
  type RentSearchSchema,
} from "@/features/rent/schemas/rent-search-schema";

const filterControls = [
  { name: "propertyType" as const, label: "Property type" },
  { name: "bedrooms" as const, label: "Beds & baths" },
  { name: "budget" as const, label: "Monthly budget" },
];

export function RentSearchForm() {
  const form = useForm<RentSearchSchema>({
    resolver: zodResolver(rentSearchSchema),
    defaultValues: {
      query: "",
      propertyType: "",
      bedrooms: "",
      budget: "",
    },
  });

  function onSubmit(values: RentSearchSchema) {
    void values;
    return undefined;
  }

  return (
    <form
      className="mt-8 rounded-lg border border-white/10 bg-[#1a1c20] p-3 shadow-2xl shadow-black/25"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
        <label className="flex min-h-14 items-center gap-3 rounded-md border border-white/10 bg-[#0a0c10] px-4">
          <Search className="size-5 text-[#8c909f]" />
          <input
            className="w-full bg-transparent text-sm font-semibold text-white outline-none placeholder:text-[#8c909f]"
            placeholder="Search area, landmark, or building"
            type="text"
            {...form.register("query")}
          />
        </label>

        {filterControls.map((control) => (
          <button
            className="flex min-h-14 items-center justify-between gap-3 rounded-md border border-white/10 bg-[#0a0c10] px-4 text-left text-sm font-bold text-white transition hover:border-[#adc6ff]/50"
            key={control.name}
            type="button"
          >
            {control.label}
            <ChevronDown className="size-4 text-[#adc6ff]" />
          </button>
        ))}

        <button
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#adc6ff] px-6 text-sm font-black uppercase tracking-[0.08em] text-[#00285d] transition hover:bg-white"
          type="submit"
        >
          <Search className="size-4" />
          Find
        </button>
      </div>
    </form>
  );
}
