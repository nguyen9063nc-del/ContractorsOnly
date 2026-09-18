import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Photo } from "~/components/Photo";
import type { ImageName } from "~/data/images.generated";

type Shot = { name: ImageName; alt: string };

/** A project tile whose photo crossfades between shots. */
export function WorkTile({
  caption,
  sub,
  shots,
  sizes,
}: {
  caption: string;
  sub: string;
  shots: Shot[];
  sizes: string;
}) {
  const [active, setActive] = useState(0);
  const multi = shots.length > 1;
  const step = (d: number) => setActive((i) => (i + d + shots.length) % shots.length);

  return (
    <figure className="tile">
      <div className="tile__frame">
        {shots.map((shot, i) => (
          <Photo
            key={shot.name}
            name={shot.name}
            alt={shot.alt}
            sizes={sizes}
            className="tile__media"
            data-active={multi ? i === active : undefined}
          />
        ))}

        {multi ? (
          <div className="tile__nav">
            <button
              type="button"
              className="tile__navBtn"
              onClick={() => step(-1)}
              aria-label={`Previous photo of ${caption}`}
            >
              <ChevronLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              className="tile__navBtn"
              onClick={() => step(1)}
              aria-label={`Next photo of ${caption}`}
            >
              <ChevronRight size={18} aria-hidden />
            </button>
          </div>
        ) : null}
      </div>

      <figcaption className="tile__cap">
        <span className="item-name">{caption}</span>
        <span className="caption">{sub}</span>
      </figcaption>
    </figure>
  );
}
