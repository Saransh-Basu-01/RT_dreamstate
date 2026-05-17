import { Sidebar } from "@/components/layout";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar role="agent" />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
