import { sequence } from "~/data/home";

/**
 * "Typical sequence" Gantt, in the handoff's flat grid: one label column plus
 * seven day columns, so every row shares the same track and the ticks line up
 * with the bar edges.
 *
 * Day maths (handoff): a bar in columns k…m covers days k−1…m−1, so a phase
 * running days A→B is `grid-column: (A+1) / span (B−A+1)`.
 *
 * `grid-row` and `grid-column` are the only inline styles allowed here, because
 * they are data rather than design.
 */

const DAYS = 7;
/** Last grid column: one label column plus seven day columns. */
const LAST_COL = DAYS + 1;

export function Sequence() {
  const ruleRow = sequence.length + 1;
  const axisRow = sequence.length + 2;

  return (
    <div className="gantt">
      {sequence.map((trade, i) => (
        <span className="gantt__label" style={{ gridRow: i + 1 }} key={`${trade.name}-l`}>
          {trade.name}
        </span>
      ))}

      {sequence.map((trade, i) => (
        <div
          className={`gantt__bar ${trade.cls}`}
          key={`${trade.name}-b`}
          style={{
            gridRow: i + 1,
            gridColumn: `${trade.start} / span ${
              // Clamped to the last column. The handoff lists Clean as
              // "8 / span 2" while its own note reads "day 7"; unclamped that
              // spills into a ninth implicit column and drags the whole track
              // out of alignment with the axis below.
              Math.min(trade.span, LAST_COL - trade.start + 1)
            }`,
          }}
        />
      ))}

      <div className="gantt__rule" style={{ gridRow: ruleRow }} />

      <span className="gantt__daylabel" style={{ gridRow: axisRow }}>
        Day
      </span>
      {Array.from({ length: DAYS + 1 }, (_, d) => (
        <span
          key={d}
          className={`gantt__tick${d === 0 ? " gantt__tick--zero" : ""}`}
          style={{ gridRow: axisRow, ...(d === 0 ? null : { gridColumn: d + 1 }) }}
        >
          {d}
        </span>
      ))}
    </div>
  );
}
