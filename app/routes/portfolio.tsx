import type { Route } from "./+types/portfolio";
import { Band, SectionIntro } from "~/components/site/Section";
import { Hero, HeroActions } from "~/components/site/Hero";
import { Photo, photoPreload } from "~/components/Photo";
import { ClosingCta } from "~/components/site/ClosingCta";
import { portfolioHero, projects } from "~/data/portfolio";

const DESCRIPTION =
  "Office suites, retail showrooms, apartment turnovers and business parks — properties turned around under one scope, one schedule and one point of contact.";

export function meta(_: Route.MetaArgs) {
  const title = "Portfolio — Contractors Only";
  return [
    { title },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: title },
    { property: "og:description", content: DESCRIPTION },
  ];
}

export const links: Route.LinksFunction = () => [photoPreload(portfolioHero.photo, "100vw")];

export default function Portfolio() {
  return (
    <>
      <Hero
        short
        shots={[{ name: portfolioHero.photo, alt: portfolioHero.alt }]}
        kicker={portfolioHero.eyebrow}
        title={
          <>
            {portfolioHero.titleTop}
            <br />
            <em>{portfolioHero.titleAccent}</em>
          </>
        }
        copy={portfolioHero.copy}
        actions={
          <HeroActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "About us", to: "/about" }}
          />
        }
      />

      <Band tight>
        <SectionIntro
          eyebrow="Recent projects"
          title="One scope. One schedule."
          copy="Each property below was handled under one scope, one schedule and one point of contact."
          cta={{ label: "Start your project", to: "/contact" }}
        />

        {projects.map((project) => (
          <section className="folio" key={project.name}>
            <div>
              <h3 className="h3">{project.name}</h3>
              <p className="lead svc__body">{project.body}</p>
            </div>

            <figure className="folio__item">
              <div className="folio__lead">
                <Photo
                  name={project.hero.photo}
                  alt={project.hero.alt}
                  fill
                  sizes="(max-width: 1100px) 100vw, 1100px"
                />
              </div>
              <figcaption className="caption">{project.hero.caption}</figcaption>
            </figure>

            <div className="folio__tiles">
              {project.tiles.map((tile) => (
                <figure className="folio__item" key={`${project.name}-${tile.caption}`}>
                  <div className="folio__media">
                    <Photo
                      name={tile.photo}
                      alt={tile.alt}
                      fill
                      sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 44vw"
                    />
                  </div>
                  <figcaption className="caption">{tile.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </Band>

      <ClosingCta />
    </>
  );
}
