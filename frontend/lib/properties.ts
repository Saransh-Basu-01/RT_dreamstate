export type PropertyCategory = "house" | "land" | "apartment";

export const navItems = [
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "New projects", href: "/new-projects" },
  { label: "Agents", href: "/agents" },
];

export const searchTabs = ["Rent", "Buy", "New projects", "Transactions", "Agents"];

export const buyCategories = [
  {
    title: "Buy House",
    href: "/buy/house",
    category: "house" as const,
    description: "Independent and semi-furnished homes across Kathmandu Valley.",
  },
  {
    title: "Buy Land",
    href: "/buy/land",
    category: "land" as const,
    description: "Residential plots and investment-ready land in growth corridors.",
  },
  {
    title: "Buy Apartment",
    href: "/buy/apartment",
    category: "apartment" as const,
    description: "Modern apartments near schools, offices, and transport hubs.",
  },
];

export const properties = [
  {
    category: "house" as const,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    location: "Budhanilkantha, Kathmandu",
    price: "NPR 4.25 Cr",
    match: "97% AI Match",
    beds: "5 Beds",
    baths: "4 Baths",
    area: "7 Aana",
    growth: "+9.4% YoY",
  },
  {
    category: "house" as const,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    location: "Hattigauda, Kathmandu",
    price: "NPR 3.80 Cr",
    match: "94% AI Match",
    beds: "4 Beds",
    baths: "4 Baths",
    area: "6 Aana",
    growth: "+7.8% YoY",
  },
  {
    category: "apartment" as const,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    location: "Jhamsikhel, Lalitpur",
    price: "NPR 1.65 Cr",
    match: "92% AI Match",
    beds: "3 Beds",
    baths: "2 Baths",
    area: "1,450 sqft",
    growth: "+6.1% YoY",
  },
  {
    category: "apartment" as const,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
    location: "Sanepa, Lalitpur",
    price: "NPR 2.10 Cr",
    match: "90% AI Match",
    beds: "3 Beds",
    baths: "3 Baths",
    area: "1,750 sqft",
    growth: "+5.7% YoY",
  },
  {
    category: "land" as const,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    location: "Godawari, Lalitpur",
    price: "NPR 42 Lakh / Aana",
    match: "95% AI Match",
    beds: "Road 20 ft",
    baths: "Facing East",
    area: "10 Aana",
    growth: "+12.3% YoY",
  },
  {
    category: "land" as const,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    location: "Suryabinayak, Bhaktapur",
    price: "NPR 34 Lakh / Aana",
    match: "91% AI Match",
    beds: "Road 16 ft",
    baths: "Residential",
    area: "8 Aana",
    growth: "+10.8% YoY",
  },
];

export const communities = [
  {
    name: "Kathmandu",
    units: "218",
    copy: "Premium homes near schools, hospitals, embassies, and business hubs.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Lalitpur",
    units: "164",
    copy: "Heritage neighborhoods, modern apartments, and high-value land corridors.",
    image:
      "https://images.unsplash.com/photo-1589182337358-2cb63099350c?auto=format&fit=crop&w=1400&q=85",
  },
];
