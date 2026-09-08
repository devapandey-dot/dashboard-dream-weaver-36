import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero, SectionHeading } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — Solvix IT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} — Solvix IT Solutions` },
        { name: "description", content: service.short },
        { property: "og:title", content: `${service.name} — Solvix IT Solutions` },
        { property: "og:description", content: service.short },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero eyebrow={service.category} title={service.name} subtitle={service.short} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-sm leading-relaxed text-muted-foreground">{service.long}</p>

            <h3 className="mt-10 font-display text-xl font-semibold text-foreground">
              What's included
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-semibold text-foreground">
              How we work
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {service.process.map((p, i) => (
                <div key={p.title} className="rounded-xl border border-border bg-card p-5">
                  <span className="text-xs font-semibold text-primary">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-1 font-display text-base font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-xl border border-border bg-secondary/40 p-6">
            <h4 className="font-display text-lg font-semibold">Key benefits</h4>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {b}
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="pill" className="mt-6 w-full">
              <Link to="/contact">Request a quote</Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Explore" title="Other services" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="rounded-xl border border-border bg-card p-6 hover:shadow-lg"
                >
                  <h3 className="font-display text-base font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
