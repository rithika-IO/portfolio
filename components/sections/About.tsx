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
      />
    </Section>
  );
}
