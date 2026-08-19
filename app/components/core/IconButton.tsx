import { useState, type ButtonHTMLAttributes, type CSSProperties } from "react";
import { Icon, type IconProps } from "./Icon";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  icon: IconProps["name"];
  label: string;
  variant?: Variant;
  size?: Size;
  style?: CSSProperties;
}

export function IconButton({ icon, label, variant = "secondary", size = "md", disabled = false, style, ...rest }: IconButtonProps) {
  const [hover, setHover] = useState(false);
  const box = size === "sm" ? 36 : size === "lg" ? 54 : 44;
  const skins: Record<Variant, CSSProperties> = {
    primary: { background: hover ? "var(--brand-hover)" : "var(--brand)", color: "var(--white)", borderColor: "transparent" },
    secondary: { background: hover ? "var(--surface-subtle)" : "var(--surface-card)", color: hover ? "var(--text-brand)" : "var(--text-strong)", borderColor: hover ? "var(--border-brand)" : "var(--border-strong)" },
    ghost: { background: hover ? "var(--surface-muted)" : "transparent", color: "var(--text-strong)", borderColor: "transparent" },
  };
  return (
    <button
      {...rest}
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: box,
        height: box,
        border: "var(--border-width) solid",
        borderRadius: "var(--radius-control)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "var(--transition-control)",
        ...(disabled ? { background: "var(--disabled-bg)", color: "var(--disabled-fg)", borderColor: "transparent" } : skins[variant] || skins.secondary),
        ...style,
      }}
    >
      <Icon name={icon} size={size === "sm" ? 16 : 20} />
    </button>
  );
}
