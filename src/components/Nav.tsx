import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { BrandLogo } from "./BrandLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/podcast", label: "Podcast" },
  { to: "/coaching", label: "Coaching & Speaking" },
  { to: "/shop", label: "Community Shop" },
  { to: "/about", label: "About Laurie" },
  { to: "/join", label: "Join" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const menuId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border/60 bg-cream/90 shadow-[0_8px_30px_-18px_rgba(18,64,63,0.35)] backdrop-blur-md"
          : "bg-gradient-to-b from-charcoal/55 via-charcoal/20 to-transparent"
      }`}
    >
      <div className="container-42 flex h-16 items-center justify-between sm:h-20">
        <Link
          to="/"
          className="group rounded-sm"
          aria-label="42 Canada home"
          onClick={() => setOpen(false)}
        >
          <BrandLogo alt="" invertWordmark={!solid} />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link text-sm transition-colors duration-300 hover:text-coral ${
                solid ? "text-charcoal/80" : "text-cream/90"
              }`}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-coral", "aria-current": "page" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/join"
          className="btn-pill hidden bg-coral px-5 py-2.5 text-cream hover:bg-coral/90 xl:inline-flex"
        >
          Sign Up for Updates
        </Link>

        <button
          ref={closeBtnRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`-mr-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full xl:hidden ${
            solid ? "text-charcoal" : "text-cream"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={reduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-cream xl:hidden"
          >
            <nav className="container-42 flex flex-col gap-1 py-5" aria-label="Mobile">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-1 py-3 font-serif text-xl text-charcoal transition-colors hover:text-coral"
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-coral", "aria-current": "page" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/join"
                onClick={() => setOpen(false)}
                className="btn-pill mt-3 self-start bg-coral text-cream hover:bg-coral/90"
              >
                Sign Up for Updates
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
