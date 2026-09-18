import { Link } from "react-router";

import { nav } from "~/data/site";

export function NotFound() {
  return (
    <section className="band">
      <div className="wrap band__inner">
        <p className="eyebrow">404</p>
        <h1 className="h2" style={{ marginBlock: "16px 20px" }}>
          That page doesn't exist.
        </h1>
        <p className="lead" style={{ maxWidth: 560 }}>
          The address may be mistyped, or the page may have moved. Here's everything else:
        </p>
        <nav
          aria-label="All pages"
          style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}
        >
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="btn btn--outline btn--sm">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
