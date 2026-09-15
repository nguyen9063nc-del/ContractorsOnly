import type { Shot } from "./GalleryShot";

/** Renders only the stacked background images; the caller owns the index state
    so the dot controls can live in the foreground content column, not this layer. */
export function HeroCarouselImages({ photos, index }: { photos: Shot[]; index: number }) {
  return (
    <>
      {photos.map((p, n) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.alt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: n === index ? 1 : 0, filter: p.filter, transition: "opacity 400ms ease" }}
        />
      ))}
    </>
  );
}

export function HeroCarouselDots({ photos, index, onSelect }: { photos: Shot[]; index: number; onSelect: (n: number) => void }) {
  return (
    <div style={{ display: "flex", gap: 8, marginTop: "clamp(8px,2vh,18px)" }}>
      {photos.map((p, n) => (
        <button
          key={p.src}
          aria-label={"Go to photo " + (n + 1)}
          onClick={() => onSelect(n)}
          style={{ width: n === index ? 24 : 8, height: 8, borderRadius: 999, border: "none", padding: 0, cursor: "pointer", background: n === index ? "#fff" : "rgba(255,255,255,.5)", transition: "width 200ms ease" }}
        />
      ))}
    </div>
  );
}
