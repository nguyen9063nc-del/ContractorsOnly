import { useState } from "react";
import { Icon } from "../core/Icon";

export interface Shot {
  src: string;
  alt: string;
  filter?: string;
}

export function GalleryShot({ shots }: { shots: Shot[] }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + shots.length) % shots.length);
  const arrow = { width: 36, height: 36, display: "grid", placeItems: "center", border: "1px solid rgba(255,255,255,.5)", background: "rgba(0,0,0,.35)", color: "var(--white)", cursor: "pointer", borderRadius: "var(--radius-pill)", backdropFilter: "blur(4px)", pointerEvents: "auto" as const };
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", borderRadius: "var(--radius-lg, 16px)", overflow: "hidden" }}>
      {shots.map((s, n) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: n === i ? 1 : 0, filter: s.filter, transition: "opacity 400ms ease" }}
        />
      ))}
      {shots.length > 1 ? (
        <>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", pointerEvents: "none" }}>
            <button aria-label="Previous photo" onClick={() => go(-1)} style={arrow}>
              <Icon name="chevron-left" size={16} />
            </button>
            <button aria-label="Next photo" onClick={() => go(1)} style={arrow}>
              <Icon name="chevron-right" size={16} />
            </button>
          </div>
          <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
            {shots.map((s, n) => (
              <button
                key={s.src}
                aria-label={"Photo " + (n + 1)}
                onClick={() => setI(n)}
                style={{ width: n === i ? 20 : 7, height: 7, borderRadius: "var(--radius-pill)", border: "none", padding: 0, cursor: "pointer", background: n === i ? "var(--white)" : "rgba(255,255,255,.55)", transition: "width 200ms ease" }}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
