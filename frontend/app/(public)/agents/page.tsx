import { InfoPage } from "@/components/info-page";

export default function AgentsPage() {
  return (
    <InfoPage
      title="Find verified real estate agents"
      description="Connect with Kathmandu Valley agents using CRM-backed lead routing, performance insights, and property specialization."
      actions={["Buyer agents", "Seller agents", "Property managers"]}
    />
  );
}
