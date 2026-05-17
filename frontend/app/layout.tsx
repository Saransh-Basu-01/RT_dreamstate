import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader, SiteFooter } from "@/components/layout";
import { AppProvider } from "@/providers/app-provider";

export const metadata: Metadata = {
  title: "RT DreamState | AI-Powered Real Estate Platform",
  description:
    "AI-powered property search, valuation, market forecasting, CRM, and real estate intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0c10] text-white">
        <AppProvider>
          <SiteHeader />

          <main className="flex-1">{children}</main>

          <SiteFooter />
        </AppProvider>
      </body>
    </html>
  );
}
