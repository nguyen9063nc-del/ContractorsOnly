import { Link } from "react-router";

import { Photo } from "~/components/Photo";
import type { ImageName } from "~/data/images.generated";

type Ratio = "standard" | "square" | "portrait" | "wide" | "photo";

const RATIO: Record<Ratio, string> = {
  standard: "",
  square: " tile__media--square",
  portrait: " tile__media--portrait",
  wide: " tile__media--wide",
  photo: " tile__media--photo",
};

/** Photo tile: media, then an item name and a caption. */
export function Tile({
  photo,
  alt,
  title,
  caption,
  to,
  ratio = "standard",
  sizes,
  fixedCap = false,
  titleClass = "item-name",
  captionClass = "caption",
}: {
  photo: ImageName;
  alt: string;
  title?: string;
  caption?: string;
  to?: string;
  ratio?: Ratio;
  sizes: string;
  /** Holds captions to a common height so media lines up across a row. */
  fixedCap?: boolean;
  /** Type role for the title — the templates use body-size uppercase for most
   *  tiles and .item-name only for the larger feature cards. */
  titleClass?: string;
  /** Type role for the sub — `caption` or `body body--muted`. */
  captionClass?: string;
}) {
  const media = (
    <Photo name={photo} alt={alt} sizes={sizes} className={`tile__media${RATIO[ratio]}`} />
  );

  const cap =
    title || caption ? (
      <figcaption className={`tile__cap${fixedCap ? " tile__cap--fixed" : ""}`}>
        {title ? <span className={titleClass}>{title}</span> : null}
        {caption ? <span className={captionClass}>{caption}</span> : null}
      </figcaption>
    ) : null;

  if (to) {
    return (
      <Link to={to} className="tile">
        {media}
        {cap}
      </Link>
    );
  }

  return (
    <figure className="tile">
      {media}
      {cap}
    </figure>
  );
}

/** §"Content rules" — no honest photo exists, so name the shot needed. */
export function PhotoSlot({ need }: { need: string }) {
  return (
    <div className="ph">
      <span className="label-small">Photo needed</span>
      <span className="caption">{need}</span>
    </div>
  );
}
