import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"
import { Seal } from "@/components/Seal"
import { PRESENTER } from "@/lib/data"
import { scrollToId } from "@/lib/scroll"
import { cn, delay, prefersReducedMotion } from "@/lib/utils"

/** The title sentence, split where its emphasis changes. */
const SEGMENTS: { text: string; className?: string }[] = [
  { text: `${PRESENTER.name}ning`, className: "font-medium text-depth" },
  { text: " " },
  { text: `«${PRESENTER.subject}»`, className: "text-seal" },
  { text: " fanidan " },
  { text: "Shveytsariya davlati iqtisodiyotiga", className: "text-depth" },
  { text: " tayyorlagan animatsiyali taqdimoti" },
]
const TOTAL = SEGMENTS.reduce((n, s) => n + s.text.length, 0)
const START_MS = 1100
const CHAR_MS = 34

/**
 * Typewriter that restarts every time the cover comes back into view. Every
 * character is laid out from the first frame (untyped ones are transparent),
 * so the big type never reflows while it is being written.
 */
function useTypewriter<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [typed, setTyped] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setTyped(TOTAL)
      return
    }
    let timer = 0
    let tick = 0
    const run = () => {
      window.clearTimeout(timer)
      window.clearInterval(tick)
      setTyped(0)
      timer = window.setTimeout(() => {
        let n = 0
        tick = window.setInterval(() => {
          n += 1
          setTyped(n)
          if (n >= TOTAL) window.clearInterval(tick)
        }, CHAR_MS)
      }, START_MS)
    }
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && run(), { threshold: 0.6 })
    io.observe(el)
    return () => {
      io.disconnect()
      window.clearTimeout(timer)
      window.clearInterval(tick)
    }
  }, [])

  return { ref, typed, done: typed >= TOTAL }
}

/** A Swiss cross drawn stroke by stroke behind the title. */
function CrossDrawing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={cn("overflow-visible", className)}>
      <rect className="cover-draw" x="6" y="6" width="188" height="188" rx="34" fill="none" stroke="var(--color-mist)" strokeWidth="1.5" pathLength={1} />
      <path
        className="cover-draw [animation-delay:400ms]"
        d="M80 38h40v42h42v40h-42v42H80v-42H38V80h42z"
        fill="none"
        stroke="var(--color-seal)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path className="cover-fill" d="M80 38h40v42h42v40h-42v42H80v-42H38V80h42z" fill="var(--color-seal)" />
    </svg>
  )
}

export function Cover() {
  const { ref, typed, done } = useTypewriter<HTMLElement>()
  let left = typed

  return (
    <section ref={ref} id="muqova" data-stop aria-label="Muqova" className="relative isolate h-svh min-h-[680px] overflow-hidden bg-paper max-md:h-auto max-md:min-h-svh">
      {/* Swiss grid: hairlines that draw in from the left */}
      <div aria-hidden="true" className="cover-grid pointer-events-none absolute inset-0 -z-10" />
      <CrossDrawing className="pointer-events-none absolute top-1/2 right-[5%] -z-10 size-[min(44vh,25vw)] -translate-y-1/2 max-lg:top-[8%] max-lg:right-[-12%] max-lg:size-[46vw] max-lg:translate-y-0 max-lg:opacity-40 max-md:hidden" />

      <div className="relative flex h-full flex-col px-[clamp(1.25rem,5vw,5rem)] pt-20 pb-10 lg:pt-14">
        <div className="flex items-center gap-4" data-rev>
          <Seal className="size-12 shrink-0" seal={false} />
          <div>
            <p className="text-[clamp(1.05rem,1.7vw,1.6rem)] leading-tight font-medium tracking-[0.12em] text-depth uppercase">{PRESENTER.university}</p>
            <p className="mt-1 text-[clamp(0.98rem,1.4vw,1.35rem)] text-dilute">{PRESENTER.faculty}</p>
          </div>
        </div>

        <div className="my-auto w-full py-10 lg:max-w-[64%]">
          <p className="flex items-center gap-3 text-[clamp(1.05rem,1.6vw,1.5rem)] text-dilute" data-rev style={delay(250)}>
            <span aria-hidden="true" className="h-px w-10 bg-seal" />
            {PRESENTER.group} talabasi
          </p>

          <h1 className="mt-5 text-[clamp(2.1rem,4.1vw,4.5rem)] leading-[1.08] font-[300] tracking-[-0.025em] text-ink" aria-label={SEGMENTS.map((s) => s.text).join("")}>
            <span aria-hidden="true">
              {SEGMENTS.map((s, i) => {
                const shown = Math.max(0, Math.min(s.text.length, left))
                // The caret sits in the one segment that is still being written.
                const caretHere = !done && left >= 0 && left < s.text.length
                left -= s.text.length
                return (
                  <span key={i} className={s.className}>
                    {s.text.slice(0, shown)}
                    {caretHere && <span className="cover-caret" />}
                    <span className="text-transparent">{s.text.slice(shown)}</span>
                  </span>
                )
              })}
              {done && <span className="cover-caret cover-caret--idle" />}
            </span>
          </h1>
        </div>

        <div className={cn("flex flex-wrap items-end justify-between gap-6 transition-opacity duration-1000", done ? "opacity-100" : "opacity-0")}>
          <p className="tnum text-[clamp(1rem,1.4vw,1.3rem)] text-dilute">Farg‘ona · 2026</p>
          <button
            type="button"
            onClick={() => scrollToId("kirish")}
            className="group inline-flex items-center gap-3 rounded-full border border-feather py-2.5 pr-2.5 pl-6 text-depth transition-colors duration-300 hover:border-seal"
          >
            <span className="label !tracking-[0.16em]">Taqdimotni boshlash</span>
            <span className="grid size-9 place-items-center rounded-full bg-seal text-paper">
              <ArrowDown className="size-4 motion-safe:animate-bounce" strokeWidth={1.8} />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
