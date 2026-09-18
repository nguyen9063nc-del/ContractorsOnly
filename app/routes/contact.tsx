import { Check, Mail, MapPin, Phone } from "lucide-react";

import type { Route } from "./+types/contact";
import { Band, SectionIntro } from "~/components/site/Section";
import { Hero } from "~/components/site/Hero";
import { photoPreload } from "~/components/Photo";
import { ContactForm } from "~/components/site/ContactForm";
import { askFor, contactHero, faqs } from "~/data/contact";
import { site } from "~/data/site";

const DESCRIPTION =
  "Tell us about the property and we'll come back with a walkthrough, a written scope and a plan built around your date.";

export function meta(_: Route.MetaArgs) {
  const title = "Contact — Contractors Only";
  return [
    { title },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: title },
    { property: "og:description", content: DESCRIPTION },
  ];
}

export const links: Route.LinksFunction = () => [photoPreload(contactHero.photo, "100vw")];

export default function Contact() {
  return (
    <>
      <Hero
        short
        shots={[{ name: contactHero.photo, alt: contactHero.alt }]}
        kicker={contactHero.eyebrow}
        title={
          <>
            {contactHero.titleTop}
            <br />
            <em>{contactHero.titleAccent}</em>
          </>
        }
        copy={contactHero.copy}
      />

      <Band tight>
        <div className="contact">
          <div>
            <h2 className="h3" style={{ marginBottom: 20 }}>
              Request a walkthrough
            </h2>
            <ContactForm />
          </div>

          <aside className="contact__aside">
            <div>
              <h3 className="aud__t" style={{ marginBottom: 14 }}>
                What we'll ask for
              </h3>
              <ul className="ticks">
                {askFor.map((item) => (
                  <li key={item}>
                    <Check size={14} strokeWidth={2.6} aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: "1px solid var(--border-hairline)", paddingTop: 22 }}>
              <h3 className="aud__t" style={{ marginBottom: 6 }}>
                Prefer to talk?
              </h3>
              <p className="form__note" style={{ marginBottom: 18 }}>
                The best way to get in touch is the form, but if you have questions you can call
                us directly.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="contact__row">
                  <Phone size={18} aria-hidden />
                  <div>
                    <span className="contact__label">Phone</span>
                    <a className="contact__value" href={site.phoneHref}>
                      {site.phone}
                    </a>
                  </div>
                </div>
                <div className="contact__row">
                  <Mail size={18} aria-hidden />
                  <div>
                    <span className="contact__label">Email</span>
                    <a className="contact__value" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="contact__row">
                  <MapPin size={18} aria-hidden />
                  <div>
                    <span className="contact__label">Office</span>
                    <span className="contact__value">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Band>

      <Band tone="subtle">
        <SectionIntro
          eyebrow="Common questions"
          title="Answers before you ask."
          copy="If your question isn't here, call or email us and we will answer it directly."
        />
        <div className="items items--wide">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="aud__t" style={{ marginBottom: 8 }}>
                {faq.q}
              </h3>
              <p className="muted" style={{ fontSize: "var(--fs-small)", lineHeight: 1.55 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Band>
    </>
  );
}
