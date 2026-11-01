import { cn } from "@/lib/utils"

/** The mark: the Swiss cross on its red field; `seal={false}` drops the outer hairline for tight spots. */
export function Seal({ className, seal = true }: { className?: string; seal?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("shrink-0", className)}>
      {seal && <rect x="1" y="1" width="62" height="62" rx="14" fill="none" stroke="var(--color-mist)" strokeWidth="2" />}
      <rect x="7" y="7" width="50" height="50" rx="10" fill="var(--color-seal)" />
      <path d="M27 16h10v11h11v10H37v11H27V37H16V27h11z" fill="var(--color-paper)" />
    </svg>
  )
}
