import { LOGO_LOCKUP } from "~/data/images.generated";

export function Wordmark({ height = 46 }: { height?: number }) {
  return (
    <img
      src={LOGO_LOCKUP.src}
      width={LOGO_LOCKUP.width}
      height={LOGO_LOCKUP.height}
      alt="Contractors Only"
      style={{ height, width: "auto", aspectRatio: LOGO_LOCKUP.aspectRatio, display: "block", flex: "0 0 auto" }}
    />
  );
}
