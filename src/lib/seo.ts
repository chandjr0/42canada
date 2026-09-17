import { absoluteUrl, DEFAULT_OG_ALT, DEFAULT_OG_IMAGE, SITE_NAME } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords: string;
  image?: string;
  imageAlt?: string;
  preloadImage?: string;
};

export function pageHead({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_ALT,
  preloadImage,
}: SeoInput) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "author", content: `${SITE_NAME}` },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_CA" },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1280" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [
      { rel: "canonical", href: url },
      ...(preloadImage
        ? [{ rel: "preload" as const, href: preloadImage, as: "image" as const }]
        : []),
    ],
  };
}
