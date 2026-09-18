import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import { Photo } from "~/components/Photo";
import type { ImageName } from "~/data/images.generated";

type Shot = { name: ImageName; alt: string };

/**
 * Dark photo hero. Accepts one or more shots; with more than one it crossfades
 * between them and exposes dot controls.
 */
export function Hero({
  shots,
  kicker,
  title,
  copy,
  actions,
  short = false,
  interval = 6000,
  as: Heading = "h1",
  trailing,
}: {
  shots: Shot[];
  kicker?: string;
  /** Wrap the accent words in <em> — it is restyled to brand red, not italic. */
  title: ReactNode;
  copy?: string;
  actions?: ReactNode;
  short?: boolean;
  interval?: number;
  /**
   * Heading level. The page hero is the h1; reused bands like the closing CTA
   * must drop to h2 so a page never ships two h1s.
   */
  as?: "h1" | "h2";
  /** Slot rendered after the actions — the closing band's trailing kicker. */
  trailing?: ReactNode;
}) {
  const [active, setActive] = useState(0);
  // Once the visitor picks a shot, stop advancing — auto-advancing over a
  // deliberate choice is the thing everyone finds irritating about carousels.
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (shots.length < 2 || paused) return;

    // Respect the OS reduced-motion setting: no auto-advance, no crossfade.
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (!motionOk.matches) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % shots.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [shots.length, paused, interval]);

  return (
    <section className={`hero${short ? " hero--short" : ""}`}>
      <div className="hero__media">
        {shots.map((shot, i) => (
          <Photo
            key={shot.name}
            name={shot.name}
            alt={shot.alt}
            sizes="100vw"
            // Only the first shot is the LCP candidate; the rest load lazily.
            priority={i === 0}
            fill
            data-active={shots.length > 1 ? i === active : undefined}
          />
        ))}
      </div>
      <div className="hero__scrim" />

      <div className="hero__inner">
        <div className="hero__col">
          {kicker ? <span className="hero__kicker">{kicker}</span> : null}
          <Heading className={`hero__title${Heading === "h2" ? " hero__title--closing" : ""}`}>
            {title}
          </Heading>
          {copy ? <p className="hero__copy">{copy}</p> : null}
          {actions ? <div className="hero__actions">{actions}</div> : null}
          {trailing ? <div className="hero__kicker">{trailing}</div> : null}

          {shots.length > 1 ? (
            <div className="hero__dots" role="group" aria-label="Choose a hero photo">
              {shots.map((shot, i) => (
                <button
                  key={shot.name}
                  type="button"
                  className="hero__dot"
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

/** Primary + secondary action pair used in the heroes. */
export function HeroActions({
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
        <Link className="btn btn--onDark" to={secondary.to}>
          {secondary.label}
          <ArrowRight size={16} strokeWidth={2.4} className="btn__icon" aria-hidden />
        </Link>
      ) : null}
    </>
  );
}
