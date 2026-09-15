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
  const arrow = { width: 36, height: 36, display: "grid", placeItems: "center", border: "1px solid rgba(255,255,255,.5)", background: "rgba(0,0,0,.35)", color: "#fff", cursor: "pointer", borderRadius: 999, backdropFilter: "blur(4px)", pointerEvents: "auto" as const };
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", borderRadius: 16, overflow: "hidden", background: "#ededed" }}>
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
        </>
      ) : null}
    </div>
  );
}
