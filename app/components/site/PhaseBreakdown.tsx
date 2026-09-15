import type { PhaseGroup } from "~/data/content";
import { Icon } from "../core/Icon";
import { cssVars } from "~/styles/css-vars";

/** Phase-by-phase breakdown below a PhaseChart. The design lays these out as
    grid-auto-flow:column (one column per phase, however many that is) — fine
    on desktop, unreadably narrow on mobile, so this uses the co-grid utility
    to actually reflow: full column count on desktop, 2 on tablet, 1 on mobile. */
export function PhaseBreakdown({ groups }: { groups: PhaseGroup[] }) {
  return (
    <div className="co-grid" style={cssVars({ "--cols": groups.length, "--cols-tablet": Math.min(3, groups.length), "--cols-mobile": 1, "--gap-x": "24px", "--gap-y": "24px" })}>
      {groups.map((g) => (
        <div key={g.name} style={{ display: "flex", flexDirection: "column", gap: 11, minWidth: 0 }}>
          <div style={{ minWidth: 0, paddingBottom: 6, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(19px,1.35vw,23px)", lineHeight: 1.2, color: "#1c1c1c" }}>
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ display: "inline-block", verticalAlign: "baseline", marginRight: 7 }}>
              <rect width="10" height="10" rx="2" fill={g.color} />
            </svg>
            {g.name}
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
            {g.items.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, minWidth: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.35, color: "#4d4d4d" }}>
                <Icon name="check" size={15} strokeColor="var(--brand)" style={{ marginTop: 3, flex: "0 0 auto" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
