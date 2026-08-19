import type { InputHTMLAttributes } from "react";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
}

export function Radio({ label, description, checked = false, onChange, name, value, disabled = false, style, ...rest }: RadioProps) {
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
          borderRadius: "var(--radius-pill)",
          background: "var(--surface-card)",
          border: (checked ? "5px" : "1px") + " solid " + (checked ? "var(--brand)" : "var(--border-strong)"),
          transition: "var(--transition-control)",
        }}
      />
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled} {...rest} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ font: "var(--type-body)", color: "var(--text-strong)" }}>{label}</span>
        {description ? <span style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{description}</span> : null}
      </span>
    </label>
  );
}
