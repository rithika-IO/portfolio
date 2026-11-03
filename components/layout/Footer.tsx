import Signature from "@/components/ui/Signature";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl border-t border-cream/15 px-6 py-10">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <Signature className="inline-block -rotate-4 text-4xl leading-none select-none md:text-5xl" />
          <p className="mt-2 font-display text-sm tracking-wider text-muted uppercase md:text-base">
            Reliable by design.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="font-display text-sm tracking-wider text-muted uppercase">
            &copy; {new Date().getFullYear()} Rithika Mandiv
          </p>
          <a
            href="#home"
            className="rounded-xs text-sm text-cream underline decoration-coral/60 underline-offset-4 transition hover:text-coral hover:decoration-coral focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
          >
            Back to top <ArrowIcon direction="up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
