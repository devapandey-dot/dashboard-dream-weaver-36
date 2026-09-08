import { createFileRoute } from "@tanstack/react-router";
import { Save, Database, Globe, Mail, Server } from "lucide-react";
import { AdminCard, PageTitle, Btn, Field, Input, Textarea, Select } from "@/components/admin/AdminUI";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Settings — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-6 lg:px-8">
      <PageTitle title="Settings" subtitle="Configure your CMS and website settings." />
      <div className="space-y-6">
        <AdminCard>
          <div className="flex items-center gap-2 border-b border-admin-border px-5 py-4"><Globe className="size-4 text-admin-accent" /><h2 className="text-sm font-semibold text-foreground">Website Settings</h2></div>
          <div className="space-y-4 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Site Name"><Input defaultValue="Solvix IT Solutions" /></Field>
              <Field label="Site URL"><Input defaultValue="https://solvixit.com" /></Field>
              <Field label="Language"><Select options={["English", "Arabic", "Both"]} defaultValue="English" /></Field>
              <Field label="Timezone"><Select options={["GMT+4 (Dubai)", "GMT+0 (UTC)", "GMT-5 (New York)"]} defaultValue="GMT+4 (Dubai)" /></Field>
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center gap-2 border-b border-admin-border px-5 py-4"><Mail className="size-4 text-admin-accent" /><h2 className="text-sm font-semibold text-foreground">Email Settings</h2></div>
          <div className="space-y-4 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="SMTP Host"><Input defaultValue="smtp.gmail.com" /></Field>
              <Field label="SMTP Port"><Input defaultValue="587" /></Field>
              <Field label="From Email"><Input defaultValue="info@solvixit.com" /></Field>
              <Field label="From Name"><Input defaultValue="Solvix IT" /></Field>
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center gap-2 border-b border-admin-border px-5 py-4"><Database className="size-4 text-admin-accent" /><h2 className="text-sm font-semibold text-foreground">Database Connection</h2></div>
          <div className="space-y-3 p-5 text-sm">
            <div className="flex items-center justify-between"><span className="text-muted-foreground">Database</span><span className="flex items-center gap-2 text-emerald-700"><span className="size-2 rounded-full bg-emerald-500" /> Connected</span></div>
            <div className="flex items-center justify-between"><span className="text-muted-foreground">API Endpoint</span><span className="font-medium text-foreground">https://api.solvixit.com</span></div>
            <div className="flex items-center justify-between"><span className="text-muted-foreground">Frontend</span><span className="font-medium text-foreground">Next.js</span></div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center gap-2 border-b border-admin-border px-5 py-4"><Server className="size-4 text-admin-accent" /><h2 className="text-sm font-semibold text-foreground">Cache & Performance</h2></div>
          <div className="space-y-4 p-5">
            <Field label="Cache Duration (minutes)"><Input defaultValue="60" /></Field>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked className="size-4 rounded accent-admin-accent" /> Enable CDN</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked className="size-4 rounded accent-admin-accent" /> Enable Gzip Compression</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="size-4 rounded accent-admin-accent" /> Enable Image Optimization</label>
          </div>
        </AdminCard>

        <div className="flex justify-end gap-2">
          <Btn variant="outline">Cancel</Btn>
          <Btn variant="primary"><Save className="size-4" /> Save Settings</Btn>
        </div>
      </div>
    </div>
  );
}
