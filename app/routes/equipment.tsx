import type { Route } from "./+types/equipment";
import { Band, SectionIntro } from "~/components/site/Section";
import { Hero, HeroActions } from "~/components/site/Hero";
import { Photo, photoPreload } from "~/components/Photo";
import { ClosingCta } from "~/components/site/ClosingCta";
import { equipmentHero, fleetRows, toolRows, type Unit } from "~/data/equipment";

const DESCRIPTION =
  "Trucks, vans, trailers and tools owned in house — crews arrive loaded and start the hour they get there, with no rental counters or day-rate surprises.";

export function meta(_: Route.MetaArgs) {
  const title = "Equipment — Contractors Only";
  return [
    { title },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: title },
    { property: "og:description", content: DESCRIPTION },
  ];
}

export const links: Route.LinksFunction = () => [photoPreload(equipmentHero.photo, "100vw")];

const UNIT_SIZES = "(max-width: 560px) 50vw, (max-width: 1000px) 33vw, 22vw";

/**
 * One piece of kit. Several units have no supplied photograph, so those render
 * as a labelled panel — the design's "Photo needed" tile is an authoring note,
 * not something to ship.
 */
function UnitTile({ unit }: { unit: Unit }) {
  return (
    <figure className="strip__fig">
      <div className="strip__media">
        {unit.photo ? (
          <Photo name={unit.photo} alt={unit.name} fill sizes={UNIT_SIZES} />
        ) : (
          <div className="slot">
            <span>{unit.name}</span>
          </div>
        )}
      </div>
      <figcaption>
        <span className="item__t">{unit.name}</span>
        {unit.spec ? <span className="item__d">{unit.spec}</span> : null}
      </figcaption>
    </figure>
  );
}

export default function Equipment() {
  return (
    <>
      <Hero
        short
        shots={[{ name: equipmentHero.photo, alt: equipmentHero.alt }]}
        kicker={equipmentHero.eyebrow}
        title={
          <>
            {equipmentHero.titleTop}
            <br />
            <em>{equipmentHero.titleAccent}</em>
          </>
        }
        copy={equipmentHero.copy}
        actions={
          <HeroActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "See our work", to: "/portfolio" }}
          />
        }
      />

      <Band tight>
        <SectionIntro
          eyebrow="Efficiency by design"
          title="Our vehicle fleet."
          copy="How we get our people, equipment, tools and supplies to you quickly."
        />
        {fleetRows.map((row) => (
          <section className="svc" key={row.label}>
            <div>
              <h3 className="h3">{row.label}</h3>
              <p className="lead svc__body" style={{ marginTop: 10 }}>
                {row.blurb}
              </p>
            </div>
            <div className="strip">
              {row.units.map((u) => (
                <UnitTile key={u.name} unit={u} />
              ))}
            </div>
          </section>
        ))}
      </Band>

      <Band tone="subtle">
        <SectionIntro
          eyebrow="Tools to get the job done"
          title="Organized and ready."
          copy="Our tools and equipment: everything in one place, organized and ready before the truck leaves."
        />
        {toolRows.map((row) => (
          <section className="svc" key={row.label}>
            <div>
              <h3 className="h3">{row.label}</h3>
              <p className="lead svc__body" style={{ marginTop: 10 }}>
                {row.blurb}
              </p>
            </div>
            <div className="strip strip--5">
              {row.items.map((t) => (
                <UnitTile key={t.name} unit={t} />
              ))}
            </div>
          </section>
        ))}
      </Band>

      <ClosingCta />
    </>
  );
}
