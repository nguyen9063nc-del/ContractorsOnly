import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { propertyTypes, timeWindows } from "~/data/contact";
import { site } from "~/data/site";

/**
 * Enquiry form.
 *
 * NOTE — not wired to a destination yet. The site is prerendered with
 * `ssr: false`, so React Router `action` exports are unavailable and submission
 * has to happen client-side. `submitEnquiry` below is the single place to
 * change: point it at a Pages Function, a form service, or the Zoho endpoint
 * the previous site used.
 *
 * Until then the form validates, collects everything, and tells the visitor to
 * call instead — it never silently pretends a message was sent.
 */
async function submitEnquiry(data: FormData): Promise<void> {
  // TODO: replace with a real endpoint, e.g.
  //   await fetch("/api/enquiry", { method: "POST", body: data });
  void data;
  throw new Error("NOT_WIRED");
}

type Status = "idle" | "sending" | "sent" | "unwired";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      await submitEnquiry(new FormData(form));
      setStatus("sent");
      form.reset();
    } catch (err) {
      // Distinguish "no backend yet" from a genuine network failure, so the
      // placeholder state can't be mistaken for a bug once it is wired up.
      setStatus(err instanceof Error && err.message === "NOT_WIRED" ? "unwired" : "idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="notice" role="status">
        <Check size={20} aria-hidden />
        <div className="stack-sm">
          <span className="item-name">Request received</span>
          <span className="caption">
            We&rsquo;ll be in touch shortly to arrange a walkthrough.
          </span>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">
            Your name <span className="req">*</span>
          </label>
          <input className="input" id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input
            className="input"
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone <span className="req">*</span>
          </label>
          <input className="input" id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="address">
          Property address <span className="req">*</span>
        </label>
        <input
          className="input"
          id="address"
          name="address"
          type="text"
          required
          autoComplete="street-address"
        />
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="propertyType">Property type</label>
          <div className="select-wrap">
            <select className="select" id="propertyType" name="propertyType" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown size={18} aria-hidden />
          </div>
        </div>
        <div className="field">
          <label htmlFor="timing">When do you need it done?</label>
          <div className="select-wrap">
            <select className="select" id="timing" name="timing" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {timeWindows.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown size={18} aria-hidden />
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="contactWindow">Best time to reach you</label>
        <input
          className="input"
          id="contactWindow"
          name="contactWindow"
          type="text"
          placeholder="Weekday mornings, after 4pm, etc."
        />
      </div>

      <div className="field">
        <label htmlFor="work">
          What does the property need? <span className="req">*</span>
        </label>
        <textarea
          className="textarea"
          id="work"
          name="work"
          required
          placeholder="Paint, flooring, landscaping, a full turnover — as much or as little detail as you have."
        />
        <span className="caption">
          If you have photos or documents, mention them here and we&rsquo;ll reply with somewhere
          to send them.
        </span>
      </div>

      <div className="stack-sm">
        <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Start your project"}
        </button>

        {status === "unwired" ? (
          <div className="notice" role="alert">
            <div className="stack-sm">
              <span className="item-name">Form not connected yet</span>
              <span className="caption">
                This form has no destination configured. Please call{" "}
                <a href={site.phoneHref}>{site.phone}</a> or email{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> and we&rsquo;ll get straight to
                it.
              </span>
            </div>
          </div>
        ) : (
          <span className="caption">
            We reply to every request. No obligation, and no sales sequence.
          </span>
        )}
      </div>
    </form>
  );
}
