import { useState } from "react";
import { Icon } from "../core/Icon";
import type { Shot } from "./GalleryShot";

export function HeroCarousel({ photos }: { photos: Shot[] }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + photos.length) % photos.length);
  const arrow = { width: 44, height: 44, display: "grid", placeItems: "center", border: "1px solid rgba(255,255,255,.5)", background: "rgba(0,0,0,.35)", color: "var(--white)", cursor: "pointer", borderRadius: "var(--radius-pill)", backdropFilter: "blur(4px)" };
  return (
    <div style={{ position: "relative", height: "100%", minHeight: 0, overflow: "hidden", borderRadius: "var(--radius-lg, 16px)" }}>
      {photos.map((p, n) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.alt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: n === i ? 1 : 0, filter: p.filter, transition: "opacity 400ms ease" }}
        />
      ))}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", pointerEvents: "none" }}>
        <button aria-label="Previous photo" onClick={() => go(-1)} style={{ ...arrow, pointerEvents: "auto" }}>
          <Icon name="chevron-left" size={20} />
        </button>
        <button aria-label="Next photo" onClick={() => go(1)} style={{ ...arrow, pointerEvents: "auto" }}>
          <Icon name="chevron-right" size={20} />
        </button>
      </div>
      <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8 }}>
        {photos.map((p, n) => (
          <button
            key={p.src}
            aria-label={"Photo " + (n + 1)}
            onClick={() => setI(n)}
            style={{ width: n === i ? 24 : 8, height: 8, borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer", background: n === i ? "var(--white)" : "rgba(255,255,255,.5)", transition: "width 200ms ease" }}
          />
        ))}
      </div>
    </div>
  );
}
