import { useState } from "react";
import type { Route } from "./+types/who-we-serve";
import { Container } from "~/components/site/Container";
import { Band } from "~/components/site/Band";
import { PhotoSlot } from "~/components/site/PhotoSlot";
import { ClosingCTA } from "~/components/site/ClosingCTA";
import { Eyebrow } from "~/components/core/Eyebrow";
import { Icon } from "~/components/core/Icon";
import { Tag } from "~/components/core/Tag";
import { Button } from "~/components/core/Button";
import { Card } from "~/components/core/Card";
import { SectionHeading } from "~/components/core/SectionHeading";
import { Tabs } from "~/components/navigation/Tabs";
import { Accordion } from "~/components/navigation/Accordion";
import { AUDIENCE_DETAIL, AUDIENCE_FAQ, PHONE_DISPLAY, PHONE_HREF } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Who we serve — Contractors Only" },
    { name: "description", content: "You manage the property. We manage the work — for property managers, agents, investors, REO and asset managers, and commercial property managers." },
  ];
}

export default function WhoWeServe() {
  const [who, setWho] = useState(AUDIENCE_DETAIL[0].key);
  const d = AUDIENCE_DETAIL.find((x) => x.key === who) ?? AUDIENCE_DETAIL[0];

  return (
    <div>
      <section style={{ background: "var(--surface-subtle)", borderBottom: "1px solid var(--border-hairline)", paddingTop: 56 }}>
        <Container>
          <Eyebrow>Who we work with</Eyebrow>
          <h1 style={{ font: "var(--type-display)", fontSize: "var(--text-display-md)", marginTop: 18, maxWidth: 720 }}>You manage the property. We manage the work.</h1>
          <div style={{ marginTop: 40 }}>
            <Tabs items={AUDIENCE_DETAIL.map((k) => ({ value: k.key, label: k.kicker }))} value={who} onChange={setWho} style={{ flexWrap: "wrap", overflowX: "visible", rowGap: 14 }} />
          </div>
        </Container>
      </section>

      <Band tight>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 56, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name={d.icon} size={22} strokeColor="var(--brand)" />
              <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>{d.kicker}</span>
            </div>
            <h2 style={{ font: "var(--type-h1)", maxWidth: 560 }}>{d.headline}</h2>
            <p style={{ font: "var(--type-lead)", color: "var(--text-body)", maxWidth: 560 }}>{d.lead}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {d.services.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, paddingTop: 6 }}>
              <Button size="lg" as="link" to="/contact">
                {d.cta}
              </Button>
              <Button size="lg" variant="ghost" as="a" href={PHONE_HREF} iconLeft={<Icon name="phone" size={16} />}>
                {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <PhotoSlot label={"Photo — " + d.kicker.toLowerCase()} height={260} />
            <Card padding="md" tone="subtle" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>Typical turnaround</span>
              <div style={{ display: "flex", gap: 26 }}>
                {[
                  ["Walkthrough", "24-48 hrs"],
                  ["Scope + estimate", "2 days"],
                  ["Standard unit turn", "5-7 days"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ font: "var(--type-mono)", color: "var(--brand)" }}>{v}</span>
                    <span style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{k}</span>
                  </div>
                ))}
              </div>
              <span style={{ font: "var(--type-body)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Estimated figures — actual timelines vary by scope.</span>
            </Card>
          </div>
        </div>
      </Band>

      <Band tone="subtle" tight>
        <div style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 56 }}>
          <SectionHeading eyebrow="Questions" title="What working with us looks like." />
          <Accordion items={AUDIENCE_FAQ} />
        </div>
      </Band>

      <ClosingCTA />
    </div>
  );
}
