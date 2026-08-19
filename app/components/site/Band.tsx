import type { CSSProperties, ReactNode } from "react";
import { Container } from "./Container";

export function Band({
  tone = "page",
  tight = false,
  children,
  style,
}: {
  tone?: "page" | "subtle" | "muted" | "brand";
  tight?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  const bg = { page: "var(--surface-page)", subtle: "var(--surface-subtle)", muted: "var(--surface-muted)", brand: "var(--surface-brand)" }[tone];
  const pad = tight ? "var(--section-y-tight)" : "var(--section-y)";
  if (tone === "page") {
    return (
      <section style={{ background: bg, padding: pad + " 0", ...style }}>
        <Container>{children}</Container>
      </section>
    );
  }
  return (
    <section style={{ background: "var(--surface-page)", padding: "14px 0", ...style }}>
      <div style={{ width: "92%", maxWidth: 1440, margin: "0 auto", background: bg, borderRadius: "var(--radius-lg, 16px)", padding: pad + " 0" }}>
        <Container>{children}</Container>
      </div>
    </section>
  );
}
