import Section from "@/components/ui/Section";
import Row from "@/components/ui/Row";
import { SKILLS } from "@/content/portfolio";

export default function Skills() {
  return (
    <Section id="skills" label="Skills" color="yellow">
      {SKILLS.map((group) => (
        <Row
          key={group.title}
          main={
            <h3 className="font-display text-2xl leading-none tracking-wide text-cream md:text-3xl">
              {group.title}
            </h3>
          }
          aside={
            <p className="text-sm leading-relaxed text-cream/80 md:text-base">
              {group.items.join(" · ")}
            </p>
          }
        />
      ))}
    </Section>
  );
}
