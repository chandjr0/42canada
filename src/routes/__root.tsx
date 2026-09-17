import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SmoothScroll } from "../components/SmoothScroll";
import { SkipLink } from "../components/SkipLink";
import { PageTransition } from "../components/PageTransition";
import { NavProgress } from "../components/NavProgress";
import { JsonLd } from "../components/JsonLd";
import {
  SITE_DESCRIPTION,
  SITE_LINKEDIN,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[80svh] items-center justify-center bg-cream px-4 pt-24">
      <div className="max-w-md text-center">
        <p className="font-serif italic text-8xl text-teal">404</p>
        <h1 className="mt-4 font-serif text-2xl text-charcoal">Off the map</h1>
        <p className="mt-3 text-sm text-charcoal/70">
          This page isn't part of the network — yet. Let's get you back home.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-pill bg-coral text-cream hover:bg-coral/90">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    console.error("Application error", error);
  }, [error]);

  return (
    <div className="flex min-h-[80svh] items-center justify-center bg-cream px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-charcoal">Something went sideways</h1>
        <p className="mt-3 text-sm text-charcoal/70">Try refreshing, or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-pill bg-coral text-cream hover:bg-coral/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="btn-pill border border-teal/30 text-teal hover:bg-teal hover:text-cream"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: SITE_NAME },
      { name: "theme-color", content: "#12403F" },
      { name: "color-scheme", content: "light" },
      { name: "application-name", content: SITE_NAME },
      { name: "apple-mobile-web-app-title", content: SITE_NAME },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_CA" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: absoluteUrl(DEFAULT_OG_IMAGE) },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              logo: absoluteUrl("/icon-512.png"),
              image: absoluteUrl(DEFAULT_OG_IMAGE),
              sameAs: [SITE_LINKEDIN],
              founder: {
                "@type": "Person",
                name: "Laurie Cook",
                jobTitle: "Founder & CEO",
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: SITE_NAME,
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              inLanguage: "en-CA",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }}
      />
      <SkipLink />
      <SmoothScroll />
      <NavProgress />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
