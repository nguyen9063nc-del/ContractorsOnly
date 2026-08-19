import type { CSSProperties, HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "brand" | "neutral" | "success" | "warning" | "info";
  variant?: "solid" | "tint" | "outline";
}

export function Badge({ tone = "brand", variant = "solid", children, style, ...rest }: BadgeProps) {
  const map: Record<string, [string, string, string]> = {
    brand: ["var(--brand)", "var(--brand-tint)", "var(--text-brand)"],
    neutral: ["var(--gray-900)", "var(--surface-muted)", "var(--gray-700)"],
    success: ["var(--success)", "#e8f2ea", "var(--success)"],
    warning: ["var(--warning)", "#f7eedd", "var(--warning)"],
    info: ["var(--info)", "#e6eef5", "var(--info)"],
  };
  const [solid, tint, fg] = map[tone] || map.brand;
  const skin: CSSProperties =
    variant === "solid"
      ? { background: solid, color: "var(--white)", borderColor: "transparent" }
      : variant === "tint"
      ? { background: tint, color: fg, borderColor: "transparent" }
      : { background: "transparent", color: fg, borderColor: "currentColor" };
  return (
    <span
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 22,
        padding: "0 8px",
        font: "var(--type-eyebrow)",
        fontSize: "11px",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        border: "var(--border-width) solid",
        borderRadius: "var(--radius-sm)",
        ...skin,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
