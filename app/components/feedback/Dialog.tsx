import type { HTMLAttributes, ReactNode } from "react";
import { IconButton } from "../core/IconButton";

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean;
  title: ReactNode;
  onClose?: () => void;
  footer?: ReactNode;
  width?: number;
}

export function Dialog({ open = false, title, onClose, footer, width = 520, children, style, ...rest }: DialogProps) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 60, background: "var(--overlay-scrim)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={onClose}>
      <div
        {...rest}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: width,
          background: "var(--surface-card)",
          border: "var(--border-width) solid var(--border-hairline)",
          borderTop: "var(--border-width-accent) solid var(--brand)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-lg)",
          ...style,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, padding: "var(--space-6) var(--space-6) var(--space-4)" }}>
          <h3 style={{ font: "var(--type-h2)", fontSize: "var(--text-h3)" }}>{title}</h3>
          {onClose ? <IconButton icon="x" label="Close" variant="ghost" size="sm" onClick={onClose} /> : null}
        </div>
        <div style={{ padding: "0 var(--space-6) var(--space-6)", font: "var(--type-body)", color: "var(--text-body)" }}>{children}</div>
        {footer ? (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-3)", padding: "var(--space-4) var(--space-6)", background: "var(--surface-subtle)", borderTop: "var(--border-width) solid var(--border-hairline)" }}>
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
