import { InfoPage } from "@/components/info-page";

export default function NewProjectsPage() {
  return (
    <InfoPage
      title="New projects across Kathmandu Valley"
      description="Explore upcoming apartments, housing communities, and plotted developments with launch pricing and demand forecasts."
      actions={["Upcoming apartments", "Housing communities", "Pre-launch offers"]}
    />
  );
}
