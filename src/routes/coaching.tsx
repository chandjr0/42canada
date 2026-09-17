import { createFileRoute } from "@tanstack/react-router";
import { Users, UsersRound, Mic2, Compass, Home, Bus, Briefcase, HeartPulse } from "lucide-react";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { SignUpForm } from "../components/SignUpForm";
import { pageHead } from "../lib/seo";
import { KEYWORDS_CORE } from "../lib/site";
import heroCoaching from "../assets/hero-coaching.jpg";

export const Route = createFileRoute("/coaching")({
  head: () =>
    pageHead({
      title: "Coaching & Speaking — 42 Canada",
      description:
        "Custom 1:1 and team coaching, speaking, and facilitation for community leaders and organizations building healthier, more inclusive communities.",
      path: "/coaching",
      keywords: `${KEYWORDS_CORE}, leadership coaching, facilitation, keynote speaking, team coaching, community leadership`,
      imageAlt: "A facilitator leading a community leadership circle seated with participants",
      preloadImage: heroCoaching,
    }),
  component: Coaching,
});

const pillars = [
  {
    icon: Users,
    title: "1:1 Leadership Coaching",
    body: "Confidential, custom coaching for executive directors, program leads, and grassroots organizers navigating the weight of the work.",
  },
  {
    icon: UsersRound,
    title: "Team Coaching",
    body: "Group coaching for leadership teams and boards — trust, alignment, and the hard conversations that make change possible.",
  },
  {
    icon: Mic2,
    title: "Speaking Engagements",
    body: "Keynotes and panels on community development, adult learning, inclusion, and building peer networks that actually endure.",
  },
  {
    icon: Compass,
    title: "Facilitation",
    body: "Retreats, strategic planning, and multi-stakeholder gatherings held with warmth, rigour, and Laurie's 30 years of experience.",
  },
];

const focus = [
  { icon: Home, label: "Housing" },
  { icon: Bus, label: "Transportation" },
  { icon: Briefcase, label: "Employment & Entrepreneurship" },
  { icon: HeartPulse, label: "Mental Health" },
];

function Coaching() {
  return (
    <>
      <Hero
        image={heroCoaching}
        alt="A facilitator leading a community leadership circle seated with participants"
        eyebrow="Coaching & Speaking"
        title={
          <>
            Work that asks a lot <em className="italic text-coral">deserves support.</em>
          </>
        }
        subtitle="Custom 1:1 and team coaching, speaking, and facilitation for the people leading community change."
        cta={{ label: "Book Laurie", to: "/join" }}
      />

      <section className="py-20 sm:py-28 md:py-36">
        <div className="container-42">
          <Reveal>
            <p className="mb-6 text-center text-xs uppercase tracking-[0.32em] text-coral">
              Four ways to work together
            </p>
            <h2 className="mx-auto max-w-3xl text-center font-serif text-4xl leading-[1.08] text-teal md:text-6xl md:leading-[1.05]">
              Different shapes, same <em className="italic">care.</em>
            </h2>
          </Reveal>

          <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-32">
            {pillars.map((p, i) => (
              <Reveal key={p.title}>
                <div
                  className={`grid items-center gap-10 md:grid-cols-12 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="md:col-span-5">
                    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-teal shadow-[0_24px_50px_-28px_rgba(18,64,63,0.55)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal to-charcoal opacity-90" />
                      <p.icon
                        className="relative z-10 text-coral"
                        size={80}
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                      <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.28em] text-cream/60">
                        0{i + 1}
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    <h3 className="font-serif text-3xl leading-tight text-teal md:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-6 text-lg leading-relaxed text-charcoal/80">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal py-20 text-cream sm:py-28 md:py-36">
        <div className="container-42">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="mb-6 text-xs uppercase tracking-[0.32em] text-coral">
                Where we go deepest
              </p>
              <h2 className="font-serif text-4xl leading-[1.08] md:text-5xl md:leading-[1.05]">
                Focus areas Laurie
                <br />
                works in most.
              </h2>
              <p className="mt-6 leading-relaxed text-cream/80">
                These are the pockets where 30 years of practice and current research meet — the
                terrain we know best.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-6 md:col-start-7">
              {focus.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.06}>
                  <div className="card-lift h-full rounded-2xl border border-cream/20 p-8 hover:border-coral hover:bg-cream/5">
                    <f.icon
                      className="mb-6 text-coral"
                      size={26}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="font-serif text-xl">{f.label}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 md:py-40">
        <div className="container-42 max-w-3xl">
          <Reveal>
            <p className="mb-6 text-center text-xs uppercase tracking-[0.32em] text-coral">
              Let's talk
            </p>
            <h2 className="mb-10 text-center font-serif text-4xl leading-[1.08] text-teal md:mb-14 md:text-5xl md:leading-[1.05]">
              Book Laurie for coaching, speaking, or facilitation.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <SignUpForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
