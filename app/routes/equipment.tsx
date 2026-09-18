import type { Route } from "./+types/equipment";
import { Section, SectionHead } from "~/components/site/Section";
import { Band, BandActions } from "~/components/site/Band";
import { Photo, photoPreload } from "~/components/Photo";
import { PhotoSlot } from "~/components/site/Tile";
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

/** One piece of kit. Several have no supplied photograph, so those name the
 *  shot needed rather than reusing another tile's image. */
function UnitTile({ unit, sizes, square }: { unit: Unit; sizes: string; square?: boolean }) {
  return (
    <figure className="tile">
      {unit.photo ? (
        <Photo
          name={unit.photo}
          alt={unit.name}
          className={`tile__media${square ? " tile__media--square" : ""}`}
          sizes={sizes}
        />
      ) : (
        <PhotoSlot need={unit.name} />
      )}
      <figcaption className="tile__cap">
        <span className="item-name">{unit.name}</span>
        {unit.spec ? <span className="body body--muted">{unit.spec}</span> : null}
      </figcaption>
    </figure>
  );
}

export default function Equipment() {
  return (
    <>
      <Band
        shots={[{ name: equipmentHero.photo, alt: equipmentHero.alt }]}
        eyebrow={equipmentHero.eyebrow}
        title={
          <>
            {equipmentHero.titleTop}
            <br />
            <span className="accent">{equipmentHero.titleAccent}</span>
          </>
        }
        copy={equipmentHero.copy}
        actions={
          <BandActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "See our work", to: "/portfolio" }}
          />
        }
      />

      <Section>
        <SectionHead
          eyebrow="Efficiency by design"
          title="Our vehicle fleet."
          copy="How we get our people, equipment, tools and supplies to you quickly."
        />
        <div className="stack-rows">
          {fleetRows.map((row) => (
            <section className="stack-inblock" key={row.label}>
              <div className="stack-sm">
                <h3 className="block-h3">{row.label}</h3>
                <p className="body">{row.blurb}</p>
              </div>
              <div className="grid grid--4">
                {row.units.map((u) => (
                  <UnitTile
                    key={u.name}
                    unit={u}
                    sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 25vw"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Tools to get the job done"
          title="Organized and ready."
          copy="Our tools and equipment: everything in one place, organized and ready before the truck leaves."
        />
        <div className="stack-rows">
          {toolRows.map((row) => (
            <section className="stack-inblock" key={row.label}>
              <div className="stack-sm">
                <h3 className="block-h3">{row.label}</h3>
                <p className="body">{row.blurb}</p>
              </div>
              <div className="grid grid--5">
                {row.items.map((t) => (
                  <UnitTile
                    key={t.name}
                    unit={t}
                    square
                    sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 20vw"
                  />
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
