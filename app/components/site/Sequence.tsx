import { sequence } from "~/data/home";

/**
 * "Typical sequence" gantt — trades overlapping across a 7-day track.
 *
 * A 7-column bar chart with right-aligned labels cannot survive a 360px screen,
 * so below 620px the CSS hides the track and shows a plain "Day 1–4" range per
 * trade instead. Both readings come from the same data, so they cannot drift.
 */
/** Last day marked on the track. The grid has 7 day columns (2 through 8). */
const LAST_DAY = 7;

export function Sequence() {
  const rows = sequence.length;

  return (
    <div className="seq__chart">
      {sequence.map((trade, i) => {
        // Column 1 is the label gutter, so column 2 is the day-0 boundary and a
        // bar occupying columns [start, start+span-1] covers days
        // start-2 through start+span-2.
        const fromDay = trade.start - 2;
        // The final trade's span runs past the explicit grid, where it lands in
        // a zero-width implicit track — so it renders as ending at day 7, and
        // the label has to say the same thing the bar shows.
        const toDay = Math.min(trade.start + trade.span - 2, LAST_DAY);

        return (
          <div key={trade.name} style={{ display: "contents" }}>
            <span className="seq__trade" style={{ gridRow: i + 1 }}>
              {trade.name}
              <span className="seq__range">
                {" "}
                · Day {fromDay}–{toDay}
              </span>
            </span>
            <div
              className="seq__bar"
              style={{
                gridColumn: `${trade.start} / span ${trade.span}`,
                gridRow: i + 1,
                background: trade.color,
              }}
            />
          </div>
        );
      })}

      <div className="seq__rule" style={{ gridRow: rows + 1 }} />

      <span className="seq__dayLabel" style={{ gridRow: rows + 2 }}>
        Day
      </span>
      {Array.from({ length: 8 }, (_, d) => (
        <span
          key={d}
          className="seq__day"
          style={{
            gridColumn: d === 0 ? 2 : d + 1,
            gridRow: rows + 2,
            justifySelf: d === 0 ? "start" : "end",
            transform: d === 0 ? "translateX(-50%)" : "translateX(50%)",
          }}
        >
          {d}
        </span>
      ))}
    </div>
  );
}
