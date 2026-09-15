import type { CSSProperties } from "react";

/** Lets custom-property names (e.g. "--cols") flow into a React style object. */
export function cssVars(vars: Record<string, string | number>): CSSProperties {
  return vars as unknown as CSSProperties;
}
