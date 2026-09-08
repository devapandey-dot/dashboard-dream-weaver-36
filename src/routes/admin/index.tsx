import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronDown,
  Plus,
  FileText,
  Boxes,
  Newspaper,
  Briefcase,
  Quote,
  HelpCircle,
  BadgeDollarSign,
} from "lucide-react";
import {
  dashboardStats,
  leadStats,
  recentContent,
  draftCounts,
  systemStatus,
  activityLog,
  versions,
} from "@/data/cms";
import {
  Btn,
  AdminCard,
  CardHead,
  PageTitle,
  StatusPill,
  Table,
  Td,
} from "@/components/admin/AdminUI";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Solvix CMS" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

const statIcons: Record<string, typeof FileText> = {
  FileStack: FileText,
  Boxes,
  Newspaper,
  Briefcase,
  Quote,
  HelpCircle,
  BadgeDollarSign,
  Images: FileText,
};

function DashboardPage() {
  const [createOpen, setCreateOpen] = useState(false);

  const createOptions = [
    { label: "Create Page", to: "/admin/pages", icon: FileText },
    { label: "Add Service", to: "/admin/services", icon: Boxes },
    { label: "Write Blog", to: "/admin/blogs", icon: Newspaper },
    { label: "Add Portfolio", to: "/admin/portfolio", icon: Briefcase },
    { label: "Add Testimonial", to: "/admin/testimonials", icon: Quote },
    { label: "Add FAQ", to: "/admin/faq", icon: HelpCircle },
    { label: "Add Pricing Plan", to: "/admin/pricing", icon: BadgeDollarSign },
  ];

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <PageTitle
        title="Dashboard"
        subtitle="Manage your website content, SEO and business enquiries from one place."
        actions={
          <div className="relative">
            <Btn variant="primary" onClick={() => setCreateOpen((v) => !v)}>
              <Plus className="size-4" /> Create Content
              <ChevronDown className="size-3.5" />
            </Btn>
            {createOpen && (
              <div className="absolute right-0 top-11 z-50 w-56 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                {createOptions.map((opt) => (
                  <Link
                    key={opt.label}
                    to={opt.to}
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-admin-surface"
                  >
                    <opt.icon className="size-4 text-muted-foreground" /> {opt.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8">
        {dashboardStats.map((s) => {
          const Icon = statIcons[s.icon] ?? FileText;
          return (
            <AdminCard key={s.label} className="p-4">
              <span className="grid size-9 place-items-center rounded-lg bg-admin-accent-light text-admin-accent">
                <Icon className="size-[18px]" />
              </span>
              <p className="mt-3 font-display text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="mt-1.5 text-[11px] text-muted-foreground">{s.trend}</p>
            </AdminCard>
          );
        })}
      </div>

      {/* Leads + Quick actions */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <AdminCard className="lg:col-span-2">
          <CardHead title="Leads & Requests" subtitle="Recent enquiries from the website" />
          <div className="grid grid-cols-2 gap-4 p-5 md:grid-cols-4">
            {leadStats.map((l) => (
              <div key={l.label} className="rounded-lg border border-admin-border bg-admin-surface p-4">
                <p className="font-display text-2xl font-bold text-foreground">{l.value}</p>
                <p className="text-xs text-muted-foreground">{l.label}</p>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard>
          <CardHead title="Quick Actions" />
          <div className="grid grid-cols-2 gap-2 p-5">
            {[
              { label: "Create Page", to: "/admin/pages", icon: FileText },
              { label: "Add Service", to: "/admin/services", icon: Boxes },
              { label: "Write Blog", to: "/admin/blogs", icon: Newspaper },
              { label: "Add Portfolio", to: "/admin/portfolio", icon: Briefcase },
              { label: "Add FAQ", to: "/admin/faq", icon: HelpCircle },
              { label: "Add Testimonial", to: "/admin/testimonials", icon: Quote },
            ].map((q) => (
              <Link
                key={q.label}
                to={q.to}
                className="flex flex-col items-center gap-2 rounded-lg border border-admin-border p-3 text-center transition hover:border-admin-accent/40 hover:bg-admin-surface"
              >
                <q.icon className="size-5 text-admin-accent" />
                <span className="text-xs font-medium text-foreground">{q.label}</span>
              </Link>
            ))}
          </div>
        </AdminCard>
      </div>

      {/* Recent content + Drafts */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <AdminCard className="lg:col-span-2">
          <CardHead title="Recent Content" subtitle="Recently updated across the CMS" />
          <Table head={["Content", "Type", "Status", "Last Updated", "Actions"]}>
            {recentContent.map((r) => (
              <tr key={r.name} className="hover:bg-admin-surface/50">
                <Td className="font-medium text-foreground">{r.name}</Td>
                <Td className="text-muted-foreground">{r.type}</Td>
                <Td><StatusPill status={r.status} /></Td>
                <Td className="text-muted-foreground">{r.updated}</Td>
                <Td>
                  <div className="flex gap-1">
                    <button className="rounded p-1 text-xs text-muted-foreground hover:bg-admin-surface hover:text-foreground">View</button>
                    <button className="rounded p-1 text-xs text-muted-foreground hover:bg-admin-surface hover:text-foreground">Edit</button>
                    <button className="rounded p-1 text-xs text-muted-foreground hover:bg-admin-surface hover:text-foreground">Preview</button>
                  </div>
                </Td>
              </tr>
            ))}
          </Table>
        </AdminCard>

        <AdminCard>
          <CardHead title="Draft Content" />
          <div className="space-y-2 p-5">
            {draftCounts.map((d) => (
              <div key={d.label} className="flex items-center justify-between rounded-lg border border-admin-border p-3">
                <span className="text-sm text-foreground">{d.label}</span>
                <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-700">{d.value}</span>
              </div>
            ))}
            <Btn variant="outline" size="sm" className="w-full">View All Drafts</Btn>
          </div>
        </AdminCard>
      </div>

      {/* System status + Activity + Connection flow */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <AdminCard>
          <CardHead title="Website Status" />
          <div className="space-y-2 p-5">
            {systemStatus.map((s) => (
              <div key={s.label} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="flex items-center gap-2 font-medium text-emerald-700">
                  <span className="size-2 rounded-full bg-emerald-500" /> {s.value}
                </span>
              </div>
            ))}
            <div className="mt-3 border-t border-admin-border pt-3 text-xs text-muted-foreground">
              Last Published: 2 minutes ago
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <CardHead title="Recent Activity" />
          <div className="space-y-3 p-5">
            {activityLog.map((a, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1 size-2 shrink-0 rounded-full bg-admin-accent" />
                <div>
                  <p className="text-sm text-foreground">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard>
          <CardHead title="CMS Connection Flow" subtitle="Content delivery pipeline" />
          <div className="p-5">
            <div className="space-y-2">
              {["CMS Content", "Database", "API", "Next.js Website", "Public Website"].map((step, i) => (
                <div key={step}>
                  <div className="rounded-lg border border-admin-border bg-admin-surface px-3 py-2.5 text-center text-xs font-medium text-foreground">
                    {step}
                  </div>
                  {i < 4 && <div className="text-center text-xs leading-none text-muted-foreground">↓</div>}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-700">
              <span className="size-2 rounded-full bg-emerald-500" /> All systems connected
            </div>
          </div>
        </AdminCard>
      </div>

      {/* Version history */}
      <div className="mt-6">
        <AdminCard>
          <CardHead title="Version History" subtitle="Recent page versions" />
          <div className="divide-y divide-admin-border">
            {versions.map((v) => (
              <div key={v.name} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {v.name}
                    {v.current && <span className="ml-2 rounded-full bg-admin-accent-light px-2 py-0.5 text-[10px] font-semibold text-admin-accent">Current</span>}
                  </p>
                  <p className="text-xs text-muted-foreground">{v.time}</p>
                </div>
                <div className="flex gap-2">
                  <Btn variant="ghost" size="sm">View</Btn>
                  {!v.current && <Btn variant="outline" size="sm">Restore</Btn>}
                </div>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
