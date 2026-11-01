import CardFlip from "@/components/ui/card-flip"
import { NeonMesh } from "@/components/ui/neon-mesh"
import { WordRise } from "@/components/ui/word-rise"
import { FLASHCARDS, MAKERS, SECTORS } from "@/lib/data"
import { delay } from "@/lib/utils"

function MakerLine() {
  const items = [...MAKERS, ...MAKERS]
  return (
    <div className="marquee overflow-hidden border-y border-mist py-6 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" aria-label="Shveytsariya kompaniyalari">
      <div className="marquee__track gap-14 pr-14">
        {items.map(([name, city], i) => (
          <span key={i} className="flex items-baseline gap-3 whitespace-nowrap" aria-hidden={i >= MAKERS.length}>
            <span className="text-2xl font-normal tracking-[-0.01em] text-depth">{name}</span>
            <span className="accent text-base text-dilute">{city}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function SwissMade() {
  return (
    <section id="sanoat" aria-label="Sanoat: Swiss Made" className="bg-paper">
      <div data-stop>
        <NeonMesh className="h-svh min-h-[560px]">
          <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <div aria-hidden="true" className="absolute top-1/2 left-1/2 h-[70%] w-[min(900px,90%)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,var(--color-paper)_35%,rgba(246,247,249,0.75)_65%,transparent)]" />
            <span className="relative flex items-center gap-[0.25em] text-[clamp(2.8rem,9vw,8.4rem)] leading-none font-[300] tracking-[-0.04em] whitespace-nowrap text-depth">
              <svg viewBox="0 0 64 64" aria-hidden="true" className="size-[0.8em] shrink-0">
                <rect x="4" y="4" width="56" height="56" rx="8" fill="var(--color-seal)" />
                <path d="M27 14h10v13h13v10H37v13H27V37H14V27h13z" fill="var(--color-paper)" />
              </svg>
              Swiss Made
            </span>
            <h2 className="relative mt-6 text-[clamp(1.5rem,2.4vw,2.3rem)] font-light text-depth">Aniqlik — eng qimmat mahsulot</h2>
            <p className="lede relative mt-4 max-w-[50ch]">
              «Swiss Made» yozuvi qonun bilan himoyalangan: sanoat mahsuloti tannarxining kamida 60% i Shveytsariyada yaratilgan bo‘lishi shart. Shu belgi uchun
              xaridor ortiqcha pul to‘lashga tayyor.
            </p>
          </div>
        </NeonMesh>
      </div>

      <div data-stop className="slide wrap-page py-20">
        <WordRise as="h2" className="section-title max-w-[16ch] text-depth" text="Dunyoga nima sotadi?" />
        <ul className="mt-14 border-t border-mist">
          {SECTORS.map((s, i) => (
            <li
              key={s.name}
              className="group grid gap-x-10 gap-y-3 border-b border-mist py-8 md:grid-cols-[9rem_minmax(14rem,1fr)_1.6fr]"
              data-rev
              style={delay(80 * i)}
            >
              <span className="accent text-[1.9rem] leading-none text-feather transition-colors duration-500 group-hover:text-seal">{s.accent}</span>
              <div>
                <h3 className="text-[1.55rem] leading-tight font-light text-depth">{s.name}</h3>
                <p className="mt-2 text-sm text-dilute">{s.makers}</p>
              </div>
              <p className="max-w-[58ch] leading-relaxed text-depth/85">{s.text}</p>
            </li>
          ))}
        </ul>
        <p className="note mt-8">Manbalar: BAZG 2025 (eksport); FH 2025 (soatlar); SBA Banking Barometer 2026 va BCG 2026 (boylik boshqaruvi).</p>
      </div>

      <MakerLine />

      <div data-stop className="slide wrap-page py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <WordRise as="h2" className="section-title text-depth" text="Shveytsar modeli" />
          <p className="lede" data-rev style={delay(120)}>
            To‘rtta so‘z, to‘rt xil tilda — Shveytsariya qanday boshqarilishi va nega barqarorligining kaliti.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {FLASHCARDS.map((c, i) => (
            <div key={c.word} data-rev style={delay(90 * i)}>
              <CardFlip {...c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
