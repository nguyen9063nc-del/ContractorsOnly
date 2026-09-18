import { Check } from "lucide-react";

import type { Route } from "./+types/services";
import { Section, SectionHead } from "~/components/site/Section";
import { Band, BandActions } from "~/components/site/Band";
import { Photo, photoPreload } from "~/components/Photo";
import { PhotoSlot } from "~/components/site/Tile";
import { Icon } from "~/components/Icon";
import { ClosingCta } from "~/components/site/ClosingCta";
import { catalog, serviceGroups, servicesHero, servicesOutro } from "~/data/services";

const DESCRIPTION =
  "Painting, flooring, repairs, cleaning, landscaping, hauling and the licensed trades — coordinated under one scope, one schedule and one invoice.";

export function meta(_: Route.MetaArgs) {
  const title = "Services — Contractors Only";
  return [
    { title },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: title },
    { property: "og:description", content: DESCRIPTION },
  ];
}

export const links: Route.LinksFunction = () => [photoPreload(servicesHero.photo, "100vw")];

export default function Services() {
  return (
    <>
      <Band
        shots={[{ name: servicesHero.photo, alt: servicesHero.alt }]}
        eyebrow={servicesHero.eyebrow}
        title={
          <>
            {servicesHero.titleTop}
            <br />
            <span className="accent">{servicesHero.titleAccent}</span>
          </>
        }
        copy={servicesHero.copy}
        actions={
          <BandActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "See our work", to: "/portfolio" }}
          />
        }
      />

      {/* 12 service tiles, 4 x 3 */}
      <Section>
        <SectionHead
          eyebrow="Our services"
          title="Everything your property needs."
          copy="Interior, exterior, big or small — we handle it all, on one scope and one schedule."
        />
        <div className="grid grid--4 grid--gap-col">
          {catalog.map((c) => (
            <article className="tile" key={c.title}>
              <Photo
                name={c.photo}
                alt={c.alt}
                className="tile__media tile__media--wide"
                sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 25vw"
              />
              <div className="tile__cap">
                <span className="icon-head">
                  <Icon name={c.icon} size={20} />
                  <h3 className="item-name">{c.title}</h3>
                </span>
                <ul className="ticks">
                  {c.items.map((item) => (
                    <li key={item}>
                      <Check size={14} strokeWidth={2.6} aria-hidden />
                      <span className="body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Four blocks: photo strip + grouped list */}
      <Section>
        <SectionHead
          eyebrow="Things we do"
          title="One scope. One invoice."
          copy="One scope, one proposal, one invoice — no matter how many trades the job takes."
        />
        <div className="stack-blocks">
          {serviceGroups.map((group) => (
            <section className="stack-inblock" key={group.title}>
              <div className="stack-sm">
                <span className="icon-head">
                  <Icon name={group.icon} size={26} />
                  <h3 className="block-h3">{group.title}</h3>
                </span>
                <p className="body">{group.body}</p>
              </div>

              <div className="grid grid--4 grid--gap-col">
                {group.photos.map((p) => (
                  <figure className="tile" key={`${group.title}-${p.caption}`}>
                    {p.photo ? (
                      <Photo
                        name={p.photo}
                        alt={p.alt ?? p.caption}
                        className="tile__media"
                        sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 25vw"
                      />
                    ) : (
                      <PhotoSlot need={p.need ?? p.caption} />
                    )}
                    <figcaption className="tile__cap">
                      <span className="body body--muted">{p.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="items">
                {group.items.map((item) => (
                  <div className="item" key={item.title}>
                    <Check size={15} strokeWidth={2.6} aria-hidden />
                    <div>
                      <span className="item-name">{item.title}</span>
                      <span className="body">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Band
        closing
        shots={[{ name: servicesOutro.photo, alt: servicesOutro.alt }]}
        title={servicesOutro.title}
        copy={servicesOutro.copy}
      />

      <ClosingCta />
    </>
  );
}
