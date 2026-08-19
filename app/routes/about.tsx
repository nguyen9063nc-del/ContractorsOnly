import type { Route } from "./+types/about";
import { Container } from "~/components/site/Container";
import { Band } from "~/components/site/Band";
import { PhotoSlot } from "~/components/site/PhotoSlot";
import { ClosingCTA } from "~/components/site/ClosingCTA";
import { Eyebrow } from "~/components/core/Eyebrow";
import { Icon } from "~/components/core/Icon";
import { Card } from "~/components/core/Card";
import { SectionHeading } from "~/components/core/SectionHeading";
import { VALUES } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "About us — Contractors Only" },
    { name: "description", content: "Contractors Only coordinates the trades that get properties ready — so you make one call instead of ten." },
  ];
}

export default function About() {
  return (
    <div>
      <section style={{ background: "var(--surface-subtle)", borderBottom: "1px solid var(--border-hairline)", padding: "56px 0 48px" }}>
        <Container>
          <Eyebrow>About us</Eyebrow>
          <h1 style={{ font: "var(--type-display)", fontSize: "var(--text-display-md)", marginTop: 18, maxWidth: 760 }}>One team for everything your property needs.</h1>
          <p style={{ font: "var(--type-lead)", color: "var(--text-body)", marginTop: 16, maxWidth: 620 }}>
            Contractors Only coordinates the trades that get properties ready — so you make one call instead of ten. Currently serving Seattle, Portland and Los Angeles regions.
          </p>
        </Container>
      </section>
      <Band tight>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 56, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <SectionHeading eyebrow="Our story" title="Why we exist." />
            <p style={{ font: "var(--type-body)", color: "var(--text-body)", lineHeight: 1.6, margin: 0 }}>
              Contractors Only started with a simple observation: getting a property ready for its next tenant, buyer, or inspection shouldn&apos;t mean juggling five vendors and five schedules. One coordinator, one scope, and one invoice gets the same work done with far less overhead.
            </p>
            <p style={{ font: "var(--type-body)", color: "var(--text-body)", lineHeight: 1.6, margin: 0 }}>
              We work with property managers, agents, investors, and asset managers across the metro area — vetting and coordinating the trades so the people who hire us can stay focused on the business side of the property.
            </p>
          </div>
          <PhotoSlot label="Photo — team or job site" height={340} />
        </div>
      </Band>
      <Band tone="subtle" tight>
        <SectionHeading eyebrow="What we stand for" title="How we work." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20, marginTop: 36 }}>
          {VALUES.map((v) => (
            <Card key={v.t} padding="md" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Icon name={v.icon} size={22} strokeColor="var(--brand)" />
              <h3 style={{ margin: 0, font: "var(--type-display)", fontSize: 20, lineHeight: 1.1, letterSpacing: "var(--tracking-display)" }}>{v.t}</h3>
              <p style={{ margin: 0, font: "var(--type-body)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.5 }}>{v.b}</p>
            </Card>
          ))}
        </div>
      </Band>
      <ClosingCTA />
    </div>
  );
}
