import { InkDrops, TableView } from "@/components/charts"
import { CountNumber } from "@/components/ui/count-number"
import { WordRise } from "@/components/ui/word-rise"
import { GDP_DROPS, KEY_FIGURES } from "@/lib/data"
import { delay } from "@/lib/utils"

export function Numbers() {
  return (
    <section id="raqamlar" aria-label="Raqamlarda Shveytsariya" className="bg-wash">
      <div data-stop className="slide wrap-page py-20">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_1fr]">
          <WordRise as="h2" className="section-title text-depth" text="Raqamlarda Shveytsariya" />
          <p className="lede lg:justify-self-end" data-rev style={delay(120)}>
            Bir shveytsar o‘rtacha bir yilda bir o‘zbekistonlikdan ~30 barobar ko‘p qiymat yaratadi. Bayroq doirasining maydoni — aholi jon boshiga YaIM.
          </p>
        </div>

        <figure className="mt-16">
          <InkDrops data={GDP_DROPS} unit="ming $" label="Aholi jon boshiga YaIM, ming dollar" />
          <figcaption className="note mt-2 text-center">Aholi jon boshiga nominal YaIM, ming AQSh dollari · XVF World Economic Outlook, 2026-oktabr (2025 bahosi)</figcaption>
          <TableView
            caption="Aholi jon boshiga YaIM, ming dollar"
            head={["Davlat", "YaIM / aholi, ming $"]}
            rows={GDP_DROPS.map((d) => [d.country, d.value.toLocaleString("ru-RU")])}
          />
        </figure>
      </div>

      <div data-stop className="slide wrap-page py-20">
        <dl className="grid border-t border-feather/60 md:grid-cols-2 md:gap-x-16">
          {KEY_FIGURES.map((f, i) => (
            <div key={f.label} className="grid items-baseline gap-3 border-b border-feather/40 py-7 sm:grid-cols-[minmax(10.5rem,auto)_1fr] sm:gap-6" data-rev style={delay(70 * i)}>
              <dd className="order-first text-[clamp(2rem,3.2vw,3.1rem)] leading-none font-light text-depth">
                <CountNumber value={f.value} decimals={f.decimals} prefix={f.prefix} suffix={f.suffix} />
              </dd>
              <dt>
                <span className="block text-[1.02rem] leading-snug text-depth">{f.label}</span>
                <span className="note mt-1.5 block">{f.note}</span>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
