import type { HTMLAttributes } from "react";

export interface StepMarkerProps extends HTMLAttributes<HTMLDivElement> {
  number: number | string;
  title: string;
  body?: string;
  tone?: "default" | "inverse";
}

export function StepMarker({ number, title, body, tone = "default", style, ...rest }: StepMarkerProps) {
  const inverse = tone === "inverse";
  return (
    <div {...rest} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingTop: "var(--space-4)", borderTop: "var(--border-width-strong) solid " + (inverse ? "rgba(255,255,255,.28)" : "var(--border-hairline)"), ...style }}>
      <span style={{ font: "var(--type-mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-caps)", color: "var(--brand)" }}>{String(number).padStart(2, "0")}</span>
      <h3 style={{ font: "var(--type-h3)", color: inverse ? "var(--white)" : "var(--text-strong)", textTransform: "uppercase", letterSpacing: "var(--tracking-caps)", fontSize: "var(--text-h4)" }}>{title}</h3>
      {body ? <p style={{ font: "var(--type-body)", color: inverse ? "rgba(255,255,255,.72)" : "var(--text-body)" }}>{body}</p> : null}
    </div>
  );
}
