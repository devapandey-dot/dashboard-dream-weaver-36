import { createFileRoute } from "@tanstack/react-router";
import { Plus, MoreHorizontal, Edit, Trash2, Check, Star } from "lucide-react";
import { plans } from "@/data/site";
import { AdminCard, PageTitle, StatusPill, Btn } from "@/components/admin/AdminUI";
import { useState } from "react";

export const Route = createFileRoute("/admin/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: PricingPage,
});

function PricingPage() {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="Pricing" subtitle="Manage pricing plans displayed on the website." actions={<Btn variant="primary"><Plus className="size-4" /> Add Pricing Plan</Btn>} />
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <AdminCard key={p.id} className="overflow-hidden">
            <div className="border-b border-admin-border px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
                  <p className="mt-1 text-2xl font-bold text-foreground">{p.currency} {p.price}<span className="text-sm font-normal text-muted-foreground"> / {p.period}</span></p>
                </div>
                <div className="relative">
                  <button onClick={() => setMenuOpen(menuOpen === p.id ? null : p.id)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><MoreHorizontal className="size-4" /></button>
                  {menuOpen === p.id && (
                    <div className="absolute right-0 top-9 z-50 w-40 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                      <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Edit className="size-4" /> Edit</button>
                      <div className="my-1 border-t border-admin-border" />
                      <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive hover:bg-destructive/5"><Trash2 className="size-4" /> Delete</button>
                    </div>
                  )}
                </div>
              </div>
              {p.featured && <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-admin-accent-light px-2.5 py-0.5 text-xs font-medium text-admin-accent"><Star className="size-3" /> Most Popular</span>}
              <p className="mt-2 text-xs text-muted-foreground">{p.description}</p>
            </div>
            <div className="p-5">
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-emerald-600" /> {f}</li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-admin-border"><StatusPill status={p.status} /></div>
            </div>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
