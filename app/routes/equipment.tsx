import type { Route } from "./+types/equipment";
import { Container } from "~/components/site/Container";
import { DarkHero } from "~/components/site/DarkHero";
import { MaybePhotoBox } from "~/components/site/MaybePhotoBox";
import { Button } from "~/components/core/Button";
import { cssVars } from "~/styles/css-vars";
import { FLEET_ROWS, TOOL_ROWS, type FleetUnit, type ToolItem } from "~/data/content";
import { PHOTOS } from "~/data/images.generated";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Equipment — Contractors Only" },
    { name: "description", content: "Trucks, vans, trailers and tools — all in house. No rental counters, no waiting on a delivery window, no day-rate surprises on your invoice." },
  ];
}

const h2Red = { margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 0.95, letterSpacing: "-.025em", textTransform: "uppercase" as const, color: "var(--brand)" };
const rowLabel = { margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(26px,1.9vw,32px)", lineHeight: 1, letterSpacing: "-.01em", textTransform: "uppercase" as const, color: "#1c1c1c" };
const rowBlurb = { fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.5, color: "#6a6a6a", flex: "1 1 320px", minWidth: 0 } as const;

function FleetRowSection({ label, blurb, units, cols, colsTablet }: { label: string; blurb: string; units: FleetUnit[]; cols: number; colsTablet: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
        <h3 style={rowLabel}>{label}</h3>
        <span style={rowBlurb}>{blurb}</span>
      </div>
      <div className="co-grid" style={cssVars({ "--cols": cols, "--cols-tablet": colsTablet, "--cols-mobile": 1, "--gap-x": "clamp(14px,1.6vw,24px)", "--gap-y": "clamp(14px,1.6vw,24px)" })}>
        {units.map((u) => (
          <figure key={u.name} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 11, minWidth: 0 }}>
            <MaybePhotoBox photo={{ photo: u.photo, alt: u.name }} aspectRatio="4/3" size="sm" />
            <figcaption style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
              <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(19px,1.35vw,23px)", lineHeight: 1.2, color: "#1c1c1c" }}>{u.name}</span>
              <span style={{ fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.4, color: "#898989" }}>{u.spec}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function ToolRowSection({ label, blurb, items, cols, colsTablet }: { label: string; blurb: string; items: ToolItem[]; cols: number; colsTablet: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
        <h3 style={rowLabel}>{label}</h3>
        <span style={rowBlurb}>{blurb}</span>
      </div>
      <div className="co-grid" style={cssVars({ "--cols": cols, "--cols-tablet": colsTablet, "--cols-mobile": 2, "--gap-x": "clamp(12px,1.3vw,20px)", "--gap-y": "clamp(12px,1.3vw,20px)" })}>
        {items.map((t) => (
          <figure key={t.name} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
            <MaybePhotoBox photo={{ photo: t.photo, alt: t.name }} aspectRatio="1/1" size="sm" />
            <figcaption style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.25, color: "#1c1c1c" }}>{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Equipment() {
  return (
    <div>
      <DarkHero image={PHOTOS["trailer-exterior"]} alt="Crew trailer staged at a property" minHeight="clamp(380px,48vh,500px)" priority>
        <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(17px,1.15vw,20px)", letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>Equipment</span>
        <h1 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(40px,5.6vw,78px)", lineHeight: 0.92, letterSpacing: "-.025em", textTransform: "uppercase", color: "#fff" }}>
          We own it.
          <br />
          <span style={{ color: "var(--brand)" }}>It shows up.</span>
        </h1>
        <p style={{ margin: 0, maxWidth: 470, fontSize: "clamp(17px,2vh,20px)", lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>
          Trucks, vans, trailers and tools — all in house. No rental counters, no waiting on a delivery window, no day-rate surprises on your invoice.
        </p>
        <Button as="link" to="/contact" style={{ marginTop: 6 }}>
          Get your project started
        </Button>
      </DarkHero>

      <section style={{ background: "#fff" }}>
        <Container>
          <div style={{ padding: "clamp(60px,9vh,116px) 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: "clamp(38px,5.5vh,66px)" }}>
              <h2 style={h2Red}>Efficiency by design</h2>
              <p style={{ margin: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.6, color: "#4d4d4d" }}>Our vehicle fleet: how we get our people, equipment, tools and supplies to you quickly.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(34px,4.5vh,56px)" }}>
              {FLEET_ROWS.map((r) => (
                <FleetRowSection key={r.label} label={r.label} blurb={r.blurb} units={r.units} cols={4} colsTablet={2} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section style={{ background: "#fff" }}>
        <Container>
          <div style={{ padding: "0 0 clamp(60px,9vh,116px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: "clamp(38px,5.5vh,66px)" }}>
              <h2 style={h2Red}>Tools to get the job done</h2>
              <p style={{ margin: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.6, color: "#4d4d4d" }}>Our tools and equipment: everything in one place, organized and ready.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(34px,4.5vh,56px)" }}>
              {TOOL_ROWS.map((r) => (
                <ToolRowSection key={r.label} label={r.label} blurb={r.blurb} items={r.items} cols={5} colsTablet={3} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <DarkHero image={PHOTOS["trailer-packout"]} alt="Loaded trailer ready to roll" minHeight="clamp(340px,42vh,440px)">
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
