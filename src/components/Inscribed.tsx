import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** A heading with its word in one of the four national languages set beside it, after a short red rule. */
export function Inscribed({ accent, children, className, tone = "text-dilute" }: { accent: string; children: ReactNode; className?: string; tone?: string }) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="min-w-0">{children}</div>
      <span className={cn("accent flex items-center gap-3 text-[clamp(1.15rem,1.6vw,1.5rem)] leading-none", tone)} aria-hidden="true">
        <span className="h-px w-8 bg-seal" />
        {accent}
      </span>
    </div>
  )
}
