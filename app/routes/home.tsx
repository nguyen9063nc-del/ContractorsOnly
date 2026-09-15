import { useState } from "react";
import type { Route } from "./+types/home";
import { Container } from "~/components/site/Container";
import { HeroCarouselImages, HeroCarouselDots } from "~/components/site/HeroCarousel";
import { GalleryShot } from "~/components/site/GalleryShot";
import { Button } from "~/components/core/Button";
import { Icon } from "~/components/core/Icon";
import { Eyebrow } from "~/components/core/Eyebrow";
import { cssVars } from "~/styles/css-vars";
import { FLEET_STRIP, HERO_PHOTOS, HOME_AUDIENCES, HOME_CAPABILITIES, ONES, SPEED_POINTS, STEPS, WORK } from "~/data/content";
import { PHOTOS } from "~/data/images.generated";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Contractors Only — One call does it all." },
    { name: "description", content: "From repairs and painting to landscaping and final cleanup, we coordinate everything to get your property market-ready — fast." },
  ];
}

// The first hero photo is this page's LCP element — preload it (with the same
// srcset the <img> uses) so the browser starts the fetch before it even parses
// the rest of the document, instead of waiting to discover the <img> tag.
export const links: Route.LinksFunction = () => [
  {
    rel: "preload",
    as: "image",
    href: HERO_PHOTOS[0].full,
    imageSrcSet: `${HERO_PHOTOS[0].tile} 700w, ${HERO_PHOTOS[0].full} 1600w`,
    imageSizes: "100vw",
    fetchPriority: "high",
  },
];

function Hero() {
  const [i, setI] = useState(0);
  return (
    <section style={{ position: "relative", width: "100%", background: "#141414", overflow: "hidden", minHeight: "clamp(460px,64vh,620px)", display: "flex", alignItems: "center" }}>
      <HeroCarouselImages photos={HERO_PHOTOS} index={i} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#0d0d0d 0%,rgba(13,13,13,.94) 34%,rgba(13,13,13,.55) 60%,rgba(13,13,13,.12) 100%)" }} />
      <div style={{ position: "relative", width: "100%", padding: "clamp(40px,7vh,88px) 0" }}>
        <Container>
          <div style={{ maxWidth: 600, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "clamp(14px,2.2vh,22px)" }}>
            <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>Contractors Only</span>
            <h1 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(40px,5.6vw,78px)", lineHeight: 0.92, letterSpacing: "-.025em", textTransform: "uppercase", color: "#fff" }}>
              One call
              <br />
              <span style={{ color: "var(--brand)" }}>does it all.</span>
            </h1>
            <p style={{ margin: 0, maxWidth: 470, fontSize: "clamp(17px,2vh,20px)", lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>
              From repairs and painting to landscaping and final cleanup, we coordinate everything to get your property market-ready — fast.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginTop: 6 }}>
              <Button as="link" to="/contact">
                Get your project started
              </Button>
              <Button as="link" to="/services" variant="outlineInverse" iconRight={<Icon name="arrow-right" size={16} />}>
                Learn More
              </Button>
            </div>
            <HeroCarouselDots photos={HERO_PHOTOS} index={i} onSelect={setI} />
          </div>
        </Container>
      </div>
    </section>
  );
}

