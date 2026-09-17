import { useState, type FormEvent } from "react";
import { Check, ChevronDown } from "lucide-react";

const interests = ["Podcast", "Coaching", "Speaking", "Shop", "General Updates"];

export function SignUpForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);
  const dark = variant === "dark";

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputBase = dark
    ? "bg-transparent border-cream/30 text-cream placeholder:text-cream/50 focus:border-coral"
    : "bg-transparent border-teal/25 text-charcoal placeholder:text-charcoal/45 focus:border-coral";

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`rounded-2xl p-8 text-center sm:p-10 ${dark ? "bg-cream/10 text-cream" : "bg-teal/5 text-teal"}`}
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-coral">
          <Check className="text-cream" size={24} aria-hidden="true" />
        </div>
        <p className="mb-3 font-serif text-3xl">You're in.</p>
        <p className={`text-sm ${dark ? "text-cream/75" : "text-charcoal/70"}`}>
          Thanks for joining the network. We'll be in touch soon with something worth reading.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span
            className={`mb-2 block text-xs uppercase tracking-[0.22em] ${dark ? "text-cream/70" : "text-charcoal/60"}`}
          >
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={`w-full border-b py-3 transition-colors ${inputBase}`}
          />
        </label>
        <label className="block">
          <span
            className={`mb-2 block text-xs uppercase tracking-[0.22em] ${dark ? "text-cream/70" : "text-charcoal/60"}`}
          >
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            className={`w-full border-b py-3 transition-colors ${inputBase}`}
          />
        </label>
      </div>
      <label className="relative block">
        <span
          className={`mb-2 block text-xs uppercase tracking-[0.22em] ${dark ? "text-cream/70" : "text-charcoal/60"}`}
        >
          Area of Interest
        </span>
        <select
          name="interest"
          className={`w-full cursor-pointer appearance-none border-b py-3 pr-8 transition-colors ${inputBase} ${dark ? "[&>option]:text-charcoal" : ""}`}
        >
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 top-[2.65rem] ${dark ? "text-cream/70" : "text-charcoal/50"}`}
        />
      </label>
      <label className="block">
        <span
          className={`mb-2 block text-xs uppercase tracking-[0.22em] ${dark ? "text-cream/70" : "text-charcoal/60"}`}
        >
          A note (optional)
        </span>
        <textarea
          name="note"
          rows={3}
          placeholder="What brings you here?"
          className={`w-full resize-none border-b py-3 transition-colors ${inputBase}`}
        />
      </label>
      <button
        type="submit"
        className="btn-pill mt-4 self-start bg-coral text-cream hover:bg-coral/90 hover:shadow-[0_12px_30px_-12px_rgba(232,115,74,0.7)]"
      >
        Join the Network
      </button>
    </form>
  );
}
