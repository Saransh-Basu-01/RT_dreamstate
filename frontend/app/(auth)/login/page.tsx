import { PageHeader } from "@/components/shared/page-header";

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-[520px] px-4 py-32">
      <PageHeader
        eyebrow="Secure access"
        title="Log in"
        description="Authentication screens belong in the auth route group and can be expanded without touching public pages."
      />
    </section>
  );
}
