import type { Route } from "./+types/about";
import { Band, SectionIntro } from "~/components/site/Section";
import { Hero, HeroActions } from "~/components/site/Hero";
import { Photo, photoPreload } from "~/components/Photo";
import { PhotoCard } from "~/components/site/PhotoCard";
import { ClosingCta } from "~/components/site/ClosingCta";
import { site } from "~/data/site";
import { aboutHero, culture, team, values } from "~/data/about";

const DESCRIPTION =
  "Contractors Only coordinates the trades that get properties ready — one call instead of ten, serving the Seattle, Portland and Los Angeles regions.";

export function meta(_: Route.MetaArgs) {
  const title = "About us — Contractors Only";
  return [
    { title },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: title },
    { property: "og:description", content: DESCRIPTION },
  ];
}

export const links: Route.LinksFunction = () => [photoPreload(aboutHero.photo, "100vw")];

export default function About() {
  return (
    <>
      <Hero
        short
        shots={[{ name: aboutHero.photo, alt: aboutHero.alt }]}
        kicker={aboutHero.eyebrow}
        title={
          <>
            {aboutHero.titleTop}
            <br />
            <em>{aboutHero.titleAccent}</em>
          </>
        }
        copy={aboutHero.copy}
        actions={
          <HeroActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "See our work", to: "/portfolio" }}
          />
        }
      />

      {/* Who we are */}
      <Band tight>
        <SectionIntro eyebrow="Who we are" title="People over projects." />
        <div className="split">
          <div className="split__media">
            <Photo
              name={values.photo}
              alt={values.alt}
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
          <div className="split__copy">
            <p className="lead">{values.body}</p>
            <p className="lead">{values.pullquote}</p>
          </div>
        </div>
      </Band>

      {/* Culture */}
      <Band tone="subtle">
        <SectionIntro
          eyebrow="How we work"
          title="One crew. One point of accountability."
          copy="From the first walkthrough to the final invoice, one person owns your property."
          cta={{ label: "See our services", to: "/services" }}
        />
        <div className="grid grid--3">
          {culture.map((c) => (
            <PhotoCard
              key={c.title}
              photo={c.photo}
              alt={c.alt}
              title={c.title}
              sub={c.body}
              subTone="body"
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
          ))}
        </div>
      </Band>

      {/* Team */}
      <Band>
        <SectionIntro
          eyebrow="The team"
          title="The people behind the work."
          copy={site.regions}
        />
        <ul className="stats" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {team.map((person) => (
            <li key={person.name} className="aud" style={{ gap: 4 }}>
              <span className="aud__t">{person.name}</span>
              <span className="item__d">{person.role}</span>
            </li>
          ))}
        </ul>
      </Band>

      <ClosingCta />
    </>
  );
}
