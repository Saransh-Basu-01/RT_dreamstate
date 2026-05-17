"use client";

import { useState, useRef, useCallback } from "react";
import {
  Clock3,
  Search,
  CarFront,
  Bike,
  TrainFront,
  Footprints,
  ShieldCheck,
  Heart,
  Phone,
  MessageCircle,
  MapPin,
  UserRound,
} from "lucide-react";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

interface Landmark {
  name: string;
  area: string;
  time: string;
  timeVal: number;
  price: string;
  details: string;
  image: string;
  phone: string;
}

const landmarks: Landmark[] = [
  {
    name: "Pashupatinath Temple",
    area: "Pashupati, Kathmandu",
    time: "8 mins",
    timeVal: 8,
    price: "NPR 1.8 Cr",
    details:
      "3BHK apartment with unobstructed views of the sacred ghats. Modern amenities with traditional Newari architectural touches.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    phone: "+9779801234567",
  },
  {
    name: "Boudhanath Stupa",
    area: "Boudha, Kathmandu",
    time: "12 mins",
    timeVal: 12,
    price: "NPR 2.4 Cr",
    details:
      "Spacious 4BHK townhouse steps from the iconic stupa. Rooftop terrace with panoramic valley views and private garden.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    phone: "+9779802345678",
  },
  {
    name: "Swayambhunath",
    area: "Swayambhu, Kathmandu",
    time: "18 mins",
    timeVal: 18,
    price: "NPR 3.1 Cr",
    details:
      "Luxury duplex penthouse near the Monkey Temple. Floor-to-ceiling windows, premium finishes, and dedicated parking.",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80",
    phone: "+9779803456789",
  },
  {
    name: "Thamel District",
    area: "Thamel, Kathmandu",
    time: "22 mins",
    timeVal: 22,
    price: "NPR 1.5 Cr",
    details:
      "2BHK modern apartment in the heart of the tourist hub. Walking distance to cafes, restaurants, and nightlife.",
    image:
      "https://images.unsplash.com/photo-1562832135-14a35d25edef?w=600&q=80",
    phone: "+9779804567890",
  },
  {
    name: "Patan Durbar Square",
    area: "Lalitpur, Patan",
    time: "30 mins",
    timeVal: 30,
    price: "NPR 2.9 Cr",
    details:
      "Heritage-style 3BHK with courtyards and traditional woodwork. Located in the cultural heart of Lalitpur city.",
    image:
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80",
    phone: "+9779805678901",
  },
];

const TRANSPORT_MODES = [
  { label: "Car", icon: CarFront },
  { label: "Bike", icon: Bike },
  { label: "Transit", icon: TrainFront },
  { label: "Walk", icon: Footprints },
] as const;

type TransportMode = (typeof TRANSPORT_MODES)[number]["label"];

// ─── Toast ────────────────────────────────────────────────────────────────────

