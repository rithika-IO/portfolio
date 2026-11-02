import Reveal from "@/components/ui/Reveal";
import { ACHIEVEMENTS } from "@/content/portfolio";

export default function Achievements() {
  return (
    <Reveal>
      <section id="achievements" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9ADA7]">
            Achievements
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Certifications <span className="text-[#C9ADA7]">&amp; Awards</span>
          </h2>

          <div className="mt-16 space-y-8">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9ADA7]/40"
              >
                <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold transition group-hover:text-[#C9ADA7]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-white/60">{item.place}</p>
                    <p className="mt-4 text-white/60">{item.desc}</p>
                  </div>
                  <p className="shrink-0 text-sm text-white/50">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

