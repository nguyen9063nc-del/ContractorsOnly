import type { HTMLAttributes } from "react";
import { Icon, type IconProps } from "../core/Icon";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "success" | "error" | "info" | "warning";
  title: string;
  message?: string;
  onClose?: () => void;
}

export function Toast({ tone = "success", title, message, onClose, style, ...rest }: ToastProps) {
  const map: Record<string, [IconProps["name"], string]> = {
    success: ["circle-check", "var(--success)"],
    error: ["circle-alert", "var(--danger)"],
    info: ["info", "var(--info)"],
    warning: ["triangle-alert", "var(--warning)"],
  };
  const [icon, color] = map[tone] || map.success;
  return (
    <div
      {...rest}
      role="status"
      style={{
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        minWidth: 300,
        maxWidth: 420,
        padding: "14px 16px",
        background: "var(--surface-card)",
        border: "var(--border-width) solid var(--border-hairline)",
        borderLeft: "var(--border-width-accent) solid " + color,
        borderRadius: "var(--radius-sm)",
        boxShadow: "var(--shadow-md)",
        ...style,
      }}
    >
      <Icon name={icon} size={18} strokeColor={color} style={{ marginTop: 1 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>{title}</span>
        {message ? <span style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{message}</span> : null}
      </div>
      {onClose ? (
        <button onClick={onClose} aria-label="Dismiss" style={{ marginLeft: "auto", border: 0, background: "transparent", cursor: "pointer", color: "var(--text-muted)", display: "flex" }}>
          <Icon name="x" size={15} />
        </button>
      ) : null}
    </div>
  );
}
