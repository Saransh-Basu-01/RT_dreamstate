import type { RentCategory, RentInsight, RentListing } from "@/features/rent/types/rent-listing";

export const rentCategories: RentCategory[] = [
  { label: "Apartments", count: "1,284" },
  { label: "Houses", count: "412" },
  { label: "Studios", count: "256" },
  { label: "Furnished", count: "638" },
  { label: "Pet friendly", count: "91" },
];

export const rentListings: RentListing[] = [
  {
    id: "rent-jhamsikhel-2bhk",
    title: "Sunlit 2BHK apartment with balcony and parking",
    type: "Apartment",
    price: "NPR 55,000",
    cadence: "monthly",
    location: "Jhamsikhel, Lalitpur",
    beds: "2",
    baths: "2",
    area: "1,180 sqft",
    listed: "Listed 2 hours ago",
    photos: 14,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    agent: "RT Verified Partner",
    badges: ["Verified", "SuperAgent", "New"],
  },
  {
    id: "rent-budhanilkantha-family-house",
    title: "Family house near schools with private garden",
    type: "House",
    price: "NPR 1,35,000",
    cadence: "monthly",
    location: "Budhanilkantha, Kathmandu",
    beds: "4",
    baths: "4",
    area: "6 Aana",
    listed: "Listed today",
    photos: 22,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    agent: "DreamState Homes",
    badges: ["Verified", "Family pick"],
  },
  {
    id: "rent-kapan-furnished-studio",
    title: "Fully furnished studio close to Boudha",
    type: "Studio",
    price: "NPR 32,000",
    cadence: "monthly",
    location: "Kapan, Kathmandu",
    beds: "Studio",
    baths: "1",
    area: "520 sqft",
    listed: "Listed 4 hours ago",
    photos: 9,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
    agent: "Urban Nest Nepal",
    badges: ["New", "Furnished"],
  },
];

export const rentInsights: RentInsight[] = [
  { label: "Avg. rent", value: "NPR 62k", note: "Kathmandu Valley" },
  { label: "Fastest area", value: "Lalitpur", note: "22% faster lets" },
  { label: "Verified homes", value: "82%", note: "photo and owner checked" },
];
