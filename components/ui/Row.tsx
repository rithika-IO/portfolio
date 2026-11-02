import type { ReactNode } from "react";

export interface RowProps {
  main: ReactNode;
  aside?: ReactNode;
  className?: string;
}

export default function Row({ main, aside, className = "" }: RowProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-6 border-b border-dashed border-cream/25 py-6 text-cream first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-9 md:gap-8 [&_a]:text-coral [&_a]:underline [&_a]:underline-offset-4 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-coral ${className}`.trim()}
    >
      <div className={aside ? "md:col-span-4" : "md:col-span-9"}>{main}</div>
      {aside && <div className="text-muted md:col-span-5">{aside}</div>}
    </div>
  );
}
