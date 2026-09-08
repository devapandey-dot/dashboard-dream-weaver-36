import { createFileRoute } from "@tanstack/react-router";
import { Plus, MoreHorizontal, Edit, Trash2, GripVertical } from "lucide-react";
import { menus } from "@/data/cms";
import { AdminCard, PageTitle, Btn } from "@/components/admin/AdminUI";
import { useState } from "react";

export const Route = createFileRoute("/admin/menus")({
  head: () => ({ meta: [{ title: "Menus — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: MenusPage,
});

function MenusPage() {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="Menus" subtitle="Manage website navigation menus." actions={<Btn variant="primary"><Plus className="size-4" /> Add Menu</Btn>} />
      <div className="grid gap-6 lg:grid-cols-2">
        {menus.map((m) => (
          <AdminCard key={m.name}>
            <div className="flex items-center justify-between border-b border-admin-border px-5 py-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">{m.name}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">Location: {m.location}</p>
              </div>
              <div className="relative">
                <button onClick={() => setMenuOpen(menuOpen === m.name ? null : m.name)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><MoreHorizontal className="size-4" /></button>
                {menuOpen === m.name && (
                  <div className="absolute right-0 top-9 z-50 w-40 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                    <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Edit className="size-4" /> Edit</button>
                    <div className="my-1 border-t border-admin-border" />
                    <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive hover:bg-destructive/5"><Trash2 className="size-4" /> Delete</button>
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-2 p-5">
              {m.items.map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-admin-border bg-card px-4 py-2.5">
                  <GripVertical className="size-5 shrink-0 cursor-grab text-muted-foreground" />
                  <span className="text-xs font-semibold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-sm text-foreground">{item}</span>
                  <button className="text-muted-foreground hover:text-destructive"><Trash2 className="size-4" /></button>
                </div>
              ))}
              <Btn variant="outline" size="sm" className="w-full"><Plus className="size-4" /> Add Menu Item</Btn>
            </div>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
