import type { Route } from "./+types/not-found";
import { Container } from "~/components/site/Container";
import { Button } from "~/components/core/Button";
import { Eyebrow } from "~/components/core/Eyebrow";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Page not found — Contractors Only" }];
}

export default function NotFound() {
  return (
    <section style={{ padding: "96px 0", minHeight: "50vh" }}>
      <Container>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
          <Eyebrow>404</Eyebrow>
          <h1 style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", textTransform: "uppercase", color: "#1c1c1c" }}>We couldn&apos;t find that page.</h1>
          <p style={{ fontSize: 20, lineHeight: 1.45, color: "#4d4d4d", maxWidth: 520 }}>The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage or get your project started.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button as="link" to="/">
              Back to home
            </Button>
            <Button variant="secondary" as="link" to="/contact">
              Get your project started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
