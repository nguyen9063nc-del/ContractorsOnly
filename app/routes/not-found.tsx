import type { Route } from "./+types/not-found";
import { Container } from "~/components/site/Container";
import { Button } from "~/components/core/Button";
import { Eyebrow } from "~/components/core/Eyebrow";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Page not found — Contractors Only" }];
}

export default function NotFound() {
  return (
    <section style={{ padding: "var(--section-y) 0", minHeight: "50vh" }}>
      <Container style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
        <Eyebrow>404</Eyebrow>
        <h1 style={{ font: "var(--type-display)", fontSize: "var(--text-display-md)" }}>We couldn&apos;t find that page.</h1>
        <p style={{ font: "var(--type-lead)", color: "var(--text-body)", maxWidth: 520 }}>
          The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage or get your project started.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <Button as="link" to="/">
            Back to home
          </Button>
          <Button variant="secondary" as="link" to="/contact">
            Get your project started
          </Button>
        </div>
      </Container>
    </section>
  );
}
