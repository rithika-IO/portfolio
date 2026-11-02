export default function Signature({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-script text-coral ${className}`.trim()}
    >
      Rithika
    </span>
  );
}

