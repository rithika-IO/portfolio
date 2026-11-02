import Reveal from "@/components/ui/Reveal";
import { SKILLS } from "@/content/portfolio";

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9ADA7]">
              What I work with
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              My <span className="text-[#C9ADA7]">Skills</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition hover:border-[#C9ADA7]/40"
              >
                <h3 className="text-xl font-bold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-[#C9ADA7] hover:text-[#C9ADA7]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

