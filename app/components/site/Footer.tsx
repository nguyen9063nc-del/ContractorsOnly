import { Link } from "react-router";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { Button } from "../core/Button";
import { Icon } from "../core/Icon";

const COLS = [
  { t: "Services", items: [{ label: "Interior", to: "/services/interior" }, { label: "Exterior", to: "/services/exterior" }, { label: "Property preparation", to: "/services/property-preparation" }, { label: "Cleanup & hauling", to: "/services/property-preparation" }] },
  { t: "Who we serve", items: [{ label: "Real estate agents", to: "/who-we-serve" }, { label: "Property managers", to: "/who-we-serve" }, { label: "Investors", to: "/who-we-serve" }, { label: "Multifamily", to: "/who-we-serve" }, { label: "REO & asset managers", to: "/who-we-serve" }, { label: "Commercial", to: "/who-we-serve" }] },
  { t: "Company", items: [{ label: "How it works", to: "/contact" }, { label: "Portfolio", to: "/portfolio" }, { label: "About us", to: "/about" }, { label: "Contact", to: "/contact" }] },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--surface-subtle)", borderTop: "1px solid var(--border-hairline)", padding: "var(--section-y-tight) 0 32px" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, paddingBottom: 40, borderBottom: "1px solid var(--border-hairline)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Wordmark height={64} />
            <p style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-body)", maxWidth: 260 }}>
              One point of contact to get the entire property ready. Repairs, maintenance, make-ready, property improvements.
            </p>
            <Button variant="secondary" size="sm" iconLeft={<Icon name="phone" size={15} />} as="a" href="tel:8883785610">
              (888) 378-5610
            </Button>
          </div>
          {COLS.map((c) => (
            <div key={c.t} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-strong)" }}>{c.t}</span>
              {c.items.map((i) => (
                <Link key={i.label} to={i.to} style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-body)", border: 0 }}>
                  {i.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, paddingTop: 22, font: "var(--type-body)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
          <span>&copy; {new Date().getFullYear()} Contractors Only. Your one-stop property make-ready partner.</span>
          <span>Licensed &amp; insured &middot; Serving the metro area</span>
        </div>
      </Container>
    </footer>
  );
}
