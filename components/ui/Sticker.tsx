import type { StickerColor, StickerItem } from "@/content/portfolio";

const COLOR_CLASSES: Record<StickerColor, string> = {
  teal: "bg-sticker-teal",
  pink: "bg-sticker-pink",
  yellow: "bg-sticker-yellow",
  orange: "bg-sticker-orange",
  green: "bg-sticker-green",
};

export default function Sticker({
  label,
  color = "teal",
  shape,
  x,
  y,
  rotate,
  mobile,
}: StickerItem) {
  const visibilityClass = mobile ? "inline-flex" : "hidden md:inline-flex";

  if (shape === "chip") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 items-center gap-1.5 rounded-md bg-ink px-2.5 py-1 font-mono text-xs whitespace-nowrap text-cream shadow-md select-none md:text-sm ${visibilityClass}`}
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <span className="text-coral">&lt;/&gt;</span>
        <span>{label}</span>
      </div>
    );
  }

  const shapeClass =
    shape === "circle"
      ? "h-20 w-20 items-center justify-center rounded-full p-2 text-center text-sm leading-tight md:h-24 md:w-24 md:text-lg"
      : "items-center justify-center rounded-xl px-3.5 py-1.5 text-base whitespace-nowrap md:px-5 md:py-2 md:text-xl";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 font-display tracking-wide text-ink uppercase shadow-md select-none ${visibilityClass} ${shapeClass} ${COLOR_CLASSES[color]}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {label}
    </div>
  );
}
