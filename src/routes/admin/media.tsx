import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search, MoreHorizontal, Trash2, Copy, Upload, Image as ImageIcon } from "lucide-react";
import { mediaFiles } from "@/data/site";
import { AdminCard, PageTitle, Btn, Toolbar } from "@/components/admin/AdminUI";
import { useState } from "react";

export const Route = createFileRoute("/admin/media")({
  head: () => ({ meta: [{ title: "Media — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: MediaPage,
});

function MediaPage() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const filtered = mediaFiles.filter((f) => f.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="Media" subtitle="Manage uploaded images, videos and documents." actions={<Btn variant="primary"><Upload className="size-4" /> Upload Media</Btn>} />
      <AdminCard>
        <Toolbar>
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search media…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
          </div>
        </Toolbar>
        <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((f) => (
            <div key={f.name} className="group relative overflow-hidden rounded-lg border border-admin-border">
              <div className="aspect-video bg-admin-surface">
                <img src={f.url} alt={f.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-3">
                <p className="truncate text-sm font-medium text-foreground">{f.name}</p>
                <p className="text-xs text-muted-foreground">{f.size} · {f.uploaded}</p>
              </div>
              <div className="absolute right-2 top-2 opacity-0 transition group-hover:opacity-100">
                <div className="relative">
                  <button onClick={() => setMenuOpen(menuOpen === f.name ? null : f.name)} className="grid size-8 place-items-center rounded-md bg-card/90 text-muted-foreground shadow hover:bg-card"><MoreHorizontal className="size-4" /></button>
                  {menuOpen === f.name && (
                    <div className="absolute right-0 top-9 z-50 w-36 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                      <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Copy className="size-4" /> Copy URL</button>
                      <div className="my-1 border-t border-admin-border" />
                      <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive hover:bg-destructive/5"><Trash2 className="size-4" /> Delete</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="flex aspect-video cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-admin-border bg-admin-surface text-muted-foreground hover:border-admin-accent/40">
            <Plus className="mb-1 size-6" />
            <span className="text-xs font-medium">Add Media</span>
          </div>
        </div>
      </AdminCard>
    </div>
  );
}
