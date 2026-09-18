import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Photo } from "~/components/Photo";
import type { ImageName } from "~/data/images.generated";

type Shot = { name: ImageName; alt: string };

/** One project: a crossfading photo pair with a caption underneath. */
export function WorkItem({
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
    <figure className="work">
      <div className="work__frame">
        {shots.map((shot, i) => (
          <Photo
            key={shot.name}
            name={shot.name}
            alt={shot.alt}
            sizes={sizes}
            fill
            data-active={multi ? i === active : undefined}
          />
        ))}

        {multi ? (
          <div className="work__nav">
            <button
              type="button"
              className="work__btn"
              onClick={() => step(-1)}
              aria-label={`Previous photo of ${caption}`}
            >
              <ChevronLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              className="work__btn"
              onClick={() => step(1)}
              aria-label={`Next photo of ${caption}`}
            >
              <ChevronRight size={18} aria-hidden />
            </button>
          </div>
        ) : null}
      </div>

      <figcaption className="work__cap">
        <span className="work__capTitle">{caption}</span>
        <span className="pcard__sub">{sub}</span>
      </figcaption>
    </figure>
  );
}
