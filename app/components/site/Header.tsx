import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

import { nav } from "~/data/site";
import { logoWidth } from "~/data/logo.generated";

const LOGO_H = 46;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close on navigation, otherwise the panel stays open over the new page.
  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" aria-label="Contractors Only — home">
          <img
            className="site-header__logo"
            src="/logo-lockup.png"
            alt="Contractors Only"
            width={logoWidth(LOGO_H)}
            height={LOGO_H}
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        <nav className="site-nav" aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__cta">
          <Link to="/contact" className="btn btn--primary">
            Start your project
          </Link>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      {/* Kept in the DOM so the links are prerendered and the open/close state
          has something to animate. `inert` takes the collapsed panel out of the
          tab order, the a11y tree and hit testing in one attribute. */}
      <div className="nav-panel" id="mobile-nav" data-open={open} inert={!open}>
        <div className="nav-panel__inner">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary">
            Start your project
          </Link>
        </div>
      </div>
    </header>
  );
}
