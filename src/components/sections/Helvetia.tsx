import { ParallaxComponent } from "@/components/ui/parallax-scrolling"
import { WordRise } from "@/components/ui/word-rise"
import { HELVETIA_FACTS } from "@/lib/data"
import { delay } from "@/lib/utils"

export function Helvetia() {
  return (
    <section id="helvetia" aria-label="Helvetia" className="relative bg-paper">
      <div data-stop>
        <ParallaxComponent
          image="/images/matterhorn-zermatt.jpg"
          alt="Zermatt yaqinidagi tog‘ yo‘lagi va Matterhorn cho‘qqisi, kuz"
          title={
            <>
              <span className="text-[clamp(4.5rem,11vw,10rem)] leading-none font-[250] tracking-[-0.04em] text-depth">Helvetia</span>
              <span className="accent mt-3 text-[clamp(1.2rem,1.7vw,1.6rem)] text-depth">Confoederatio Helvetica — shuning uchun «CH»</span>
            </>
          }
        />
      </div>

      <div data-stop className="slide wrap-page grid gap-x-20 gap-y-14 py-24 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <WordRise as="h2" className="section-title text-depth" text="Resurssiz tog‘lar, boy iqtisodiyot" />
          <p className="lede mt-8" data-rev style={delay(120)}>
            Shveytsariyaning dengizi yo‘q, neft, gaz va ko‘mir ham deyarli yo‘q, hududining katta qismini Alp tog‘lari egallaydi. Shunga qaramay aholi jon boshiga
            YaIM bo‘yicha u aholisi 1 mln dan ortiq davlatlar ichida dunyoda ikkinchi (XVF, 2025).
          </p>
          <p className="mt-10 max-w-[28ch] text-[clamp(1.5rem,2.4vw,2.2rem)] leading-snug font-light text-depth" data-rev style={delay(240)}>
            Xomashyoni sotib olib, unga aniqlik, bilim va ishonch qo‘shib, qimmat sotish — shveytsar modelining mohiyati.
          </p>
        </div>

        <dl className="self-end border-t border-mist">
          {HELVETIA_FACTS.map((f, i) => (
            <div key={f.label} className="grid items-baseline gap-2 border-b border-mist py-5 sm:grid-cols-[minmax(9rem,auto)_1fr] sm:gap-6" data-rev style={delay(80 * i)}>
              <dt className="text-[clamp(1.5rem,2.2vw,2rem)] font-light text-depth">{f.value}</dt>
              <dd className="text-dilute">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
