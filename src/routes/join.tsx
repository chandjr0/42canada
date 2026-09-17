import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { SignUpForm } from "../components/SignUpForm";
import { SocialLinks } from "../components/SocialLinks";
import { pageHead } from "../lib/seo";
import { KEYWORDS_CORE, SITE_EMAIL } from "../lib/site";
import heroJoin from "../assets/hero-join.jpg";

export const Route = createFileRoute("/join")({
  head: () =>
    pageHead({
      title: "Join the Network — 42 Canada",
      description:
        "Join the 42 Canada network for occasional letters from Laurie — podcast drops, coaching openings, and quiet inspiration for community work.",
      path: "/join",
      keywords: `${KEYWORDS_CORE}, newsletter, join the network, community updates`,
      imageAlt: "A circle of hands stacked together on a sunlit table",
      preloadImage: heroJoin,
    }),
  component: Join,
});

function Join() {
  return (
    <>
      <Hero
        image={heroJoin}
        alt="A circle of hands stacked together on a sunlit table"
        eyebrow="Come alongside"
        title={
          <>
            Join the <em className="italic text-coral">Network.</em>
          </>
        }
        subtitle="One letter, once in a while. Real practice, no filler — for people doing community work."
        overlayIntensity={0.58}
      />

      <section className="py-20 sm:py-28 md:py-36">
        <div className="container-42 grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">Sign up</p>
            <h2 className="mb-10 font-serif text-4xl leading-[1.08] text-teal md:text-5xl md:leading-[1.05]">
              Tell us where you're pointed.
            </h2>
            <SignUpForm />
          </Reveal>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <aside className="card-lift rounded-3xl bg-teal p-8 text-cream shadow-[0_24px_50px_-28px_rgba(18,64,63,0.55)] sm:p-10">
                <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">Direct</p>
                <h3 className="mb-4 font-serif text-2xl">Prefer to just say hello?</h3>
                <p className="mb-8 text-sm leading-relaxed text-cream/80">
                  For coaching, speaking, media, or partnership enquiries — reach out directly. We
                  read everything.
                </p>
                <p className="mb-8 inline-flex items-center gap-3 border-b border-coral/60 pb-1 text-coral">
                  <Mail size={16} aria-hidden="true" /> {SITE_EMAIL}
                </p>
                <div className="mt-10 border-t border-cream/15 pt-8">
                  <p className="mb-4 text-xs uppercase tracking-[0.28em] text-cream/60">
                    Elsewhere
                  </p>
                  <SocialLinks compact includeEmail={false} />
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
