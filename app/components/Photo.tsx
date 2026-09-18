import { images, type ImageName } from "~/data/images.generated";

/**
 * Responsive <picture> over the build-time image set in public/img/.
 *
 * Emits AVIF and WebP srcsets so the browser downloads the smallest encoding it
 * supports at the smallest width that covers the layout slot, and always sets
 * width/height so the box is reserved before the bytes arrive.
 *
 * Carries no inline styling: sizing and the pre-load background come from the
 * handoff class passed in via `className` (`.tile__media`, `.band__img`, …),
 * per the rule that markup holds no design values.
 */

type PhotoProps = {
  /** Key from the generated manifest — the source filename without extension. */
  name: ImageName;
  /**
   * Always write real alt text. Pass "" only for images that carry no
   * information beyond the surrounding copy, which marks them decorative.
   */
  alt: string;
  /**
   * Layout width hint for srcset selection. Getting this roughly right matters
   * more than any encoder setting — a wrong `sizes` makes the browser pick a
   * needlessly large file.
   */
  sizes?: string;
  /**
   * Set on the one image above the fold. Loads eagerly at high priority. Never
   * set it on more than one image per page: fetchpriority only helps if scarce.
   */
  priority?: boolean;
  className?: string;
  /** `data-*` lands on the <picture>, so callers can drive state in CSS. */
  [key: `data-${string}`]: unknown;
};

export function Photo({
  name,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  ...rest
}: PhotoProps) {
  const meta = images[name];

  const srcset = (ext: "avif" | "webp") =>
    meta.widths.map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(", ");

  const widest = meta.widths[meta.widths.length - 1];

  return (
    <picture {...rest}>
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        src={`/img/${name}-${widest}.webp`}
        alt={alt}
        width={meta.w}
        height={meta.h}
        className={className}
        loading={priority ? "eager" : "lazy"}
        // Async decode keeps a large image off the main thread during scroll;
        // the priority image decodes synchronously so it paints in one frame.
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}

/** Preload tag for the band image, so it downloads alongside the HTML. */
export function photoPreload(name: ImageName, sizes: string) {
  const meta = images[name];
  return {
    rel: "preload" as const,
    as: "image" as const,
    type: "image/avif",
    imageSrcSet: meta.widths.map((w) => `/img/${name}-${w}.avif ${w}w`).join(", "),
    imageSizes: sizes,
    fetchPriority: "high" as const,
  };
}
