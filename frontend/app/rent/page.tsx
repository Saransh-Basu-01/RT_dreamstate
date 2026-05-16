import { InfoPage } from "@/components/info-page";

export default function RentPage() {
  return (
    <InfoPage
      title="Rent homes and apartments in Kathmandu Valley"
      description="Search rental homes, flats, and apartments with location matching, budget filters, amenities, and AI-assisted shortlisting."
      actions={["Family rentals", "Student apartments", "Furnished flats"]}
    />
  );
}
