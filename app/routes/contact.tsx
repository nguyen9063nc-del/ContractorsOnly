import type { Route } from "./+types/contact";
import { Container } from "~/components/site/Container";
import { ZohoContractorForm } from "~/components/site/ZohoContractorForm";
import { Icon } from "~/components/core/Icon";
import { cssVars } from "~/styles/css-vars";
import { ASK_FOR, CONTACT_FAQS, EMAIL, PHONE_DISPLAY, PHONE_HREF, ADDRESS_LINE1, ADDRESS_LINE2 } from "~/data/content";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Get your project started — Contractors Only" },
    { name: "description", content: "Send us the property and we'll be in touch. Painting, repairs, cleaning, landscaping, and turnovers coordinated by one point of contact." },
  ];
}

const cardStyle = { display: "flex", flexDirection: "column" as const, gap: 12, padding: 24, background: "#f6f6f6", border: "1px solid #e0e0e0", borderRadius: 16 };
const eyebrowStyle = { fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(17px,1.15vw,20px)", letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#898989" };

export default function Contact() {
  return (
    <div>
      <section style={{ padding: "4px 0 64px", background: "#fff" }}>
        <Container>
          <div className="co-split" style={cssVars({ "--split-cols": "1.1fr .9fr", "--split-gap": "56px", "--split-align": "start" })}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <ZohoContractorForm />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingTop: 8 }}>
              <div style={cardStyle}>
                <span style={eyebrowStyle}>Getting started</span>
                <p style={{ margin: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.6, color: "#4d4d4d" }}>
                  We will need some basic information from you so we can get on the same page. After you fill out the form we will contact you and we can discuss next steps and get the project started.
                </p>
              </div>
              <div style={cardStyle}>
                <span style={eyebrowStyle}>What we&apos;ll ask for</span>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {ASK_FOR.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "clamp(17px,1.15vw,20px)", color: "#4d4d4d" }}>
                      <Icon name="check" size={16} strokeColor="var(--brand)" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={cardStyle}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <span style={eyebrowStyle}>Prefer to talk?</span>
                  <a href={PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: "clamp(17px,1.15vw,20px)", color: "var(--brand)", textDecoration: "none", borderBottom: 0 }}>
                    <Icon name="phone" size={16} strokeColor="var(--brand)" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <p style={{ margin: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.55, color: "#4d4d4d" }}>The best way to get in touch is to fill out the form but if you have any questions or concerns you can call this number.</p>
              </div>
              <div style={{ ...cardStyle, gap: 16 }}>
                <span style={eyebrowStyle}>Contact information</span>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <Icon name="map-pin" size={18} strokeColor="var(--brand)" style={{ marginTop: 3, flex: "0 0 auto" }} />
                  <span style={{ fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.5, color: "#1c1c1c" }}>
                    {ADDRESS_LINE1}
                    <br />
                    {ADDRESS_LINE2}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Icon name="phone" size={18} strokeColor="var(--brand)" style={{ flex: "0 0 auto" }} />
                  <a href={PHONE_HREF} style={{ fontWeight: 600, fontSize: "clamp(17px,1.15vw,20px)", color: "#1c1c1c", textDecoration: "none", borderBottom: 0 }}>
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Icon name="mail" size={18} strokeColor="var(--brand)" style={{ flex: "0 0 auto" }} />
                  <a href={`mailto:${EMAIL}`} style={{ fontWeight: 600, fontSize: "clamp(17px,1.15vw,20px)", color: "#1c1c1c", textDecoration: "none", borderBottom: 0, wordBreak: "break-all" }}>
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ background: "#fff", padding: "14px 0" }}>
        <div style={{ width: "96%", maxWidth: 1600, margin: "0 auto", background: "#f6f6f6", borderRadius: 16 }}>
          <div style={{ width: "89.6%", maxWidth: 1440, margin: "0 auto", padding: "clamp(60px,9vh,116px) 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 720, marginBottom: "clamp(26px,4vh,42px)" }}>
              <h2 style={{ margin: 0, fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(34px,4.4vw,56px)", lineHeight: 0.95, letterSpacing: "-.025em", textTransform: "uppercase", color: "var(--brand)" }}>
                Common questions
              </h2>
              <p style={{ margin: 0, fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.6, color: "#4d4d4d" }}>If your question isn&apos;t here, call or email us and we will answer it directly.</p>
            </div>
            <div className="co-grid" style={cssVars({ "--cols": 3, "--cols-tablet": 2, "--cols-mobile": 1, "--gap-x": "40px", "--gap-y": "28px" })}>
              {CONTACT_FAQS.map((f) => (
                <div key={f.q} style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
                  <span style={{ fontFamily: "Archivo, Arial, sans-serif", fontWeight: 700, fontSize: 19, lineHeight: 1.25, color: "#1c1c1c" }}>{f.q}</span>
                  <span style={{ fontSize: "clamp(17px,1.15vw,20px)", lineHeight: 1.6, color: "#4d4d4d" }}>{f.a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
