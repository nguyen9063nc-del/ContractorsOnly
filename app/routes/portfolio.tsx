import type { Route } from "./+types/portfolio";
import { Container } from "~/components/site/Container";
import { Band } from "~/components/site/Band";
import { GalleryShot } from "~/components/site/GalleryShot";
import { ClosingCTA } from "~/components/site/ClosingCTA";
import { Eyebrow } from "~/components/core/Eyebrow";
import { WORK } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Portfolio — Contractors Only" },
    { name: "description", content: "A sample of properties we've turned around — coordinated across trades and delivered on one schedule." },
  ];
}

export default function Portfolio() {
  return (
    <div>
      <section style={{ background: "var(--surface-subtle)", borderBottom: "1px solid var(--border-hairline)", padding: "56px 0 48px" }}>
        <Container>
          <Eyebrow>Portfolio</Eyebrow>
          <h1 style={{ font: "var(--type-display)", fontSize: "var(--text-display-md)", marginTop: 18, maxWidth: 720 }}>Recent work, ready for business.</h1>
          <p style={{ font: "var(--type-lead)", color: "var(--text-body)", marginTop: 16, maxWidth: 600 }}>
            A sample of properties we&apos;ve turned around — coordinated across trades and delivered on one schedule.
          </p>
        </Container>
      </section>
      <Band tight>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "40px 32px" }}>
          {WORK.map((c) => (
            <figure key={c.cap} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
              <GalleryShot shots={c.shots} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-brand)" }}>{c.tag}</span>
                <span style={{ font: "var(--type-display)", fontSize: 24, lineHeight: 1.08, letterSpacing: "var(--tracking-display)", color: "var(--text-strong)" }}>{c.cap}</span>
                <span style={{ font: "var(--type-body)", fontSize: 15, color: "var(--text-body)", lineHeight: 1.45 }}>{c.sub}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Band>
      <ClosingCTA />
    </div>
  );
}
