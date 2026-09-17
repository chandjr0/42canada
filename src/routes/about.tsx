import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { JsonLd } from "../components/JsonLd";
import { pageHead } from "../lib/seo";
import { KEYWORDS_CORE, SITE_URL } from "../lib/site";
import laurieCook from "../assets/laurie-cook.png";
import community1 from "../assets/community-1.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Laurie Cook — 42 Canada",
      description:
        "Laurie Cook, MAdEd — founder of 42 Canada. 30+ years in adult education and community development, journalist, PhD candidate, President of CCEDNet.",
      path: "/about",
      keywords: `${KEYWORDS_CORE}, Laurie Cook, MAdEd, CCEDNet, adult education, inclusive leadership`,
      imageAlt: "Laurie Cook, founder of 42 Canada",
      preloadImage: laurieCook,
    }),
  component: About,
});

const values = [
  {
    title: "Inclusive by design",
    body: "Access isn't an add-on. Lived experience with disability shapes how we build, invite, and lead.",
  },
  {
    title: "Peer-to-peer over top-down",
    body: "The people doing the work already hold most of the answers. Our job is to connect them.",
  },
  {
    title: "Global perspective",
    body: "Canadian roots, worldwide network. Local wisdom travels well when we make room for it.",
  },
  {
    title: "Wellbeing as foundation",
    body: "Sustainable community change starts with the sustainability of the people leading it.",
  },
];

function About() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Laurie Cook",
          jobTitle: "Founder & CEO",
          worksFor: { "@type": "Organization", name: "42 Canada", url: SITE_URL },
          alumniOf: "Adult Education",
          description:
            "Founder of 42 Canada. Adult educator, journalist, PhD candidate, and President of the Canadian Community Economic Development Network.",
          image: laurieCook,
        }}
      />
      <section className="relative flex min-h-svh items-center bg-cream pt-20">
        <div className="container-42 grid items-center gap-12 py-16 md:grid-cols-12 md:gap-16 md:py-0">
          <div className="md:col-span-5">
            <div className="mx-auto max-w-sm md:mx-0">
              <img
                src={laurieCook}
                alt="Laurie Cook, founder of 42 Canada"
                width={200}
                height={200}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-square w-full rounded-3xl object-cover object-top shadow-[0_24px_50px_-28px_rgba(18,64,63,0.45)] ring-1 ring-teal/10"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="mb-5 text-[0.7rem] uppercase tracking-[0.32em] text-coral sm:text-xs">
              About the founder
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-teal sm:text-6xl md:text-7xl">
              Laurie <em className="italic text-coral">Cook.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg md:text-xl">
              Founder & CEO of 42 Canada. Adult educator, journalist, PhD candidate, and lifelong
              community organizer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 md:py-36">
        <div className="container-42 grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">
              The long story short
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] text-teal md:text-5xl md:leading-[1.05]">
              Three decades. One <em className="italic">stubborn</em> belief in people.
            </h2>
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-charcoal/85 md:col-span-6 md:col-start-7">
            <Reveal delay={0.05}>
              <p>
                Laurie started in journalism and film/TV, learning early that stories aren't
                decoration — they're how communities recognize themselves. She spent the next thirty
                years in adult education and community development, holding an MAdEd and now
                completing a PhD in Educational Studies, focused on lifelong learning in community
                work.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                She serves as President of the Canadian Community Economic Development Network
                (CCEDNet), and lives with a disability that shapes an inclusive, strengths-based way
                of leading — one where access is designed in, not tacked on.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                42 Canada is the studio she built to bring the whole practice together: the podcast,
                the coaching, the speaking, the shop. All of it in service of the people doing the
                work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-24 md:py-32">
        <div className="container-42 text-center">
          <Reveal>
            <blockquote>
              <p className="mission-type mx-auto max-w-5xl text-teal text-[clamp(2.15rem,8vw,7rem)]">
                "The work is <em className="italic text-coral">slow</em>. The people are{" "}
                <em className="italic text-coral">worth it.</em>"
              </p>
              <footer className="mt-8 text-xs uppercase tracking-[0.28em] text-charcoal/60">
                — Laurie
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 md:py-36">
        <div className="container-42">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">What we stand on</p>
            <h2 className="mb-12 max-w-2xl font-serif text-4xl leading-[1.08] text-teal md:mb-16 md:text-5xl md:leading-[1.05]">
              Four values that shape everything.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="card-lift h-full rounded-3xl border border-teal/15 bg-card p-8 shadow-[0_12px_40px_-28px_rgba(18,64,63,0.35)] hover:border-coral sm:p-10">
                  <p className="font-serif italic text-6xl leading-none text-coral/30">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl text-teal">{v.title}</h3>
                  <p className="mt-4 leading-relaxed text-charcoal/80">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={community1}
          alt="Community members laughing together under string lights at an outdoor gathering"
          width={1200}
          height={1500}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-teal/85" />
        <div className="relative z-10 container-42 py-20 text-center text-cream sm:py-28">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-[1.08] sm:text-4xl md:text-5xl md:leading-[1.05]">
              Want to work with Laurie, or just get her letters?
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/coaching" className="btn-pill bg-coral hover:bg-coral/90">
                Book Coaching or Speaking <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                to="/join"
                className="btn-pill border border-cream/40 hover:bg-cream hover:text-teal"
              >
                Sign Up for Updates <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
