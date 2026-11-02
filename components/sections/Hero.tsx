import Shuffle from "@/components/ui/Shuffle";
import HeroName from "@/components/ui/HeroName";
import HeroAvatar from "@/components/ui/HeroAvatar";
import Reveal from "@/components/ui/Reveal";
import { SOCIALS } from "@/content/portfolio";

export default function Hero() {
  return (
    <Reveal>
      <section id="home" className="px-6 pb-24 pt-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
              ● Available for Opportunities
            </span>

            {/* Hero name: two lines of interactive canvas text */}
            <HeroName />

            {/* Shuffle subtitle: plays once on scroll-enter, with no hover replay and no loop */}
            <div className="mt-8">
              <Shuffle
                text="Software Engineering Undergraduate"
                tag="p"
                className="text-xl font-semibold md:text-2xl"
                style={{ color: "#ffffff", textAlign: "left", fontFamily: "inherit" }}
                shuffleDirection="up"
                duration={0.7}
                stagger={0.04}
                shuffleTimes={2}
                animationMode="evenodd"
                loop={false}
                triggerOnce={true}
                triggerOnHover={true}
                threshold={0.1}
                rootMargin="0px"
              />
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#F2E9E4]/80">
              I design and build software across web, desktop, and data
              systems from full-stack apps to Java desktop tools and Python
              ML pipelines.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#C9ADA7] px-6 py-3 font-semibold text-[#22223B] hover:bg-[#F2E9E4]"
              >
                View My Work
              </a>
            </div>

            <div className="mt-6 flex gap-5 text-white/70">
              {SOCIALS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="hover:text-[#C9ADA7]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="flex justify-center">
            <div className="absolute h-[26rem] w-[26rem] rounded-full bg-[#C9ADA7]/10 blur-3xl" />
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-[#C9ADA7]/40 bg-black/40 shadow-[0_0_60px_rgba(201,173,167,0.25)] md:h-[24rem] md:w-[24rem]">
              <HeroAvatar />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

