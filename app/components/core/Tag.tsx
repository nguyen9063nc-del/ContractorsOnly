import { useState, type HTMLAttributes } from "react";
import { Icon, type IconProps } from "./Icon";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: IconProps["name"];
  onRemove?: () => void;
  selected?: boolean;
}

export function Tag({ children, icon, onRemove, selected = false, style, ...rest }: TagProps) {
  const [hover, setHover] = useState(false);
  return (
    <span
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        height: 30,
        padding: "0 12px",
        font: "var(--type-label)",
        fontWeight: "var(--weight-medium)" as unknown as number,
        background: selected ? "var(--brand-tint)" : hover ? "var(--surface-subtle)" : "var(--surface-card)",
        color: selected ? "var(--text-brand)" : "var(--text-body)",
        border: "var(--border-width) solid " + (selected ? "var(--border-brand)" : "var(--border-hairline)"),
        borderRadius: "var(--radius-pill)",
        transition: "var(--transition-control)",
        ...style,
      }}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
      {onRemove ? (
        <button
          onClick={onRemove}
          aria-label="Remove"
          style={{ border: 0, background: "transparent", cursor: "pointer", color: "inherit", display: "inline-flex", padding: 0 }}
        >
          <Icon name="x" size={13} />
        </button>
      ) : null}
    </span>
  );
}
