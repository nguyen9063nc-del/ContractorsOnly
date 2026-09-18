import { Hero, HeroActions } from "./Hero";
import { closingCta } from "~/data/site";

/** The red-accent closing band that ends most pages. */
export function ClosingCta() {
  return (
    <Hero
      short
      as="h2"
      trailing={closingCta.kicker}
      shots={[{ name: closingCta.photo, alt: closingCta.photoAlt }]}
      title={
        <>
          <em>{closingCta.titleRed}</em>
          <br />
          {closingCta.title}
        </>
      }
      copy={closingCta.copy}
      actions={
        <HeroActions
          primary={{ label: "Start your project", to: "/contact" }}
          secondary={{ label: "Learn more", to: "/services" }}
        />
      }
    />
  );
}
