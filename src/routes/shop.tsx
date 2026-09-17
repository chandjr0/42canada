import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Vote, Sparkles, HandHeart } from "lucide-react";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { Carousel } from "../components/Carousel";
import { pageHead } from "../lib/seo";
import { KEYWORDS_CORE } from "../lib/site";
import heroShop from "../assets/hero-shop.jpg";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";

export const Route = createFileRoute("/shop")({
  head: () =>
    pageHead({
      title: "Community Shop — 42 Canada",
      description:
        "Merchandise where a portion of every purchase funds community causes voted on by shoppers, plus partner-organization products with 100% proceeds passed through.",
      path: "/shop",
      keywords: `${KEYWORDS_CORE}, community shop, cause merchandise, 42shop, ethical shopping`,
      imageAlt: "A tote, coral mug, and sage tee arranged on a wooden table",
      preloadImage: heroShop,
    }),
  component: Shop,
});

const model = [
  { icon: Vote, pct: "10%", label: "Community Causes", body: "Voted on by shoppers, quarterly." },
  {
    icon: Sparkles,
    pct: "5%",
    label: "D&I Fellowship",
    body: "Funding our Diversity & Inclusion Fellowship.",
  },
  {
    icon: HandHeart,
    pct: "100%",
    label: "Partner Products",
    body: "Select items send every dollar to the partner org.",
  },
];

const featured = [
  { img: product1, name: "Answer Tote", price: "$28 CAD", cause: "10% → community causes" },
  { img: product2, name: "Coral Field Mug", price: "$22 CAD", cause: "10% → community causes" },
  { img: product3, name: "Sage Field Tee", price: "$34 CAD", cause: "100% → CCEDNet" },
  { img: product1, name: "Network Journal", price: "$24 CAD", cause: "10% → community causes" },
  { img: product2, name: "Peer Learning Mug", price: "$22 CAD", cause: "5% → D&I Fellowship" },
];

function Shop() {
  return (
    <>
      <Hero
        image={heroShop}
        alt="A tote, coral mug, and sage tee arranged on a wooden table"
        eyebrow="The Community Shop"
        title={
          <>
            Buy something good. <em className="italic text-coral">Do</em> something good.
          </>
        }
        subtitle="Thoughtful goods for people growing community — where a real portion of every purchase funds the work of others."
        cta={{ label: "Visit the Shop", href: "https://42shop.ca" }}
      />

      <section className="py-20 sm:py-28 md:py-36">
        <div className="container-42">
          <Reveal>
            <p className="mb-6 text-center text-xs uppercase tracking-[0.32em] text-coral">
              How the shop gives back
            </p>
            <h2 className="mx-auto max-w-3xl text-center font-serif text-4xl leading-[1.08] text-teal md:text-5xl md:leading-[1.05]">
              A shop with a <em className="italic">conscience</em>, and a real ledger.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
            {model.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.1}>
                <article className="card-lift flex h-full flex-col rounded-3xl bg-secondary p-8 shadow-[0_12px_40px_-28px_rgba(18,64,63,0.3)] sm:p-10">
                  <m.icon
                    className="mb-8 text-coral"
                    size={32}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="font-serif italic text-6xl leading-none text-teal">{m.pct}</p>
                  <h3 className="mt-4 text-sm uppercase tracking-[0.22em] text-charcoal/70">
                    {m.label}
                  </h3>
                  <p className="mt-4 leading-relaxed text-charcoal/80">{m.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal py-20 text-cream sm:py-28 md:py-36">
        <div className="container-42">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">
              Featured this season
            </p>
            <h2 className="mb-12 max-w-xl font-serif text-4xl leading-[1.08] md:mb-16 md:text-5xl md:leading-[1.05]">
              Small goods, <em className="italic">real</em> impact.
            </h2>
          </Reveal>
          <Carousel ariaLabel="Featured products" variant="onDark">
            {featured.map((p, i) => (
              <article key={i} className="group">
                <div className="img-zoom aspect-[4/5] overflow-hidden rounded-2xl bg-cream/10 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]">
                  <img
                    src={p.img}
                    alt={`${p.name}, ${p.price}`}
                    width={1000}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl">{p.name}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-coral">{p.cause}</p>
                  </div>
                  <p className="shrink-0 text-sm text-cream/85">{p.price}</p>
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
              The full shop lives at <em className="italic text-coral">42shop.ca</em>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="https://42shop.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill mt-12 bg-coral text-cream hover:bg-coral/90 hover:shadow-[0_12px_30px_-12px_rgba(232,115,74,0.7)]"
            >
              Visit the Shop <ExternalLink size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
