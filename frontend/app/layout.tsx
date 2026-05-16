import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RT DreamState | AI-Powered Real Estate Platform",
  description:
    "AI-powered property search, valuation, market forecasting, CRM, and real estate intelligence for buyers, sellers, agents, and property managers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
