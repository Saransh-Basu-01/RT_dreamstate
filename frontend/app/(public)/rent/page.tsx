import type { Metadata } from "next";
import { RentPageView } from "@/features/rent/components/rent-page-view";
import {
  getRentCategories,
  getRentInsights,
  getRentListings,
} from "@/features/rent/services/rent-service";

export const metadata: Metadata = {
  title: "Rent Homes in Kathmandu Valley | RT DreamState",
  description:
    "Search verified apartments, houses, studios, and furnished rental homes across Kathmandu Valley.",
  openGraph: {
    title: "Rent Homes in Kathmandu Valley | RT DreamState",
    description:
      "Discover verified Kathmandu Valley rental homes with budget, commute, and listing freshness signals.",
    type: "website",
  },
};

export default async function RentPage() {
  const [categories, insights, listings] = await Promise.all([
    getRentCategories(),
    getRentInsights(),
    getRentListings(),
  ]);

  return <RentPageView categories={categories} insights={insights} listings={listings} />;
}
