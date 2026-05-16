import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/properties";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111318]/50 shadow-lg shadow-[#4d8eff]/5 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link className="flex items-center gap-3" href="/">
          <Image
            alt="RT DreamEstates logo"
            className="h-12 w-auto object-contain"
            height={1500}
            priority
            src="/assets/logo.png"
            width={1800}
          />
        </Link>
        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              className="text-lg font-medium text-[#c2c6d6] transition hover:text-[#adc6ff]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          className="rounded-lg border border-[#adc6ff]/40 px-4 py-2 text-lg font-semibold text-[#adc6ff] transition hover:border-white hover:text-white"
          href="/agents"
        >
          Log in
        </Link>
      </nav>
    </header>
  );
}
