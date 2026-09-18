import { sequence } from "~/data/home";

/**
 * "Typical sequence" gantt — trades overlapping across a 7-day track (§10).
 *
 * Each row is a label plus its own 7-column track, rather than one flat grid.
 * That lets the label sit beside the track on desktop and stack above it on a
 * phone, so the chart scales down instead of degrading into a list.
 *
 * Day maths (§10): a phase running days A→B is stored as `start = A + 1` and
 * `span = B − A + 1` against a grid whose first column is the label gutter.
 * Inside a label-free 7-column track that becomes `start − 1`.
 */

const DAYS = 7;

export function Sequence() {
  return (
    <div className="seq__chart">
      {sequence.map((trade) => (
        <div className="seq__row" key={trade.name}>
          <span className="seq__trade">{trade.name}</span>
          <div className="seq__track">
            <div
              className="seq__bar"
              style={{
                // Custom properties rather than a literal grid-column, so the
                // mobile rules can reuse the same placement.
                ["--bar-start" as string]: trade.start - 1,
                // Clamped to the end of the track. The spec's own data has
                // Clean at start:8 span:2 while its comment reads "day 7";
                // unclamped that spills into an 8th implicit column and drags
                // the track out of alignment with the axis below it.
                ["--bar-span" as string]: Math.min(trade.span, DAYS - (trade.start - 1) + 1),
                background: trade.color,
              }}
            />
          </div>
        </div>
      ))}

      <div className="seq__row seq__row--axis">
        <span className="seq__dayLabel">Day</span>
        <div className="seq__track seq__axis">
          {/* Ticks sit on the gridlines: 0 at the left edge of the first column,
              each later tick at the right edge of its own column. */}
          {Array.from({ length: DAYS + 1 }, (_, d) => (
            <span
              key={d}
              className="seq__day"
              style={{
                gridColumn: Math.max(d, 1),
                justifySelf: d === 0 ? "start" : "end",
                transform: d === 0 ? "translateX(-50%)" : "translateX(50%)",
              }}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
