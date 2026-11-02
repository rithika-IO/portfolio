import Section from "@/components/ui/Section";
import Row from "@/components/ui/Row";
import { ACHIEVEMENTS } from "@/content/portfolio";

export default function Achievements() {
  return (
    <Section id="achievements" label="Certificates" color="green">
      {ACHIEVEMENTS.map((item) => (
        <Row
          key={item.title}
          main={
            <div>
              <h3 className="font-display text-2xl leading-none tracking-wide text-cream md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-muted md:text-sm">{item.place}</p>
            </div>
          }
          aside={
            <div>
              <span
                className={`inline-block rounded-xs px-2 py-0.5 font-display text-xs tracking-wider uppercase ${
                  item.status === "Distinction"
                    ? "bg-sticker-green text-ink"
                    : "border border-cream/15 text-cream"
                }`}
              >
                {item.status}
              </span>
              <p className="mt-2 text-xs leading-relaxed text-cream/80 md:text-sm">
                {item.desc}
              </p>
            </div>
          }
        />
      ))}
    </Section>
  );
}
