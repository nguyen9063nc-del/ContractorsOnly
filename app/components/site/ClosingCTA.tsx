import { Container } from "./Container";
import { Eyebrow } from "../core/Eyebrow";
import { Button } from "../core/Button";
import { Icon } from "../core/Icon";

export function ClosingCTA() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "14px 0 28px" }}>
      <div style={{ width: "92%", maxWidth: 1440, margin: "0 auto", background: "var(--surface-brand)", borderRadius: "var(--radius-lg, 16px)", padding: "var(--section-y) 0" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
            <Eyebrow tone="inverse">Stop managing contractors</Eyebrow>
            <h2 style={{ font: "var(--type-display)", fontSize: "var(--text-display-md)", color: "var(--white)" }}>One property. One call. Done.</h2>
            <p style={{ font: "var(--type-lead)", color: "rgba(255,255,255,.86)", maxWidth: 520 }}>
              The value isn&apos;t simply that we can paint a wall, clean a carpet, or pressure wash a driveway. It&apos;s that you don&apos;t have to find someone different every time something needs to be done.
            </p>
            <div style={{ display: "grid", gap: 10, width: "100%", maxWidth: 460 }}>
              <Button fullWidth variant="inverse" as="link" to="/contact">
                Get your project started
              </Button>
              <Button fullWidth variant="outlineInverse" as="link" to="/services" iconRight={<Icon name="arrow-right" size={16} />}>
                Learn more about what we can do
              </Button>
            </div>
          </div>
          <img
            src="/assets/photos/conference-room.jpg"
            alt="Conference room ready for business"
            style={{ width: "100%", aspectRatio: "5 / 4", objectFit: "cover", display: "block", borderRadius: "var(--radius-lg, 16px)" }}
          />
        </Container>
      </div>
    </section>
  );
}
