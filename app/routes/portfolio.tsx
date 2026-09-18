import type { Route } from "./+types/portfolio";
import { Section, SectionHead } from "~/components/site/Section";
import { Band, BandActions } from "~/components/site/Band";
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
      <Band
        shots={[{ name: portfolioHero.photo, alt: portfolioHero.alt }]}
        eyebrow={portfolioHero.eyebrow}
        title={
          <>
            {portfolioHero.titleTop}
            <br />
            <span className="accent">{portfolioHero.titleAccent}</span>
          </>
        }
        copy={portfolioHero.copy}
        actions={
          <BandActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "About us", to: "/about" }}
          />
        }
      />

      {/* Each property: a lead photo then a 2 x 2 grid. */}
      <Section>
        <SectionHead
          eyebrow="Recent projects"
          title="One scope. One schedule."
          copy="Each property below was handled under one scope, one schedule and one point of contact."
        />
        <div className="stack-blocks">
          {projects.map((project) => (
            <section className="stack-inblock" key={project.name}>
              <div className="stack-sm">
                <h3 className="block-h3">{project.name}</h3>
                <p className="body">{project.body}</p>
              </div>

              <figure className="tile">
                <Photo
                  name={project.hero.photo}
                  alt={project.hero.alt}
                  className="tile__media tile__media--wide"
                  sizes="(max-width: 1100px) 100vw, 1100px"
                />
                <figcaption className="tile__cap">
                  <span className="caption">{project.hero.caption}</span>
                </figcaption>
              </figure>

              <div className="folio__tiles">
                {project.tiles.map((tile) => (
                  <figure className="tile" key={`${project.name}-${tile.caption}`}>
                    <Photo
                      name={tile.photo}
                      alt={tile.alt}
                      className="tile__media"
                      sizes="(max-width: 520px) 100vw, (max-width: 1100px) 50vw, 44vw"
                    />
                    <figcaption className="tile__cap">
                      <span className="caption">{tile.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
