import type { CSSProperties, ReactNode } from "react";
import { Container } from "./Container";

const SCRIM = "linear-gradient(90deg,#0d0d0d 0%,rgba(13,13,13,.94) 34%,rgba(13,13,13,.55) 60%,rgba(13,13,13,.12) 100%)";

/**
 * Full-bleed dark image band used for every page hero and every closing "photo" CTA
 * across the site. The gradient's stops are percentages of the band's own width, so
 * it darkens the same proportion of the photo (and stays behind the left-aligned text)
 * at any viewport size without needing a separate mobile treatment.
 */
export function DarkHero({ image, alt, minHeight, children }: { image: string; alt: string; minHeight: string; children: ReactNode }) {
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
      <img src={image} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: SCRIM }} />
      <div style={{ position: "relative", width: "100%", padding: "clamp(40px,7vh,88px) 0" }}>
        <Container>
          <div style={{ maxWidth: 600, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "clamp(14px,2.2vh,22px)" }}>{children}</div>
        </Container>
      </div>
    </section>
  );
}
