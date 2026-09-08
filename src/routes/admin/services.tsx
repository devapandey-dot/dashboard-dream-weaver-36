import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Search, MoreHorizontal, Edit, Eye, Trash2 } from "lucide-react";
import { services } from "@/data/site";
import { AdminCard, PageTitle, StatusPill, Btn, Toolbar } from "@/components/admin/AdminUI";

export const Route = createFileRoute("/admin/services")({
  head: () => ({ meta: [{ title: "Services — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const filtered = services.filter((s) => {
    const matchQ = s.name.toLowerCase().includes(query.toLowerCase());
    const matchC = category === "All" || s.category === category;
    return matchQ && matchC;
  });

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="Services" subtitle="Manage all services displayed on the website." actions={<Btn variant="primary"><Plus className="size-4" /> Add Service</Btn>} />
      <AdminCard>
        <Toolbar>
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
          </div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="h-9 rounded-lg border border-admin-border bg-card px-3 text-sm">
            <option>All</option><option>IT Solutions</option><option>Digital Marketing</option>
          </select>
        </Toolbar>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead><tr className="border-b border-admin-border bg-admin-surface/60">
              {["Service", "Category", "Status", "Features", "Actions"].map((h) => (<th key={h} className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{h}</th>))}
            </tr></thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.slug} className="border-b border-admin-border hover:bg-admin-surface/50">
                  <td className="px-5 py-3.5"><p className="font-medium text-foreground">{s.name}</p><p className="text-xs text-muted-foreground">/{s.slug}</p></td>
                  <td className="px-5 py-3.5 text-muted-foreground">{s.category}</td>
                  <td className="px-5 py-3.5"><StatusPill status={s.status} /></td>
                  <td className="px-5 py-3.5 text-muted-foreground">{s.features.length} features</td>
                  <td className="px-5 py-3.5">
                    <div className="relative">
                      <button onClick={() => setMenuOpen(menuOpen === s.slug ? null : s.slug)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><MoreHorizontal className="size-4" /></button>
                      {menuOpen === s.slug && (
                        <div className="absolute right-0 top-9 z-50 w-40 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Edit className="size-4" /> Edit</button>
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Eye className="size-4" /> View</button>
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
