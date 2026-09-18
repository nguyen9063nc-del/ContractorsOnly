import { Link } from "react-router";

import type { Route } from "./+types/who-we-help";
import { Section, SectionHead } from "~/components/site/Section";
import { Band, BandActions } from "~/components/site/Band";
import { Photo, photoPreload } from "~/components/Photo";
import { Icon } from "~/components/Icon";
import { ClosingCta } from "~/components/site/ClosingCta";
import { audiences, marks, reasons, reasonsPhoto, testimonial, whoHero } from "~/data/who-we-help";

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
      <Band
        shots={[{ name: whoHero.photo, alt: whoHero.alt }]}
        eyebrow={whoHero.eyebrow}
        title={
          <>
            {whoHero.titleTop}
            <br />
            <span className="accent">{whoHero.titleAccent}</span>
          </>
        }
        copy={whoHero.copy}
        actions={
          <BandActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "See our work", to: "/portfolio" }}
          />
        }
      />

      {/* Six audience cards, in the locked 3 x 2 card grid. */}
      <Section>
        <SectionHead
          eyebrow="Our clients"
          title="Real people. Real properties. Real results."
          copy="We understand your goals, your timelines and what is at stake. Here is how we help each of them."
        />
        <div className="grid grid--cards3">
          {audiences.map((a) => (
            <Link to="/services" className="tile" key={a.label}>
              <Photo
                name={a.photo}
                alt={a.alt}
                className="tile__media"
                sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 33vw"
              />
              <div className="tile__cap">
                <span className="icon-head">
                  <Icon name={a.icon} size={22} />
                  <span className="item-name">{a.label}</span>
                </span>
                <span className="body">{a.body}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Photo beside a 2 x 2 of reasons. */}
      <Section>
        <SectionHead
          eyebrow="Why our clients work with us"
          title="More than a contractor — a partner."
        />
        <div className="split">
          <Photo
            name={reasonsPhoto.photo}
            alt={reasonsPhoto.alt}
            className="tile__media tile__media--photo"
            sizes="(max-width: 820px) 100vw, 45vw"
          />
          <div className="grid grid--2 grid--gap-col">
            {reasons.map((r) => (
              <div className="stack-sm" key={r.title}>
                <Icon name={r.icon} size={26} />
                <span className="item-name">{r.title}</span>
                <span className="body">{r.body}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial + trust marks. No panel, no rule. */}
      <Section>
        <SectionHead eyebrow="In their words" title="One call instead of five." />
        <div className="split testimonial-split">
          <blockquote className="stack-sm">
            <p className="quote">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="tile__cap">
              <span className="item-name">{testimonial.name}</span>
              <span className="caption">{testimonial.role}</span>
            </footer>
          </blockquote>

          <ul className="marks">
            {marks.map((m) => (
              <li key={m.title}>
                <Icon name={m.icon} size={22} />
                <span className="title-body">{m.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
