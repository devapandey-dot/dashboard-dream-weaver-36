import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Search, MoreHorizontal, Eye, Edit, Copy, Trash2, Globe } from "lucide-react";
import { cmsPagesFull } from "@/data/cms";
import { AdminCard, PageTitle, StatusPill, ScoreRing, Btn, Toolbar } from "@/components/admin/AdminUI";

export const Route = createFileRoute("/admin/pages/")({
  head: () => ({ meta: [{ title: "Pages — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: PagesPage,
});

function PagesPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const filtered = cmsPagesFull.filter((p) => {
    const matchQ = p.title.toLowerCase().includes(query.toLowerCase());
    const matchS = statusFilter === "All" || p.status === statusFilter;
    const matchT = typeFilter === "All" || p.type === typeFilter;
    return matchQ && matchS && matchT;
  });

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle
        title="Pages"
        subtitle="Manage all website pages and landing pages."
        actions={
          <Link to="/admin/pages/new">
            <Btn variant="primary"><Plus className="size-4" /> Add New Page</Btn>
          </Link>
        }
      />

      <AdminCard>
        <Toolbar>
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages…"
              className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent focus:ring-2 focus:ring-admin-accent/20"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-9 rounded-lg border border-admin-border bg-card px-3 text-sm outline-none focus:border-admin-accent"
          >
            <option>All</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="h-9 rounded-lg border border-admin-border bg-card px-3 text-sm outline-none focus:border-admin-accent"
          >
            <option>All</option>
            <option>System Page</option>
            <option>Custom Page</option>
            <option>Landing Page</option>
          </select>
        </Toolbar>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[840px] text-left text-sm">
            <thead>
              <tr className="border-b border-admin-border bg-admin-surface/60">
                {["Page Title", "Slug", "Type", "Status", "SEO Score", "Last Updated", "Actions"].map((h) => (
                  <th key={h} className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-admin-border hover:bg-admin-surface/50">
                  <td className="px-5 py-3.5">
                    <Link to="/admin/pages/$id" params={{ id: p.id }} className="font-medium text-foreground hover:text-admin-accent">
                      {p.title}
                    </Link>
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">{p.slug}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{p.type}</td>
                  <td className="px-5 py-3.5"><StatusPill status={p.status} /></td>
                  <td className="px-5 py-3.5"><ScoreRing score={p.seoScore} /></td>
                  <td className="px-5 py-3.5 text-muted-foreground">{p.updated}</td>
                  <td className="px-5 py-3.5">
                    <div className="relative">
                      <button
                        onClick={() => setMenuOpen(menuOpen === p.id ? null : p.id)}
                        className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"
                      >
                        <MoreHorizontal className="size-4" />
                      </button>
                      {menuOpen === p.id && (
                        <div className="absolute right-0 top-9 z-50 w-44 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                          <Link to="/admin/pages/$id" params={{ id: p.id }} className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-admin-surface">
                            <Edit className="size-4" /> Edit
                          </Link>
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-admin-surface">
                            <Eye className="size-4" /> Preview
                          </button>
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-admin-surface">
                            <Copy className="size-4" /> Duplicate
                          </button>
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-admin-surface">
                            <Globe className="size-4" /> {p.status === "Published" ? "Unpublish" : "Publish"}
                          </button>
                          <div className="my-1 border-t border-admin-border" />
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive hover:bg-destructive/5">
                            <Trash2 className="size-4" /> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-5 py-3 text-xs text-muted-foreground">
          <span>Showing {filtered.length} of {cmsPagesFull.length} pages</span>
          <div className="flex gap-1">
            <button className="rounded-md border border-admin-border px-3 py-1 hover:bg-admin-surface">Previous</button>
            <button className="rounded-md border border-admin-border bg-admin-accent px-3 py-1 text-admin-accent-foreground">1</button>
            <button className="rounded-md border border-admin-border px-3 py-1 hover:bg-admin-surface">Next</button>
          </div>
        </div>
      </AdminCard>
    </div>
  );
}
