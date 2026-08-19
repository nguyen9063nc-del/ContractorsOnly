import { useState, type CSSProperties, type HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "default" | "subtle" | "dark" | "brand";
  interactive?: boolean;
  accent?: boolean;
  padding?: "none" | "md" | "lg";
}

export function Card({ tone = "default", interactive = false, accent = false, padding = "lg", children, style, ...rest }: CardProps) {
  const [hover, setHover] = useState(false);
  const pads: Record<string, string> = { none: "0", md: "var(--space-5)", lg: "var(--space-7)" };
  const tones: Record<string, CSSProperties> = {
    default: { background: "var(--surface-card)", borderColor: "var(--border-hairline)", color: "var(--text-body)" },
    subtle: { background: "var(--surface-subtle)", borderColor: "var(--border-hairline)", color: "var(--text-body)" },
    dark: { background: "var(--surface-dark)", borderColor: "var(--gray-800)", color: "rgba(255,255,255,.78)" },
    brand: { background: "var(--surface-brand)", borderColor: "var(--brand)", color: "rgba(255,255,255,.88)" },
  };
  const t = tones[tone] || tones.default;
  return (
    <div
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: "var(--border-width) solid",
        borderRadius: "var(--radius-card)",
        padding: pads[padding] || pads.lg,
        borderTop: accent ? "var(--border-width-accent) solid var(--brand)" : undefined,
        boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transform: interactive && hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        cursor: interactive ? "pointer" : "default",
        ...t,
        borderColor: interactive && hover && tone === "default" ? "var(--border-strong)" : t.borderColor,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
