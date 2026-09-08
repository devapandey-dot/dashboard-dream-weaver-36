import { createFileRoute, Link } from "@tanstack/react-router";
import { cmsPages, leads, posts, projects, services, testimonials } from "@/data/site";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "CMS Dashboard — Solvix IT Solutions" },
      {
        name: "description",
        content: "Internal content dashboard overview for pages, services, projects and leads.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "CMS Dashboard — Solvix IT" },
      { property: "og:description", content: "Content management overview." },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const cards = [
    { label: "Pages", value: cmsPages.length },
    { label: "Services", value: services.length },
    { label: "Projects", value: projects.length },
    { label: "Blog posts", value: posts.length },
    { label: "Testimonials", value: testimonials.length },
    { label: "Leads", value: leads.length },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="hero-gradient text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="font-display text-xl font-bold">Solvix CMS Dashboard</h1>
          <Link to="/" className="text-sm opacity-90 hover:opacity-100">
            View website
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {cards.map((c) => (
            <div key={c.label} className="rounded-xl border border-border bg-card p-5">
              <p className="font-display text-3xl font-bold text-primary">{c.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                {c.label}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-semibold">Recent leads</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="py-2">ID</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Service</th>
                  <th className="py-2">Received</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} className="border-t border-border">
                    <td className="py-3 text-muted-foreground">{l.id}</td>
                    <td className="py-3 font-medium">{l.name}</td>
                    <td className="py-3 text-muted-foreground">{l.service}</td>
                    <td className="py-3 text-muted-foreground">{l.createdAt}</td>
                    <td className="py-3">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs">
                        {l.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-semibold">Pages</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cmsPages.map((p) => (
              <div key={p.slug} className="rounded-lg border border-border p-4">
                <p className="font-medium">{p.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.slug} · {p.sections} sections
                </p>
                <p className="mt-2 text-xs text-primary">{p.status}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
