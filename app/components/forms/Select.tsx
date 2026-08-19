import { useState, type SelectHTMLAttributes } from "react";
import { fieldBase } from "./shared";
import { FieldWrap } from "./FieldWrap";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  options?: SelectOption[];
  size?: "sm" | "md" | "lg";
}

export function Select({ label, hint, error, options = [], size = "md", id, style, onFocus, onBlur, ...rest }: SelectProps) {
  const [focus, setFocus] = useState(false);
  const h = size === "sm" ? "var(--control-h-sm)" : size === "lg" ? "var(--control-h-lg)" : "var(--control-h-md)";
  const arrow = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%234d4d4d' stroke-width='1.6'/></svg>\")";
  const sel = (
    <select
      id={id}
      {...rest}
      onFocus={(e) => {
        setFocus(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setFocus(false);
        onBlur?.(e);
      }}
      style={{
        ...fieldBase,
        height: h,
        padding: "0 38px 0 14px",
        appearance: "none",
        backgroundImage: arrow,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 14px center",
        borderColor: error ? "var(--danger)" : focus ? "var(--brand)" : "var(--border-strong)",
        boxShadow: focus ? "var(--focus-shadow)" : "none",
        ...style,
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
  return <FieldWrap label={label} hint={hint} error={error} control={sel} id={id} />;
}
