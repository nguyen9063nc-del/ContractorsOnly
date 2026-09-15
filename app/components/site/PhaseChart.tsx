import type { PhaseGroup } from "~/data/content";

const DAY_COUNT = 9;

/** Per-audience "typical sequence" Gantt-style bar chart — a direct port of the
    design's buildChart(groups). Horizontally scrolls on narrow screens instead
    of squeezing the day columns unreadably thin. */
export function PhaseChart({ groups }: { groups: PhaseGroup[] }) {
  const ruleRow = groups.length + 1;
  const dayRow = groups.length + 2;
  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `max-content repeat(${DAY_COUNT},minmax(0,36px))`,
          gridTemplateRows: `repeat(${groups.length + 1},minmax(0,1fr)) max-content`,
          gap: 0,
          alignItems: "center",
          minWidth: 420,
          flex: "1 1 auto",
        }}
      >
        {groups.map((g, i) => (
          <span key={"l" + i} style={{ gridColumn: 1, gridRow: i + 1, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: ".02em", color: "#1c1c1c", paddingRight: 12, textAlign: "right", whiteSpace: "nowrap" }}>
            {g.name}
          </span>
        ))}
        {groups.map((g, i) => (
          <div key={"b" + i} style={{ gridColumn: `${g.start} / span ${g.span}`, gridRow: i + 1, height: 18, borderRadius: 3, background: g.color }} />
        ))}
        <div style={{ gridColumn: `2 / span ${DAY_COUNT}`, gridRow: ruleRow, height: 1, background: "#e0e0e0", marginTop: 6 }} />
        <span style={{ gridColumn: 1, gridRow: dayRow, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: ".06em", color: "#898989", paddingRight: 12, textAlign: "right" }}>
          Day
        </span>
        {Array.from({ length: DAY_COUNT }, (_, i) => (
          <span key={"d" + i} style={{ gridColumn: i + 2, gridRow: dayRow, fontSize: 14, color: "#898989", textAlign: "center" }}>
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
}
