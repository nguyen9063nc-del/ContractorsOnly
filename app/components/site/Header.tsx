import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

import { nav } from "~/data/site";
import { logoWidth } from "~/data/logo.generated";

const LOGO_H = 46;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the panel on navigation, otherwise it stays open over the new page.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Escape closes it, matching the behaviour of any other disclosure.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="hdr">
      <div className="shell hdr__bar">
        <Link to="/" className="hdr__logo" aria-label="Contractors Only — home">
          <img
            src="/logo-lockup.png"
            alt="Contractors Only"
            width={logoWidth(LOGO_H)}
            height={LOGO_H}
            // The logo is in the first viewport on every page, so it must not
            // be lazy — that would delay the most recognisable element.
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        <nav className="hdr__nav" aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className="hdr__link" end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hdr__cta">
          <Link to="/contact" className="btn btn--primary btn--sm">
            Start your project
          </Link>
        </div>

        <button
          type="button"
          className="hdr__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      {/* Kept in the DOM rather than conditionally rendered, so the links are in
          the prerendered HTML and the open/close state has something to animate.
          The collapse is CSS-only (grid-template-rows 0fr → 1fr), which avoids
          measuring scrollHeight during render and needs no fixed height. */}
      {/* `inert` takes the collapsed panel out of the tab order, the a11y tree
          and hit testing in one attribute — clipped-but-present links would
          otherwise still be announced and clickable. */}
      <div className="hdr__panel" id="mobile-nav" data-open={open} inert={!open}>
        <div className="shell hdr__panelInner">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="hdr__panelLink"
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary hdr__panelCta">
            Start your project
          </Link>
        </div>
      </div>
    </header>
  );
}
