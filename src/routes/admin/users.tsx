import { createFileRoute } from "@tanstack/react-router";
import { Plus, MoreHorizontal, Edit, Trash2, Shield, Check } from "lucide-react";
import { cmsUsers } from "@/data/cms";
import { AdminCard, PageTitle, StatusPill, Btn } from "@/components/admin/AdminUI";
import { useState } from "react";

export const Route = createFileRoute("/admin/users")({
  head: () => ({ meta: [{ title: "Users & Roles — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: UsersPage,
});

const roleColors: Record<string, string> = {
  "Super Admin": "bg-admin-accent-light text-admin-accent",
  "Editor": "bg-emerald-500/10 text-emerald-700",
  "SEO Manager": "bg-amber-500/10 text-amber-700",
  "Author": "bg-violet-500/10 text-violet-700",
};

function UsersPage() {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle title="Users & Roles" subtitle="Manage team members and their permissions." actions={<Btn variant="primary"><Plus className="size-4" /> Add User</Btn>} />
      <div className="grid gap-6 lg:grid-cols-4">
        {[
          { role: "Super Admin", count: 1, perms: ["All permissions", "Manage users", "Publish content", "Delete anything"] },
          { role: "Editor", count: 1, perms: ["Edit pages", "Publish content", "Manage media"] },
          { role: "SEO Manager", count: 1, perms: ["Manage SEO", "Edit metadata", "View analytics"] },
          { role: "Author", count: 1, perms: ["Write blogs", "Submit for review"] },
        ].map((r) => (
          <AdminCard key={r.role} className="p-5">
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-admin-accent" />
              <h3 className="text-sm font-semibold text-foreground">{r.role}</h3>
            </div>
            <p className="mt-2 font-display text-2xl font-bold text-foreground">{r.count}</p>
            <ul className="mt-3 space-y-1.5">
              {r.perms.map((p) => (<li key={p} className="flex items-center gap-2 text-xs text-muted-foreground"><Check className="size-3 text-emerald-600" /> {p}</li>))}
            </ul>
          </AdminCard>
        ))}
      </div>
      <AdminCard className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead><tr className="border-b border-admin-border bg-admin-surface/60">
              {["Name", "Email", "Role", "Status", "Actions"].map((h) => (<th key={h} className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{h}</th>))}
            </tr></thead>
            <tbody>
              {cmsUsers.map((u) => (
                <tr key={u.email} className="border-b border-admin-border hover:bg-admin-surface/50">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 place-items-center rounded-full bg-admin-accent text-xs font-bold text-admin-accent-foreground">{u.name.split(" ").map((n) => n[0]).join("")}</span>
                      <span className="font-medium text-foreground">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">{u.email}</td>
                  <td className="px-5 py-3.5"><span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${roleColors[u.role] ?? "bg-muted text-muted-foreground"}`}>{u.role}</span></td>
                  <td className="px-5 py-3.5"><StatusPill status={u.status} /></td>
                  <td className="px-5 py-3.5">
                    <div className="relative">
                      <button onClick={() => setMenuOpen(menuOpen === u.email ? null : u.email)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><MoreHorizontal className="size-4" /></button>
                      {menuOpen === u.email && (
                        <div className="absolute right-0 top-9 z-50 w-40 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-admin-surface"><Edit className="size-4" /> Edit</button>
                          <div className="my-1 border-t border-admin-border" />
                          <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive hover:bg-destructive/5"><Trash2 className="size-4" /> Remove</button>
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
