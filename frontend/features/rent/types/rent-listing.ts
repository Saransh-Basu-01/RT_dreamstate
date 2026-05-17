export type RentListingBadge = "Verified" | "SuperAgent" | "New" | "Family pick" | "Furnished";

export type RentListing = {
  id: string;
  title: string;
  type: "Apartment" | "House" | "Studio";
  price: string;
  cadence: "monthly";
  location: string;
  beds: string;
  baths: string;
  area: string;
  listed: string;
  photos: number;
  image: string;
  agent: string;
  badges: RentListingBadge[];
};

export type RentCategory = {
  label: string;
  count: string;
};

export type RentInsight = {
  label: string;
  value: string;
  note: string;
};

export type RentSearchFilters = {
  query: string;
  propertyType: string;
  bedrooms: string;
  budget: string;
};
