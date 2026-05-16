import { Bot, Brain, ChartNoAxesCombined, Landmark } from "lucide-react";

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

export function AiSuiteSection() {
  return (
    // AI Suite Section
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
  );
}
