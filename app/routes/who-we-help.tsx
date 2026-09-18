import { Link } from "react-router";

import type { Route } from "./+types/who-we-help";
import { Band, SectionIntro } from "~/components/site/Section";
import { Hero, HeroActions } from "~/components/site/Hero";
import { Photo, photoPreload } from "~/components/Photo";
import { Icon } from "~/components/Icon";
import { ClosingCta } from "~/components/site/ClosingCta";
import {
  audiences,
  marks,
  reasons,
  reasonsPhoto,
  testimonial,
  whoHero,
} from "~/data/who-we-help";

const DESCRIPTION =
  "Agents, investors, property managers, commercial owners, REO teams and homeowners — one team that prepares, improves and maintains the property.";

export function meta(_: Route.MetaArgs) {
  const title = "Who we help — Contractors Only";
  return [
    { title },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: title },
    { property: "og:description", content: DESCRIPTION },
  ];
}

export const links: Route.LinksFunction = () => [photoPreload(whoHero.photo, "100vw")];

export default function WhoWeHelp() {
  return (
    <>
      <Hero
        short
        shots={[{ name: whoHero.photo, alt: whoHero.alt }]}
        kicker={whoHero.eyebrow}
        title={
          <>
            {whoHero.titleTop}
            <br />
            <em>{whoHero.titleAccent}</em>
          </>
        }
        copy={whoHero.copy}
        actions={
          <HeroActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "See our work", to: "/portfolio" }}
          />
        }
      />

      {/* Six audiences */}
      <Band tight>
        <SectionIntro
          eyebrow="Our clients"
          title="Real people. Real properties. Real results."
          copy="We understand your goals, your timelines and what is at stake. Here is how we help each of them."
          cta={{ label: "See what we can do", to: "/services" }}
        />
        <div className="grid grid--3">
          {audiences.map((a) => (
            <Link to="/services" className="pcard" key={a.label}>
              <div className="pcard__media pcard__media--landscape">
                <Photo
                  name={a.photo}
                  alt={a.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </div>
              <div className="pcard__body">
                <span
                  className="cat__head"
                  style={{ marginBottom: 2 }}
                >
                  <Icon name={a.icon} size={22} color="var(--brand)" />
                  <span className="pcard__title pcard__title--lg">{a.label}</span>
                </span>
                <span className="pcard__sub pcard__sub--body">{a.body}</span>
              </div>
            </Link>
          ))}
        </div>
      </Band>

      {/* Why clients work with us */}
      <Band tone="subtle">
        <SectionIntro
          eyebrow="Why our clients work with us"
          title="More than a contractor — a partner."
        />
        <div className="split">
          <div className="split__media">
            <Photo
              name={reasonsPhoto.photo}
              alt={reasonsPhoto.alt}
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
          <div className="split__copy">
            {reasons.map((r) => (
              <div key={r.title} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <Icon name={r.icon} size={28} color="var(--brand)" />
                <span className="aud__t">{r.title}</span>
                <span className="muted" style={{ fontSize: "var(--fs-small)", lineHeight: 1.5 }}>
                  {r.body}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Band>

      {/* Testimonial */}
      <Band>
        <SectionIntro eyebrow="In their words" title="One call instead of five." />
        <div className="split">
          <blockquote
            style={{
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 20,
              padding: "28px 30px",
              background: "var(--surface-subtle)",
              borderLeft: "var(--border-width-accent) solid var(--brand)",
              borderRadius: "var(--radius-sm)",
            }}
          >
            <p className="lead" style={{ fontSize: "var(--fs-h3)", lineHeight: 1.45 }}>
              {testimonial.quote}
            </p>
            <footer style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span className="item__t">{testimonial.name}</span>
              <span className="item__d">{testimonial.role}</span>
            </footer>
          </blockquote>

          <ul
            className="stats"
            style={{ listStyle: "none", margin: 0, padding: 0, gap: 24 }}
          >
            {marks.map((m) => (
              <li
                key={m.title}
                style={{ display: "flex", alignItems: "center", gap: 11 }}
              >
                <Icon name={m.icon} size={22} color="var(--brand)" />
                <span className="item__t">{m.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <ClosingCta />
    </>
  );
}
