import type { CSSProperties, ReactNode } from "react";
import { Container } from "./Container";
import type { ImageVariants } from "~/data/images.generated";

const SCRIM = "linear-gradient(90deg,#0d0d0d 0%,rgba(13,13,13,.94) 34%,rgba(13,13,13,.55) 60%,rgba(13,13,13,.12) 100%)";

/**
 * Full-bleed dark image band used for every page hero and every closing "photo" CTA
 * across the site. The gradient's stops are percentages of the band's own width, so
 * it darkens the same proportion of the photo (and stays behind the left-aligned text)
 * at any viewport size without needing a separate mobile treatment.
 *
 * `priority` marks the actual page-top hero (the LCP candidate on that page): eager,
 * high fetch priority, sync decode. Every other usage (closing CTA bands) is always
 * below the fold, so it lazy-loads instead.
 */
export function DarkHero({ image, alt, minHeight, priority = false, children }: { image: ImageVariants; alt: string; minHeight: string; priority?: boolean; children: ReactNode }) {
  const section: CSSProperties = {
    position: "relative",
    width: "100%",
    background: "#141414",
    overflow: "hidden",
    minHeight,
    display: "flex",
    alignItems: "center",
  };
  return (
    <section style={section}>
      <img
        src={image.full}
        srcSet={`${image.tile} 700w, ${image.full} 1600w`}
        sizes="100vw"
        alt={alt}
        width={1600}
        height={900}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{ position: "absolute", inset: 0, background: SCRIM }} />
      <div style={{ position: "relative", width: "100%", padding: "clamp(40px,7vh,88px) 0" }}>
        <Container>
          <div style={{ maxWidth: 600, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "clamp(14px,2.2vh,22px)" }}>{children}</div>
        </Container>
      </div>
    </section>
  );
}
