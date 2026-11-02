import Image from "next/image";
import HeroHeadline from "@/components/ui/HeroHeadline";
import Signature from "@/components/ui/Signature";
import Sticker from "@/components/ui/Sticker";
import { HERO, STICKERS } from "@/content/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh flex-col bg-ink">
      {/* ── Top (ink) ── */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-18 pb-3 md:pt-20 md:pb-5">
        <div className="relative">
          <HeroHeadline />
          <Signature className="pointer-events-none absolute right-2 -bottom-2 -rotate-8 text-[clamp(4rem,9vw,9rem)] leading-none select-none md:right-8 md:-bottom-4" />
        </div>

        <div className="mt-1 grid grid-cols-1 items-start gap-2.5 md:mt-3 md:grid-cols-12 md:gap-6 lg:gap-8">
          <p className="text-xs leading-relaxed text-cream/80 sm:text-sm md:col-span-4 lg:col-span-5 lg:text-base">
            {HERO.intro[0]}
          </p>
          <p className="text-xs leading-relaxed text-cream/80 sm:text-sm md:col-span-5 lg:col-span-5 lg:text-base">
            {HERO.intro[1]}
          </p>
          <div className="flex flex-row items-center justify-between gap-3 md:col-span-3 md:flex-col md:items-end md:justify-start lg:col-span-2">
            <a
              href={HERO.cta.href}
              className="font-display text-xl tracking-wide whitespace-nowrap text-cream underline decoration-cream/50 underline-offset-4 transition hover:text-coral hover:decoration-coral md:text-2xl"
            >
              {HERO.cta.label.toUpperCase()} &rarr;
            </a>
            <div className="flex items-center gap-2 text-xs text-muted">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-sticker-green"
                aria-hidden="true"
              />
              <span>{HERO.availability}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom (cream grid-paper panel + portrait + stickers) ── */}
      <div className="relative flex min-h-[260px] flex-1 pr-3 sm:pr-6 md:min-h-[300px] md:pr-10 lg:pr-14">
        <div
          className="relative min-h-full w-full flex-1 overflow-hidden rounded-r-[5rem] bg-cream md:rounded-r-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        >
          {STICKERS.map((sticker) => (
            <Sticker key={sticker.label} {...sticker} />
          ))}

          <Image
            src="/portrait.webp"
            alt="Rithika Mandiv"
            width={1200}
            height={1500}
            preload
            sizes="(max-width: 768px) 80vw, 45vw"
            style={{ width: "auto" }}
            className="pointer-events-none absolute bottom-0 left-1/2 h-[95%] max-w-full -translate-x-1/2 object-contain object-bottom select-none"
          />
        </div>
      </div>
    </section>
  );
}
