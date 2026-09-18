import { Band, BandActions } from "./Band";
import { closingCta } from "~/data/site";

/** The closing band that ends every page. */
export function ClosingCta() {
  return (
    <Band
      closing
      shots={[{ name: closingCta.photo, alt: closingCta.photoAlt }]}
      trailing={closingCta.kicker}
      title={
        <>
          <span className="accent">{closingCta.titleRed}</span>
          <br />
          {closingCta.title}
        </>
      }
      copy={closingCta.copy}
      actions={
        <BandActions
          primary={{ label: "Start your project", to: "/contact" }}
          secondary={{ label: "See our work", to: "/portfolio" }}
        />
      }
    />
  );
}
