import { Fragment } from "react";
import Section from "@/components/ui/Section";
import Row from "@/components/ui/Row";
import { ABOUT, SOCIALS } from "@/content/portfolio";

export default function About() {
  return (
    <Section id="about" label="About" color="teal">
      <Row
        main={
          <div className="max-w-prose space-y-4 text-base leading-relaxed text-cream/85">
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

      <Row
        main={
          <span className="font-display text-lg tracking-wider text-muted uppercase">
            Links
          </span>
        }
        aside={
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted md:text-base">
            {SOCIALS.map((social, index) => (
              <Fragment key={social.href}>
                {index > 0 && <span aria-hidden="true"> · </span>}
                <a
                  href={social.href}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-xs text-coral underline decoration-coral/60 underline-offset-4 transition hover:text-cream hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                >
                  {social.label}
                </a>
              </Fragment>
            ))}
          </div>
        }
      />
    </Section>
  );
}
