# Shveytsariya iqtisodiyoti — taqdimot sayti

Iqtisodiyot fanidan PowerPoint o‘rniga ishlatiladigan veb-taqdimot. «Yaponiya iqtisodiyoti» saytining (japan-theta-three.vercel.app) tuzilmasi va animatsiyalari asosida, Shveytsariya uchun qayta yozilgan.
React + Vite + TypeScript + Tailwind CSS (shadcn tuzilmasi).

## Ishga tushirish

```bash
npm install      # birinchi marta
npm run dev      # http://localhost:5173 manzilini brauzerda oching
```

Taqdimot kuni: Chrome’da oching, **F** — to‘liq ekran, **→ / ←** (yoki pult) — keyingi / oldingi qadam, **?** — yordam oynasi.
Internet kerak: Spline 3D robot va shriftlar tarmoqdan yuklanadi (Matterhorn surati va bayroqlar loyiha ichida).

Oflayn zaxira sifatida build ham qilib qo‘yish mumkin:

```bash
npm run build && npm run preview   # http://localhost:4173
```

## Tahrirlash

- **Ismingiz / guruhingiz:** `src/lib/data.ts` → `PRESENTER`. Bo‘sh qoldirilsa, ko‘rsatilmaydi.
- **Barcha matn va raqamlar:** `src/lib/data.ts` (har bir raqam yonida manba va yil; manbalar ro‘yxati ham shu yerda).
- **Nutq matni:** `NUTQ.md` — har bir bo‘lim uchun gapiriladigan matn va qachon → bosish kerakligi.

## Bo‘limlar (10 ta)

Kirish → Helvetia → Raqamlarda → Tarix (1291–2026) → Frank (xavfsiz boshpana, uch ustunli pensiya) → Sanoat (Swiss Made) → Innovatsiya → Muammolar → Kelajak → Xulosa + Manbalar.

## Tuzilma

```
src/
  components/ui/         # shadcn-uslubidagi komponentlar (Prompt papkasidagi promptlardan)
    splite.tsx, spotlight.tsx, card.tsx   ← robot.md (Spline 3D robot)
    ink-basin.tsx        ← Hero: WebGL suyuqlik havzasi (Hero animate.md tarjimasi)
    parallax-scrolling.tsx ← parallax.md (GSAP + Lenis), Matterhorn surati
    neon-mesh.tsx        ← kinetic.md
    sonar-grid.tsx       ← sonar-grid-effect.md
    flow-field.tsx       ← motion.md
    aurora-background.tsx← prompt-background-light.md
    card-flip.tsx        ← flip-card.md
    text-roll.tsx        ← 2-prompt.md
    splash-button.tsx    ← button.md
  components/sections/   # 10 ta bo‘lim
  lib/data.ts            # matnlar, raqamlar, manbalar
  lib/scroll.ts          # Lenis, pinned-stage progress, klaviatura navigatsiyasi
```

## Litsenziyalar

- Matterhorn surati: Roy Egloff, Wikimedia Commons — CC BY-SA 4.0 («CH.VS.Zermatt 2021-10-17 Matterhorn 8726.jpg»).
- Bayroqlar: [circle-flags](https://github.com/HatScripts/circle-flags) (MIT) — `public/flags/LICENSE.md`.
- Komponentlar: kokonutui (MIT), 21st.dev / Aceternity / ibelick / motion-primitives promptlari asosida.
