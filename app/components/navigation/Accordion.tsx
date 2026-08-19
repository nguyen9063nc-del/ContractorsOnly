import { useState, type HTMLAttributes, type ReactNode } from "react";
import { Icon } from "../core/Icon";

export interface AccordionItem {
  title: string;
  body: ReactNode;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  defaultOpen?: number;
}

export function Accordion({ items = [], defaultOpen = 0, style, ...rest }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div {...rest} style={{ borderTop: "var(--border-width) solid var(--border-hairline)", ...style }}>
      {items.map((it, i) => {
        const on = i === open;
        return (
          <div key={i} style={{ borderBottom: "var(--border-width) solid var(--border-hairline)" }}>
            <button
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "20px 0",
                background: "transparent",
                border: 0,
                cursor: "pointer",
                textAlign: "left",
                font: "var(--type-h3)",
                color: on ? "var(--text-brand)" : "var(--text-strong)",
                transition: "var(--transition-control)",
              }}
            >
              {it.title}
              <Icon name={on ? "minus" : "plus"} size={18} />
            </button>
            {on ? <div style={{ padding: "0 0 22px", maxWidth: 640, font: "var(--type-body)", color: "var(--text-body)" }}>{it.body}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
