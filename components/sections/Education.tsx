import Section from "@/components/ui/Section";
import Row from "@/components/ui/Row";
import { EDUCATION } from "@/content/portfolio";

export default function Education() {
  return (
    <Section id="education" label="Education" color="orange">
      {EDUCATION.map((item) => (
        <Row
          key={item.title}
          main={
            <div>
              <h3 className="font-display text-2xl leading-none tracking-wide text-cream md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-muted md:text-sm">{item.date}</p>
            </div>
          }
          aside={
            <div>
              <p className="text-sm text-cream md:text-base">{item.place}</p>
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
