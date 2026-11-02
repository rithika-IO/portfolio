import Section from "@/components/ui/Section";
import Row from "@/components/ui/Row";
import { ABOUT } from "@/content/portfolio";

export default function About() {
  return (
    <Section id="about" label="About" color="teal">
      <Row
        main={
          <div className="max-w-prose space-y-4 text-lg leading-relaxed text-cream/85 md:text-xl">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        }
        aside={
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ABOUT.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-display text-sm tracking-wider text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-cream">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />
    </Section>
  );
}
