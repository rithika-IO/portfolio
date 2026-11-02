import Reveal from "@/components/ui/Reveal";
import { EDUCATION } from "@/content/portfolio";

export default function Education() {
  return (
    <Reveal>
      <section id="education" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9ADA7]">
            Education
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Academic <span className="text-[#C9ADA7]">Background</span>
          </h2>

          <div className="mt-10 space-y-8">
            {EDUCATION.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md transition hover:border-[#C9ADA7]/40"
              >
                <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-white/60">{item.place}</p>
                    <p className="mt-6 max-w-3xl text-white/60">{item.desc}</p>
                  </div>
                  <p className="shrink-0 text-sm text-white/50">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

