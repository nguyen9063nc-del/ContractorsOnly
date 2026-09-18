import { Link } from "react-router";

import { site, footerColumns } from "~/data/site";
import { logoWidth } from "~/data/logo.generated";

const LOGO_H = 64;

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div className="ftr__brand">
            <img
              src="/logo-lockup.png"
              alt="Contractors Only"
              width={logoWidth(LOGO_H)}
              height={LOGO_H}
              loading="lazy"
              decoding="async"
            />
            <p className="ftr__tagline">{site.tagline}</p>
            <address className="ftr__contact" style={{ fontStyle: "normal" }}>
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>

          {footerColumns.map((col) => (
            <nav className="ftr__col" key={col.heading} aria-label={col.heading}>
              <span className="ftr__heading">{col.heading}</span>
              {col.links.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="ftr__base">
          <span>
            © {__BUILD_YEAR__} {site.name}. {site.copyright}
          </span>
          <span>{site.legal}</span>
        </div>
      </div>
    </footer>
  );
}
