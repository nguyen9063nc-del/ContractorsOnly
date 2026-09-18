import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

/** Full-bleed band wrapping a centred content column. */
export function Band({
  children,
  tone = "white",
  tight = false,
  id,
}: {
  children: ReactNode;
  tone?: "white" | "subtle" | "muted";
  tight?: boolean;
  id?: string;
}) {
  const toneClass = tone === "white" ? "band" : `band band--${tone}`;
  return (
    <section className={toneClass} id={id}>
      <div className={`wrap band__inner${tight ? " band__inner--tight" : ""}`}>{children}</div>
    </section>
  );
}

/**
 * The eyebrow / headline / paragraph-with-CTA opener that repeats on every
 * content band in the design.
 */
export function SectionIntro({
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
    <div className="intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2">{title}</h2>
      {copy || cta ? (
        <div className="intro__row">
          {copy ? <p className="lead">{copy}</p> : null}
          {cta ? (
            <Link className="btn btn--outline" to={cta.to}>
              {cta.label}
              <ArrowRight size={16} strokeWidth={2.4} className="btn__icon" aria-hidden />
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
