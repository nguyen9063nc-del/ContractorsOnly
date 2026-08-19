import type { InputHTMLAttributes } from "react";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Switch({ label, checked = false, onChange, disabled = false, style, ...rest }: SwitchProps) {
  return (
    <label style={{ display: "inline-flex", gap: 10, alignItems: "center", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, ...style }}>
      <span style={{ position: "relative", width: 40, height: 22, flex: "0 0 auto", background: checked ? "var(--brand)" : "var(--gray-300)", borderRadius: "var(--radius-pill)", transition: "background-color var(--dur-fast) var(--ease-out)" }}>
        <span style={{ position: "absolute", top: 3, left: checked ? 21 : 3, width: 16, height: 16, background: "var(--white)", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-xs)", transition: "left var(--dur-fast) var(--ease-out)" }} />
      </span>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} {...rest} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      {label ? <span style={{ font: "var(--type-body)", color: "var(--text-strong)" }}>{label}</span> : null}
    </label>
  );
}
