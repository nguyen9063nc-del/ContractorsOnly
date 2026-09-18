import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import { Photo } from "~/components/Photo";
import type { ImageName } from "~/data/images.generated";

type Shot = { name: ImageName; alt: string };

/**
 * The canonical hero / closing band. Accepts one or more shots; with more than
 * one it crossfades and exposes dot controls.
 */
export function Band({
  shots,
  eyebrow,
  title,
  copy,
  actions,
  closing = false,
  trailing,
  interval = 6000,
}: {
  shots: Shot[];
  eyebrow?: string;
  /** Wrap accent words in <span className="accent">. */
  title: ReactNode;
  copy?: string;
  actions?: ReactNode;
  /** Closing bands are shorter and drop to an h2. */
  closing?: boolean;
  trailing?: ReactNode;
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  // Once the visitor picks a shot, stop advancing — auto-advancing over a
  // deliberate choice is the irritating part of carousels.
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (shots.length < 2 || paused) return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % shots.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [shots.length, paused, interval]);

  const Heading = closing ? "h2" : "h1";

  return (
    <section className={`band on-dark${closing ? " band--closing" : ""}`}>
      <div className="band__media">
        {shots.map((shot, i) => (
          <Photo
            key={shot.name}
            name={shot.name}
            alt={shot.alt}
            sizes="100vw"
            className="band__img"
            // Only the first shot is the LCP candidate.
            priority={i === 0}
            data-active={shots.length > 1 ? i === active : undefined}
          />
        ))}
      </div>
      <div className="band__scrim" />

      <div className="band__inner">
        <div className="band__content">
          {eyebrow ? <span className="eyebrow-band">{eyebrow}</span> : null}
          <Heading className={closing ? "closing-h2" : "hero-h1"}>{title}</Heading>
          {copy ? <p className="lead">{copy}</p> : null}
          {actions ? <div className="btn-row">{actions}</div> : null}
          {trailing ? <span className="eyebrow-band">{trailing}</span> : null}

          {shots.length > 1 ? (
            <div className="band__dots" role="group" aria-label="Choose a photo">
              {shots.map((shot, i) => (
                <button
                  key={shot.name}
                  type="button"
                  className="band__dot"
                  aria-current={i === active}
                  aria-label={`Show photo ${i + 1} of ${shots.length}`}
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Every CTA is "Start your project" (primary) or "See our work" (outline). */
export function BandActions({
  primary,
  secondary,
}: {
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <>
      <Link className="btn btn--primary" to={primary.to}>
        {primary.label}
      </Link>
      {secondary ? (
        <Link className="btn btn--outline-light" to={secondary.to}>
          {secondary.label}
          <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
        </Link>
      ) : null}
    </>
  );
}
