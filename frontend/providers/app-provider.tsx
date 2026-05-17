"use client";

import { QueryProvider } from "@/providers/query-provider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}
