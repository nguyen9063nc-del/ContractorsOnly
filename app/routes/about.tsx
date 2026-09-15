import type { Route } from "./+types/about";
import { Container } from "~/components/site/Container";
import { PhotoSlot } from "~/components/site/PhotoSlot";
import { Eyebrow } from "~/components/core/Eyebrow";
import { cssVars } from "~/styles/css-vars";
import { TEAM } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "About us — Contractors Only" },
    { name: "description", content: "Contractors Only coordinates the trades that get properties ready — so you make one call instead of ten." },
  ];
}

export default function About() {
  return (
    <div>
      <section style={{ background: "#f6f6f6", borderBottom: "1px solid #e0e0e0", padding: "56px 0 48px" }}>
        <Container>
          <Eyebrow>About us</Eyebrow>
          <h1 style={{ margin: "18px 0 0", fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(32px,4.2vw,52px)", lineHeight: 1.04, letterSpacing: "-.02em", color: "#1c1c1c", maxWidth: 760 }}>
            One team for everything your property needs.
          </h1>
          <p style={{ margin: "16px 0 0", fontSize: "clamp(20px,1.4vw,24px)", lineHeight: 1.45, maxWidth: 620 }}>
            Contractors Only coordinates the trades that get properties ready — so you make one call instead of ten. Currently serving Seattle, Portland and Los Angeles regions.
          </p>
        </Container>
      </section>

      <section style={{ padding: "72px 0", background: "#fff" }}>
        <Container>
          <div className="co-split" style={cssVars({ "--split-cols": ".42fr .58fr", "--split-gap": "64px" })}>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.04, letterSpacing: "-.01em", textTransform: "uppercase", color: "#1c1c1c" }}>Who we are</h2>
              <p style={{ margin: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.75, color: "#4d4d4d" }}>
                We choose people over projects — building trust through relationships and putting people at the heart of everything we do. Our team values transparency with clients, tight coordination between trades, and an ownership culture where one person is accountable for your property from the first walkthrough to the final invoice.
              </p>
            </div>
            <div style={{ width: "100%", aspectRatio: "3/2" }}>
              <PhotoSlot label="Drop a team photo" />
            </div>
          </div>
        </Container>
      </section>

      <section style={{ padding: "14px 0" }}>
        <Container>
          <div style={{ padding: "26px 0 50px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Eyebrow>The team</Eyebrow>
              <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 1.18, letterSpacing: "-.01em", color: "#1c1c1c" }}>The people behind the work.</h2>
            </div>
            <div className="co-grid" style={{ ...cssVars({ "--cols": 5, "--cols-tablet": 3, "--cols-mobile": 2, "--gap-x": "24px", "--gap-y": "40px" }), marginTop: 44, justifyItems: "center" }}>
              {TEAM.map((p) => (
                <div key={p.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: "100%", maxWidth: 250 }}>
                  <div style={{ width: "100%", aspectRatio: "250/310" }}>
                    <PhotoSlot label={"Drop a photo — " + p.name} />
                  </div>
                  <h3 style={{ margin: "16px 0 0", fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 23, lineHeight: 1.1, letterSpacing: "-.01em", color: "#1c1c1c", textAlign: "center" }}>{p.name}</h3>
                  <span style={{ fontSize: "clamp(17px,1.15vw,20px)", color: "#898989", textAlign: "center" }}>{p.role}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
