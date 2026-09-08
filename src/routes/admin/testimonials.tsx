import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search, MoreHorizontal, Edit, Trash2, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { AdminCard, PageTitle, StatusPill, Btn, Toolbar } from "@/components/admin/AdminUI";
import { useState } from "react";

export const Route = createFileRoute("/admin/testimonials")({
  head: () => ({ meta: [{ title: "Testimonials — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const filtered = testimonials.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()) || t.company.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="Testimonials" subtitle="Manage client reviews and testimonials." actions={<Btn variant="primary"><Plus className="size-4" /> Add Testimonial</Btn>} />
      <AdminCard>
        <Toolbar>
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search testimonials…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
          </div>
        </Toolbar>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead><tr className="border-b border-admin-border bg-admin-surface/60">
              {["Client", "Company", "Rating", "Status", "Featured", "Actions"].map((h) => (<th key={h} className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{h}</th>))}
            </tr></thead>
            <tbody>
              {filtered.map((t) => (
                <tr key={t.id} className="border-b border-admin-border hover:bg-admin-surface/50">
                  <td className="px-5 py-3.5"><p className="font-medium text-foreground">{t.name}</p><p className="text-xs text-muted-foreground">{t.designation}</p></td>
                  <td className="px-5 py-3.5 text-muted-foreground">{t.company}</td>
                  <td className="px-5 py-3.5"><div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, i) => (<Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />))}</div></td>
                  <td className="px-5 py-3.5"><StatusPill status={t.status} /></td>
                  <td className="px-5 py-3.5">{t.featured ? <span className="text-xs font-medium text-admin-accent">Yes</span> : <span className="text-xs text-muted-foreground">No</span>}</td>
                  <td className="px-5 py-3.5">
                    <div className="relative">
                      <button onClick={() => setMenuOpen(menuOpen === t.id ? null : t.id)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><MoreHorizontal className="size-4" /></button>
                      {menuOpen === t.id && (
                        <div className="absolute right-0 top-9 z-50 w-40 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Edit className="size-4" /> Edit</button>
                          <div className="my-1 border-t border-admin-border" />
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive hover:bg-destructive/5"><Trash2 className="size-4" /> Delete</button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>
    </div>
  );
}
