import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Search, MoreHorizontal, Edit, Eye, Trash2 } from "lucide-react";
import { projects } from "@/data/site";
import { AdminCard, PageTitle, StatusPill, Btn, Toolbar } from "@/components/admin/AdminUI";

export const Route = createFileRoute("/admin/portfolio")({
  head: () => ({ meta: [{ title: "Portfolio — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const filtered = projects.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="Portfolio" subtitle="Manage portfolio projects and case studies." actions={<Btn variant="primary"><Plus className="size-4" /> Add Portfolio</Btn>} />
      <AdminCard>
        <Toolbar>
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
          </div>
        </Toolbar>
        <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.slug} className="overflow-hidden rounded-lg border border-admin-border">
              <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-admin-accent">{p.category}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{p.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{p.client} · {p.industry}</p>
                <div className="mt-3 flex items-center justify-between">
                  <StatusPill status={p.status} />
                  <div className="relative">
                    <button onClick={() => setMenuOpen(menuOpen === p.slug ? null : p.slug)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><MoreHorizontal className="size-4" /></button>
                    {menuOpen === p.slug && (
                      <div className="absolute right-0 top-9 z-50 w-40 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                        <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Edit className="size-4" /> Edit</button>
                        <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Eye className="size-4" /> View</button>
                        <div className="my-1 border-t border-admin-border" />
                        <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive hover:bg-destructive/5"><Trash2 className="size-4" /> Delete</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AdminCard>
    </div>
  );
}
