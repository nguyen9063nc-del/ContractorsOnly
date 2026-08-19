import { Icon } from "../core/Icon";

export function PhotoSlot({ label, height = 320 }: { label: string; height?: number; tone?: string }) {
  return (
    <div
      style={{
        height,
        background: "var(--surface-muted)",
        border: "1px solid var(--border-hairline)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        font: "var(--type-mono)",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
      }}
    >
      <Icon name="image" size={16} />
      {label}
    </div>
  );
}
