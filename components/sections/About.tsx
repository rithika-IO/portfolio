import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <Reveal>
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9ADA7]">
              Get to know me
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              About <span className="text-[#C9ADA7]">Me</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {/* Text */}
            <div className="space-y-6 text-lg leading-8 text-[#F2E9E4]/80">
              <p>
                Hi, I&apos;m Rithika Mandiv, a Software Engineering
                undergraduate who enjoys solving problems through software,
                from full-stack web apps and Java desktop systems to Python
                data projects.
              </p>

              <p>
                I learn best by building real projects, and I&apos;m constantly
                expanding my skills across frontend, backend, and data
                engineering.
              </p>

              <div className="space-y-3 pt-4 text-base text-white/65">
                <p>• Software Engineering Undergraduate</p>
                <p>• Experienced across web, desktop, and data domains</p>
                <p>• Open to learning, projects, and opportunities</p>
              </div>
            </div>

            {/* Education card */}
            <div className="flex items-start">
              <div className="w-full rounded-3xl border border-white/10 bg-black/40 p-8 text-center backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#C9ADA7]">
                  Education
                </p>
                <h3 className="mt-4 text-2xl font-bold">
                  BEng Software Engineering
                </h3>
                <p className="mt-3 text-white/70">
                  Informatics Institute of Technology
                </p>
                <p className="mt-1 text-white/50">University of Westminster</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

