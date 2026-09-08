import { createFileRoute } from "@tanstack/react-router";
import { Plus, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { redirects } from "@/data/cms";
import { AdminCard, PageTitle, Btn } from "@/components/admin/AdminUI";
import { useState } from "react";

export const Route = createFileRoute("/admin/redirects")({
  head: () => ({ meta: [{ title: "Redirects — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: RedirectsPage,
});

function RedirectsPage() {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="Redirects" subtitle="Manage URL redirects to preserve SEO rankings." actions={<Btn variant="primary"><Plus className="size-4" /> Add Redirect</Btn>} />
      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead><tr className="border-b border-admin-border bg-admin-surface/60">
              {["From URL", "To URL", "Type", "Hits", "Actions"].map((h) => (<th key={h} className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{h}</th>))}
            </tr></thead>
            <tbody>
              {redirects.map((r) => (
                <tr key={r.from} className="border-b border-admin-border hover:bg-admin-surface/50">
                  <td className="px-5 py-3.5 font-medium text-foreground">{r.from}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{r.to}</td>
                  <td className="px-5 py-3.5"><span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${r.code === "301" ? "bg-emerald-500/10 text-emerald-700" : "bg-amber-500/10 text-amber-700"}`}>{r.code}</span></td>
                  <td className="px-5 py-3.5 text-muted-foreground">{r.hits.toLocaleString()}</td>
                  <td className="px-5 py-3.5">
                    <div className="relative">
                      <button onClick={() => setMenuOpen(menuOpen === r.from ? null : r.from)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><MoreHorizontal className="size-4" /></button>
                      {menuOpen === r.from && (
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
