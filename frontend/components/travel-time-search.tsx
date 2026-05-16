import {
  Bike,
  CarFront,
  Clock3,
  Footprints,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  TrainFront,
  UserRound,
} from "lucide-react";

const landmarks = [
  {
    name: "Bhaktapur Durbar Square",
    time: "20 mins",
    area: "Suryabinayak, Bhaktapur",
    price: "NPR 2.85 Cr",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    details: "4 Beds | 4 Baths | 6 Aana | House",
  },
  {
    name: "Patan Durbar Square",
    time: "12 mins",
    area: "Jhamsikhel, Lalitpur",
    price: "NPR 1.65 Cr",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    details: "3 Beds | 2 Baths | 1,450 sqft | Apartment",
  },
  {
    name: "Basantapur",
    time: "15 mins",
    area: "Tahachal, Kathmandu",
    price: "NPR 3.35 Cr",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85",
    details: "5 Beds | 4 Baths | 5.5 Aana | House",
  },
  {
    name: "Boudha",
    time: "18 mins",
    area: "Kapan, Kathmandu",
    price: "NPR 2.10 Cr",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    details: "4 Beds | 3 Baths | 4 Aana | House",
  },
  {
    name: "Swayambhu",
    time: "10 mins",
    area: "Sitapaila, Kathmandu",
    price: "NPR 1.25 Cr",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    details: "7 Aana | 16 ft Road | Residential Land",
  },
];

export function TravelTimeSearch() {
  return (
    // Search By Travel Times Section
    <section className="border-y border-white/5 bg-[#0d1016] px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
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
          {/* Travel Time Filters */}
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

            <label className="block">
              <span className="mb-3 block text-sm font-bold text-white">Selected location</span>
              <span className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-[#0a0c10]/80 px-4">
                <Search className="size-5 text-[#8c909f]" />
                <input
                  className="w-full border-0 bg-transparent p-0 text-base text-white outline-none placeholder:text-[#8c909f]"
                  placeholder="Search landmark or area"
                  type="text"
                />
              </span>
            </label>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-bold text-white">Max travel time</span>
                <div className="mt-3 text-2xl font-black text-[#adc6ff]">15 mins</div>
              </div>
              <div>
                <span className="text-sm font-bold text-white">Peak hours</span>
                <button
                  className="mt-3 flex h-9 w-16 items-center rounded-full bg-[#333539] p-1 transition hover:bg-[#424754]"
                  type="button"
                >
                  <span className="size-7 rounded-full bg-white" />
                </button>
              </div>
            </div>

            <div className="mt-5 h-2 rounded-full bg-white/15">
              <div className="relative h-2 w-2/5 rounded-full bg-[#adc6ff]">
                <span className="absolute right-0 top-1/2 size-5 -translate-y-1/2 rounded-full border-2 border-white bg-[#4d8eff] shadow-[0_0_16px_rgba(173,198,255,0.6)]" />
              </div>
            </div>

            <div className="mt-7 grid grid-cols-4 gap-3">
              {[
                { label: "Car", icon: CarFront, active: true },
                { label: "Bike", icon: Bike, active: false },
                { label: "Transit", icon: TrainFront, active: false },
                { label: "Walk", icon: Footprints, active: false },
              ].map(({ label, icon: Icon, active }) => (
                <button
                  className={
                    active
                      ? "flex min-h-12 items-center justify-center rounded-lg border border-[#adc6ff] bg-[#adc6ff]/10 text-[#adc6ff]"
                      : "flex min-h-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#8c909f] transition hover:border-[#adc6ff]/40 hover:text-[#adc6ff]"
                  }
                  aria-label={label}
                  key={label}
                  type="button"
                >
                  <Icon className="size-5" />
                </button>
              ))}
            </div>

            <button
              className="mt-7 min-h-14 w-full rounded-lg bg-[#adc6ff] px-5 text-base font-black uppercase tracking-[0.06em] text-[#00285d] transition hover:bg-white"
              type="button"
            >
              Confirm
            </button>
          </aside>

          {/* Landmark Property Cards */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-3 overflow-x-auto pb-2">
              {landmarks.map((landmark, index) => (
                <button
                  className={
                    index === 0
                      ? "whitespace-nowrap rounded-full border border-[#adc6ff] bg-[#adc6ff]/10 px-4 py-2 text-sm font-bold text-[#adc6ff]"
                      : "whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[#c2c6d6] transition hover:border-[#adc6ff]/40 hover:text-[#adc6ff]"
                  }
                  key={landmark.name}
                  type="button"
                >
                  {landmark.name}
                </button>
              ))}
            </div>

            <div className="flex gap-5 overflow-x-auto pb-4">
              {landmarks.map((landmark) => (
                <article
                  className="w-[320px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#1a1c20] shadow-xl shadow-black/20 transition hover:border-[#adc6ff]/40 sm:w-[380px]"
                  key={landmark.name}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      alt={`${landmark.area} property near ${landmark.name}`}
                      className="h-full w-full object-cover transition duration-700 hover:scale-110"
                      src={landmark.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10]/55 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#111318]/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                      <ShieldCheck className="size-4 text-[#adc6ff]" />
                      Verified
                    </span>
                    <button
                      className="absolute right-4 top-4 rounded-full bg-[#111318]/70 p-2 text-white backdrop-blur transition hover:text-[#adc6ff]"
                      type="button"
                    >
                      <Heart className="size-5" />
                    </button>
                  </div>

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
                      >
                        <Phone className="size-4" />
                        Call
                      </button>
                      <button
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#4cd7f6]/10 font-bold text-[#4cd7f6] transition hover:bg-[#4cd7f6]/20"
                        type="button"
                      >
                        <MessageCircle className="size-4" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
