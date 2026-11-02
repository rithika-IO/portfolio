import Section from "@/components/ui/Section";
import Row from "@/components/ui/Row";
import { SOCIALS } from "@/content/portfolio";

const CONTACT_SOCIALS = [
  ...SOCIALS.filter((s) => !s.external),
  ...SOCIALS.filter((s) => s.external),
];

export default function Contact() {
  return (
    <Section id="contact" label="Contact" color="teal">
      <Row
        main={
          <h3 className="font-display text-5xl leading-none tracking-wide text-cream md:text-7xl">
            LET&apos;S TALK
          </h3>
        }
        aside={
          <p className="text-sm leading-relaxed text-cream/80 md:text-base">
            I&apos;m open to internships, collaborations and interesting
            projects. The fastest way to reach me is email.
          </p>
        }
      />

      <Row
        main={
          <span className="font-display text-lg tracking-wider text-muted uppercase">
            Reach me
          </span>
        }
        aside={
          <ul className="space-y-3 text-sm md:text-base">
            {CONTACT_SOCIALS.map((social) => (
              <li key={social.href} className="flex items-baseline gap-4">
                <span className="w-24 shrink-0 font-display text-sm tracking-wider text-muted uppercase">
                  {social.label}
                </span>
                <a
                  href={social.href}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-xs text-coral underline decoration-coral/60 underline-offset-4 transition hover:text-cream hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                >
                  {social.contactLabel ?? social.label}
                </a>
              </li>
            ))}
          </ul>
        }
      />
    </Section>
  );
}
