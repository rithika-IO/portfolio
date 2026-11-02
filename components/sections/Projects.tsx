import Reveal from "@/components/ui/Reveal";
import { PROJECTS } from "@/content/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#C9ADA7]">
            What I&apos;ve built
          </p>
          <h2 className="mt-4 text-center text-4xl font-bold md:text-5xl">
            Featured <span className="text-[#C9ADA7]">Projects</span>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-10">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <div className="group rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9ADA7]/40 hover:shadow-[0_0_40px_rgba(201,173,167,0.15)]">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold transition group-hover:text-[#C9ADA7]">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-white/60">
                      {project.desc}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-white/50">{project.year}</p>
                </div>

                {project.points.length > 0 && (
                  <ul className="mt-8 space-y-3 text-white/65">
                    {project.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-[#C9ADA7] hover:text-[#C9ADA7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className="mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-white/10 px-5 py-2 text-sm text-white/70 transition hover:border-[#C9ADA7] hover:text-[#C9ADA7]"
                    >
                      GitHub →
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

