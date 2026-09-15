import { Link } from "react-router";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { cssVars } from "~/styles/css-vars";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS_LINE1, ADDRESS_LINE2 } from "~/data/content";

const COLS = [
  { t: "Services", items: [{ label: "Interior", to: "/services" }, { label: "Exterior", to: "/services" }, { label: "Property preparation", to: "/services" }, { label: "Cleanup & hauling", to: "/services" }] },
  { t: "Who we serve", items: [{ label: "Real estate agents", to: "/services" }, { label: "Property managers", to: "/services" }, { label: "Investors", to: "/services" }, { label: "Multifamily", to: "/services" }, { label: "REO & asset managers", to: "/services" }, { label: "Commercial", to: "/services" }] },
  { t: "Company", items: [{ label: "How it works", to: "/contact" }, { label: "Equipment", to: "/equipment" }, { label: "Portfolio", to: "/portfolio" }, { label: "About us", to: "/about" }, { label: "Contact", to: "/contact" }] },
];

export function Footer() {
  return (
    <footer style={{ background: "#f6f6f6", borderTop: "1px solid #e0e0e0", padding: "64px 0 32px", color: "#4d4d4d" }}>
      <Container>
        <div className="co-grid" style={{ ...cssVars({ "--cols": 4, "--cols-tablet": 2, "--cols-mobile": 1, "--gap-x": "40px", "--gap-y": "32px" }), paddingBottom: 40, borderBottom: "1px solid #e0e0e0" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <Wordmark height={64} />
            <p style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(17px,1.5vw,22px)", lineHeight: 1.1, letterSpacing: "-.01em", textTransform: "uppercase", color: "#1c1c1c", textAlign: "center" }}>
              One call does it all.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, textAlign: "center" }}>
              <span style={{ fontSize: 17, lineHeight: 1.5, color: "#4d4d4d" }}>
                {ADDRESS_LINE1}
                <br />
                {ADDRESS_LINE2}
              </span>
              <a href={PHONE_HREF} style={{ fontSize: 17, lineHeight: 1.5, color: "#4d4d4d", textDecoration: "none", borderBottom: 0 }}>
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} style={{ fontSize: 17, lineHeight: 1.5, color: "#4d4d4d", textDecoration: "none", borderBottom: 0, wordBreak: "break-all" }}>
                {EMAIL}
              </a>
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.t} style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: ".14em", textTransform: "uppercase", color: "#1c1c1c" }}>{c.t}</span>
              {c.items.map((i) => (
                <Link key={i.label} to={i.to} style={{ fontSize: 17, color: "#4d4d4d", textDecoration: "none", border: 0 }}>
                  {i.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, paddingTop: 22, fontSize: 17, color: "#898989" }}>
          <span>&copy; {new Date().getFullYear()} Contractors Only. Your one-stop property make-ready partner.</span>
          <span>Licensed &amp; insured &middot; Serving the metro area</span>
        </div>
      </Container>
    </footer>
  );
}
