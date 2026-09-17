import { cn } from "../lib/utils";
import logo from "../assets/logo.png";

export function BrandLogo({
  className,
  markClassName,
  showWordmark = true,
  invertWordmark = false,
  alt = "42 Canada",
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  invertWordmark?: boolean;
  alt?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={logo}
        alt={alt}
        width={200}
        height={200}
        className={cn(
          "h-9 w-9 rounded-md object-cover shadow-[0_6px_16px_-8px_rgba(0,48,107,0.65)] sm:h-10 sm:w-10",
          markClassName,
        )}
      />
      {showWordmark && (
        <span
          className={cn(
            "hidden text-[0.7rem] font-medium uppercase tracking-[0.28em] sm:inline sm:text-xs",
            invertWordmark ? "text-cream/90" : "text-charcoal/75",
          )}
        >
          Canada
        </span>
      )}
    </span>
  );
}
