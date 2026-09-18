import { Link } from "react-router";

import { site, footerColumns } from "~/data/site";
import { logoWidth } from "~/data/logo.generated";

const LOGO_H = 64;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <address className="site-footer__brand">
            <img
              src="/logo-lockup.png"
              alt="Contractors Only"
              width={logoWidth(LOGO_H)}
              height={LOGO_H}
              loading="lazy"
              decoding="async"
            />
            <span className="item-name">{site.tagline}</span>
            <span className="caption">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </span>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>

          {footerColumns.map((col) => (
            <nav className="site-footer__col" key={col.heading} aria-label={col.heading}>
              <span className="site-footer__heading">{col.heading}</span>
              {col.links.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="site-footer__base">
          <span className="caption">
            © {__BUILD_YEAR__} {site.name}. {site.copyright}
          </span>
          <span className="caption">{site.legal}</span>
        </div>
      </div>
    </footer>
  );
}
