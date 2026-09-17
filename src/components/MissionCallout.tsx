import { Reveal } from "./Reveal";

export function MissionCallout({
  eyebrow,
  children,
  variant = "cream",
}: {
  eyebrow?: string;
  children: React.ReactNode;
  variant?: "cream" | "teal";
}) {
  const isDark = variant === "teal";
  return (
    <section
      className={`py-24 sm:py-32 md:py-44 ${isDark ? "bg-teal text-cream" : "bg-cream text-teal"}`}
    >
      <div className="container-42 text-center">
        {eyebrow && (
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.32em] text-coral">{eyebrow}</p>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <h2 className="mission-type text-[clamp(2.15rem,9vw,8rem)]">{children}</h2>
        </Reveal>
      </div>
    </section>
  );
}
