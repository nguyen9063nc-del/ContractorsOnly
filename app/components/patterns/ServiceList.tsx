import type { HTMLAttributes } from "react";
import { Icon, type IconProps } from "../core/Icon";

export interface ServiceListProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: IconProps["name"];
  items: string[];
  columns?: number;
}

export function ServiceList({ title, icon, items = [], columns = 1, style, ...rest }: ServiceListProps) {
  return (
    <div {...rest} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: "var(--space-4)", borderBottom: "var(--border-width-strong) solid var(--brand)" }}>
        {icon ? <Icon name={icon} size={22} strokeColor="var(--brand)" /> : null}
        <h3 style={{ font: "var(--type-eyebrow)", fontSize: "var(--text-h4)", textTransform: "uppercase", letterSpacing: "var(--tracking-caps)" }}>{title}</h3>
      </div>
      <ul style={{ display: "grid", gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`, gap: "var(--space-2) var(--space-6)", listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "baseline", font: "var(--type-body)", color: "var(--text-body)", padding: "6px 0", borderBottom: "var(--border-width) solid var(--border-hairline)" }}>
            <span style={{ width: 5, height: 5, background: "var(--gray-500)", flex: "0 0 auto", transform: "translateY(-3px)" }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
