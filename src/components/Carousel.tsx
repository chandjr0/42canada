import { useRef, useState, useEffect, useId } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function Carousel({
  children,
  ariaLabel,
  variant = "light",
}: {
  children: ReactNode[];
  ariaLabel: string;
  variant?: "light" | "onDark";
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const labelId = useId();
  const onDark = variant === "onDark";

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    update();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const btnClass = onDark
    ? "border-cream/30 text-cream hover:bg-cream hover:text-teal hover:border-cream"
    : "border-teal/25 text-teal hover:bg-teal hover:text-cream hover:border-teal";

  return (
    <div className="relative" aria-labelledby={labelId} role="region">
      <p id={labelId} className="sr-only">
        {ariaLabel}
      </p>
      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 -mx-[var(--page-pad)] px-[var(--page-pad)] sm:gap-6 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
        tabIndex={0}
      >
        {children.map((child, i) => (
          <div
            key={i}
            data-carousel-item
            className="w-[86%] shrink-0 snap-start sm:w-[60%] md:w-[42%] lg:w-[32%]"
          >
            {child}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label={`Previous ${ariaLabel.toLowerCase()}`}
          className={`card-lift flex h-12 w-12 items-center justify-center rounded-full border transition-all disabled:pointer-events-none disabled:opacity-30 ${btnClass}`}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label={`Next ${ariaLabel.toLowerCase()}`}
          className={`card-lift flex h-12 w-12 items-center justify-center rounded-full border transition-all disabled:pointer-events-none disabled:opacity-30 ${btnClass}`}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
