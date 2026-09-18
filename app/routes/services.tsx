import { Check } from "lucide-react";

import type { Route } from "./+types/services";
import { Band, SectionIntro } from "~/components/site/Section";
import { Hero, HeroActions } from "~/components/site/Hero";
import { Photo, photoPreload } from "~/components/Photo";
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
      <Hero
        short
        shots={[{ name: servicesHero.photo, alt: servicesHero.alt }]}
        kicker={servicesHero.eyebrow}
        title={
          <>
            {servicesHero.titleTop}
            <br />
            <em>{servicesHero.titleAccent}</em>
          </>
        }
        copy={servicesHero.copy}
        actions={
          <HeroActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "See our work", to: "/portfolio" }}
          />
        }
      />

      {/* Catalog */}
      <Band tight>
        <SectionIntro
          eyebrow="Our services"
          title="Everything your property needs."
          copy="Interior, exterior, big or small — we handle it all, on one scope and one schedule."
          cta={{ label: "Start your project", to: "/contact" }}
        />
        <div className="grid grid--3">
          {catalog.map((c) => (
            <article className="cat" key={c.title}>
              <div className="cat__media">
                <Photo
                  name={c.photo}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </div>
              <div className="cat__body">
                <div className="cat__head">
                  <Icon name={c.icon} size={20} color="var(--brand)" />
                  <h3 className="cat__title">{c.title}</h3>
                </div>
                <ul className="ticks">
                  {c.items.map((item) => (
                    <li key={item}>
                      <Check size={14} strokeWidth={2.6} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Band>

      {/* Detailed groups */}
      <Band tone="subtle">
        <SectionIntro
          eyebrow="Things we do"
          title="One scope. One invoice."
          copy="One scope, one proposal, one invoice — no matter how many trades the job takes."
          cta={{ label: "See our work", to: "/portfolio" }}
        />
        {serviceGroups.map((group) => (
          <section className="svc" key={group.title}>
            <div>
              <div className="svc__head">
                <Icon name={group.icon} size={26} color="var(--brand)" />
                <h3 className="h3">{group.title}</h3>
              </div>
              <p className="lead svc__body" style={{ marginTop: 12 }}>
                {group.body}
              </p>
            </div>

            <div className="strip">
              {group.photos.map((p) => (
                <figure key={`${group.title}-${p.photo}-${p.caption}`}>
                  <div className="strip__media">
                    <Photo
                      name={p.photo}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 900px) 50vw, 22vw"
                    />
                  </div>
                  <figcaption>{p.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className="items">
              {group.items.map((item) => (
                <div className="item" key={item.title}>
                  <Check size={15} strokeWidth={2.6} aria-hidden />
                  <div>
                    <span className="item__t">{item.title}</span>
                    <span className="item__d">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </Band>

      {/* "Don't see it listed?" */}
      <Hero
        short
        as="h2"
        shots={[{ name: servicesOutro.photo, alt: servicesOutro.alt }]}
        title={servicesOutro.title}
        copy={servicesOutro.copy}
        actions={<HeroActions primary={{ label: "Start your project", to: "/contact" }} />}
      />

      <ClosingCta />
    </>
  );
}
