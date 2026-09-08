import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { plans } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing Plans — Solvix IT Solutions" },
      {
        name: "description",
        content:
          "Transparent monthly plans for websites, SEO, social media and custom software support in the UAE.",
      },
      { property: "og:title", content: "Pricing — Solvix IT Solutions" },
      {
        property: "og:description",
        content: "Trial, Regular and Extended monthly plans with clear inclusions.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing"
        title="Simple plans, no surprises"
        subtitle="Pick a monthly plan or ask us for a fixed-scope project quote."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl border p-8 ${
                p.featured
                  ? "border-primary bg-card shadow-xl ring-1 ring-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="mt-4 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <p className="mt-6">
                <span className="font-display text-4xl font-bold text-primary">
                  {p.currency} {p.price}
                </span>
                <span className="ml-1 text-sm text-muted-foreground">{p.period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="pill" className="mt-8 w-full">
                <Link to="/contact">Get started</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
