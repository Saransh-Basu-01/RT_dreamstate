import { PageHeader } from "@/components/shared/page-header";

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-28 sm:px-6 lg:px-12">
      <PageHeader
        eyebrow="Dashboard"
        title="Portfolio command center"
        description="One role-aware dashboard layout for owners, agents, and admins."
      />
    </section>
  );
}
