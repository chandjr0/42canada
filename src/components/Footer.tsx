import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";
import { SocialLinks } from "./SocialLinks";

const explore = [
  { to: "/", label: "Home" },
  { to: "/podcast", label: "Podcast" },
  { to: "/coaching", label: "Coaching & Speaking" },
  { to: "/shop", label: "Community Shop" },
  { to: "/about", label: "About Laurie" },
  { to: "/join", label: "Join" },
] as const;

export function Footer() {
  return (
    <footer className="mt-16 bg-teal text-cream sm:mt-24 lg:mt-32">
      <div className="container-42 py-14 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <BrandLogo
              invertWordmark
              markClassName="h-12 w-12 sm:h-14 sm:w-14 rounded-lg"
              className="gap-3"
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80">
              A social enterprise growing peer-to-peer learning, inspiration and support for people
              doing community work — in Canada and around the world.
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-8">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-cream/60">Explore</p>
            <nav className="grid grid-cols-2 gap-3 text-cream/90" aria-label="Footer">
              {explore.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm transition-colors duration-300 hover:text-coral"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/60 sm:mt-16 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} 42 Canada. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral transition-colors hover:text-cream"
            >
              The Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
