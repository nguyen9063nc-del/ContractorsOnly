import type { Route } from "./+types/services";
import { Container } from "~/components/site/Container";
import { Band } from "~/components/site/Band";
import { Card } from "~/components/core/Card";
import { Eyebrow } from "~/components/core/Eyebrow";
import { Icon } from "~/components/core/Icon";
import { Tabs } from "~/components/navigation/Tabs";
import { useNavigate } from "react-router";
import { SERVICES } from "~/data/content";

export function loader({ params }: Route.LoaderArgs) {
  const category = SERVICES.find((s) => s.slug === params.category) ?? SERVICES[0];
  return { category };
}

export function meta({ data }: Route.MetaArgs) {
  const title = data ? `${data.category.title} services — Contractors Only` : "Services — Contractors Only";
  return [
    { title },
    { name: "description", content: data?.category.intro ?? "Interior, exterior, and property-preparation services coordinated by one point of contact." },
  ];
}

export default function Services({ loaderData }: Route.ComponentProps) {
  const { category } = loaderData;
  const navigate = useNavigate();

  return (
    <div>
      <section style={{ background: "var(--surface-subtle)", borderBottom: "1px solid var(--border-hairline)", padding: "56px 0 0" }}>
        <Container>
          <Eyebrow>Services</Eyebrow>
          <h1 style={{ font: "var(--type-display)", fontSize: "var(--text-display-md)", marginTop: 18, maxWidth: 720 }}>{category.title}</h1>
          <p style={{ font: "var(--type-lead)", color: "var(--text-body)", marginTop: 16, maxWidth: 600 }}>{category.intro}</p>
          <div style={{ marginTop: 32 }}>
            <Tabs
              items={SERVICES.map((s) => ({ value: s.slug, label: s.title }))}
              value={category.slug}
              onChange={(v) => navigate(`/services/${v}`)}
            />
          </div>
        </Container>
      </section>
      <Band tight>
        <div style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 56, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Icon name={category.icon} size={26} strokeColor="var(--brand)" />
            <h2 style={{ margin: 0, font: "var(--type-display)", fontSize: 26, lineHeight: 1.08, letterSpacing: "var(--tracking-display)" }}>What&apos;s included</h2>
            <p style={{ margin: 0, font: "var(--type-body)", color: "var(--text-body)", lineHeight: 1.6 }}>
              Every service is coordinated by one point of contact and billed on one invoice — whether the job needs one trade or all of them.
            </p>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {category.items.map((i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, font: "var(--type-body)", color: "var(--text-body)", paddingBottom: 12, borderBottom: "1px solid var(--border-hairline)" }}>
                <Icon name="check" size={16} strokeColor="var(--brand)" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Band>
      <Band tone="subtle" tight>
        <Card padding="lg" style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 760 }}>
          <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>Don&apos;t see it listed?</span>
          <p style={{ margin: 0, font: "var(--type-body)", color: "var(--text-body)", lineHeight: 1.6 }}>
            This list covers the most common work, not everything we can do. If a property needs something you don&apos;t see here, ask — if we can&apos;t do it ourselves, we&apos;ll usually know who can and coordinate it as part of the same scope.
          </p>
        </Card>
      </Band>
    </div>
  );
}
