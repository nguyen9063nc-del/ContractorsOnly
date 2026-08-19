import { Suspense, type CSSProperties, type HTMLAttributes } from "react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  name: IconName;
  size?: number;
  strokeColor?: string;
}

/** Lucide (2px stroke, rounded caps, no fill), lazy-loaded per glyph via lucide-react/dynamic. */
export function Icon({ name, size = 20, strokeColor = "currentColor", style, ...rest }: IconProps) {
  const box: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    flex: "0 0 auto",
    color: strokeColor,
    ...style,
  };
  return (
    <span aria-hidden="true" {...rest} style={box}>
      <Suspense fallback={null}>
        <DynamicIcon name={name} size={size} color={strokeColor} strokeWidth={2} />
      </Suspense>
    </span>
  );
}
