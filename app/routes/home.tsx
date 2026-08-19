import type { Route } from "./+types/home";
import { Container } from "~/components/site/Container";
import { Band } from "~/components/site/Band";
import { Fold } from "~/components/site/Fold";
import { HeroCarousel } from "~/components/site/HeroCarousel";
import { GalleryShot } from "~/components/site/GalleryShot";
import { ClosingCTA } from "~/components/site/ClosingCTA";
import { Button } from "~/components/core/Button";
import { Icon } from "~/components/core/Icon";
import { SectionHeading } from "~/components/core/SectionHeading";
import { ServiceList } from "~/components/patterns/ServiceList";
import { AUDIENCES, ONES, SERVICES, STEPS, WORK } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Contractors Only — One call. We handle the property." },
    { name: "description", content: "Painting, repairs, cleaning, landscaping, turnovers — coordinated by one point of contact, billed on one invoice. Serving the Seattle, Portland and Los Angeles regions." },
  ];
}

const HERO_PHOTOS = [
  { src: "/assets/photos/showroom.jpg", alt: "Commercial showroom cleaned and ready for business", filter: "brightness(1.18) contrast(1.02)" },
  { src: "/assets/photos/conference-room.jpg", alt: "Conference room ready for business" },
  { src: "/assets/photos/restroom-refresh.jpg", alt: "Refreshed commercial restroom" },
];

function Hero() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "minmax(380px, 39%) 1fr", gap: 14, flex: "1 1 auto", minHeight: "min-content", padding: "14px 0", width: "90%", maxWidth: 1440, margin: "0 auto", background: "var(--white)", alignItems: "stretch" }}>
      <div style={{ position: "relative", background: "var(--surface-brand)", color: "var(--white)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "clamp(4px,3.4vh,40px) 34px", borderRadius: "var(--radius-lg, 16px)" }}>
        <div style={{ position: "relative", maxWidth: 460, marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto", width: "100%", display: "flex", flexDirection: "column", gap: "clamp(4px,2.2vh,26px)", alignItems: "flex-start" }}>
          <h1 style={{ margin: 0, font: "var(--type-display)", fontSize: "clamp(22px, min(3.4vw, 6vh), 56px)", lineHeight: 0.94, letterSpacing: "var(--tracking-display)", color: "var(--white)" }}>
            One call.
            <br />
            We handle the property.
          </h1>
          <p style={{ margin: 0, font: "var(--type-lead)", fontSize: "clamp(12.5px, 2.3vh, 22px)", color: "rgba(255,255,255,.86)" }}>
            Painting, repairs, cleaning, landscaping, turnovers — coordinated by one point of contact, billed on one invoice.
          </p>
          <div style={{ display: "grid", gap: 10, width: "100%" }}>
            <Button fullWidth variant="inverse" as="link" to="/contact">
              Get your project started
            </Button>
            <Button fullWidth variant="outlineInverse" as="link" to="/services" iconRight={<Icon name="arrow-right" size={16} />}>
              Learn more about what we can do
            </Button>
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: 460, marginLeft: "auto", marginRight: "auto", width: "100%", font: "var(--type-label)", color: "rgba(255,255,255,.72)", borderTop: "1px solid rgba(255,255,255,.25)", paddingTop: "clamp(6px,1.6vh,16px)" }}>
          Currently serving the Seattle, Portland and Los Angeles regions
        </div>
      </div>
      <HeroCarousel photos={HERO_PHOTOS} />
    </section>
  );
}

function OnesStrip() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "7px 0 14px", flex: "0 1 auto", display: "flex", alignItems: "center" }}>
      <div style={{ width: "90%", maxWidth: 1440, margin: "0 auto", background: "var(--surface-subtle)", borderRadius: "var(--radius-lg, 16px)", padding: "clamp(12px,2.6vh,34px) 0" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 22, width: "100%" }}>
          {ONES.map((o) => (
            <div key={o.t} style={{ display: "flex", flexDirection: "column", gap: "clamp(4px,.8vh,8px)", minWidth: 0 }}>
              <span style={{ font: "var(--type-h3)", fontSize: "clamp(14px,2vh,19px)" }}>{o.t}</span>
              <span style={{ font: "var(--type-body)", fontSize: "clamp(11.5px,1.7vh,14.5px)", color: "var(--text-muted)", lineHeight: 1.4 }}>{o.b}</span>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}

function AudienceGrid() {
  return (
    <Band>
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 40, alignItems: "center" }}>
        <SectionHeading
          eyebrow="Built for speed"
          title="Your deadline drives the project."
          sub="We know your time is valuable. A missed listing, move-in, inspection, or closing can cost time, money, and opportunity. We coordinate multiple teams from different trades to maximize time efficiency. No painful waits for one contractor to finish up just to send the next one in."
        />
        <img src="/assets/photos/restroom-refresh.jpg" alt="Refreshed commercial restroom" style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block", borderRadius: "var(--radius-lg, 16px)" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20, marginTop: 36 }}>
        {AUDIENCES.map((a) => (
          <div key={a.label} style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0, padding: "18px 18px", background: "var(--white)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-lg, 16px)" }}>
            <span style={{ color: "var(--surface-brand)" }}>
              <Icon name={a.icon} size={20} />
            </span>
            <h3 style={{ margin: 0, font: "var(--type-display)", fontSize: 20, lineHeight: 1.06, letterSpacing: "var(--tracking-display)" }}>{a.label}</h3>
            <p style={{ margin: 0, font: "var(--type-body)", fontSize: 13.5, color: "var(--text-body)", lineHeight: 1.4 }}>{a.headline}</p>
          </div>
        ))}
      </div>
    </Band>
  );
}

function WorkGallery() {
  return (
    <Band tone="subtle" tight>
      <SectionHeading title="Recent work" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 24, marginTop: 32 }}>
        {WORK.slice(0, 3).map((c) => (
          <figure key={c.cap} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
            <GalleryShot shots={c.shots} />
            <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ font: "var(--type-display)", fontSize: 22, lineHeight: 1.08, letterSpacing: "var(--tracking-display)", color: "var(--text-strong)" }}>{c.cap}</span>
              <span style={{ font: "var(--type-body)", fontSize: 15, color: "var(--text-body)", lineHeight: 1.45 }}>{c.sub}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <Button variant="secondary" as="link" to="/portfolio">
          See our portfolio
        </Button>
      </div>
    </Band>
  );
}

function ProcessBand() {
  return (
    <Band>
      <SectionHeading title="The process" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0,1fr))", gap: 20, marginTop: 40 }}>
        {STEPS.map((s, i) => (
          <div key={s.t} style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0, padding: "20px 18px", background: "var(--surface-subtle)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-lg, 16px)" }}>
            <span style={{ font: "var(--type-display)", fontSize: 26, lineHeight: 1, color: "var(--surface-brand)" }}>{i + 1}</span>
            <span style={{ font: "var(--type-h3)", fontSize: 17, lineHeight: 1.2 }}>{s.t}</span>
            <span style={{ font: "var(--type-body)", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.45 }}>{s.b}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32 }}>
        <Button variant="ghost" as="link" to="/contact" iconRight={<Icon name="arrow-right" size={16} />}>
          See the full process
        </Button>
      </div>
    </Band>
  );
}

export default function Home() {
  return (
    <div>
      <Fold>
        <Hero />
        <OnesStrip />
      </Fold>
      <AudienceGrid />
      <WorkGallery />
      <ProcessBand />
      <ClosingCTA />
    </div>
  );
}
