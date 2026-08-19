import type { HTMLAttributes } from "react";
import { Card } from "../core/Card";
import { Icon, type IconProps } from "../core/Icon";
import { Button } from "../core/Button";

export interface AudienceCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: IconProps["name"];
  headline: string;
  body?: string;
  cta?: string;
  onCta?: () => void;
  tags?: string[];
}

export function AudienceCard({ label, icon, headline, body, cta, onCta, tags = [], style, ...rest }: AudienceCardProps) {
  return (
    <Card accent interactive {...rest} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", height: "100%", ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {icon ? <Icon name={icon} size={20} strokeColor="var(--brand)" /> : null}
        <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>
      </div>
      <h3 style={{ font: "var(--type-h3)" }}>{headline}</h3>
      {body ? <p style={{ font: "var(--type-body)", color: "var(--text-body)" }}>{body}</p> : null}
      {tags.length ? <div style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{tags.join(" • ")}</div> : null}
      {cta ? (
        <div style={{ marginTop: "auto", paddingTop: "var(--space-2)" }}>
          <Button variant="secondary" size="sm" onClick={onCta} iconRight={<Icon name="arrow-right" size={15} />}>
            {cta}
          </Button>
        </div>
      ) : null}
    </Card>
  );
}
