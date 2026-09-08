import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, MoreHorizontal, Eye, Trash2, Mail, Phone, Calendar } from "lucide-react";
import { leads } from "@/data/site";
import { AdminCard, PageTitle, StatusPill, Btn, Toolbar } from "@/components/admin/AdminUI";

export const Route = createFileRoute("/admin/leads")({
  head: () => ({ meta: [{ title: "Leads — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: LeadsPage,
});

function LeadsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const filtered = leads.filter((l) => {
    const matchQ = l.name.toLowerCase().includes(query.toLowerCase()) || l.email.toLowerCase().includes(query.toLowerCase());
    const matchS = status === "All" || l.status === status;
    return matchQ && matchS;
  });

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="Leads" subtitle="Manage enquiries and contact form submissions." />
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[{ label: "Total Leads", value: 126 }, { label: "New", value: 18 }, { label: "Contacted", value: 24 }, { label: "Converted", value: 12 }].map((s) => (
          <AdminCard key={s.label} className="p-4">
            <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </AdminCard>
        ))}
      </div>
      <AdminCard>
        <Toolbar>
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search leads…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
          </div>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="h-9 rounded-lg border border-admin-border bg-card px-3 text-sm">
            <option>All</option><option>New</option><option>Contacted</option><option>In Progress</option><option>Converted</option><option>Closed</option><option>Spam</option>
          </select>
        </Toolbar>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead><tr className="border-b border-admin-border bg-admin-surface/60">
              {["ID", "Name", "Service", "Source", "Received", "Status", "Actions"].map((h) => (<th key={h} className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{h}</th>))}
            </tr></thead>
            <tbody>
              {filtered.map((l) => (
                <tr key={l.id} className="border-b border-admin-border hover:bg-admin-surface/50">
                  <td className="px-5 py-3.5 text-muted-foreground">{l.id}</td>
                  <td className="px-5 py-3.5">
                    <p className="font-medium text-foreground">{l.name}</p>
                    <p className="text-xs text-muted-foreground">{l.email}</p>
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">{l.service}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{l.source}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{l.createdAt}</td>
                  <td className="px-5 py-3.5"><StatusPill status={l.status} /></td>
                  <td className="px-5 py-3.5">
                    <div className="relative">
                      <button onClick={() => setMenuOpen(menuOpen === l.id ? null : l.id)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><MoreHorizontal className="size-4" /></button>
                      {menuOpen === l.id && (
                        <div className="absolute right-0 top-9 z-50 w-44 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Eye className="size-4" /> View Details</button>
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Mail className="size-4" /> Email</button>
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
