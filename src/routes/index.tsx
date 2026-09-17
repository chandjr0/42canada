import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mic, Users, Presentation, ShoppingBag, ArrowUpRight, ArrowRight } from "lucide-react";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { MissionCallout } from "../components/MissionCallout";
import { Carousel } from "../components/Carousel";
import { pageHead } from "../lib/seo";
import { KEYWORDS_CORE } from "../lib/site";
import heroHome from "../assets/hero-home.jpg";
import community1 from "../assets/community-1.jpg";
import community2 from "../assets/community-2.jpg";
import episode1 from "../assets/episode-1.jpg";
import episode2 from "../assets/episode-2.jpg";
import episode3 from "../assets/episode-3.jpg";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "42 Canada — The Answer Is in the Network",
      description:
        "Inspiration, support and peer-to-peer learning for people doing community work — in Canada and around the world.",
      path: "/",
      keywords: `${KEYWORDS_CORE}, podcast, coaching, community shop, speaking`,
      imageAlt:
        "Community members of different ages stacking their hands together outdoors at dusk",
      preloadImage: heroHome,
    }),
  component: Home,
});

const arms = [
  {
    icon: Mic,
    title: "The Podcast",
    body: "Deep, funny, unexpected conversations with community development leaders around the world.",
    to: "/podcast" as const,
  },
  {
    icon: Users,
    title: "Coaching",
    body: "Custom 1:1 and team coaching for leaders growing something good.",
    to: "/coaching" as const,
  },
  {
    icon: Presentation,
    title: "Speaking & Facilitation",
    body: "Laurie as host, speaker or facilitator for gatherings that need warmth and rigour.",
    to: "/coaching" as const,
  },
  {
    icon: ShoppingBag,
    title: "Community Shop",
    body: "Merchandise where a portion of every purchase funds community causes voted on by shoppers.",
    to: "/shop" as const,
  },
];

const episodes = [
  { img: episode1, guest: "Amaru Vega", topic: "Housing as a Human Right", ep: "Ep. 42" },
  { img: episode2, guest: "Elder Mitchell", topic: "Learning the Long Way", ep: "Ep. 41" },
  { img: episode3, guest: "Nia Okoye", topic: "The Grassroots Playbook", ep: "Ep. 40" },
  { img: episode1, guest: "Simone Laurent", topic: "Rural Innovation, Real Talk", ep: "Ep. 39" },
];

const products = [
  { img: product1, name: "Answer Tote", price: "$28 CAD", cause: "10% → community causes" },
  { img: product2, name: "Coral Field Mug", price: "$22 CAD", cause: "10% → community causes" },
  { img: product3, name: "Sage Field Tee", price: "$34 CAD", cause: "100% → partner org" },
];

