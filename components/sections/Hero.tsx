import Image from "next/image";
import HeroHeadline from "@/components/ui/HeroHeadline";
import Signature from "@/components/ui/Signature";
import Sticker from "@/components/ui/Sticker";
import { HERO, STICKERS, type StickerColor } from "@/content/portfolio";

const HIGHLIGHT_CLASSES: Record<StickerColor, string> = {
  teal: "bg-sticker-teal text-ink",
  pink: "bg-sticker-pink text-ink",
  yellow: "bg-sticker-yellow text-ink",
  orange: "bg-sticker-orange text-ink",
  green: "bg-sticker-green text-ink",
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh flex-col bg-ink">
      {/* ── Top (ink) ── */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-18 pb-3 md:pt-20 md:pb-5">
        <div className="relative">
          <HeroHeadline />
          <Signature className="pointer-events-none absolute right-2 bottom-2 -rotate-8 text-[clamp(3.75rem,8.5vw,8.5rem)] leading-none select-none md:right-6 md:bottom-3" />
        </div>

        <div className="mt-3 grid grid-cols-1 items-start gap-3 md:mt-5 md:grid-cols-12 md:gap-8 lg:mt-6">
          <p className="font-serif text-base leading-snug font-semibold text-cream md:col-span-6 md:text-lg lg:text-xl">
            {HERO.intro[0]}
          </p>
          <p className="font-sans text-sm leading-relaxed text-cream/85 md:col-span-6 md:text-base lg:text-lg">
            {HERO.intro[1].map((segment, index) =>
              segment.highlight ? (
                <span
                  key={index}
                  className={`rounded-xs box-decoration-clone px-1 py-0.5 font-medium ${HIGHLIGHT_CLASSES[segment.highlight]}`}
                >
                  {segment.text}
                </span>
              ) : (
                <span key={index}>{segment.text}</span>
              ),
            )}
          </p>
        </div>
      </div>

      {/* ── Bottom (cream grid-paper panel + portrait + stickers) ── */}
      <div className="relative flex min-h-[220px] flex-1 pr-3 sm:pr-6 md:min-h-[240px] md:pr-10 lg:pr-14">
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
            fetchPriority="high"
            sizes="(max-width: 768px) 65vw, 30vw"
            style={{ width: "auto" }}
            className="pointer-events-none absolute bottom-0 left-1/2 h-[95%] max-w-full -translate-x-1/2 object-contain object-bottom select-none"
          />
        </div>
      </div>
    </section>
  );
}
