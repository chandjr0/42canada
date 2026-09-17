export const SITE_NAME = "42 Canada";
export const SITE_TAGLINE = "The Answer Is in the Network";
export const SITE_URL = (
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  "https://42canada.ca"
).replace(/\/$/, "");

export const SITE_EMAIL = "Add here";
export const SITE_LINKEDIN = "https://www.linkedin.com/company/42canada/";
export const SITE_INSTAGRAM = "Add here";
export const SITE_YOUTUBE = "Add here";
export const SITE_DESCRIPTION =
  "42 Canada is a social enterprise offering inspiration, support and peer-to-peer learning for people doing community work — in Canada and around the world.";

export const DEFAULT_OG_IMAGE = "/og-image.jpg";
export const DEFAULT_OG_ALT =
  "Community members of different ages stacking their hands together outdoors at dusk";

export const KEYWORDS_CORE =
  "42 Canada, community development, peer-to-peer learning, community work, Laurie Cook, social enterprise, Canada";

export function isExternalUrl(value: string) {
  return /^https?:\/\//.test(value);
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
