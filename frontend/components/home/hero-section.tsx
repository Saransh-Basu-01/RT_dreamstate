import { PropertySearch } from "@/components/property-search";

export function HeroSection() {
  return (
    // Hero Section
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
  );
}
