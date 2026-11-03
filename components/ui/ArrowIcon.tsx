type ArrowDirection = "up-right" | "right" | "up";

interface ArrowIconProps {
  direction?: ArrowDirection;
  className?: string;
}

const PATHS: Record<ArrowDirection, string> = {
  "up-right": "M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5",
  right: "M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5",
  up: "M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5",
};

export default function ArrowIcon({
  direction = "up-right",
  className = "",
}: ArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`inline-block h-[0.9em] w-[0.9em] align-[-0.1em] ${className}`.trim()}
    >
      <path d={PATHS[direction]} />
    </svg>
  );
}

