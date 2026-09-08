import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Insights from Solvix IT Solutions" },
      {
        name: "description",
        content:
          "Practical articles on web development, SEO, mobile apps and digital strategy for UAE businesses.",
      },
      { property: "og:title", content: "Blog — Solvix IT Solutions" },
      {
        property: "og:description",
        content: "Development, SEO and strategy insights from our team in Dubai.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const published = posts.filter((p) => p.status === "Published");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Insights from our team"
        subtitle="Straightforward writing on building and marketing digital products."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {published.map((p) => (
            <article key={p.slug} className="overflow-hidden rounded-xl border border-border bg-card">
              <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{p.category}</p>
                <h2 className="mt-2 font-display text-lg font-semibold leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {p.author} · {p.date} · {p.readMinutes} min read
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
