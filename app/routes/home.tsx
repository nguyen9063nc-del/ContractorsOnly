import { Clock, Phone, Truck, Wrench } from "lucide-react";
import type { ComponentType } from "react";

import type { Route } from "./+types/home";
import { Band, SectionIntro } from "~/components/site/Section";
import { Hero, HeroActions } from "~/components/site/Hero";
import { PhotoCard } from "~/components/site/PhotoCard";
import { Sequence } from "~/components/site/Sequence";
import { WorkItem } from "~/components/site/WorkGallery";
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

// Icons are imported as components rather than fetched by name at runtime. The
// design system's Icon component pulls each glyph from unpkg on mount, which
// costs a third-party round trip per icon and leaves holes during the fetch.
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

// Start the hero image downloading alongside the HTML instead of waiting for the
// browser to discover it in the markup. This is the LCP element.
export const links: Route.LinksFunction = () => [photoPreload(heroShots[0]!.name, "100vw")];

export default function Home() {
  return (
    <>
      <Hero
        shots={heroShots}
        kicker={hero.kicker}
        title={
          <>
            {hero.titleTop}
            <br />
            <em>{hero.titleAccent}</em>
          </>
        }
        copy={hero.copy}
        actions={
          <HeroActions
            primary={{ label: "Start your project", to: "/contact" }}
            secondary={{ label: "Learn more", to: "/services" }}
          />
        }
      />

      {/* The four "ones" strip. */}
      <section className="band band--muted">
        <div className="shell" style={{ paddingBlock: 26 }}>
          <ul className="ones" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {ones.map((one) => {
              const Icon = ICONS[one.icon];
              return (
                <li className="ones__item" key={one.title}>
                  <Icon size={26} />
                  <span className="ones__title">{one.title}</span>
                  <span className="ones__sub">{one.sub}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Who we serve */}
      <Band tight>
        <SectionIntro
          eyebrow="Who we serve"
          title="We help you get to what's next."
          copy="Agents chasing a listing date. Investors counting carry costs. Managers with a unit sitting empty. Different pressures, same fix: one team that shows up and finishes."
          cta={{ label: "See who we help", to: "/who-we-help" }}
        />
        <div className="grid grid--4">
          {serve.map((item) => (
            <PhotoCard
              key={item.label}
              photo={item.photo}
              alt={item.alt}
              title={item.label}
              sub={item.body}
              to="/who-we-help"
              ratio="portrait"
              titleSize="lg"
              subTone="body"
              // Four across at 1440px ≈ 300px each; two across on tablet; one on
              // the narrowest phones.
              sizes="(max-width: 400px) 100vw, (max-width: 1000px) 50vw, 25vw"
            />
          ))}
        </div>
      </Band>

      {/* What we do */}
      <Band>
        <SectionIntro
          eyebrow="A complete range of services"
          title="What we do."
          copy="Whatever the property needs, it is on our list — paint, floors, repairs, cleaning, landscaping and the licensed trades. Nothing gets handed off to a contractor you have to chase, and nothing falls between two of them."
          cta={{ label: "View all services", to: "/services" }}
        />
        <div className="grid grid--3">
          {capabilities.map((cap) => (
            <PhotoCard
              key={cap.title}
              photo={cap.photo}
              alt={cap.alt}
              title={cap.title}
              sub={cap.sub}
              to="/services"
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
          ))}
        </div>
      </Band>

      {/* Equipment */}
      <Band>
        <SectionIntro
          eyebrow="Built for speed. Mobile workshops."
          title="How we get it done fast."
          copy="Our trailers, vans and trucks are already loaded with professional tools and materials, so crews start working the hour they arrive instead of losing the morning to a supply run."
          cta={{ label: "See our equipment", to: "/equipment" }}
        />
        <div className="grid grid--4">
          {fleet.map((item) => (
            <PhotoCard
              key={item.title}
              photo={item.photo}
              alt={item.alt}
              title={item.title}
              sub={item.sub}
              to="/equipment"
              sizes="(max-width: 400px) 100vw, (max-width: 1000px) 50vw, 25vw"
            />
          ))}
        </div>
      </Band>

      {/* Process + sequence chart */}
      <Band>
        <SectionIntro
          eyebrow="Your deadline"
          title="Your deadline drives the project."
          copy="A missed listing, move-in, inspection or closing costs time, money and opportunity. We coordinate crews from different trades to run in parallel — no painful waits for one contractor to finish before the next can start."
          cta={{ label: "See the full process", to: "/services" }}
        />
        <ol className="grid grid--5" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {steps.map((step, i) => (
            <li className="step" key={step.title}>
              <span className="step__n">{i + 1}</span>
              <span className="step__t">{step.title}</span>
              <span className="muted">{step.body}</span>
            </li>
          ))}
        </ol>

        <div className="seq">
          <div className="seq__panel">
            <span className="seq__label">Typical sequence</span>
            <Sequence />
          </div>
          <div>
            <h3 className="h3" style={{ marginBottom: 12 }}>
              Trades overlap, not queue.
            </h3>
            <p className="lead">
              Hiring each trade separately means every crew waits for the last one to finish. We
              start the next phase while the current one is still running, which is where the days
              come back.
            </p>
          </div>
        </div>
      </Band>

      {/* Recent work */}
      <Band>
        <SectionIntro
          eyebrow="Proof, not promises"
          title="Recent work."
          copy="Properties we turned around under one scope and one schedule. Click through each project to see the work."
          cta={{ label: "See our portfolio", to: "/portfolio" }}
        />
        <div className="grid grid--3">
          {recentWork.map((item) => (
            <WorkItem
              key={item.caption}
              caption={item.caption}
              sub={item.sub}
              shots={item.shots}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
          ))}
        </div>
      </Band>

      <ClosingCta />
    </>
  );
}
