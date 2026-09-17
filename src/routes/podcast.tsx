import { createFileRoute } from "@tanstack/react-router";
import { Youtube, Headphones, Radio } from "lucide-react";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { Carousel } from "../components/Carousel";
import { JsonLd } from "../components/JsonLd";
import { pageHead } from "../lib/seo";
import { KEYWORDS_CORE, SITE_URL } from "../lib/site";
import heroPodcast from "../assets/hero-podcast.jpg";
import episode1 from "../assets/episode-1.jpg";
import episode2 from "../assets/episode-2.jpg";
import episode3 from "../assets/episode-3.jpg";

export const Route = createFileRoute("/podcast")({
  head: () =>
    pageHead({
      title: "The 42 Community Leadership Podcast — 42 Canada",
      description:
        "Deep, funny, unexpected conversations with community development leaders and experts from Canada and around the world.",
      path: "/podcast",
      keywords: `${KEYWORDS_CORE}, community leadership podcast, YouTube podcast, community development conversations`,
      imageAlt: "Two people recording a podcast conversation beside a studio microphone",
      preloadImage: heroPodcast,
    }),
  component: Podcast,
});

const episodes = [
  {
    img: episode1,
    ep: "Ep. 42",
    guest: "Amaru Vega",
    topic: "Housing as a Human Right",
    hook: "What if the shelter conversation started with dignity, not deficit?",
  },
  {
    img: episode2,
    ep: "Ep. 41",
    guest: "Elder Mitchell",
    topic: "Learning the Long Way",
    hook: "Forty years of listening before speaking, and what it built.",
  },
  {
    img: episode3,
    ep: "Ep. 40",
    guest: "Nia Okoye",
    topic: "The Grassroots Playbook",
    hook: "How a block-party network became a policy shift.",
  },
  {
    img: episode1,
    ep: "Ep. 39",
    guest: "Simone Laurent",
    topic: "Rural Innovation, Real Talk",
    hook: "Broadband, buses, and the boring miracles that hold towns together.",
  },
  {
    img: episode2,
    ep: "Ep. 38",
    guest: "Dr. Idris Bello",
    topic: "Global Health, Local Roots",
    hook: "Peer learning between Kano and Kingston.",
  },
  {
    img: episode3,
    ep: "Ep. 37",
    guest: "Maya Reinhardt",
    topic: "Mental Health Is Infrastructure",
    hook: "Treating wellbeing like water and roads.",
  },
];

function Podcast() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "PodcastSeries",
          name: "The 42 Community Leadership Podcast",
          url: `${SITE_URL}/podcast`,
          description:
            "Deep, funny, unexpected conversations with community development leaders from Canada and around the world.",
        }}
      />
      <Hero
        image={heroPodcast}
        alt="Two people recording a podcast conversation beside a studio microphone"
        eyebrow="The 42 Podcast"
        title={
          <>
            Conversations that <em className="italic text-coral">travel.</em>
          </>
        }
        subtitle="Deep, funny, unexpected exchanges with community development leaders from Canada and around the world — and the practices they're building together."
        cta={{ label: "Watch on YouTube", href: "https://www.youtube.com/" }}
      />

      <section className="py-20 sm:py-28 md:py-36">
        <div className="container-42 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">Why we made it</p>
            <h2 className="font-serif text-4xl leading-[1.08] text-teal md:text-5xl md:leading-[1.05]">
              Because the best ideas rarely arrive in a report.
            </h2>
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-5 text-lg leading-relaxed text-charcoal/80 md:col-span-6 md:col-start-7"
          >
            <p>
              Community development can feel lonely. You're translating between funders and
              neighbours, between policy and pavement — and the wisdom you need is usually in
              someone else's town.
            </p>
            <p>
              The podcast pulls those people into one room. No jargon, no PR polish. Just leaders
              talking about what actually worked, what broke, and what's next.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[Headphones, Youtube, Radio].map((Icon, i) => (
                <p
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-teal/25 px-4 py-2 text-xs text-teal"
                >
                  <Icon size={14} aria-hidden="true" />{" "}
                  {["Apple Podcasts", "YouTube", "Spotify"][i]}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-teal py-20 text-cream sm:py-28 md:py-36">
        <div className="container-42">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">Recent episodes</p>
            <h2 className="mb-12 max-w-2xl font-serif text-4xl leading-[1.08] md:mb-16 md:text-5xl md:leading-[1.05]">
              A season of <em className="italic">generous</em> conversations.
            </h2>
          </Reveal>
          <Carousel ariaLabel="Recent podcast episodes" variant="onDark">
            {episodes.map((ep, i) => (
              <article key={i} className="group">
                <div className="img-zoom aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal/40 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]">
                  <img
                    src={ep.img}
                    alt={`${ep.guest} on ${ep.topic}`}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-coral">
                    {ep.ep} · with {ep.guest}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{ep.topic}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{ep.hook}</p>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="py-20 text-center sm:py-32 md:py-40">
        <div className="container-42">
          <Reveal>
            <p className="mission-type mx-auto max-w-4xl text-teal text-[clamp(2.15rem,7vw,6rem)]">
              Subscribe. It's <em className="italic text-coral">free</em>, and it matters.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-coral text-cream hover:bg-coral/90 hover:shadow-[0_12px_30px_-12px_rgba(232,115,74,0.7)]"
              >
                <Youtube size={16} aria-hidden="true" /> Watch on YouTube
              </a>
              <a
                href="#"
                className="btn-pill border border-teal/30 text-teal hover:bg-teal hover:text-cream"
              >
                <Headphones size={16} aria-hidden="true" /> Subscribe on Apple
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
