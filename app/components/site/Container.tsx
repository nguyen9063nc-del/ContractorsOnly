import type { CSSProperties, ReactNode } from "react";

export function Container({ children, width = "var(--container-max)", style }: { children?: ReactNode; width?: string; style?: CSSProperties }) {
  return <div style={{ width: "100%", maxWidth: width, margin: "0 auto", padding: "0 32px", ...style }}>{children}</div>;
}
