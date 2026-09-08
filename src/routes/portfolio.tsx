import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { projects } from "@/data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Projects by Solvix IT Solutions" },
      {
        name: "description",
        content:
          "Selected e-commerce, mobile, custom software and marketing projects delivered for clients across the UAE and GCC.",
      },
      { property: "og:title", content: "Portfolio — Solvix IT Solutions" },
      {
        property: "og:description",
        content: "Case studies across retail, healthcare, logistics and professional services.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="Work we're proud of"
        subtitle="A selection of platforms and campaigns delivered for clients across the region."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <img src={p.image} alt={p.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{p.category}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
