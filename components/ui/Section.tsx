import type { ReactNode } from "react";
import type { StickerColor } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";

const STICKER_BG: Record<StickerColor, string> = {
  teal: "bg-sticker-teal",
  pink: "bg-sticker-pink",
  yellow: "bg-sticker-yellow",
  orange: "bg-sticker-orange",
  green: "bg-sticker-green",
};

export interface SectionProps {
  id: string;
  label: string;
  color: StickerColor;
  children: ReactNode;
}

export default function Section({ id, label, color, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl scroll-mt-20 border-t border-cream/15 px-6 py-16 md:py-24"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-3">
          <h2
            className={`inline-block -rotate-2 rounded-lg px-3 py-1 font-display text-2xl tracking-wide text-ink uppercase shadow-sm md:text-3xl ${STICKER_BG[color]}`}
          >
            {label}
          </h2>
        </div>

        <div className="md:col-span-9">
          <Reveal>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}

