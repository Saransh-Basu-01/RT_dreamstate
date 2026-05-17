import Image from "next/image";
import { communities } from "@/lib/properties";

export function CommunitiesSection() {
  return (
    // Communities Section
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-12">
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Kathmandu Valley Communities
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {communities.map((community) => (
          <article
            className="group relative h-[400px] overflow-hidden rounded-xl"
            key={community.name}
          >
            <Image
              alt={`${community.name} real estate community`}
              className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
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
  );
}
