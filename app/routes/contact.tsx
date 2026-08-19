import { useState } from "react";
import { Form, useNavigation } from "react-router";
import type { Route } from "./+types/contact";
import { Container } from "~/components/site/Container";
import { Band } from "~/components/site/Band";
import { Card } from "~/components/core/Card";
import { Button } from "~/components/core/Button";
import { Icon } from "~/components/core/Icon";
import { Eyebrow } from "~/components/core/Eyebrow";
import { Input } from "~/components/forms/Input";
import { Select } from "~/components/forms/Select";
import { Textarea } from "~/components/forms/Textarea";
import { Radio } from "~/components/forms/Radio";
import { fieldBase } from "~/components/forms/shared";
import { AUDIENCE_DETAIL, PHONE_DISPLAY, PHONE_HREF } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Get your project started — Contractors Only" },
    { name: "description", content: "Send us the property and we'll be in touch. Painting, repairs, cleaning, landscaping, and turnovers coordinated by one point of contact." },
  ];
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  audience?: string;
  address?: string;
  details?: string;
}

// TODO: wire actual delivery — e.g. email the submission via Resend/Cloudflare Email
// Routing, or forward to a CRM/webhook. Env bindings are available on
// context.cloudflare.env once a provider is chosen. Attached files are read but not
// persisted anywhere yet (no storage backend configured).
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const audience = String(formData.get("audience") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const details = String(formData.get("details") || "").trim();

  const errors: FieldErrors = {};
  if (!name) errors.name = "Enter your name.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email.";
  if (!phone) errors.phone = "Enter a phone number.";
  if (!audience) errors.audience = "Let us know who you are.";
  if (!address) errors.address = "Enter the property address.";
  if (!details) errors.details = "Tell us a bit about the work.";

  if (Object.keys(errors).length > 0) {
    return { ok: false as const, errors };
  }

  return { ok: true as const };
}

export default function Contact({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  const [contactMethod, setContactMethod] = useState("phone");
  const submitted = actionData?.ok === true;
  const errors = actionData && !actionData.ok ? actionData.errors : undefined;

  return (
    <div>
      <section style={{ background: "var(--surface-subtle)", borderBottom: "1px solid var(--border-hairline)", padding: "56px 0 48px" }}>
        <Container>
          <Eyebrow>Get started</Eyebrow>
          <h1 style={{ font: "var(--type-display)", fontSize: "var(--text-display-md)", marginTop: 18, maxWidth: 720 }}>Send us the property.</h1>
          <p style={{ font: "var(--type-lead)", color: "var(--text-body)", marginTop: 16, maxWidth: 600 }}>
            Fill out the form and we&apos;ll be in touch — usually within one business day — to walk the property and put together a scope.
          </p>
        </Container>
      </section>

      <Band tight style={{ paddingTop: 4 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 56, alignItems: "start" }}>
          <div>
            {submitted ? (
              <Card padding="lg" style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
                <Icon name="circle-check" size={28} strokeColor="var(--success)" />
                <h2 style={{ font: "var(--type-h2)" }}>Request received.</h2>
                <p style={{ font: "var(--type-body)", color: "var(--text-body)" }}>
                  Thanks — we have your property details. A coordinator will reach out to confirm next steps, usually within one business day.
                </p>
              </Card>
            ) : (
              <Form method="post" encType="multipart/form-data" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Input name="name" label="Full name" placeholder="Jordan Reyes" error={errors?.name} required />
                  <Select
                    name="audience"
                    label="I am a..."
                    error={errors?.audience}
                    defaultValue=""
                    options={[{ value: "", label: "Select one" }, ...AUDIENCE_DETAIL.map((a) => ({ value: a.key, label: a.kicker })), { value: "other", label: "Other" }]}
                    required
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Input name="email" type="email" label="Email" placeholder="you@company.com" error={errors?.email} required />
                  <Input name="phone" type="tel" label="Phone" placeholder="(555) 555-5555" error={errors?.phone} required />
                </div>
                <Input name="address" label="Property address" placeholder="Street, city, state, ZIP" error={errors?.address} required />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Select
                    name="timeWindow"
                    label="Preferred work time window"
                    defaultValue="anytime"
                    options={[
                      { value: "anytime", label: "Anytime" },
                      { value: "morning", label: "Morning" },
                      { value: "afternoon", label: "Afternoon" },
                      { value: "evening", label: "Evening" },
                    ]}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>Preferred contact method</span>
                    <div style={{ display: "flex", gap: 20, height: "var(--control-h-md)", alignItems: "center" }}>
                      <Radio name="contactMethod" value="phone" label="Phone" checked={contactMethod === "phone"} onChange={() => setContactMethod("phone")} />
                      <Radio name="contactMethod" value="email" label="Email" checked={contactMethod === "email"} onChange={() => setContactMethod("email")} />
                    </div>
                  </div>
                </div>
                <Textarea name="details" label="Tell us about the work" placeholder="What needs to happen, and by when?" error={errors?.details} required />
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="attachments" style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>
                    Photos or files (optional)
                  </label>
                  <input id="attachments" name="attachments" type="file" multiple accept="image/*,.pdf,.doc,.docx" style={{ ...fieldBase, padding: "10px 14px", height: "var(--control-h-md)" }} />
                  <span style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Photos of the property or any relevant documents help us scope faster.</span>
                </div>
                <div>
                  <Button type="submit" size="lg" disabled={submitting}>
                    {submitting ? "Sending…" : "Submit property"}
                  </Button>
                </div>
              </Form>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingTop: 8 }}>
            <Card padding="md" tone="subtle" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>What happens next</span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {["We review your property details", "A coordinator calls or emails to confirm", "We schedule a walkthrough", "You get an organized scope and estimate"].map((item) => (
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
                The best way to get in touch is to fill out the form, but if you have any questions or concerns you can call this number.
              </p>
            </Card>
          </div>
        </div>
      </Band>
    </div>
  );
}
