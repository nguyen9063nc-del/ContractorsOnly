import type { Route } from "./+types/equipment";
import { Container } from "~/components/site/Container";
import { DarkHero } from "~/components/site/DarkHero";
import { PhotoSlot } from "~/components/site/PhotoSlot";
import { Button } from "~/components/core/Button";
import { cssVars } from "~/styles/css-vars";
import { LIFTS, MOWERS, TRAILERS, TRUCKS, type FleetUnit } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Equipment — Contractors Only" },
    { name: "description", content: "Mowers, trailers, trucks and lifts — all in house. No rental counters, no waiting on a delivery window, no day-rate surprises on your invoice." },
  ];
}

function FleetGroup({ title, blurb, units, cols, colsTablet }: { title: string; blurb: string; units: FleetUnit[]; cols: number; colsTablet: number }) {
  return (
    <section style={{ background: "#fff" }}>
      <Container>
        <div style={{ padding: "clamp(22px,3vh,30px) 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap", marginBottom: 22 }}>
            <h3 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 26, lineHeight: 1, letterSpacing: "-.01em", textTransform: "uppercase", color: "#1c1c1c" }}>{title}</h3>
            <span style={{ fontSize: 17, lineHeight: 1.5, color: "#6a6a6a", flex: "1 1 320px", minWidth: 0 }}>{blurb}</span>
          </div>
          <div className="co-grid" style={cssVars({ "--cols": cols, "--cols-tablet": colsTablet, "--cols-mobile": 1, "--gap-x": "20px", "--gap-y": "20px" })}>
            {units.map((u) => (
              <div key={u.name} style={{ display: "flex", flexDirection: "column", background: "#fff" }}>
                <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: 8, overflow: "hidden" }}>
                  {u.src ? <img src={u.src} alt={u.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : <PhotoSlot label={u.ph} />}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "14px 2px 0" }}>
                  <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 19, lineHeight: 1.2, color: "#1c1c1c" }}>{u.name}</span>
                  <span style={{ fontSize: 17, lineHeight: 1.45, color: "#4d4d4d" }}>{u.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Equipment() {
  return (
    <div>
      <DarkHero image="/assets/photos/trailer-exterior.jpg" alt="Crew trailer staged at a property" minHeight="clamp(380px,48vh,500px)">
        <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>Equipment</span>
        <h1 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(40px,5.6vw,78px)", lineHeight: 0.92, letterSpacing: "-.025em", textTransform: "uppercase", color: "#fff" }}>
          We own it.
          <br />
          <span style={{ color: "var(--brand)" }}>It shows up.</span>
        </h1>
        <p style={{ margin: 0, maxWidth: 470, fontSize: "clamp(17px,2vh,20px)", lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>
          Mowers, trailers, trucks and lifts — all in house. No rental counters, no waiting on a delivery window, no day-rate surprises on your invoice.
        </p>
        <Button as="link" to="/contact" style={{ marginTop: 6 }}>
          Get your project started
        </Button>
      </DarkHero>

      <section style={{ background: "#fff" }}>
        <Container>
          <div style={{ padding: "clamp(48px,7vh,88px) 0 clamp(20px,3vh,28px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 720 }}>
              <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 0.95, letterSpacing: "-.025em", textTransform: "uppercase", color: "var(--brand)" }}>
                The fleet
              </h2>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#4d4d4d" }}>
                Owning our equipment is how we overlap trades and keep a turnover on schedule. Every unit below is ours and stays loaded, so crews start working the hour they arrive.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FleetGroup title="Trucks & vans" blurb="Sized to the job, from a single service call to a full turnover." units={TRUCKS} cols={3} colsTablet={2} />
      <FleetGroup title="Trailers" blurb="Trade-specific packouts stay loaded, so crews work instead of making supply runs." units={TRAILERS} cols={2} colsTablet={2} />
      <FleetGroup title="Mowers" blurb="Two zero-turns plus a rough-cut tow-behind for lots that have gone too long." units={MOWERS} cols={3} colsTablet={2} />

      <section style={{ background: "#fff" }}>
        <Container>
          <div style={{ padding: "clamp(22px,3vh,30px) 0 clamp(48px,7vh,80px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap", marginBottom: 18 }}>
              <h3 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 26, lineHeight: 1, letterSpacing: "-.01em", textTransform: "uppercase", color: "#1c1c1c" }}>Lifts</h3>
              <span style={{ fontSize: 17, lineHeight: 1.5, color: "#6a6a6a", flex: "1 1 320px", minWidth: 0 }}>Height access on demand — no day-rate rentals for roofline exteriors or high interior ceilings.</span>
            </div>
            <div className="co-grid" style={cssVars({ "--cols": 2, "--cols-tablet": 2, "--cols-mobile": 1, "--gap-x": "16px", "--gap-y": "16px" })}>
              {LIFTS.map((l) => (
                <div key={l.name} className="co-lift-row">
                  <div style={{ flex: "0 0 132px", aspectRatio: "1/1", borderRadius: 8, overflow: "hidden" }}>
                    <PhotoSlot label={l.ph} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 6, minWidth: 0 }}>
                    <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 19, lineHeight: 1.2, color: "#1c1c1c" }}>{l.name}</span>
                    <span style={{ fontSize: 17, lineHeight: 1.45, color: "#4d4d4d" }}>{l.spec}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <DarkHero image="/assets/photos/trailer-secured-load.jpg" alt="Loaded trailer ready to roll" minHeight="clamp(340px,42vh,440px)">
        <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.6vw,64px)", lineHeight: 0.94, letterSpacing: "-.025em", textTransform: "uppercase", color: "#fff" }}>
          Need something
          <br />
          <span style={{ color: "var(--brand)" }}>bigger?</span>
        </h2>
        <p style={{ margin: 0, maxWidth: 470, fontSize: "clamp(17px,2vh,20px)", lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>
          If a job calls for equipment we don&apos;t own, we source it and fold it into the same scope and schedule. You still make one call.
        </p>
        <Button as="link" to="/contact" style={{ marginTop: 6 }}>
          Get your project started
        </Button>
      </DarkHero>
    </div>
  );
}
