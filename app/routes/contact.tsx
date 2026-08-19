import type { Route } from "./+types/contact";
import { Band } from "~/components/site/Band";
import { Card } from "~/components/core/Card";
import { Button } from "~/components/core/Button";
import { Icon } from "~/components/core/Icon";
import { ZohoContractorForm } from "~/components/site/ZohoContractorForm";
import { PHONE_DISPLAY, PHONE_HREF } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Get your project started — Contractors Only" },
    { name: "description", content: "Send us the property and we'll be in touch. Painting, repairs, cleaning, landscaping, and turnovers coordinated by one point of contact." },
  ];
}

const WHAT_WELL_ASK_FOR = ["Your contact information", "When you would like to be contacted", "Preferred work time window", "The address of the property", "Any helpful photos", "Any helpful files"];

export default function Contact() {
  return (
    <div>
      <Band tight style={{ paddingTop: 4 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 56, alignItems: "start" }}>
          <Card tone="brand" padding="md" style={{ display: "flex", flexDirection: "column" }}>
            <ZohoContractorForm />
          </Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingTop: 8 }}>
            <p style={{ margin: 0, font: "var(--type-body)", color: "var(--text-body)", lineHeight: 1.6 }}>
              We will need some basic information from you so we can get on the same page. After you fill out the form we will contact you and we can discuss next steps and get the project started.
            </p>
            <Card padding="md" tone="subtle" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>What we&apos;ll ask for</span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {WHAT_WELL_ASK_FOR.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, font: "var(--type-body)", color: "var(--text-body)" }}>
                    <Icon name="check" size={16} strokeColor="var(--brand)" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card padding="md" tone="subtle" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>Prefer to talk?</span>
                <Button variant="ghost" as="a" href={PHONE_HREF} iconLeft={<Icon name="phone" size={16} />}>
                  {PHONE_DISPLAY}
                </Button>
              </div>
              <p style={{ margin: 0, font: "var(--type-body)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.55 }}>
                The best way to get in touch is to fill out the form but if you have any questions or concerns you can call this number.
              </p>
            </Card>
          </div>
        </div>
      </Band>
    </div>
  );
}
