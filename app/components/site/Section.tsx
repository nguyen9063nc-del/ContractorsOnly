import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

/** The canonical content section from the handoff README. */
export function Section({
  children,
  flushTop = false,
  id,
}: {
  children: ReactNode;
  /** Drops the top padding where the section butts against a band. */
  flushTop?: boolean;
  id?: string;
}) {
  return (
    <section className={`section${flushTop ? " section--flush-top" : ""}`} id={id}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/**
 * Section header block: eyebrow, headline, then the subline and button on one
 * row. The button aligns to the body text rather than the headline — that is
 * what `.section-head__row` is for.
 */
export function SectionHead({
  eyebrow,
  title,
  copy,
  cta,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  cta?: { label: string; to: string };
}) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-h2">{title}</h2>
      {copy || cta ? (
        <div className="section-head__row">
          {copy ? <p className="body">{copy}</p> : null}
          {cta ? (
            <Link className="btn btn--outline" to={cta.to}>
              {cta.label}
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
