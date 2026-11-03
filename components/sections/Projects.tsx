import Section from "@/components/ui/Section";
import Row from "@/components/ui/Row";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { PROJECTS } from "@/content/portfolio";

export default function Projects() {
  return (
    <Section id="projects" label="Projects" color="pink">
      {PROJECTS.map((project) => (
        <Row
          key={project.title}
          main={
            <div>
              <h3 className="font-display text-3xl leading-none tracking-wide text-cream md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-2 text-xs text-muted md:text-sm">
                {project.year}
              </p>
            </div>
          }
          aside={
            <div>
              <p className="text-sm leading-relaxed text-cream/80 md:text-base">
                {project.desc}
              </p>

              <p className="mt-3 text-xs text-muted md:text-sm">
                {project.tags.join(" · ")}
              </p>

              <div className="mt-4 flex flex-wrap items-start gap-x-6 gap-y-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="shrink-0 rounded-xs text-sm text-cream underline decoration-coral/60 underline-offset-4 transition hover:text-coral hover:decoration-coral focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                  >
                    GitHub <ArrowIcon />
                  </a>
                )}

                {project.points.length > 0 && (
                  <details className="group min-w-0 flex-1">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-xs font-display text-sm tracking-wider text-cream uppercase transition select-none hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral [&::-webkit-details-marker]:hidden">
                      <span>Key points</span>
                      <span
                        aria-hidden="true"
                        className="text-coral group-open:hidden"
                      >
                        +
                      </span>
                      <span
                        aria-hidden="true"
                        className="hidden text-coral group-open:inline"
                      >
                        &minus;
                      </span>
                    </summary>

                    <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-cream/80 marker:text-coral">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            </div>
          }
        />
      ))}
    </Section>
  );
}
