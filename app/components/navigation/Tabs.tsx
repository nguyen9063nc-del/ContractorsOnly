import type { HTMLAttributes } from "react";

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  tone?: "default" | "inverse";
}

export function Tabs({ items = [], value, onChange, tone = "default", style, ...rest }: TabsProps) {
  const active = value != null ? value : items[0]?.value;
  const inverse = tone === "inverse";
  return (
    <div {...rest} role="tablist" style={{ display: "flex", gap: "var(--space-6)", borderBottom: "var(--border-width) solid " + (inverse ? "rgba(255,255,255,.22)" : "var(--border-hairline)"), overflowX: "auto", ...style }}>
      {items.map((it) => {
        const on = it.value === active;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={on}
            onClick={() => onChange?.(it.value)}
            style={{
              appearance: "none",
              background: "transparent",
              border: 0,
              cursor: "pointer",
              padding: "0 0 12px",
              font: "var(--type-eyebrow)",
              fontSize: "12.5px",
              letterSpacing: "var(--tracking-caps)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              color: on ? (inverse ? "var(--white)" : "var(--text-strong)") : inverse ? "rgba(255,255,255,.62)" : "var(--text-muted)",
              boxShadow: on ? "inset 0 -3px 0 var(--brand)" : "none",
              transition: "var(--transition-control)",
            }}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
