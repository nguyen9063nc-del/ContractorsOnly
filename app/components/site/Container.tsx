import type { CSSProperties, ReactNode } from "react";
import { cssVars } from "~/styles/css-vars";

export function Container({ children, width = 1440, style }: { children?: ReactNode; width?: number; style?: CSSProperties }) {
  return (
    <div className="co-container" style={{ ...cssVars({ "--container-w": width + "px" }), ...style }}>
      {children}
    </div>
  );
}
