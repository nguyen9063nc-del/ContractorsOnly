import { useEffect, useState } from "react";
import type { Shot } from "./GalleryShot";

/** Renders only the stacked background images; the caller owns the index state
    so the dot controls can live in the foreground content column, not this layer.
    Only the active slide is eager + high priority (it's the page's LCP candidate);
    other slides mount lazily the first time the visitor actually selects them, so
    the two unseen photos don't compete with the real hero image on first load. */
export function HeroCarouselImages({ photos, index }: { photos: Shot[]; index: number }) {
  const [visited, setVisited] = useState(() => new Set([0]));

  useEffect(() => {
    if (!visited.has(index)) setVisited((prev) => new Set(prev).add(index));
  }, [index, visited]);

  return (
    <>
      {photos.map((p, n) => {
        if (!visited.has(n)) return null;
        const isFirst = n === 0;
        return (
          <img
            key={p.full}
            src={p.full}
            srcSet={`${p.tile} 700w, ${p.full} 1600w`}
            sizes="100vw"
            alt={p.alt}
            width={1600}
            height={900}
            fetchPriority={isFirst ? "high" : undefined}
            loading={isFirst ? "eager" : "lazy"}
            decoding={isFirst ? "sync" : "async"}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: n === index ? 1 : 0, filter: p.filter, transition: "opacity 400ms ease" }}
          />
        );
      })}
    </>
  );
}

export function HeroCarouselDots({ photos, index, onSelect }: { photos: Shot[]; index: number; onSelect: (n: number) => void }) {
  return (
    <div style={{ display: "flex", gap: 8, marginTop: "clamp(8px,2vh,18px)" }}>
      {photos.map((p, n) => (
        <button
          key={p.full}
          aria-label={"Go to photo " + (n + 1)}
          onClick={() => onSelect(n)}
          style={{ width: n === index ? 24 : 8, height: 8, borderRadius: 999, border: "none", padding: 0, cursor: "pointer", background: n === index ? "#fff" : "rgba(255,255,255,.5)", transition: "width 200ms ease" }}
        />
      ))}
    </div>
  );
}
