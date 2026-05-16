import { ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    // Footer
    <footer className="border-t border-white/5 bg-[#0a0c10] px-4 py-12 text-center text-sm font-semibold text-[#8c909f] sm:px-6 lg:px-12">
      © 2026 RT DreamState AI. Nepalese real estate intelligence for smarter decisions.
      <ShieldCheck className="ml-2 inline size-4 text-[#adc6ff]" />
    </footer>
  );
}
