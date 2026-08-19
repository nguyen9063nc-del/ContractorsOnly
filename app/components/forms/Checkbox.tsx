import type { InputHTMLAttributes } from "react";
import { Icon } from "../core/Icon";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  description?: string;
}

export function Checkbox({ label, checked = false, onChange, disabled = false, description, style, ...rest }: CheckboxProps) {
  return (
    <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, ...style }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 18,
          height: 18,
          marginTop: 2,
          flex: "0 0 auto",
          background: checked ? "var(--brand)" : "var(--surface-card)",
          border: "var(--border-width) solid " + (checked ? "var(--brand)" : "var(--border-strong)"),
          borderRadius: "var(--radius-sm)",
          transition: "var(--transition-control)",
        }}
      >
        {checked ? <Icon name="check" size={13} strokeColor="var(--white)" /> : null}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ font: "var(--type-body)", color: "var(--text-strong)" }}>{label}</span>
        {description ? <span style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{description}</span> : null}
      </span>
    </label>
  );
}
