import Section from "@/components/ui/Section";
import Row from "@/components/ui/Row";
import ArrowIcon from "@/components/ui/ArrowIcon";
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {CONTACT_SOCIALS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                {...(social.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-start justify-between gap-4 rounded-xl bg-coral p-5 text-ink! no-underline! transition duration-200 hover:-translate-y-0.5 hover:brightness-95 hover:text-ink! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream! md:p-6"
              >
                <div>
                  <span className="block font-display text-2xl leading-none tracking-wide uppercase">
                    {social.label}
                  </span>
                  <span className="mt-2 block font-sans text-sm">
                    {social.contactLabel ?? social.label}
                  </span>
                </div>
                <ArrowIcon
                  direction={social.external ? "up-right" : "right"}
                  className="shrink-0 text-lg"
                />
              </a>
            ))}
          </div>
        }
      />
    </Section>
  );
}
