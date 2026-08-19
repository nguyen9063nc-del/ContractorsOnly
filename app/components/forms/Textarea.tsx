import { useState, type TextareaHTMLAttributes } from "react";
import { fieldBase } from "./shared";
import { FieldWrap } from "./FieldWrap";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Textarea({ label, hint, error, rows = 5, id, style, onFocus, onBlur, ...rest }: TextareaProps) {
  const [focus, setFocus] = useState(false);
  const ta = (
    <textarea
      id={id}
      rows={rows}
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
        padding: "12px 14px",
        resize: "vertical",
        lineHeight: "var(--leading-normal)",
        borderColor: error ? "var(--danger)" : focus ? "var(--brand)" : "var(--border-strong)",
        boxShadow: focus ? "var(--focus-shadow)" : "none",
        ...style,
      }}
    />
  );
  return <FieldWrap label={label} hint={hint} error={error} control={ta} id={id} />;
}
