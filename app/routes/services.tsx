import type { Route } from "./+types/services";
import { Container } from "~/components/site/Container";
import { DarkHero } from "~/components/site/DarkHero";
import { Button } from "~/components/core/Button";
import { Icon } from "~/components/core/Icon";
import { cssVars } from "~/styles/css-vars";
import { SERVICES_AUDIENCES, SERVICE_CATEGORIES, TIMELINE } from "~/data/content";
import { PHOTOS } from "~/data/images.generated";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Services — Contractors Only" },
    { name: "description", content: "Agents, investors, property managers and owners all need the same thing: a property that is ready on time. We coordinate every trade it takes to get there." },
  ];
}

export default function Services() {
  return (
    <div>
      <DarkHero image={PHOTOS["conference-room"]} alt="Commercial interior prepared for handover" minHeight="clamp(420px,56vh,560px)" priority>
        <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>Services</span>
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

      <section style={{ background: "#fff", padding: "14px 0" }}>
        <div style={{ width: "96%", maxWidth: 1600, margin: "0 auto", background: "#f6f6f6", borderRadius: 16 }}>
          <div style={{ width: "89.6%", maxWidth: 1440, margin: "0 auto", padding: "clamp(48px,7vh,88px) 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: "clamp(26px,4vh,42px)", maxWidth: 720 }}>
              <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 0.95, letterSpacing: "-.025em", textTransform: "uppercase", color: "var(--brand)" }}>
                Who we serve
              </h2>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#4d4d4d" }}>Different clients, same problem: too many contractors and not enough time. Here is how we work with each of them.</p>
            </div>
            <div className="co-grid" style={cssVars({ "--cols": 3, "--cols-tablet": 2, "--cols-mobile": 1, "--gap-x": "22px", "--gap-y": "22px" })}>
              {SERVICES_AUDIENCES.map((a) => (
                <div key={a.label} style={{ display: "flex", flexDirection: "column", gap: 14, background: "#fff", border: "1px solid #e0e0e0", borderRadius: 12, padding: 24, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                    <Icon name={a.icon} size={22} strokeColor="var(--brand)" />
                    <h3 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 19, lineHeight: 1.12, letterSpacing: ".01em", textTransform: "uppercase", color: "#1c1c1c" }}>{a.label}</h3>
                  </div>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: "#4d4d4d" }}>{a.body}</p>
                  <ul style={{ margin: "auto 0 0", padding: "6px 0 0", listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {a.points.map((p) => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 17, lineHeight: 1.4, color: "#1c1c1c" }}>
                        <Icon name="check" size={16} strokeColor="var(--brand)" style={{ marginTop: 3, flex: "0 0 auto" }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <Container>
          <div style={{ padding: "clamp(48px,7vh,88px) 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: "clamp(26px,4vh,42px)", maxWidth: 720 }}>
              <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 0.95, letterSpacing: "-.025em", textTransform: "uppercase", color: "var(--brand)" }}>
                Things we do
              </h2>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#4d4d4d" }}>One scope, one proposal, one invoice — no matter how many trades the job takes.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,6vh,72px)" }}>
              {SERVICE_CATEGORIES.map((s, i) => (
                <div
                  key={s.t}
                  className="co-alt-row"
                  dir={i % 2 ? "rtl" : "ltr"}
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(24px,3vw,48px)", alignItems: "start" }}
                >
                  <div dir="ltr" style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                      <Icon name={s.icon} size={24} strokeColor="var(--brand)" />
                      <h3 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.05, letterSpacing: "-.015em", textTransform: "uppercase", color: "#1c1c1c" }}>{s.t}</h3>
                    </div>
                    <p style={{ margin: 0, maxWidth: 520, fontSize: 17, lineHeight: 1.6, color: "#4d4d4d" }}>{s.body}</p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "9px 24px", width: "100%" }}>
                      {s.items.map((it) => (
                        <li key={it} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 17, lineHeight: 1.4, color: "#1c1c1c" }}>
                          <Icon name="check" size={15} strokeColor="var(--brand)" style={{ marginTop: 3, flex: "0 0 auto" }} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <figure dir="ltr" style={{ margin: 0, display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
                    <img src={s.src} alt={s.alt} loading="lazy" decoding="async" width={700} height={525} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover", display: "block", borderRadius: 8, background: "#ededed" }} />
                    <figcaption style={{ fontSize: 17, lineHeight: 1.35, color: "#898989" }}>{s.caption}</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section style={{ background: "#fff", padding: "14px 0" }}>
        <div style={{ width: "96%", maxWidth: 1600, margin: "0 auto", background: "#f6f6f6", borderRadius: 16 }}>
          <div style={{ width: "89.6%", maxWidth: 1440, margin: "0 auto", padding: "clamp(48px,7vh,88px) 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: "clamp(26px,4vh,42px)", maxWidth: 720 }}>
              <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 0.95, letterSpacing: "-.025em", textTransform: "uppercase", color: "var(--brand)" }}>
                How it stacks up
              </h2>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#4d4d4d" }}>
                Hiring each trade separately means waiting for each one to finish before the next can start. We overlap the work and keep the schedule moving — a typical turnover runs about ten days instead of a month.
              </p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 12, padding: "clamp(20px,3vw,32px)", overflowX: "auto" }}>
              <div style={{ width: "100%", minWidth: 760, display: "grid", gridTemplateColumns: "max-content repeat(12,minmax(0,1fr))", gap: "9px 0", alignItems: "center" }}>
                {TIMELINE.map((row, i) => (
                  <div key={row.label} style={{ display: "contents" }}>
                    <span style={{ gridColumn: 1, gridRow: i + 1, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, textTransform: "uppercase", letterSpacing: ".02em", color: "#1c1c1c", paddingRight: 16, textAlign: "right", whiteSpace: "nowrap" }}>
                      {row.label}
                    </span>
                    <div style={{ gridColumn: `${row.colStart} / span ${row.colSpan}`, gridRow: i + 1, height: 18, borderRadius: 3, background: row.color }} />
                  </div>
                ))}
                <div style={{ gridColumn: "2 / span 12", gridRow: TIMELINE.length + 1, height: 1, background: "#e0e0e0", marginTop: 6 }} />
                <span style={{ gridColumn: 1, gridRow: TIMELINE.length + 2, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, textTransform: "uppercase", letterSpacing: ".06em", color: "#898989", paddingRight: 16, textAlign: "right" }}>
                  Day
                </span>
                {Array.from({ length: 12 }, (_, n) => (
                  <span key={n} style={{ gridColumn: n + 2, gridRow: TIMELINE.length + 2, fontSize: 17, color: "#898989", textAlign: "center" }}>
                    {n + 1}
                  </span>
                ))}
              </div>
            </div>
            <p style={{ margin: "16px 0 0", fontSize: 17, lineHeight: 1.5, color: "#898989" }}>Representative schedule for a standard unit turnover. Actual sequencing is set once we walk the property.</p>
          </div>
        </div>
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
