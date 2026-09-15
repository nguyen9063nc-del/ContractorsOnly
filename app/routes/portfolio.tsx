import type { Route } from "./+types/portfolio";
import { Container } from "~/components/site/Container";
import { DarkHero } from "~/components/site/DarkHero";
import { GalleryShot } from "~/components/site/GalleryShot";
import { Button } from "~/components/core/Button";
import { cssVars } from "~/styles/css-vars";
import { WORK } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Portfolio — Contractors Only" },
    { name: "description", content: "A sample of properties we've turned around — every trade coordinated by us and delivered on one timeline." },
  ];
}

export default function Portfolio() {
  return (
    <div>
      <DarkHero image="/assets/photos/showroom.jpg" alt="Commercial showroom cleaned and ready for business" minHeight="clamp(380px,48vh,500px)">
        <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>Portfolio</span>
        <h1 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(40px,5.6vw,78px)", lineHeight: 0.92, letterSpacing: "-.025em", textTransform: "uppercase", color: "#fff" }}>
          Recent work.
          <br />
          <span style={{ color: "var(--brand)" }}>One schedule.</span>
        </h1>
        <p style={{ margin: 0, maxWidth: 470, fontSize: "clamp(17px,2vh,20px)", lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>
          A sample of properties we&apos;ve turned around — every trade coordinated by us and delivered on one timeline.
        </p>
        <Button as="link" to="/contact" style={{ marginTop: 6 }}>
          Get your project started
        </Button>
      </DarkHero>

      <section style={{ padding: "64px 0", background: "#fff" }}>
        <Container>
          <div className="co-grid" style={cssVars({ "--cols": 2, "--cols-tablet": 2, "--cols-mobile": 1, "--gap-x": "32px", "--gap-y": "40px" })}>
            {WORK.map((w) => (
              <figure key={w.cap} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
                <GalleryShot shots={w.shots} />
                <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--brand)" }}>{w.tag}</span>
                  <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 24, lineHeight: 1.08, letterSpacing: "-.02em", color: "#1c1c1c" }}>{w.cap}</span>
                  <span style={{ fontSize: 17, lineHeight: 1.45, color: "#4d4d4d" }}>{w.sub}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <DarkHero image="/assets/photos/conference-room.jpg" alt="Conference room ready for business" minHeight="clamp(340px,42vh,440px)">
        <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.6vw,64px)", lineHeight: 0.94, letterSpacing: "-.025em", textTransform: "uppercase", color: "#fff" }}>
          <span style={{ color: "var(--brand)" }}>Your property</span>
          <br />
          is next.
        </h2>
        <p style={{ margin: 0, maxWidth: 470, fontSize: "clamp(17px,2vh,20px)", lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>
          Every project on this page was delivered under one scope, one schedule and one point of contact. Send us the details of your property and we will put the same process to work.
        </p>
        <Button as="link" to="/contact" style={{ marginTop: 6 }}>
          Get your project started
        </Button>
      </DarkHero>
    </div>
  );
}
