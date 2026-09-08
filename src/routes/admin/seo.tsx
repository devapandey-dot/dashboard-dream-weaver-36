import { createFileRoute } from "@tanstack/react-router";
import { Search, AlertCircle, CheckCircle2 } from "lucide-react";
import { seoPages, seoChecklist } from "@/data/cms";
import { AdminCard, PageTitle, ScoreRing, Toolbar, Btn } from "@/components/admin/AdminUI";
import { useState } from "react";

export const Route = createFileRoute("/admin/seo")({
  head: () => ({ meta: [{ title: "SEO Manager — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: SeoPage,
});

function SeoPage() {
  const [query, setQuery] = useState("");

  const filtered = seoPages.filter((p) => p.page.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="SEO Manager" subtitle="Monitor and optimize SEO across all pages." />
      <div className="grid gap-6 lg:grid-cols-3">
        <AdminCard className="lg:col-span-2">
          <Toolbar>
            <div className="relative max-w-xs flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search pages…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
            </div>
          </Toolbar>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead><tr className="border-b border-admin-border bg-admin-surface/60">
                {["Page", "Slug", "Title Chars", "Desc Chars", "Score", "Issues"].map((h) => (<th key={h} className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{h}</th>))}
              </tr></thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.slug} className="border-b border-admin-border hover:bg-admin-surface/50">
                    <td className="px-5 py-3.5 font-medium text-foreground">{p.page}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{p.slug}</td>
                    <td className="px-5 py-3.5"><span className={p.title > 60 ? "text-amber-600" : "text-foreground"}>{p.title}/60</span></td>
                    <td className="px-5 py-3.5"><span className={p.desc > 160 ? "text-amber-600" : "text-foreground"}>{p.desc}/160</span></td>
                    <td className="px-5 py-3.5"><ScoreRing score={p.score} /></td>
                    <td className="px-5 py-3.5">{p.issues === 0 ? <span className="inline-flex items-center gap-1 text-xs text-emerald-600"><CheckCircle2 className="size-3.5" /> None</span> : <span className="inline-flex items-center gap-1 text-xs text-amber-600"><AlertCircle className="size-3.5" /> {p.issues}</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>
        <AdminCard>
          <div className="border-b border-admin-border px-5 py-4"><h3 className="text-sm font-semibold text-foreground">SEO Checklist</h3></div>
          <div className="space-y-2 p-5">
            {seoChecklist.map((item, i) => (
              <div key={item} className="flex items-center gap-2.5 text-sm">
                <span className={`grid size-5 place-items-center rounded-full ${i < 7 ? "bg-emerald-500/15 text-emerald-600" : "bg-amber-500/15 text-amber-600"}`}>
                  {i < 7 ? <CheckCircle2 className="size-3" /> : <AlertCircle className="size-3" />}
                </span>
                <span className={i < 7 ? "text-foreground" : "text-muted-foreground"}>{item}</span>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
