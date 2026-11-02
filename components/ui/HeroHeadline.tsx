import TechText from "@/components/ui/TechText";
import { HERO } from "@/content/portfolio";

const TECH_TEXT_PROPS = {
  color: "#ECE7E0",
  accentColor: "#F06A4E",
  fontWeight: 400,
  letterSpacing: 0,
  fontSize: 400,
  align: "left" as const,
  className: "font-display",
};

export default function HeroHeadline() {
  const [firstWord, secondWord] = HERO.headline.split(" ");

  return (
    <>
      <h1 className="sr-only">Rithika Mandiv, Software Engineer</h1>
      <div aria-hidden="true">
        {/* Desktop & tablet (md and up): single-line headline */}
        <div className="-ml-6 hidden md:block md:h-[140px] lg:h-[185px] xl:h-[220px]">
          <TechText text={HERO.headline} {...TECH_TEXT_PROPS} />
        </div>

        {/* Mobile (below md): two stacked lines */}
        <div className="-mt-2 md:hidden">
          <div className="-ml-6 h-[118px]">
            <TechText text={firstWord} {...TECH_TEXT_PROPS} />
          </div>
          <div className="-ml-6 -mt-7 h-[118px]">
            <TechText text={secondWord} {...TECH_TEXT_PROPS} />
          </div>
        </div>
      </div>
    </>
  );
}
