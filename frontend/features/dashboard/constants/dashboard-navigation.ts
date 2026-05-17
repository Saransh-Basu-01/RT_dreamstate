export type DashboardRole = "buyer" | "agent" | "admin";

export type DashboardNavItem = {
  label: string;
  href: string;
  roles: DashboardRole[];
};

export const dashboardNavItems: DashboardNavItem[] = [
  { label: "Overview", href: "/dashboard", roles: ["buyer", "agent", "admin"] },
  { label: "Properties", href: "/dashboard/properties", roles: ["agent", "admin"] },
  { label: "Messages", href: "/dashboard/messages", roles: ["buyer", "agent", "admin"] },
  { label: "Analytics", href: "/dashboard/analytics", roles: ["agent", "admin"] },
  { label: "Admin", href: "/admin", roles: ["admin"] },
];
