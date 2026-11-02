import Reveal from "@/components/ui/Reveal";
import { SOCIALS } from "@/content/portfolio";

const CONTACT_SOCIALS = [
  ...SOCIALS.filter((s) => !s.external),
  ...SOCIALS.filter((s) => s.external),
];

export default function Contact() {
  return (
    <Reveal>
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9ADA7]">
            Get in touch
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Contact <span className="text-[#C9ADA7]">Me</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            I&apos;m open to opportunities, collaborations, and projects.
            Feel free to reach out.
          </p>

          <div className="mt-12 flex flex-col gap-4 md:flex-row md:justify-center">
            {CONTACT_SOCIALS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md transition hover:bg-[#C9ADA7] hover:text-[#22223B]"
              >
                {social.contactLabel ?? social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

