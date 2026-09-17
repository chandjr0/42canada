import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface HeroProps {
  image: string;
  alt: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  cta?: { label: string; to?: string; href?: string };
  overlayIntensity?: number;
  minHeight?: string;
}

export function Hero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  cta,
  overlayIntensity = 0.64,
  minHeight = "min-h-svh",
}: HeroProps) {
  const reduced = useReducedMotion();

  return (
    <section
      className={`relative ${minHeight} w-full flex items-center justify-center overflow-hidden bg-teal`}
      aria-label={typeof eyebrow === "string" ? eyebrow : "Introduction"}
    >
      <motion.div
        initial={reduced ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduced ? 0 : 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(18,64,63,${overlayIntensity * 0.88}) 0%, rgba(18,64,63,${overlayIntensity}) 55%, rgba(35,38,32,${Math.min(overlayIntensity + 0.18, 0.92)}) 100%)`,
        }}
      />

      <div className="hero-copy relative z-10 container-42 pb-16 pt-24 text-center sm:pt-28">
        {eyebrow && (
          <p className="mb-5 text-[0.7rem] uppercase tracking-[0.32em] text-coral sm:mb-6 sm:text-xs">
            {eyebrow}
          </p>
        )}

        <h1 className="mx-auto max-w-5xl font-serif text-[2.15rem] leading-[1.08] text-cream sm:text-5xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.02]">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:mt-8 sm:text-lg md:text-xl">
          {subtitle}
        </p>

        {cta && (
          <div className="mt-8 flex justify-center sm:mt-10">
            {cta.to ? (
              <Link
                to={cta.to}
                className="group btn-pill bg-coral text-cream shadow-[0_10px_30px_-16px_rgba(232,115,74,0.9)] hover:bg-coral/90 hover:shadow-[0_16px_36px_-14px_rgba(232,115,74,0.85)]"
              >
                {cta.label}
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            ) : (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-pill bg-coral text-cream shadow-[0_10px_30px_-16px_rgba(232,115,74,0.9)] hover:bg-coral/90 hover:shadow-[0_16px_36px_-14px_rgba(232,115,74,0.85)]"
              >
                {cta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>

      <div
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-cream/70 sm:flex"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <motion.div
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-cream/40"
        />
      </div>
    </section>
  );
}
