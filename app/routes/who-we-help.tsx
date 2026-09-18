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
                  <span className="pcard__title">{a.label}</span>
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
          <div className="reasons">
            {reasons.map((r) => (
              <div className="reason" key={r.title}>
                <Icon name={r.icon} size={26} color="var(--brand)" />
                <span className="reason__t">{r.title}</span>
                <span className="reason__b">{r.body}</span>
              </div>
            ))}
          </div>
        </div>
      </Band>

      {/* Testimonial */}
      <Band>
        <SectionIntro eyebrow="In their words" title="One call instead of five." />
        <div className="split">
          <blockquote className="quote">
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <footer>
              <span className="quote__name">{testimonial.name}</span>
              <span className="item__d">{testimonial.role}</span>
            </footer>
          </blockquote>

          <ul className="marks">
            {marks.map((m) => (
              <li key={m.title}>
                <Icon name={m.icon} size={22} color="var(--brand)" />
                <span>{m.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <ClosingCta />
    </>
  );
}
