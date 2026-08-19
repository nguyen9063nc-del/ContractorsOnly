import { useState, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "outlineInverse";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}

type AsButton = CommonProps & { as?: "button" } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;
type AsAnchor = CommonProps & { as: "a" } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;
type AsLink = CommonProps & { as: "link" } & Omit<LinkProps, keyof CommonProps>;

export type ButtonProps = AsButton | AsAnchor | AsLink;

function useInteract() {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  return {
    hover,
    press,
    bind: {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => {
        setHover(false);
        setPress(false);
      },
      onMouseDown: () => setPress(true),
      onMouseUp: () => setPress(false),
    },
  };
}

const SIZES: Record<Size, CSSProperties> = {
  sm: { height: "var(--control-h-sm)", padding: "0 16px", fontSize: "12px" },
  md: { height: "var(--control-h-md)", padding: "0 22px", fontSize: "13px" },
  lg: { height: "var(--control-h-lg)", padding: "0 30px", fontSize: "14.5px" },
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", disabled = false, fullWidth = false, iconLeft, iconRight, as = "button", children, style, ...rest } = props as ButtonProps & Record<string, unknown>;
  const { hover, press, bind } = useInteract();

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    font: "var(--type-eyebrow)",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--weight-bold)" as unknown as number,
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    textDecoration: "none",
    border: "var(--border-width) solid transparent",
    borderRadius: "var(--radius-control)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "var(--transition-control), transform var(--dur-instant) var(--ease-out)",
    width: fullWidth ? "100%" : "auto",
    transform: press && !disabled ? "scale(var(--press-scale))" : "none",
    whiteSpace: "nowrap",
    ...SIZES[size],
  };

  const skins: Record<Variant, CSSProperties> = {
    primary: { background: press ? "var(--brand-press)" : hover ? "var(--brand-hover)" : "var(--brand)", color: "var(--text-on-brand)", boxShadow: hover ? "var(--shadow-sm)" : "var(--shadow-none)" },
    secondary: { background: hover ? "var(--surface-subtle)" : "var(--surface-card)", color: hover ? "var(--text-brand)" : "var(--text-strong)", borderColor: hover ? "var(--border-brand)" : "var(--gray-900)" },
    ghost: { background: "transparent", color: hover ? "var(--brand)" : "var(--text-strong)", borderColor: "transparent", boxShadow: hover ? "inset 0 -2px 0 var(--brand)" : "none" },
    inverse: { background: hover ? "var(--gray-100)" : "var(--white)", color: "var(--gray-900)" },
    outlineInverse: { background: hover ? "rgba(255,255,255,.10)" : "transparent", color: "var(--white)", borderColor: "rgba(255,255,255,.55)" },
  };

  const dis: CSSProperties = { background: "var(--disabled-bg)", color: "var(--disabled-fg)", borderColor: "transparent", boxShadow: "none" };
  const finalStyle = { ...base, ...(disabled ? dis : skins[variant] || skins.primary), ...style };
  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if (as === "link") {
    const { to, ...linkRest } = rest as LinkProps;
    return (
      <Link to={to} {...linkRest} style={finalStyle} {...(disabled ? {} : bind)}>
        {content}
      </Link>
    );
  }
  if (as === "a") {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a {...anchorRest} style={finalStyle} {...(disabled ? {} : bind)}>
        {content}
      </a>
    );
  }
  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonRest} disabled={disabled} style={finalStyle} {...(disabled ? {} : bind)}>
      {content}
    </button>
  );
}