function Home() {
  return (
    <>
      <Hero
        image={heroHome}
        alt="Community members of different ages stacking their hands together outdoors at dusk"
        eyebrow="42 Canada"
        title={
          <>
            The Answer Is <em className="italic text-coral">in the Network.</em>
          </>
        }
        subtitle="Inspiration, support, and peer-to-peer learning for people doing community work — in Canada and around the world."
        cta={{ label: "Sign Up for Updates", to: "/join" }}
      />

      <MissionCallout eyebrow="Our promise">
        We're Growing
        <br />
        Something <em className="italic text-coral">Good.</em>
      </MissionCallout>

      <section className="bg-teal py-20 text-cream sm:py-28 md:py-36">
        <div className="container-42">
          <div className="mb-12 grid items-end gap-10 md:mb-20 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-6">
              <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">
                Four arms, one mission
              </p>
              <h2 className="font-serif text-4xl leading-[1.08] sm:text-5xl md:text-6xl md:leading-[1.05]">
                One place for the
                <br />
                <em className="italic">work that matters.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
              <p className="text-lg leading-relaxed text-cream/80">
                A social enterprise, not a business. Every arm exists to strengthen the people
                building healthier, more inclusive communities.
              </p>
            </Reveal>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 md:grid-cols-2 md:gap-px lg:grid-cols-4">
            {arms.map((arm, i) => (
              <Reveal key={arm.title} delay={i * 0.08}>
                <Link
                  to={arm.to}
                  className="group block h-full bg-teal p-8 transition-colors duration-500 hover:bg-charcoal/40 sm:p-10"
                >
                  <arm.icon
                    className="mb-8 text-coral transition-transform duration-500 group-hover:scale-110"
                    size={28}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mb-4 font-serif text-2xl text-cream">{arm.title}</h3>
                  <p className="mb-8 text-sm leading-relaxed text-cream/70">{arm.body}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-coral transition-all duration-300 group-hover:gap-4">
                    Explore <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 md:py-44">
        <div className="container-42 grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-6">
            <div className="relative">
              <div className="img-zoom overflow-hidden rounded-2xl">
                <img
                  src={community2}
                  alt="Two community leaders in warm mentorship conversation"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-2xl bg-coral p-8 text-cream shadow-[0_18px_40px_-20px_rgba(232,115,74,0.8)] md:block"
              >
                <p className="font-serif text-4xl italic leading-none">30+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-cream/85">
                  Years in adult education & community development
                </p>
              </motion.div>
            </div>
          </Reveal>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">Why 42</p>
              <h2 className="font-serif text-4xl leading-[1.08] text-teal md:text-5xl md:leading-[1.05]">
                The answer to life, the universe, and
                <em className="italic"> everything.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
                Founder Laurie Cook has spent three decades in the messy, beautiful work of building
                community. She started 42 Canada because the answer she kept coming back to — the
                one worth everything — was other people. The network. The peer beside you doing
                similar work in a different place.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 border-b border-coral pb-1 font-medium text-teal transition-all duration-300 hover:gap-5"
              >
                Meet Laurie <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28 md:py-36">
        <div className="container-42">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-coral">
                From the podcast
              </p>
              <h2 className="max-w-xl font-serif text-4xl leading-[1.08] text-teal md:text-5xl md:leading-[1.05]">
                Conversations with people doing the work.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/podcast"
                className="inline-flex items-center gap-2 font-medium text-teal transition-colors duration-300 hover:text-coral"
              >
                All episodes <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <Carousel ariaLabel="Recent podcast episodes">
            {episodes.map((ep, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="img-zoom aspect-[4/5] overflow-hidden rounded-2xl bg-teal/10 shadow-[0_16px_40px_-28px_rgba(18,64,63,0.45)]">
                  <img
                    src={ep.img}
                    alt={`${ep.guest} on the 42 Community Leadership Podcast, ${ep.topic}`}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-coral">{ep.ep}</p>
                  <h3 className="mt-2 font-serif text-2xl text-teal">{ep.topic}</h3>
                  <p className="mt-1 text-sm text-charcoal/60">with {ep.guest}</p>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="py-20 sm:py-32 md:py-40">
        <div className="container-42 grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">
                The Community Shop
              </p>
              <h2 className="font-serif text-4xl leading-[1.08] text-teal md:text-5xl md:leading-[1.05]">
                Every purchase votes for a<em className="italic"> better neighbourhood.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
                10% of net proceeds go to community causes chosen quarterly by shoppers. Another 5%
                funds our Diversity & Inclusion Fellowship. Some partner products send 100% straight
                to the organizations behind them.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/shop"
                className="btn-pill mt-10 border border-teal/30 text-teal hover:bg-teal hover:text-cream"
              >
                Explore the Shop <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {products.map((p, i) => (
                <div key={i} className={i === 1 ? "translate-y-4 sm:translate-y-8" : ""}>
                  <div className="img-zoom aspect-[4/5] overflow-hidden rounded-xl bg-secondary shadow-[0_12px_30px_-20px_rgba(18,64,63,0.4)]">
                    <img
                      src={p.img}
                      alt={`${p.name} from the 42 Canada community shop`}
                      width={1000}
                      height={1200}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs text-charcoal/70">{p.name}</p>
                </div>
              ))}
            </div>
          </Reveal>
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
        <div className="absolute inset-0 bg-coral/85" />
        <div className="relative z-10 container-42 py-24 text-center text-cream sm:py-32 md:py-40">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-cream/80">
              Join the network
            </p>
            <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-[1.05] sm:text-5xl md:text-7xl md:leading-[1.02]">
              You're not doing this
              <br />
              <em className="italic">on your own.</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg text-cream/90">
              Sign up for occasional letters from Laurie — new episodes, coaching openings, and
              quiet inspiration for the long work.
            </p>
            <Link to="/join" className="btn-pill mt-10 bg-teal text-cream hover:bg-charcoal">
              Sign Up for Updates <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
