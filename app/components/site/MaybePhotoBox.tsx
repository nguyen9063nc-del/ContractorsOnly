import type { CSSProperties } from "react";
import type { MaybePhoto } from "~/data/content";

/**
 * Renders a real (lazy, WebP, srcset) photo when one exists, or a dashed
 * "Photo needed" placeholder when it doesn't — mirroring the design's
 * explicit src|need pattern rather than silently reusing a stand-in image.
 * `size` controls the placeholder label scale: "lg" for the larger Services
 * audience photo, "sm" for the smaller Equipment/Portfolio/category tiles.
 */
export function MaybePhotoBox({ photo, aspectRatio, size = "sm", borderRadius = 8 }: { photo: MaybePhoto; aspectRatio: string; size?: "lg" | "sm"; borderRadius?: number }) {
  if (photo.photo) {
    return (
      <img
        src={photo.photo.tile}
        srcSet={`${photo.photo.tile} 700w, ${photo.photo.full} 1600w`}
        sizes="(max-width: 640px) 100vw, 50vw"
        alt={photo.alt ?? ""}
        loading="lazy"
        decoding="async"
        width={700}
        height={525}
        style={{ width: "100%", height: "auto", aspectRatio, objectFit: "cover", display: "block", borderRadius, background: "#ededed" }}
      />
    );
  }
  const labelStyle: CSSProperties = {
    fontFamily: "Archivo, Arial, sans-serif",
    fontWeight: 700,
    letterSpacing: size === "lg" ? ".1em" : ".09em",
    textTransform: "uppercase",
    color: size === "lg" ? "#898989" : "#6a6a6a",
    fontSize: size === "lg" ? "clamp(15px,1vw,17px)" : "clamp(14px,.95vw,16px)",
  };
  return (
    <div
      style={{
        width: "100%",
        aspectRatio,
        minHeight: size === "lg" ? 220 : undefined,
        border: "1px dashed #c4c4c4",
        borderRadius,
        background: "#f6f6f6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: size === "lg" ? 8 : 6,
        padding: size === "lg" ? 18 : 14,
        textAlign: "center",
      }}
    >
      <span style={labelStyle}>Photo needed</span>
      {photo.need ? <span style={{ fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.4, color: "#898989" }}>{photo.need}</span> : null}
    </div>
  );
}
