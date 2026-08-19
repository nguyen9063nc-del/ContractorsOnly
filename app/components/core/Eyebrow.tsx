import type { HTMLAttributes, ReactNode } from "react";

export interface EyebrowProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "brand" | "muted" | "inverse";
  rule?: boolean;
  children?: ReactNode;
}

export function Eyebrow({ children, tone = "brand", rule = true, style, ...rest }: EyebrowProps) {
  const color = tone === "brand" ? "var(--text-brand)" : tone === "muted" ? "var(--text-muted)" : "var(--white)";
  return (
    <div {...rest} style={{ display: "flex", alignItems: "center", gap: "10px", font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color, ...style }}>
      {rule ? <span style={{ width: 28, height: 2, background: tone === "inverse" ? "var(--white)" : "var(--brand)" }} /> : null}
      {children}
    </div>
  );
}
