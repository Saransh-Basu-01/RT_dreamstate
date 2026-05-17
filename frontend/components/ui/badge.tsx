import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#adc6ff]/20 bg-[#adc6ff]/10 px-3 py-1 text-xs font-bold text-[#adc6ff]",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
