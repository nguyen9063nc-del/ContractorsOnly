import { images, type ImageName } from "~/data/images.generated";

/**
 * Responsive <picture> over the build-time image set in public/img/.
 *
 * Emits AVIF and WebP srcsets so the browser downloads the smallest encoding it
 * supports at the smallest width that covers the layout slot, and always sets
 * width/height + a background colour so the box is reserved before the bytes
 * arrive (no layout shift, no grey flash).
 */

type PhotoProps = {
  /** Key from the generated manifest — i.e. the source filename without extension. */
  name: ImageName;
  /**
   * Always write real alt text. Pass "" only for images that carry no
   * information beyond the surrounding copy, which marks them decorative.
   */
  alt: string;
  /**
   * Layout width hint for srcset selection. Getting this roughly right matters
   * more than any encoder setting — a wrong `sizes` makes the browser pick a
   * needlessly large file. Defaults to full viewport width.
   */
  sizes?: string;
  /**
   * Set on the one image above the fold (the hero). Loads eagerly at high
   * priority instead of lazily. Never set it on more than one image per page:
   * fetchpriority="high" only helps if it is scarce.
   */
  priority?: boolean;
  /** Absolutely fills its positioned parent, for hero and card art. */
  fill?: boolean;
  className?: string;
  /**
   * Anything else — `data-*` in particular — lands on the <picture> wrapper, so
   * callers like the hero carousel can drive state off it in CSS.
   */
  [key: `data-${string}`]: unknown;
};

export function Photo({
  name,
  alt,
  sizes = "100vw",
  priority = false,
  fill = false,
  className,
  ...rest
}: PhotoProps) {
  const meta = images[name];

  const srcset = (ext: "avif" | "webp") =>
    meta.widths.map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(", ");

  // Widest encoded rung is the <img src> fallback for anything that ignores
  // srcset. `at(-1)` is safe: the pipeline guarantees at least one width.
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
        style={{
          backgroundColor: meta.bg,
          ...(fill
            ? ({
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              } as const)
            : null),
        }}
      />
    </picture>
  );
}

/** Preload tag for the hero image, so it starts downloading with the HTML. */
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
