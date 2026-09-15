import { useState } from "react";
import type { Route } from "./+types/who-we-serve";
import { Container } from "~/components/site/Container";
import { PhotoSlot } from "~/components/site/PhotoSlot";
import { Eyebrow } from "~/components/core/Eyebrow";
import { Icon } from "~/components/core/Icon";
import { Tag } from "~/components/core/Tag";
import { Tabs } from "~/components/navigation/Tabs";
import { Accordion } from "~/components/navigation/Accordion";
import { cssVars } from "~/styles/css-vars";
import { AUDIENCE_DETAIL, AUDIENCE_FAQ } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Who we serve — Contractors Only" },
    { name: "description", content: "You manage the property. We manage the work — for property managers, agents, investors, REO and asset managers, and commercial property managers." },
  ];
}

export default function WhoWeServe() {
  const [who, setWho] = useState(AUDIENCE_DETAIL[0].key);
  const d = AUDIENCE_DETAIL.find((x) => x.key === who) ?? AUDIENCE_DETAIL[0];

  return (
    <div>
      <section style={{ background: "#f6f6f6", borderBottom: "1px solid #e0e0e0", padding: "56px 0 0" }}>
        <Container>
          <Eyebrow>Who we work with</Eyebrow>
          <h1 style={{ margin: "18px 0 0", fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1.04, letterSpacing: "-.02em", color: "#1c1c1c", maxWidth: 720 }}>
            You manage the property. We manage the work.
          </h1>
          <div style={{ marginTop: 40 }}>
            <Tabs items={AUDIENCE_DETAIL.map((k) => ({ value: k.key, label: k.kicker }))} value={who} onChange={setWho} style={{ flexWrap: "wrap", overflowX: "visible", rowGap: 14 }} />
          </div>
        </Container>
      </section>

      <section style={{ padding: "64px 0", background: "#fff" }}>
        <Container>
          <div className="co-split" style={cssVars({ "--split-cols": "1.05fr .95fr", "--split-gap": "56px", "--split-align": "start" })}>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Icon name={d.icon} size={22} strokeColor="var(--brand)" />
                <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: ".14em", textTransform: "uppercase", color: "#898989" }}>{d.kicker}</span>
              </div>
              <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-.01em", color: "#1c1c1c", maxWidth: 560 }}>{d.headline}</h2>
              <p style={{ margin: 0, fontSize: 20, lineHeight: 1.45, color: "#4d4d4d", maxWidth: 560 }}>{d.lead}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {d.services.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ height: 260 }}>
                <PhotoSlot label={"Photo — " + d.kicker.toLowerCase()} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 24, background: "#f6f6f6", border: "1px solid #e0e0e0", borderRadius: 16 }}>
                <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: ".14em", textTransform: "uppercase", color: "#898989" }}>Typical turnaround</span>
                <div style={{ display: "flex", gap: 26, flexWrap: "wrap" }}>
                  {[
                    ["Walkthrough", "24-48 hrs"],
                    ["Scope + estimate", "2 days"],
                    ["Standard unit turn", "5-7 days"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ fontFamily: "IBM Plex Mono, monospace", fontWeight: 500, fontSize: 17, color: "var(--brand)" }}>{v}</span>
                      <span style={{ fontSize: 17, color: "#898989" }}>{k}</span>
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: 17, color: "#898989" }}>Estimated figures — actual timelines vary by scope.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ padding: "14px 0" }}>
        <div style={{ width: "96%", maxWidth: 1600, margin: "0 auto", background: "#f6f6f6", borderRadius: 16, padding: "64px 0" }}>
          <div style={{ width: "89.6%", maxWidth: 1440, margin: "0 auto" }}>
            <div className="co-split" style={cssVars({ "--split-cols": ".8fr 1.2fr", "--split-gap": "56px" })}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Eyebrow>Questions</Eyebrow>
                <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 34, lineHeight: 1.18, letterSpacing: "-.01em", color: "#1c1c1c" }}>What working with us looks like.</h2>
              </div>
              <Accordion items={AUDIENCE_FAQ} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "14px 0 28px" }}>
        <div style={{ width: "96%", maxWidth: 1600, margin: "0 auto", background: "var(--brand)", borderRadius: 16, padding: "80px 0" }}>
          <div style={{ width: "89.6%", maxWidth: 1440, margin: "0 auto" }}>
            <div className="co-split" style={cssVars({ "--split-cols": "1.2fr .8fr", "--split-gap": "56px", "--split-align": "center" })}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1.04, letterSpacing: "-.02em", color: "#fff" }}>One property. One call. Done.</h2>
                <p style={{ margin: 0, fontSize: 20, lineHeight: 1.45, color: "rgba(255,255,255,.86)", maxWidth: 520 }}>
                  However many trades a property needs, it comes back to you as one scope, one schedule, and one invoice.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  ["One scope", "Every trade organized into a single plan with clear pricing."],
                  ["One point of contact", "A coordinator owns the property from walkthrough to finish."],
                  ["One invoice", "A simpler way to manage property work from beginning to end."],
                ].map(([t, b]) => (
                  <div key={t} style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.3)" }}>
                    <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 17, color: "#fff" }}>{t}</span>
                    <span style={{ fontSize: 17, lineHeight: 1.5, color: "rgba(255,255,255,.78)" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
