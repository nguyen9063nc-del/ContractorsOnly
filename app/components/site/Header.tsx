import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { Icon } from "../core/Icon";
import { Button } from "../core/Button";
import { NAV } from "./nav";

export function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkStyle = (active: boolean) => ({
    color: active ? "#1c1c1c" : "#898989",
    textDecoration: "none",
    padding: "4px 0",
    whiteSpace: "nowrap" as const,
    borderBottom: 0,
    fontFamily: "Archivo, Arial, sans-serif",
    fontWeight: 700,
    letterSpacing: ".06em",
    textTransform: "uppercase" as const,
    fontSize: "clamp(11.5px, 1.3vw, 15px)",
    boxShadow: active ? "inset 0 -3px 0 var(--brand)" : "none",
  });

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "#fff", borderBottom: "1px solid #e0e0e0" }}>
      <Container>
        <div style={{ minHeight: 64, display: "flex", alignItems: "center", gap: 20, padding: "8px 0" }}>
          <div style={{ flex: "1 1 0", display: "flex", minWidth: 0 }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", flex: "0 0 auto", textDecoration: "none", borderBottom: 0 }}>
              <Wordmark height={40} />
            </Link>
          </div>
          <nav className="co-nav-links" style={{ justifyContent: "center", gap: "clamp(12px,2.2vw,32px)", flex: "0 0 auto" }}>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} style={linkStyle(pathname === n.to)}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div style={{ flex: "1 1 0", display: "flex", alignItems: "center", justifyContent: "flex-end", minWidth: 0 }}>
            <div className="co-header-cta">
              <Button size="sm" as="link" to="/contact">
                Get your project started
              </Button>
            </div>
            <button
              className="co-nav-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              style={{ alignItems: "center", justifyContent: "center", width: 44, height: 44, border: "1px solid #e0e0e0", borderRadius: 4, background: "#fff", cursor: "pointer", flex: "0 0 auto" }}
            >
              <Icon name={open ? "x" : "menu"} size={22} strokeColor="#1c1c1c" />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="co-mobile-panel" style={{ flexDirection: "column", borderTop: "1px solid #e0e0e0", background: "#fff" }}>
          <Container>
            <nav style={{ display: "flex", flexDirection: "column", padding: "8px 0" }}>
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  style={{
                    padding: "16px 4px",
                    borderBottom: "1px solid #ededed",
                    color: pathname === n.to ? "#1c1c1c" : "#4d4d4d",
                    textDecoration: "none",
                    fontFamily: "Archivo, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    letterSpacing: ".02em",
                    textTransform: "uppercase",
                  }}
                >
                  {n.label}
                </Link>
              ))}
              <div style={{ padding: "18px 4px" }}>
                <Button as="link" to="/contact" fullWidth>
                  Get your project started
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
