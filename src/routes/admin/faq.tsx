import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { faqs } from "@/data/site";
import { AdminCard, PageTitle, StatusPill, Btn, Toolbar } from "@/components/admin/AdminUI";
import { useState } from "react";

export const Route = createFileRoute("/admin/faq")({
  head: () => ({ meta: [{ title: "FAQ — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: FaqPage,
});

function FaqPage() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const filtered = faqs.filter((f) => f.question.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="FAQ" subtitle="Manage frequently asked questions." actions={<Btn variant="primary"><Plus className="size-4" /> Add FAQ</Btn>} />
      <AdminCard>
        <Toolbar>
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search FAQs…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
          </div>
        </Toolbar>
        <div className="divide-y divide-admin-border">
          {filtered.map((f) => (
            <div key={f.id} className="flex items-start gap-4 px-5 py-4 hover:bg-admin-surface/50">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{f.question}</p>
                <p className="mt-1 text-xs text-muted-foreground">{f.answer.slice(0, 100)}…</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{f.category}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">Page: {f.page}</span>
                  <StatusPill status={f.status} />
                </div>
              </div>
              <div className="relative">
                <button onClick={() => setMenuOpen(menuOpen === f.id ? null : f.id)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><MoreHorizontal className="size-4" /></button>
                {menuOpen === f.id && (
                  <div className="absolute right-0 top-9 z-50 w-40 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                    <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Edit className="size-4" /> Edit</button>
                    <div className="my-1 border-t border-admin-border" />
                    <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive hover:bg-destructive/5"><Trash2 className="size-4" /> Delete</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </AdminCard>
    </div>
  );
}
