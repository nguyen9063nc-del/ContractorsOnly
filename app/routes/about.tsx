import type { Route } from "./+types/about";
import { Section, SectionHead } from "~/components/site/Section";
import { Band, BandActions } from "~/components/site/Band";
import { Photo, photoPreload } from "~/components/Photo";
import { Tile, PhotoSlot } from "~/components/site/Tile";
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
      <Band
        shots={[{ name: aboutHero.photo, alt: aboutHero.alt }]}
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.titleTop}
        copy={aboutHero.copy}
        actions={
          <BandActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "See our work", to: "/portfolio" }}
          />
        }
      />

      <Section>
        <SectionHead eyebrow="Who we are" title="People over projects." />
        <div className="split">
          <Photo
            name={values.photo}
            alt={values.alt}
            className="tile__media tile__media--photo"
            sizes="(max-width: 820px) 100vw, 45vw"
          />
          <div className="stack-sm">
            <p className="body">{values.body}</p>
            <p className="body">{values.pullquote}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="How we work"
          title="One crew. One point of accountability."
          copy="From the first walkthrough to the final invoice, one person owns your property."
        />
        <div className="grid grid--3 grid--gap-col">
          {culture.map((c) => (
            <Tile
              key={c.title}
              photo={c.photo}
              alt={c.alt}
              title={c.title}
              caption={c.body}
              fixedCap
              sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 33vw"
            />
          ))}
        </div>
      </Section>

      {/* Five portrait slots — no headshots supplied. */}
      <Section>
        <SectionHead eyebrow="The team" title="The people behind the work." copy={site.regions} />
        <ul className="grid grid--cards5">
          {team.map((person) => (
            <li className="tile" key={person.name}>
              <PhotoSlot need={`Portrait of ${person.name}`} />
              <div className="tile__cap">
                <span className="item-name">{person.name}</span>
                <span className="caption">{person.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <ClosingCta />
    </>
  );
}
