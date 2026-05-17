import { InfoPage } from "@/components/info-page";

export default function SellPage() {
  return (
    <InfoPage
      title="Sell your property with AI-backed pricing"
      description="List houses, land, or apartments with smart valuation, automatic photo tagging, document automation, and qualified buyer matching."
      actions={["Get valuation", "Create listing", "Match buyers"]}
    />
  );
}
