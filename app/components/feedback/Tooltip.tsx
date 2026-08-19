import { useState, type HTMLAttributes, type ReactNode } from "react";

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  placement?: "top" | "bottom";
  children?: ReactNode;
}

export function Tooltip({ label, placement = "top", children, style, ...rest }: TooltipProps) {
  const [show, setShow] = useState(false);
  const pos = placement === "bottom" ? { top: "calc(100% + 8px)" } : { bottom: "calc(100% + 8px)" };
  return (
    <span {...rest} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} style={{ position: "relative", display: "inline-flex", ...style }}>
      {children}
      {show ? (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            ...pos,
            background: "var(--gray-900)",
            color: "var(--white)",
            padding: "6px 10px",
            font: "var(--type-body)",
            fontSize: "var(--text-xs)",
            whiteSpace: "nowrap",
            borderRadius: "var(--radius-sm)",
            boxShadow: "var(--shadow-sm)",
            zIndex: 40,
          }}
        >
          {label}
        </span>
      ) : null}
    </span>
  );
}
