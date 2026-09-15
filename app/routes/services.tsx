import type { Route } from "./+types/services";
import { Container } from "~/components/site/Container";
import { DarkHero } from "~/components/site/DarkHero";
import { MaybePhotoBox } from "~/components/site/MaybePhotoBox";
import { PhaseChart } from "~/components/site/PhaseChart";
import { PhaseBreakdown } from "~/components/site/PhaseBreakdown";
import { Button } from "~/components/core/Button";
import { Icon } from "~/components/core/Icon";
import { cssVars } from "~/styles/css-vars";
import { SERVICES_AUDIENCES, SERVICE_CATEGORIES } from "~/data/content";
import { PHOTOS } from "~/data/images.generated";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Services — Contractors Only" },
    { name: "description", content: "Agents, investors, property managers and owners all need the same thing: a property that is ready on time. We coordinate every trade it takes to get there." },
  ];
}

const bodyText = { fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.6, color: "#4d4d4d" } as const;
const h2Red = { margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 0.95, letterSpacing: "-.025em", textTransform: "uppercase" as const, color: "var(--brand)" };
const bigHeading = { margin: 0, flex: "1 1 auto", minWidth: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.06, letterSpacing: "-.02em", textTransform: "uppercase" as const, color: "#1c1c1c" };

export default function Services() {
  return (
    <div>
      <DarkHero image={PHOTOS["conference-room"]} alt="Commercial interior prepared for handover" minHeight="clamp(420px,56vh,560px)" priority>
        <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(17px,1.15vw,20px)", letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>Services</span>
        <h1 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(40px,5.6vw,78px)", lineHeight: 0.92, letterSpacing: "-.025em", textTransform: "uppercase", color: "#fff" }}>
          Who we serve.
          <br />
          <span style={{ color: "var(--brand)" }}>What we do.</span>
        </h1>
        <p style={{ margin: 0, maxWidth: 470, fontSize: "clamp(17px,2vh,20px)", lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>
          Agents, investors, property managers and owners all need the same thing: a property that is ready on time. We coordinate every trade it takes to get there.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginTop: 6 }}>
          <Button as="link" to="/contact">
            Get your project started
          </Button>
          <Button as="link" to="/portfolio" variant="outlineInverse" iconRight={<Icon name="arrow-right" size={16} />}>
            See our work
          </Button>
        </div>
      </DarkHero>

      {/* Who we serve */}
      <section style={{ background: "#fff" }}>
        <Container>
          <div style={{ padding: "clamp(60px,9vh,116px) 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: "clamp(38px,5.5vh,66px)" }}>
              <h2 style={h2Red}>Who we serve</h2>
              <p style={{ margin: 0, ...bodyText }}>Different clients, same problem: too many contractors and not enough time. Here is how we work with each of them.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(52px,7.5vh,96px)" }}>
              {SERVICES_AUDIENCES.map((a) => (
                <div key={a.label} style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,5.2vh,60px)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                      <Icon name={a.icon} size={26} strokeColor="var(--brand)" />
                      <h3 style={bigHeading}>{a.label}</h3>
                    </div>
                    <p style={{ margin: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.55, color: "#4d4d4d" }}>{a.body}</p>
                  </div>
                  <div className="co-split" style={cssVars({ "--split-cols": "repeat(2,minmax(0,570px))", "--split-gap": "clamp(30px,4.8vw,84px)" })}>
                    <figure style={{ margin: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, minWidth: 0 }}>
                      <MaybePhotoBox photo={a.photo} aspectRatio="16/10" size="lg" />
                      <figcaption style={{ fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.35, color: "#898989" }}>{a.caption}</figcaption>
                    </figure>
                    <div style={{ background: "#f6f6f6", border: "1px solid #e0e0e0", borderRadius: 12, padding: "clamp(18px,1.8vw,26px)", minWidth: 0, display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(15px,1vw,17px)", letterSpacing: ".1em", textTransform: "uppercase", color: "#898989", marginBottom: 18, alignSelf: "flex-start" }}>
                        Typical sequence
                      </span>
                      <div style={{ minWidth: 0, flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
                        <PhaseChart groups={a.groups} />
                      </div>
                    </div>
                  </div>
                  <PhaseBreakdown groups={a.groups} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Things we do */}
      <section style={{ background: "#fff" }}>
        <Container>
          <div style={{ padding: "clamp(60px,9vh,116px) 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: "clamp(38px,5.5vh,66px)" }}>
              <h2 style={h2Red}>Things we do</h2>
              <p style={{ margin: 0, ...bodyText }}>One scope, one proposal, one invoice — no matter how many trades the job takes.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(52px,7.5vh,96px)" }}>
              {SERVICE_CATEGORIES.map((s) => (
                <div key={s.t} style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,5.2vh,60px)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                      <Icon name={s.icon} size={26} strokeColor="var(--brand)" />
                      <h3 style={bigHeading}>{s.t}</h3>
                    </div>
                    <p style={{ margin: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.55, color: "#4d4d4d" }}>{s.body}</p>
                  </div>
                  <div className="co-grid" style={cssVars({ "--cols": 4, "--cols-tablet": 2, "--cols-mobile": 2, "--gap-x": "clamp(16px,1.8vw,26px)", "--gap-y": "clamp(16px,1.8vw,26px)" })}>
                    {s.photos.map((p, i) => (
                      <figure key={i} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 9, minWidth: 0 }}>
                        <MaybePhotoBox photo={p} aspectRatio="4/3" size="sm" />
                        <figcaption style={{ fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.3, color: "#898989" }}>{s.captions[i]}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <div className="co-grid" style={cssVars({ "--cols": 4, "--cols-tablet": 2, "--cols-mobile": 1, "--gap-x": "clamp(24px,2.6vw,40px)", "--gap-y": "24px" })}>
                    {s.items.map((item) => (
                      <div key={item.t} style={{ display: "flex", alignItems: "flex-start", gap: 10, minWidth: 0 }}>
                        <Icon name="check" size={15} strokeColor="var(--brand)" style={{ marginTop: 4, flex: "0 0 auto" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
                          <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(19px,1.35vw,23px)", lineHeight: 1.2, letterSpacing: ".01em", color: "#1c1c1c" }}>{item.t}</span>
                          <span style={{ fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.45, color: "#4d4d4d" }}>{item.d}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <DarkHero image={PHOTOS["trailer-exterior"]} alt="Crew truck staged at a property" minHeight="clamp(380px,48vh,520px)">
        <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.6vw,64px)", lineHeight: 0.94, letterSpacing: "-.025em", textTransform: "uppercase", color: "#fff" }}>Don&apos;t see it listed?</h2>
        <p style={{ margin: 0, maxWidth: 470, fontSize: "clamp(17px,2vh,20px)", lineHeight: 1.5, color: "rgba(255,255,255,.82)" }}>
          This covers the most common work, not everything we can do. If a property needs something you don&apos;t see here, ask — if we can&apos;t do it ourselves, we usually know who can and will coordinate it as part of the same scope.
        </p>
        <Button as="link" to="/contact" style={{ marginTop: 6 }}>
          Get your project started
        </Button>
      </DarkHero>
    </div>
  );
}
