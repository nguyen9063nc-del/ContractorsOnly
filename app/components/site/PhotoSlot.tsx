import type { CSSProperties } from "react";

export function PhotoSlot({ label, style }: { label: string; style?: CSSProperties }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#ededed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 12,
        fontFamily: "Archivo, Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: "#a8a8a8",
        borderRadius: 4,
        ...style,
      }}
    >
      {label}
    </div>
  );
}
