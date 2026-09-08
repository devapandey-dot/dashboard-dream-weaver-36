import { createFileRoute, Link } from "@tanstack/react-router";
import { Save, ArrowLeft, Plus } from "lucide-react";
import { AdminCard, CardHead, Btn, Field, Input, Select, Textarea } from "@/components/admin/AdminUI";

export const Route = createFileRoute("/admin/pages/new")({
  head: () => ({ meta: [{ title: "Create Page — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: NewPagePage,
});

function NewPagePage() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-6 lg:px-8">
      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link to="/admin/pages" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Pages</Link>
        <span className="text-muted-foreground">/</span><span className="font-medium text-foreground">Create New Page</span>
      </div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-foreground">Create New Page</h1>
        <p className="mt-1 text-sm text-muted-foreground">Add a new page to your website.</p>
      </div>
      <AdminCard>
        <CardHead title="Page Information" />
        <div className="space-y-4 p-5">
          <Field label="Page Title"><Input placeholder="Enter page title…" /></Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Slug"><Input placeholder="/your-page-slug/" /></Field>
            <Field label="Status"><Select options={["Draft", "Published"]} defaultValue="Draft" /></Field>
          </div>
          <Field label="Page Type"><Select options={["System Page", "Custom Page", "Landing Page"]} defaultValue="Custom Page" /></Field>
          <Field label="Featured Image">
            <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-admin-border bg-admin-surface text-sm text-muted-foreground"><div className="text-center"><Plus className="mx-auto mb-1 size-6" /> Upload Image</div></div>
          </Field>
          <Field label="Page Content"><Textarea placeholder="Start writing your page content…" rows={8} /></Field>
        </div>
        <div className="flex justify-end gap-2 border-t border-admin-border px-5 py-4">
          <Link to="/admin/pages"><Btn variant="outline">Cancel</Btn></Link>
          <Btn variant="primary"><Save className="size-4" /> Create Page</Btn>
        </div>
      </AdminCard>
    </div>
  );
}
