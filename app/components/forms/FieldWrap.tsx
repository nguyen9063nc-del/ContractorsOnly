import type { ReactNode } from "react";

export function FieldWrap({ label, hint, error, control, id }: { label?: string; hint?: string; error?: string; control: ReactNode; id?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      {label ? (
        <label htmlFor={id} style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>
          {label}
        </label>
      ) : null}
      {control}
      {error ? (
        <span style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--danger)" }}>{error}</span>
      ) : hint ? (
        <span style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
