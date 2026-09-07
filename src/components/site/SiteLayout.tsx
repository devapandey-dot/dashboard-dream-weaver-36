import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="hero-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.35em] opacity-70">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-85 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