function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 rounded-xl border border-[#adc6ff]/30 bg-[#1a1c20] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      {message}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function TravelTimeSearch() {
  // Filter / sidebar state
  const [searchQuery, setSearchQuery] = useState("");
  const [maxTime, setMaxTime] = useState(15);
  const [appliedTime, setAppliedTime] = useState(15);
  const [peakOn, setPeakOn] = useState(false);
  const [activeMode, setActiveMode] = useState<TransportMode>("Car");
  const [confirmApplied, setConfirmApplied] = useState(false);

  // Cards state
  const [activeTab, setActiveTab] = useState(0);
  const [favourites, setFavourites] = useState<Set<number>>(new Set());

  // Toast
  const [toastMsg, setToastMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Card scroll ref
  const cardsScrollRef = useRef<HTMLDivElement>(null);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2200);
  }, []);

  // Slider pct (5–60 range)
  const sliderPct = ((maxTime - 5) / (60 - 5)) * 100;

  // Derived visibility
  const isCardVisible = (lm: Landmark) => {
    const timeOk = lm.timeVal <= appliedTime;
    const searchOk =
      !searchQuery ||
      lm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lm.area.toLowerCase().includes(searchQuery.toLowerCase());
    return timeOk && searchOk;
  };

  // Handlers
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value) {
      const idx = landmarks.findIndex(
        (lm) =>
          lm.name.toLowerCase().includes(value.toLowerCase()) ||
          lm.area.toLowerCase().includes(value.toLowerCase())
      );
      if (idx !== -1 && idx !== activeTab) {
        setActiveTab(idx);
        scrollToCard(idx);
      }
    }
  };

  const scrollToCard = (idx: number) => {
    if (!cardsScrollRef.current) return;
    const cards = cardsScrollRef.current.querySelectorAll("article");
    cards[idx]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    scrollToCard(idx);
  };

  const handleConfirm = () => {
    setAppliedTime(maxTime);
    setConfirmApplied(true);
    showToast(
      `Showing properties within ${maxTime} mins by ${activeMode}${peakOn ? " (peak hours)" : ""}`
    );
    setTimeout(() => setConfirmApplied(false), 2000);
  };

  const toggleFavourite = (idx: number) => {
    setFavourites((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
        showToast("Removed from favourites");
      } else {
        next.add(idx);
        showToast("❤️ Saved to favourites");
      }
      return next;
    });
  };

  const handleCall = (lm: Landmark) => {
    showToast(`📞 Calling ${lm.phone}…`);
    setTimeout(() => {
      window.location.href = `tel:${lm.phone}`;
    }, 300);
  };

  const handleWhatsApp = (lm: Landmark) => {
    const msg = encodeURIComponent(
      `Hi! I'm interested in the property near ${lm.name} (${lm.area}) listed at ${lm.price}.`
    );
    const clean = lm.phone.replace(/\D/g, "");
    showToast("Opening WhatsApp…");
    setTimeout(() => {
      window.open(`https://wa.me/${clean}?text=${msg}`, "_blank");
    }, 300);
  };

  return (
    <>
      <section className="border-y border-white/5 bg-[#0d1016] px-4 py-16 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          {/* Header */}
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#4cd7f6]/20 bg-[#4cd7f6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#4cd7f6]">
                <Clock3 className="size-4" />
                Search by travel times
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Live near the places that shape your day
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-[#c2c6d6]">
              Pick a landmark and commute window to discover properties within easy reach of
              Kathmandu Valley heritage and lifestyle hubs.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
            {/* ── Sidebar ── */}
            <aside className="rounded-xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-xl bg-[#adc6ff]/15 text-[#adc6ff]">
                  <TrainFront className="size-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Travel-time search</h3>
                  <p className="text-sm text-[#c2c6d6]">Find homes by commute comfort.</p>
                </div>
              </div>

              {/* Search */}
              <label className="block">
                <span className="mb-3 block text-sm font-bold text-white">Selected location</span>
                <span className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-[#0a0c10]/80 px-4">
                  <Search className="size-5 text-[#8c909f]" />
                  <input
                    className="w-full border-0 bg-transparent p-0 text-base text-white outline-none placeholder:text-[#8c909f]"
                    placeholder="Search landmark or area"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                  />
                </span>
              </label>

              {/* Time + Peak */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-bold text-white">Max travel time</span>
                  <div className="mt-3 text-2xl font-black text-[#adc6ff]">{maxTime} mins</div>
                </div>
                <div>
                  <span className="text-sm font-bold text-white">Peak hours</span>
                  <button
                    className={`mt-3 flex h-9 w-16 items-center rounded-full p-1 transition-colors duration-200 ${
                      peakOn ? "bg-[#adc6ff]" : "bg-[#333539] hover:bg-[#424754]"
                    }`}
                    type="button"
                    aria-pressed={peakOn}
                    aria-label="Toggle peak hours"
                    onClick={() => {
                      setPeakOn((v) => !v);
                      showToast(!peakOn ? "Peak hours enabled" : "Peak hours disabled");
                    }}
                  >
                    <span
                      className={`size-7 rounded-full bg-white shadow transition-transform duration-200 ${
                        peakOn ? "translate-x-7" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Slider */}
              <div className="relative mt-5 h-2 rounded-full bg-white/15">
                <div
                  className="relative h-2 rounded-full bg-[#adc6ff] transition-all duration-100"
                  style={{ width: `${sliderPct}%` }}
                >
                  <span className="absolute right-0 top-1/2 size-5 -translate-y-1/2 rounded-full border-2 border-white bg-[#4d8eff] shadow-[0_0_16px_rgba(173,198,255,0.6)]" />
                </div>
                <input
                  type="range"
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  min={5}
                  max={60}
                  step={5}
                  value={maxTime}
                  aria-label="Max travel time in minutes"
                  onChange={(e) => setMaxTime(Number(e.target.value))}
                />
              </div>

              {/* Transport modes */}
              <div className="mt-7 grid grid-cols-4 gap-3">
                {TRANSPORT_MODES.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    aria-label={label}
                    aria-pressed={activeMode === label}
                    type="button"
                    className={
                      activeMode === label
                        ? "flex min-h-12 items-center justify-center rounded-lg border border-[#adc6ff] bg-[#adc6ff]/10 text-[#adc6ff]"
                        : "flex min-h-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#8c909f] transition hover:border-[#adc6ff]/40 hover:text-[#adc6ff]"
                    }
                    onClick={() => {
                      setActiveMode(label);
                      showToast(`Mode: ${label}`);
                    }}
                  >
                    <Icon className="size-5" />
                  </button>
                ))}
              </div>

              {/* Confirm */}
              <button
                className={`mt-7 min-h-14 w-full rounded-lg px-5 text-base font-black uppercase tracking-[0.06em] transition-colors duration-200 ${
                  confirmApplied
                    ? "bg-[#4cd7f6] text-[#001a2e]"
                    : "bg-[#adc6ff] text-[#00285d] hover:bg-white"
                }`}
                type="button"
                onClick={handleConfirm}
              >
                {confirmApplied ? "✓ Applied" : "Confirm"}
              </button>
            </aside>

            {/* ── Cards ── */}
            <div className="min-w-0">
              {/* Tabs */}
              <div className="mb-5 flex items-center gap-3 overflow-x-auto pb-2">
                {landmarks.map((landmark, index) => (
                  <button
                    key={landmark.name}
                    type="button"
                    className={
                      index === activeTab
                        ? "whitespace-nowrap rounded-full border border-[#adc6ff] bg-[#adc6ff]/10 px-4 py-2 text-sm font-bold text-[#adc6ff]"
                        : "whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[#c2c6d6] transition hover:border-[#adc6ff]/40 hover:text-[#adc6ff]"
                    }
                    onClick={() => handleTabClick(index)}
                  >
                    {landmark.name}
                  </button>
                ))}
              </div>

              {/* Card scroll */}
              <div ref={cardsScrollRef} className="flex gap-5 overflow-x-auto pb-4">
                {landmarks.map((landmark, idx) => {
                  const visible = isCardVisible(landmark);
                  const liked = favourites.has(idx);

                  return (
                    <article
                      key={landmark.name}
                      className={`w-[320px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#1a1c20] shadow-xl shadow-black/20 transition-all duration-300 hover:border-[#adc6ff]/40 sm:w-[380px] ${
                        visible ? "opacity-100 scale-100" : "opacity-20 scale-[0.97] pointer-events-none"
                      }`}
                    >
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          alt={`${landmark.area} property near ${landmark.name}`}
                          className="h-full w-full object-cover transition duration-700 hover:scale-110"
                          fill
                          sizes="(min-width: 640px) 380px, 320px"
                          src={landmark.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10]/55 to-transparent" />
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#111318]/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                          <ShieldCheck className="size-4 text-[#adc6ff]" />
                          Verified
                        </span>
                        <button
                          className={`absolute right-4 top-4 rounded-full bg-[#111318]/70 p-2 backdrop-blur transition-colors duration-200 ${
                            liked ? "text-[#ff6b8a]" : "text-white hover:text-[#adc6ff]"
                          }`}
                          type="button"
                          aria-label={liked ? "Remove from favourites" : "Save to favourites"}
                          onClick={() => toggleFavourite(idx)}
                        >
                          <Heart className={`size-5 ${liked ? "fill-current" : ""}`} />
                        </button>
                      </div>

                      {/* Body */}
                      <div className="p-5">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#adc6ff]/10 px-3 py-1 text-sm font-bold text-[#adc6ff]">
                            <Clock3 className="size-4" />
                            {landmark.time}
                          </span>
                          <span className="text-sm font-semibold text-[#c2c6d6]">
                            to {landmark.name}
                          </span>
                        </div>

                        <div className="mb-3 flex items-center gap-3 border-b border-white/10 pb-4">
                          <span className="flex size-10 items-center justify-center rounded-full bg-[#4cd7f6]/15 text-[#4cd7f6]">
                            <UserRound className="size-5" />
                          </span>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-[0.08em] text-[#4cd7f6]">
                              Superagent
                            </div>
                            <div className="font-semibold text-white">RT DreamState Advisor</div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-black text-white">{landmark.price}</h3>
                        <p className="mt-3 text-sm leading-6 text-[#c2c6d6]">{landmark.details}</p>
                        <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#c2c6d6]">
                          <MapPin className="size-4 text-[#adc6ff]" />
                          {landmark.area}
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                          <button
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#adc6ff]/10 font-bold text-[#adc6ff] transition hover:bg-[#adc6ff]/20"
                            type="button"
                            onClick={() => handleCall(landmark)}
                          >
                            <Phone className="size-4" />
                            Call
                          </button>
                          <button
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#4cd7f6]/10 font-bold text-[#4cd7f6] transition hover:bg-[#4cd7f6]/20"
                            type="button"
                            onClick={() => handleWhatsApp(landmark)}
                          >
                            <MessageCircle className="size-4" />
                            WhatsApp
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toast message={toastMsg} visible={toastVisible} />
    </>
  );
}