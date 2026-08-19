import { useState, type InputHTMLAttributes } from "react";
import { fieldBase } from "./shared";
import { FieldWrap } from "./FieldWrap";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
}

export function Input({ label, hint, error, size = "md", id, style, onFocus, onBlur, ...rest }: InputProps) {
  const [focus, setFocus] = useState(false);
  const h = size === "sm" ? "var(--control-h-sm)" : size === "lg" ? "var(--control-h-lg)" : "var(--control-h-md)";
  const input = (
    <input
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
        padding: "0 14px",
        borderColor: error ? "var(--danger)" : focus ? "var(--brand)" : "var(--border-strong)",
        boxShadow: focus ? "var(--focus-shadow)" : "none",
        ...style,
      }}
    />
  );
  return <FieldWrap label={label} hint={hint} error={error} control={input} id={id} />;
}
