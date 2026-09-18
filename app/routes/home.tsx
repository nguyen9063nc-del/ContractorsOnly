import { Clock, Phone, Truck, Wrench } from "lucide-react";
import type { ComponentType } from "react";

import type { Route } from "./+types/home";
import { Section, SectionHead } from "~/components/site/Section";
import { Band, BandActions } from "~/components/site/Band";
import { Tile } from "~/components/site/Tile";
import { Sequence } from "~/components/site/Sequence";
import { WorkTile } from "~/components/site/WorkTile";
import { ClosingCta } from "~/components/site/ClosingCta";
import { photoPreload } from "~/components/Photo";
import { site } from "~/data/site";
import {
  capabilities,
  fleet,
  hero,
  heroShots,
  ones,
  recentWork,
  serve,
  steps,
} from "~/data/home";

// Icons are imported as components rather than fetched by name at runtime, so
// they tree-shake and inline with no third-party request.
const ICONS: Record<(typeof ones)[number]["icon"], ComponentType<{ size?: number }>> = {
  phone: Phone,
  wrench: Wrench,
  truck: Truck,
  clock: Clock,
};

export function meta(_: Route.MetaArgs) {
  const title = `${site.name} — ${site.tagline}`;
  return [
    { title },
    { name: "description", content: site.description },
    { property: "og:title", content: title },
    { property: "og:description", content: site.description },
    { property: "og:type", content: "website" },
  ];
}

export const links: Route.LinksFunction = () => [photoPreload(heroShots[0]!.name, "100vw")];

export default function Home() {
  return (
    <>
      <Band
        shots={heroShots}
        eyebrow={hero.kicker}
        title={
          <>
            {hero.titleTop}
            <br />
            <span className="accent">{hero.titleAccent}</span>
          </>
        }
        copy={hero.copy}
        actions={
          <BandActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "See our work", to: "/portfolio" }}
          />
        }
      />

      <section className="strip">
        <div className="strip__inner">
          {ones.map((one) => {
            const Icon = ICONS[one.icon];
            return (
              <div className="strip__item" key={one.title}>
                <Icon size={26} />
                <span className="title-body">{one.title}</span>
                <span className="body body--muted">{one.sub}</span>
              </div>
            );
          })}
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Who we serve"
          title="We help you get to what&rsquo;s next."
          copy="Agents chasing a listing date. Investors counting carry costs. Managers with a unit sitting empty. Different pressures, same fix: one team that shows up and finishes."
          cta={{ label: "See our work", to: "/portfolio" }}
        />
        <div className="grid grid--4 grid--tight">
          {serve.map((item) => (
            <Tile
              key={item.label}
              photo={item.photo}
              alt={item.alt}
              title={item.label}
              caption={item.body}
              to="/who-we-help"
              ratio="portrait"
              captionClass="body"
              fixedCap
              sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 25vw"
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="A complete range of services"
          title="What we do."
          copy="Whatever the property needs, it is on our list — paint, floors, repairs, cleaning, landscaping and the licensed trades. Nothing gets handed off to a contractor you have to chase, and nothing falls between two of them."
          cta={{ label: "See our work", to: "/portfolio" }}
        />
        <div className="grid grid--6">
          {capabilities.map((cap) => (
            <Tile
              key={cap.title}
              photo={cap.photo}
              alt={cap.alt}
              title={cap.title}
              caption={cap.sub}
              to="/services"
              titleClass="title-body"
              fixedCap
              sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 33vw"
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Built for speed. Mobile workshops."
          title="How we get it done fast."
          copy="Our trailers, vans and trucks are already loaded with professional tools and materials, so crews start working the hour they arrive instead of losing the morning to a supply run."
          cta={{ label: "See our work", to: "/portfolio" }}
        />
        <div className="grid grid--4 grid--gap-tile">
          {fleet.map((item) => (
            <Tile
              key={item.title}
              photo={item.photo}
              alt={item.alt}
              title={item.title}
              caption={item.sub}
              to="/equipment"
              titleClass="title-body"
              fixedCap
              sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 25vw"
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Your deadline"
          title="Your deadline drives the project."
          copy="A missed listing, move-in, inspection or closing costs time, money and opportunity. We coordinate crews from different trades to run in parallel — no painful waits for one contractor to finish before the next can start."
          cta={{ label: "See our work", to: "/portfolio" }}
        />
        <div className="stack-inblock">
          <ol className="grid grid--5 grid--gap-col">
            {steps.map((step, i) => (
              <li className="stack-sm" key={step.title}>
                <span className="row-h3 accent">{i + 1}</span>
                <span className="title-body">{step.title}</span>
                <span className="caption">{step.body}</span>
              </li>
            ))}
          </ol>

          <div className="chart-pair">
            <div className="box">
              <span className="box__label">Typical sequence</span>
              <Sequence />
            </div>
            <div className="chart-pair__copy">
              <h3 className="row-h3">Trades overlap, not queue.</h3>
              <p className="body">
                Hiring each trade separately means every crew waits for the last one to finish. We
                start the next phase while the current one is still running, which is where the days
                come back.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Proof, not promises"
          title="Recent work."
          copy="Properties we turned around under one scope and one schedule. Click through each project to see the work."
          cta={{ label: "See our work", to: "/portfolio" }}
        />
        <div className="grid grid--3">
          {recentWork.map((item) => (
            <WorkTile
              key={item.caption}
              caption={item.caption}
              sub={item.sub}
              shots={item.shots}
              sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 33vw"
            />
          ))}
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
