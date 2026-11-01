import { useEffect, useRef } from "react"
import { WordRise } from "@/components/ui/word-rise"
import { FRANC, PILLARS } from "@/lib/data"
import { registerStage } from "@/lib/scroll"
import { delay } from "@/lib/utils"

/**
 * The masked whiteout (scroll-web.md): the headline is erased from the bottom
 * up as the stage scrubs — like a summit disappearing into Alpine cloud.
 */
export function Franc() {
  const stageRef = useRef<HTMLDivElement>(null)
  useEffect(() => (stageRef.current ? registerStage(stageRef.current) : undefined), [])

  return (
    <section id="frank" aria-label="Frank: xavfsiz boshpana">
      <div ref={stageRef} data-stop data-stops="0.04" className="stage h-[260svh]">
        <div className="stage__pin grid place-items-center bg-paper">
          <div className="wrap-page text-center">
            <h2
              className="whiteout mx-auto text-[clamp(2.1rem,9.2vw,8.4rem)] leading-[0.92] font-light tracking-[-0.035em] text-depth uppercase"
              aria-label="Xavfsiz boshpana"
            >
              <span className="block">Xavfsiz</span>
              <span className="block text-seal">CHF</span>
              <span className="block">boshpana</span>
            </h2>
            <p className="whiteout-caption mx-auto mt-10 max-w-[46ch] text-[clamp(1.05rem,1.4vw,1.3rem)] text-dilute">
              Dunyoda inqiroz boshlansa, pul Shveytsariyaga qochadi va frank qimmatlaydi. Bu — ham ishonch belgisi, ham eksportchilar uchun doimiy bosh og‘riq.
            </p>
          </div>
        </div>
      </div>

      <div data-stop className="slide bg-paper py-20">
        <div className="wrap-page">
          <WordRise as="h2" className="text-[clamp(2rem,3.6vw,3.4rem)] leading-tight font-light text-depth" text="Frank tarixidagi uch burilish" />
          <div className="mt-14 grid gap-px border-y border-mist bg-mist md:grid-cols-3">
            {FRANC.map((c, i) => (
              <article key={c.title} className="bg-paper py-9 md:px-8 md:first:pl-0 md:last:pr-0" data-rev style={delay(90 * i)}>
                <p className="tnum text-sm text-dilute">{c.period}</p>
                <h3 className="mt-2 text-[1.6rem] font-light text-depth">{c.title}</h3>
                <p className="mt-4 leading-relaxed text-dilute">{c.text}</p>
              </article>
            ))}
          </div>
          <p className="note mt-8">Manba: Shveytsariya Milliy banki (SNB) — pul-kredit siyosati qarorlari, 2011–2026.</p>
        </div>
      </div>

      <div data-stop className="slide bg-wash py-20">
        <div className="wrap-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <WordRise as="h2" className="section-title text-depth" text="Uch ustunli pensiya" />
            <p className="lede" data-rev style={delay(120)}>
              Shveytsarlar keksalik uchun uch ustunda pul yig‘adi. Bu jamg‘armalar banklar va sug‘urta kompaniyalari orqali investitsiyaga aylanadi — moliya
              sohasining ichki «yoqilg‘isi» ham shu.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3" data-rev>
            {PILLARS.map((a, i) => (
              <div key={a.title}>
                {/* A column drawn stroke by stroke: capital, shaft, base */}
                <svg viewBox="0 0 120 120" className="h-24 w-24 overflow-visible" aria-hidden="true">
                  <path className="draw" pathLength={1} d="M14 18 H106 M22 28 H98" stroke="var(--color-depth)" strokeWidth="2" fill="none" style={{ transitionDelay: `${i * 220}ms` }} />
                  <path className="draw" pathLength={1} d="M34 30 V96 M50 30 V96 M70 30 V96 M86 30 V96" stroke="var(--color-feather)" strokeWidth="2" fill="none" style={{ transitionDelay: `${i * 220 + 300}ms` }} />
                  <path className="draw" pathLength={1} d="M22 100 H98 M14 110 H106" stroke="var(--color-seal)" strokeWidth="2" fill="none" style={{ transitionDelay: `${i * 220 + 700}ms` }} />
                </svg>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="accent text-[2.8rem] leading-none text-seal">{a.n}</span>
                  <h3 className="text-[1.45rem] font-light text-depth">{a.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-dilute">{a.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-[62ch] border-t border-feather/50 pt-8 text-[clamp(1.1rem,1.5vw,1.35rem)] leading-relaxed font-light text-depth" data-rev>
            Xulosa: kuchli frank, past inflyatsiya va katta jamg‘armalar — Shveytsariyani «dunyoning seyfi»ga aylantirgan uchta omil.
          </p>
        </div>
      </div>
    </section>
  )
}
