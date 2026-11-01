"use client"

/**
 * Card Flip (flip-card.md, kokonutui — MIT) turned into a term card:
 * the front carries the term in its own language, the back its meaning in Uzbek.
 * Flips on hover, on click (for a presenter without a mouse hover) and on
 * keyboard focus + Enter.
 */

import { Repeat2 } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface CardFlipProps {
  word: string
  lang: string
  meaning: string
  text: string
  className?: string
}

export default function CardFlip({ word, lang, meaning, text, className }: CardFlipProps) {
  const [hover, setHover] = useState(false)
  const [pinned, setPinned] = useState(false)
  const flipped = hover || pinned

  return (
    <button
      type="button"
      aria-pressed={pinned}
      aria-label={`${word}: ${meaning}. ${text}`}
      className={cn("group relative h-[300px] w-full cursor-pointer text-left [perspective:2000px]", className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setPinned((v) => !v)}
    >
      <div
        className={cn(
          "relative h-full w-full [transform-style:preserve-3d]",
          "transition-[transform] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none",
          flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]",
        )}
      >
        {/* Front — the term, set large in the national language */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-mist bg-paper p-6 [backface-visibility:hidden]">
          <div className="flex items-start justify-between">
            <span className="label text-dilute">{lang}</span>
            <Repeat2 aria-hidden="true" className="size-4 text-feather transition-transform duration-500 group-hover:-rotate-12" />
          </div>
          <span className="accent text-[clamp(1.8rem,2.3vw,2.4rem)] leading-[1.05] text-depth">{word}</span>
          <span className="flex items-center gap-3 text-lg font-normal text-ink">
            <span aria-hidden="true" className="h-px w-6 bg-seal" />
            {meaning}
          </span>
        </div>

        {/* Back — the meaning, on graphite */}
        <div className="absolute inset-0 flex flex-col rounded-2xl bg-depth p-6 text-paper [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="accent text-2xl text-feather">{word}</span>
          <span className="mt-3 text-xl font-normal">{meaning}</span>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-mist">{text}</p>
          <span className="label mt-auto text-feather">{lang}</span>
        </div>
      </div>
    </button>
  )
}
