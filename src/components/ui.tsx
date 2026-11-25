import type { ReactNode } from "react";

export function Eyebrow({
  label,
  color = "var(--accent)",
  center = false,
}: {
  label: string;
  color?: string;
  center?: boolean;
}) {
  return (
    <div className={`inline-flex items-center gap-2 ${center ? "justify-center" : ""}`}>
      <span
        className="w-[5px] h-[5px] rounded-full shrink-0 node-pulse"
        style={{
          background: color,
          boxShadow: "var(--glow-node)",
        }}
      />
      <span
        className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="gradient-text">{children}</span>;
}

export function ArrowRightIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
