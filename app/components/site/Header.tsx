import { useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { Icon } from "../core/Icon";
import { Button } from "../core/Button";
import { NAV, type NavEntry } from "./nav";

function NavItem({ n, pathname }: { n: NavEntry; pathname: string }) {
  const [open, setOpen] = useState(false);
  const active = pathname === n.to || (n.children ? n.children.some((c) => pathname === c.to) || pathname.startsWith(n.to + "/") : false);
  const btnStyle: CSSProperties = {
    appearance: "none",
    background: "transparent",
    border: 0,
    cursor: "pointer",
    padding: "6px 0",
    font: "var(--type-eyebrow)",
    fontSize: 12.5,
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    color: active ? "var(--text-strong)" : "var(--text-muted)",
    whiteSpace: "nowrap",
    boxShadow: active ? "inset 0 -3px 0 var(--brand)" : "none",
    transition: "var(--transition-control)",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    textDecoration: "none",
  };

  if (!n.children) {
    return (
      <Link to={n.to} style={btnStyle}>
        {n.label}
      </Link>
    );
  }
  return (
    <div style={{ position: "relative" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link to={n.children[0].to} style={btnStyle}>
        {n.label}
        <Icon name="chevron-down" size={13} />
      </Link>
      {open ? (
        <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: 10, zIndex: 40 }}>
          <div style={{ background: "var(--surface-page)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", padding: 8, display: "flex", flexDirection: "column", minWidth: 210 }}>
            {n.children.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                onClick={() => setOpen(false)}
                style={{
                  appearance: "none",
                  background: pathname === c.to ? "var(--surface-subtle)" : "transparent",
                  border: 0,
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "10px 12px",
                  borderRadius: "var(--radius-sm, 6px)",
                  font: "var(--type-eyebrow)",
                  fontSize: 12.5,
                  letterSpacing: "var(--tracking-caps)",
                  textTransform: "uppercase",
                  color: pathname === c.to ? "var(--text-strong)" : "var(--text-muted)",
                  whiteSpace: "nowrap",
                  transition: "var(--transition-control)",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const { pathname } = useLocation();
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--surface-page)", borderBottom: "1px solid var(--border-hairline)" }}>
      <Container style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 40px", minHeight: 80, padding: "12px 32px" }}>
        <Link to="/" style={{ cursor: "pointer", border: 0, flex: "0 0 auto" }}>
          <Wordmark height={46} />
        </Link>
        <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 24px", flex: "1 1 auto" }}>
          {NAV.map((n) => (
            <NavItem key={n.to} n={n} pathname={pathname} />
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
          <Button size="sm" as="link" to="/contact">
            Get your project started
          </Button>
        </div>
      </Container>
    </header>
  );
}
