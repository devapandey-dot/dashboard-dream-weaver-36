import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionHeading } from "@/components/site/SiteLayout";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "IT & Digital Marketing Services — Solvix IT Solutions" },
      {
        name: "description",
        content:
          "Web and mobile development, custom software, cloud, cybersecurity, SEO, PPC and social media services delivered from Dubai.",
      },
      { property: "og:title", content: "Our Services — Solvix IT Solutions" },
      {
        property: "og:description",
        content: "Software, cloud and growth marketing services for ambitious UAE brands.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const groups = ["IT Solutions", "Digital Marketing"] as const;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Everything you need to build and grow"
        subtitle="Thirteen focused services across technology and marketing, delivered by one accountable team."
      />

      {groups.map((g) => (
        <section key={g} className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading eyebrow={g} title={`${g} we deliver`} align="left" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.category === g)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    Learn more →
                  </span>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}
