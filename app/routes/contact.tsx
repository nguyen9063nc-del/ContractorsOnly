import { Check, Mail, MapPin, Phone } from "lucide-react";

import type { Route } from "./+types/contact";
import { Section, SectionHead } from "~/components/site/Section";
import { Band } from "~/components/site/Band";
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
      <Band
        shots={[{ name: contactHero.photo, alt: contactHero.alt }]}
        eyebrow={contactHero.eyebrow}
        title={
          <>
            {contactHero.titleTop}
            <br />
            <span className="accent">{contactHero.titleAccent}</span>
          </>
        }
        copy={contactHero.copy}
      />

      <Section>
        <div className="contact-grid">
          <div className="stack-sm">
            <h2 className="block-h3">Request a walkthrough</h2>
            <ContactForm />
          </div>

          <aside className="box">
            <div className="stack-inblock">
              <div className="stack-sm">
                <h3 className="item-name">What we&rsquo;ll ask for</h3>
                <ul className="ticks">
                  {askFor.map((item) => (
                    <li key={item}>
                      <Check size={14} strokeWidth={2.6} aria-hidden />
                      <span className="body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stack-sm">
                <h3 className="item-name">Prefer to talk?</h3>
                <p className="caption">
                  The best way to get in touch is the form, but if you have questions you can call
                  us directly.
                </p>

                <div className="contact-row">
                  <Phone size={18} aria-hidden />
                  <div>
                    <span className="label-small">Phone</span>
                    <br />
                    <a href={site.phoneHref}>{site.phone}</a>
                  </div>
                </div>
                <div className="contact-row">
                  <Mail size={18} aria-hidden />
                  <div>
                    <span className="label-small">Email</span>
                    <br />
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </div>
                <div className="contact-row">
                  <MapPin size={18} aria-hidden />
                  <div>
                    <span className="label-small">Office</span>
                    <br />
                    <span className="caption">
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
      </Section>

      <Section>
        <SectionHead
          eyebrow="Common questions"
          title="Answers before you ask."
          copy="If your question isn't here, call or email us and we will answer it directly."
        />
        <ul className="bullets bullets--3">
          {faqs.map((faq) => (
            <li className="bullet" key={faq.q}>
              <Check className="bullet__check" size={15} aria-hidden />
              <span className="bullet__text">
                <span className="bullet__title">{faq.q}</span>
                <span className="caption">{faq.a}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
