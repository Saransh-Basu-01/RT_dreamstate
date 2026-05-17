import Link from "next/link";
import {
  dashboardNavItems,
  type DashboardRole,
} from "@/features/dashboard/constants/dashboard-navigation";

export function Sidebar({ role = "agent" }: { role?: DashboardRole }) {
  const items = dashboardNavItems.filter((item) => item.roles.includes(role));

  return (
    <aside className="hidden min-h-[calc(100vh-4rem)] w-64 border-r border-white/10 bg-[#111318] p-4 lg:block">
      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            className="block rounded-md px-3 py-2 text-sm font-semibold text-[#c2c6d6] transition hover:bg-white/[0.06] hover:text-[#adc6ff]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