function OnesStrip() {
  return (
    <section style={{ width: "100%", background: "#f2f2f2", borderBottom: "1px solid #e0e0e0" }}>
      <Container>
        <div style={{ padding: "26px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 1 }}>
            {ONES.map((o) => (
              <div key={o.t} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 8, minWidth: 0, padding: "6px 16px", borderRight: "1px solid #dcdcdc" }}>
                <Icon name={o.icon} size={26} strokeColor="#1c1c1c" />
                <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, textTransform: "uppercase", color: "#1c1c1c", lineHeight: 1.15 }}>{o.t}</span>
                <span style={{ fontSize: 17, color: "#898989", lineHeight: 1.35 }}>{o.short}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SpeedSection() {
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ width: "86%", maxWidth: 1440, margin: "0 auto", padding: "clamp(48px,7vh,88px) 0" }}>
        <div className="co-split" style={cssVars({ "--split-cols": "1.15fr .85fr", "--split-gap": "44px", "--split-align": "start" })}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
            <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 0.95, letterSpacing: "-.025em", textTransform: "uppercase", color: "#1c1c1c" }}>
              Built for speed.
              <br />
              <span style={{ color: "var(--brand)" }}>Backed by expertise.</span>
            </h2>
            <h3 style={{ margin: "6px 0 0", fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(17px,1.7vw,21px)", lineHeight: 1.15, letterSpacing: ".01em", textTransform: "uppercase", color: "#1c1c1c" }}>
              Mobile workshops. Ready to work.
            </h3>
            <p style={{ margin: 0, maxWidth: 480, fontSize: 17, lineHeight: 1.6, color: "#4d4d4d" }}>
              Our enclosed trailers, vans and trucks are fully equipped with professional tools and supplies, allowing our crews to arrive prepared and keep projects moving without delays or supply runs.
            </p>
            <ul style={{ margin: "4px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
              {SPEED_POINTS.map((p) => (
                <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 11, fontSize: 17, lineHeight: 1.45, color: "#1c1c1c" }}>
                  <span style={{ flex: "0 0 auto", width: 20, height: 20, borderRadius: 999, background: "var(--brand)", color: "#fff", display: "grid", placeItems: "center", marginTop: 1 }}>
                    <Icon name="check" size={12} strokeColor="#fff" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={PHOTOS["trailer-packout"].full}
            alt="Trailer interior stocked with organized tool crates"
            loading="lazy"
            decoding="async"
            width={1600}
            height={1200}
            style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover", display: "block", borderRadius: 4, background: "#ededed" }}
          />
        </div>
        <div className="co-grid" style={{ ...cssVars({ "--cols": 4, "--cols-tablet": 2, "--cols-mobile": 2, "--gap-x": "20px", "--gap-y": "20px" }), marginTop: "clamp(28px,4vh,44px)" }}>
          {FLEET_STRIP.map((f) => (
            <figure key={f.t} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
              <img src={f.src} alt={f.t} loading="lazy" decoding="async" width={700} height={525} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover", display: "block", borderRadius: 4, background: "#ededed" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: 3, paddingTop: 9 }}>
                <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, textTransform: "uppercase", letterSpacing: ".02em", color: "#1c1c1c" }}>{f.t}</span>
                <span style={{ fontSize: 17, lineHeight: 1.35, color: "#898989" }}>{f.b}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesBand() {
  return (
    <section style={{ background: "#fff", padding: "14px 0" }}>
      <div style={{ width: "96%", maxWidth: 1600, margin: "0 auto", background: "#f6f6f6", borderRadius: 16 }}>
        <div style={{ width: "89.6%", maxWidth: 1440, margin: "0 auto", padding: "clamp(48px,7vh,88px) 0" }}>
          <h2 style={{ margin: "0 0 clamp(26px,4vh,42px)", fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 0.95, letterSpacing: "-.025em", textTransform: "uppercase", color: "var(--brand)" }}>
            Things we do
          </h2>
          <div className="co-grid" style={cssVars({ "--cols": 4, "--cols-tablet": 2, "--cols-mobile": 1, "--gap-x": "20px", "--gap-y": "28px" })}>
            {HOME_CAPABILITIES.map((c) => (
              <div key={c.t} style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                <img src={c.src} alt={c.alt} loading="lazy" decoding="async" width={700} height={525} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover", display: "block", borderRadius: 4, background: "#ededed" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "10px 0 0", marginTop: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                    <Icon name={c.icon} size={22} strokeColor="var(--brand)" />
                    <h3 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 19, lineHeight: 1.1, letterSpacing: ".01em", textTransform: "uppercase", color: "#1c1c1c" }}>{c.t}</h3>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {c.items.map((i) => (
                      <li key={i} style={{ fontSize: 17, lineHeight: 1.4, color: "#4d4d4d" }}>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeadlineSection() {
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ width: "86%", maxWidth: 1440, margin: "0 auto", padding: "clamp(48px,7vh,88px) 0" }}>
        <div className="co-split" style={cssVars({ "--split-cols": "1.15fr .85fr", "--split-gap": "40px", "--split-align": "center" })}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow>Your deadline</Eyebrow>
            <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-.01em", color: "#1c1c1c" }}>Your deadline drives the project.</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.62 }}>
              We know your time is valuable. A missed listing, move-in, inspection, or closing can cost time, money, and opportunity. We coordinate multiple teams from different trades to maximize time efficiency. No painful waits for one contractor to finish up just to send the next one in.
            </p>
          </div>
          <img
            src={PHOTOS["restroom-refresh"].full}
            alt="Refreshed commercial restroom"
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", display: "block", borderRadius: 16 }}
          />
        </div>
        <div className="co-grid" style={{ ...cssVars({ "--cols": 3, "--cols-tablet": 2, "--cols-mobile": 1, "--gap-x": "20px", "--gap-y": "20px" }), marginTop: 36 }}>
          {HOME_AUDIENCES.map((a) => (
            <div key={a.label} style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0, padding: 18, background: "#fff", border: "1px solid #e0e0e0", borderRadius: 16 }}>
              <Icon name={a.icon} size={20} strokeColor="var(--brand)" />
              <h3 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 20, lineHeight: 1.06, letterSpacing: "-.02em", color: "#1c1c1c" }}>{a.label}</h3>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.45, color: "#4d4d4d" }}>{a.headline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ width: "86%", maxWidth: 1440, margin: "0 auto", padding: "clamp(48px,7vh,88px) 0" }}>
        <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-.01em", color: "#1c1c1c" }}>The process</h2>
        <div className="co-grid" style={{ ...cssVars({ "--cols": 5, "--cols-tablet": 3, "--cols-mobile": 1, "--gap-x": "20px", "--gap-y": "20px" }), marginTop: 40 }}>
          {STEPS.map((s, i) => (
            <div key={s.t} style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0, padding: "20px 18px", background: "#f6f6f6", border: "1px solid #e0e0e0", borderRadius: 16 }}>
              <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 26, lineHeight: 1, color: "var(--brand)" }}>{i + 1}</span>
              <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 600, fontSize: 17, lineHeight: 1.2, color: "#1c1c1c" }}>{s.t}</span>
              <span style={{ fontSize: 17, lineHeight: 1.45, color: "#898989" }}>{s.b}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Button as="link" to="/contact" variant="ghost" iconRight={<Icon name="arrow-right" size={16} />}>
            See the full process
          </Button>
        </div>
      </div>
    </section>
  );
}

function RecentWork() {
  return (
    <section style={{ background: "#fff", padding: "14px 0" }}>
      <div style={{ width: "96%", maxWidth: 1600, margin: "0 auto", background: "#f6f6f6", borderRadius: 16 }}>
        <div style={{ width: "89.6%", maxWidth: 1440, margin: "0 auto", padding: "clamp(48px,7vh,88px) 0" }}>
          <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-.01em", color: "#1c1c1c" }}>Recent work</h2>
          <div className="co-grid" style={{ ...cssVars({ "--cols": 3, "--cols-tablet": 2, "--cols-mobile": 1, "--gap-x": "24px", "--gap-y": "24px" }), marginTop: 32 }}>
            {WORK.slice(0, 3).map((w) => (
              <figure key={w.cap} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
                <GalleryShot shots={w.shots} />
                <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.08, letterSpacing: "-.02em", color: "#1c1c1c" }}>{w.cap}</span>
                  <span style={{ fontSize: 17, lineHeight: 1.5, color: "#4d4d4d" }}>{w.sub}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <Button as="link" to="/portfolio" variant="secondary">
              See our portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section style={{ position: "relative", width: "100%", background: "#141414", overflow: "hidden", minHeight: "clamp(420px,56vh,560px)", display: "flex", alignItems: "center" }}>
      <img
        src={PHOTOS["conference-room"].full}
        srcSet={`${PHOTOS["conference-room"].tile} 700w, ${PHOTOS["conference-room"].full} 1600w`}
        sizes="100vw"
        alt="Conference room ready for business"
        loading="lazy"
        decoding="async"
        width={1600}
        height={900}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#0d0d0d 0%,rgba(13,13,13,.94) 34%,rgba(13,13,13,.55) 60%,rgba(13,13,13,.12) 100%)" }} />
      <div style={{ position: "relative", width: "100%", padding: "clamp(40px,7vh,88px) 0" }}>
        <Container>
          <div style={{ maxWidth: 600, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "clamp(14px,2.2vh,22px)" }}>
            <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(40px,5.6vw,78px)", lineHeight: 0.92, letterSpacing: "-.025em", textTransform: "uppercase", color: "#fff" }}>
              <span style={{ color: "var(--brand)" }}>One call.</span>
              <br />
              One property ... done
            </h2>
            <p style={{ margin: 0, maxWidth: 470, fontSize: "clamp(17px,2vh,20px)", lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>
              The value isn&apos;t simply that we can paint a wall, clean a carpet, or pressure wash a driveway. It&apos;s that you don&apos;t have to find someone different every time something needs to be done.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginTop: 6 }}>
              <Button as="link" to="/contact">
                Get your project started
              </Button>
              <Button as="link" to="/services" variant="outlineInverse" iconRight={<Icon name="arrow-right" size={16} />}>
                Learn More
              </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>
              <span style={{ width: 28, height: 2, background: "rgba(255,255,255,.7)" }} />
              Stop managing contractors
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <OnesStrip />
      <SpeedSection />
      <CapabilitiesBand />
      <DeadlineSection />
      <ProcessSection />
      <RecentWork />
      <ClosingCTA />
    </div>
  );
}
