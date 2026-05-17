"use client";

import { ChevronDown, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const tabs = ["Rent", "Buy", "New Projects", "Transactions", "Agents"];

const filters = [
  {
    label: "Property Type",
    key: "type",
    options: ["Land", "Flat", "Apartment", "House"],
  },
  {
    label: "Area (sqft)",
    key: "area",
    options: [
      "Under 500 sqft",
      "500 – 1000 sqft",
      "1000 – 2000 sqft",
      "2000+ sqft",
    ],
  },
  {
    label: "Location",
    key: "location",
    options: [
      "Kathmandu",
      "Lalitpur",
      "Bhaktapur",
      "Baneshwor",
      "Budhanilkantha",
      "Thamel",
    ],
  },
  {
    label: "Property Status",
    key: "status",
    options: ["Residential", "Commercial"],
  },
];

const tabPlaceholders: Record<string, string> = {
  Rent: "Search rentals by location or property",
  Buy: "Search properties to buy",
  "New Projects": "Search new projects in Kathmandu Valley",
  Transactions: "Search recent transactions",
  Agents: "Search agents by name or area",
};

function FilterDropdown({
  filter,
}: {
  filter: (typeof filters)[number];
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors
          ${
            selected
              ? "border-white bg-white/20 text-white"
              : "border-white/50 bg-white/10 text-white hover:border-white hover:bg-white/20"
          }`}
      >
        {selected ?? filter.label}
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div className="absolute top-[calc(100%+8px)] left-0 z-50 min-w-[190px] max-h-48 overflow-y-auto rounded-2xl border border-white/20 bg-black/40 p-2 shadow-2xl backdrop-blur-xl">
          {filter.options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm text-white transition-colors hover:bg-white/20"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PriceRangeDropdown() {
  const [open, setOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const label =
    minPrice || maxPrice
      ? `NPR ${minPrice || "0"} – ${maxPrice || "Any"}`
      : "Price Range";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors
          ${
            minPrice || maxPrice
              ? "border-white bg-white/20 text-white"
              : "border-white/50 bg-white/10 text-white hover:border-white hover:bg-white/20"
          }`}
      >
        {label}
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div className="absolute top-[calc(100%+8px)] left-0 z-50 w-64 rounded-2xl border border-white/20 bg-black/40 p-4 shadow-2xl backdrop-blur-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">
            Price Range (NPR)
          </p>
          <div className="flex flex-col gap-3">
            <div>
              <label className="mb-1 block text-xs text-white/70">Min. Price</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="e.g. 5000000"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/50"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/70">Max. Price</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="e.g. 20000000"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/50"
              />
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-1 w-full rounded-xl bg-[#1a8f4f] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#157a42]"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function PropertySearch() {
  const [activeTab, setActiveTab] = useState("Rent");

  return (
    <div className="flex w-full items-center justify-center px-6 py-8">
      <div className="w-full max-w-4xl">

        {/* Tabs */}
        <div className="mb-4 flex justify-center">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 p-1.5 backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors
                  ${
                    activeTab === tab
                      ? "bg-white text-[#2f258c] shadow"
                      : "text-white hover:bg-white/20"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Glassmorphism search card */}
        <div className="rounded-3xl border border-white/20 bg-white/10 px-8 py-8 shadow-2xl backdrop-blur-md">

          {/* Title */}
          <h2 className="mb-6 text-center text-xl font-semibold text-white">
            Find your perfect property in Kathmandu Valley
          </h2>

          {/* Search input row */}
          <div className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-1.5">
            <Search className="size-5 shrink-0 text-white/70" aria-hidden />
            <input
              type="text"
              placeholder={tabPlaceholders[activeTab]}
              className="min-w-0 flex-1 border-0 bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-white/50"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-[#1a8f4f] px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#157a42]"
            >
              Search
            </button>
          </div>

          {/* Filter pills — hidden for Transactions and Agents tabs */}
          {activeTab !== "Transactions" && activeTab !== "Agents" && (
            <div className="mt-6 flex flex-wrap gap-2.5">
              {filters.slice(0, 1).map((filter) => (
                <FilterDropdown key={filter.key} filter={filter} />
              ))}
              <PriceRangeDropdown />
              {filters.slice(1).map((filter) => (
                <FilterDropdown key={filter.key} filter={filter} />
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
