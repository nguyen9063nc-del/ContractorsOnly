import { Link } from "react-router";

import { nav } from "~/data/site";

export function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">404</span>
          <h1 className="section-h2">That page does not exist.</h1>
          <div className="section-head__row">
            <p className="body">
              The address may be mistyped, or the page may have moved. Here is everything else:
            </p>
          </div>
        </div>
        <nav className="btn-row" aria-label="All pages">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="btn btn--outline">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
