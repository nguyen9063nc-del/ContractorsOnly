import { Link } from "react-router";

import { Photo } from "~/components/Photo";
import type { ImageName } from "~/data/images.generated";

/**
 * Photo above an uppercase label and a short blurb — the repeating unit across
 * the services, fleet and audience grids. Renders as a link when `to` is given,
 * otherwise as a plain figure.
 */
export function PhotoCard({
  photo,
  alt,
  title,
  sub,
  to,
  ratio = "landscape",
  subTone = "muted",
  sizes,
}: {
  photo: ImageName;
  alt: string;
  title: string;
  sub?: string;
  to?: string;
  ratio?: "landscape" | "portrait" | "wide" | "square";
  subTone?: "muted" | "body";
  sizes: string;
}) {
  const inner = (
    <>
      <div className={`pcard__media pcard__media--${ratio}`}>
        <Photo name={photo} alt={alt} sizes={sizes} fill />
      </div>
      <div className="pcard__body">
        <span className="pcard__title">{title}</span>
        {sub ? (
          <span className={`pcard__sub${subTone === "body" ? " pcard__sub--body" : ""}`}>{sub}</span>
        ) : null}
      </div>
    </>
  );

  return to ? (
    <Link to={to} className="pcard">
      {inner}
    </Link>
  ) : (
    <div className="pcard">{inner}</div>
  );
}
