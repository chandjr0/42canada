import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import {
  SITE_EMAIL,
  SITE_INSTAGRAM,
  SITE_LINKEDIN,
  SITE_YOUTUBE,
  isExternalUrl,
} from "../lib/site";

const items = [
  { icon: Linkedin, label: "LinkedIn", href: SITE_LINKEDIN },
  { icon: Instagram, label: "Instagram", href: SITE_INSTAGRAM },
  { icon: Youtube, label: "YouTube", href: SITE_YOUTUBE },
  { icon: Mail, label: "Email", href: SITE_EMAIL },
] as const;

export function SocialLinks({
  compact = false,
  includeEmail = true,
}: {
  compact?: boolean;
  includeEmail?: boolean;
}) {
  const size = compact ? 16 : 18;
  const visible = includeEmail ? items : items.filter((item) => item.label !== "Email");
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {visible.map(({ icon: Icon, label, href }) => {
        const live = isExternalUrl(href);
        const className =
          "card-lift flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-cream/25 px-0 text-cream transition-colors hover:border-coral hover:bg-coral";
        if (live) {
          return (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} w-11`}
              >
                <Icon size={size} aria-hidden="true" />
              </a>
            </li>
          );
        }
        return (
          <li key={label}>
            <span
              className={`${className} px-3 text-xs tracking-wide`}
              title={`${label}: Add here`}
            >
              <Icon size={size} aria-hidden="true" />
              <span>Add here</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
