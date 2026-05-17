import { PageHeader } from "@/components/shared/page-header";

export default function AdminPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-28 sm:px-6 lg:px-12">
      <PageHeader
        eyebrow="Admin"
        title="Platform operations"
        description="Admin modules are isolated inside the admin feature and route group."
      />
    </section>
  );
}
