import type { HTMLAttributes } from "react";
import { Eyebrow } from "./Eyebrow";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  size?: "lg" | "xl";
}

export function SectionHeading({ eyebrow, title, sub, align = "left", tone = "default", size = "lg", style, ...rest }: SectionHeadingProps) {
  const inverse = tone === "inverse";
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        maxWidth: 760,
        marginLeft: align === "center" ? "auto" : undefined,
        marginRight: align === "center" ? "auto" : undefined,
        ...style,
      }}
    >
      {eyebrow ? <Eyebrow tone={inverse ? "inverse" : "brand"}>{eyebrow}</Eyebrow> : null}
      <h2
        style={{
          font: size === "xl" ? "var(--type-display)" : "var(--type-h1)",
          fontSize: size === "xl" ? "var(--text-display-md)" : undefined,
          letterSpacing: "var(--tracking-heading)",
          color: inverse ? "var(--white)" : "var(--text-strong)",
        }}
      >
        {title}
      </h2>
      {sub ? <p style={{ font: "var(--type-lead)", color: inverse ? "rgba(255,255,255,.78)" : "var(--text-body)" }}>{sub}</p> : null}
    </div>
  );
}
