import type { Route } from "./+types/portfolio";
import { Container } from "~/components/site/Container";
import { DarkHero } from "~/components/site/DarkHero";
import { MaybePhotoBox } from "~/components/site/MaybePhotoBox";
import { Button } from "~/components/core/Button";
import { cssVars } from "~/styles/css-vars";
import { PROJECTS, type PortfolioPhoto } from "~/data/content";
import { PHOTOS } from "~/data/images.generated";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Portfolio — Contractors Only" },
    { name: "description", content: "A sample of properties we've turned around — every trade coordinated by us and delivered on one timeline." },
  ];
}

const h2Red = { margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(30px,3.6vw,48px)", lineHeight: 0.98, letterSpacing: "-.02em", textTransform: "uppercase" as const, color: "#1c1c1c" };

function Tile({ p, aspectRatio = "4/3" }: { p: PortfolioPhoto; aspectRatio?: string }) {
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
      <MaybePhotoBox photo={{ photo: p.photo, alt: p.alt }} aspectRatio={aspectRatio} size="sm" />
      <figcaption style={{ fontSize: "clamp(16px,1.05vw,18px)", lineHeight: 1.3, color: "#898989" }}>{p.caption}</figcaption>
    </figure>
  );
}

export default function Portfolio() {
  return (
    <div>
      <DarkHero image={PHOTOS["showroom"]} alt="Commercial showroom cleaned and ready for business" minHeight="clamp(380px,48vh,500px)" priority>
        <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(17px,1.15vw,20px)", letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>Portfolio</span>
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

      <section style={{ background: "#fff" }}>
        <Container>
          <div style={{ padding: "clamp(60px,9vh,116px) 0", display: "flex", flexDirection: "column", gap: "clamp(64px,9vh,120px)" }}>
            {PROJECTS.map((project, i) => (
              <div key={project.name} style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,3.6vh,40px)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
                  <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(15px,1vw,17px)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--brand)" }}>
                    Project {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 style={h2Red}>{project.name}</h2>
                  <p style={{ margin: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.6, color: "#4d4d4d" }}>{project.body}</p>
                </div>

                <div className="co-split" style={cssVars({ "--split-cols": "minmax(0,1.3fr) minmax(0,1fr)", "--split-gap": "clamp(24px,3.2vw,48px)" })}>
                  <Tile p={project.hero} aspectRatio="16/11" />
                  <div className="co-grid" style={cssVars({ "--cols": 2, "--cols-tablet": 2, "--cols-mobile": 2, "--gap-x": "clamp(12px,1.4vw,20px)", "--gap-y": "clamp(12px,1.4vw,20px)" })}>
                    {project.tiles.map((t, ti) => (
                      <Tile key={ti} p={t} aspectRatio="4/3" />
                    ))}
                  </div>
                </div>

                <div className="co-grid" style={cssVars({ "--cols": 6, "--cols-tablet": 3, "--cols-mobile": 2, "--gap-x": "clamp(10px,1.2vw,16px)", "--gap-y": "clamp(10px,1.2vw,16px)" })}>
                  {project.strip.map((s, si) => (
                    <Tile key={si} p={s} aspectRatio="1/1" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <DarkHero image={PHOTOS["conference-room"]} alt="Conference room ready for business" minHeight="clamp(340px,42vh,440px)">
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
