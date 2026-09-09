import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Eye, Save, Globe, Plus, GripVertical, Copy, Trash2, EyeOff, Pencil, X, Check,
  Monitor, Tablet, Smartphone, ArrowLeft, History, Activity as ActivityIcon,
  ExternalLink, Search as SearchIcon,
} from "lucide-react";
import {
  cmsPagesFull,
  sectionLibrary,
  seoChecklist,
  activityLog,
  versions,
  type CmsPage,
  type PageSection,
  type SectionType,
} from "@/data/cms";
import { services, projects, testimonials, faqs } from "@/data/site";
import { AdminCard, CardHead, Btn, Field, Input, Textarea, Select, ScoreRing } from "@/components/admin/AdminUI";

export const Route = createFileRoute("/admin/pages/$id")({
  head: () => ({ meta: [{ title: "Edit Page — Solvix CMS" }, { name: "robots", content: "noindex" }] }),
  component: PageEditorPage,
});

type TabType = "content" | "sections" | "seo" | "preview" | "activity";

const fallbackPage: CmsPage = {
  id: "home",
  title: "Home",
  slug: "/",
  type: "System Page",
  status: "Published",
  seoScore: 94,
  updated: "2 min ago",
  sections: [],
};

function PageEditorPage() {
  const { id } = Route.useParams();
  const page = cmsPagesFull.find((item) => item.id === id) ?? cmsPagesFull[0] ?? fallbackPage;

  const [tab, setTab] = useState<TabType>("content");
  const [sections, setSections] = useState(page.sections);
  const [showAddSection, setShowAddSection] = useState(false);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const moveSection = (idx: number, dir: -1 | 1) => {
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= sections.length) return;
    const updated = [...sections];
    const current = updated[idx];
    const target = updated[newIdx];
    if (!current || !target) return;
    updated[idx] = target;
    updated[newIdx] = current;
    setSections(updated);
  };

  const toggleVisible = (idx: number) => {
    const updated = [...sections];
    const section = updated[idx];
    if (!section) return;
    updated[idx] = { ...section, visible: !section.visible };
    setSections(updated);
  };

  const duplicateSection = (idx: number) => {
    const updated = [...sections];
    const section = updated[idx];
    if (!section) return;
    const copy: PageSection = { ...section, id: `s${Date.now()}` };
    updated.splice(idx + 1, 0, copy);
    setSections(updated);
  };

  const deleteSection = (idx: number) => setSections(sections.filter((_, i) => i !== idx));

  const addSection = (type: SectionType) => {
    setSections([...sections, { id: `s${Date.now()}`, type, label: `${type} Section`, visible: true }]);
    setShowAddSection(false);
  };

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link to="/admin/pages" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> Pages
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium text-foreground">{page.title}</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-foreground">Edit</span>
      </div>

      {/* Header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-foreground">Edit Page</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Last saved: {page.updated} · <StatusBadge status={page.status} />
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Btn variant="outline" onClick={() => setTab("preview")}><Eye className="size-4" /> Preview</Btn>
          <Btn variant="outline"><Save className="size-4" /> Save Draft</Btn>
          <Btn variant="primary" onClick={() => setShowPublishModal(true)}><Globe className="size-4" /> Publish</Btn>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 border-b border-admin-border">
        {([
          { key: "content", label: "Page Information" },
          { key: "sections", label: "Sections" },
          { key: "seo", label: "SEO" },
          { key: "preview", label: "Preview" },
          { key: "activity", label: "Activity & Versions" },
        ] as { key: TabType; label: string }[]).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
              tab === t.key ? "text-admin-accent" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
            {tab === t.key && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-admin-accent" />}
          </button>
        ))}
      </div>

      {/* Content Tab */}
      {tab === "content" && (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <AdminCard>
              <CardHead title="Page Information" />
              <div className="space-y-4 p-5">
                <Field label="Page Title"><Input defaultValue={page.title} /></Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Slug"><Input defaultValue={page.slug} /></Field>
                  <Field label="Status"><Select options={["Published", "Draft"]} defaultValue={page.status} /></Field>
                </div>
                <Field label="Page Type"><Select options={["System Page", "Custom Page", "Landing Page"]} defaultValue={page.type} /></Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Featured Image">
                    <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-admin-border bg-admin-surface text-sm text-muted-foreground">
                      <div className="text-center"><Plus className="mx-auto mb-1 size-6" /> Upload Image</div>
                    </div>
                  </Field>
                  <Field label="Banner Image">
                    <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-admin-border bg-admin-surface text-sm text-muted-foreground">
                      <div className="text-center"><Plus className="mx-auto mb-1 size-6" /> Upload Image</div>
                    </div>
                  </Field>
                </div>
              </div>
            </AdminCard>

            <AdminCard>
              <CardHead title="Content" subtitle="Rich text editor for the page body" />
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-1 rounded-lg border border-admin-border bg-admin-surface p-1.5">
                  {["H1", "H2", "H3", "B", "I", "U", "UL", "OL", "Link", "Image", "Table", "Quote", "Code", "YouTube"].map((t) => (
                    <button key={t} className="rounded px-2.5 py-1 text-xs font-medium text-muted-foreground hover:bg-card hover:text-foreground">{t}</button>
                  ))}
                </div>
                <textarea
                  rows={10}
                  className="w-full rounded-lg border border-admin-border bg-card px-3 py-2 text-sm outline-none focus:border-admin-accent focus:ring-2 focus:ring-admin-accent/20"
                  placeholder="Start writing your page content…"
                  defaultValue={page.id === "home" ? "" : `Welcome to ${page.title}. This is the main content area managed through the CMS rich text editor.`}
                />
              </div>
            </AdminCard>
          </div>

          <div className="space-y-6">
            <AdminCard>
              <CardHead title="Dynamic Website Connection" />
              <div className="space-y-3 p-5 text-sm">
                <Row label="Content Source" value="CMS Database" />
                <Row label="API" value="Connected" badge />
                <Row label="Frontend" value="Next.js" />
                <Row label="Page URL" value={page.slug} />
                <Row label="Dynamic Route" value="/[slug]" />
                <Row label="Status" value="Live" badge />
                <div className="mt-3 rounded-lg border border-admin-border bg-admin-surface p-3">
                  <div className="space-y-1.5">
                    {["CMS", "API", "Next.js", "Public Page"].map((s, i) => (
                      <div key={s}>
                        <div className="rounded-md bg-card px-2 py-1.5 text-center text-xs font-medium text-foreground">{s}</div>
                        {i < 3 && <div className="text-center text-[10px] leading-none text-muted-foreground">↓</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AdminCard>
          </div>
        </div>
      )}

      {/* Sections Tab */}
      {tab === "sections" && (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AdminCard>
              <CardHead
                title="Page Sections"
                subtitle="Reorder, toggle visibility, edit, duplicate or delete sections."
                action={<Btn variant="primary" size="sm" onClick={() => setShowAddSection(true)}><Plus className="size-4" /> Add Section</Btn>}
              />
              <div className="p-5">
                <div className="space-y-2">
                  {sections.map((section, idx) => (
                    <div
                      key={section.id}
                      className={`flex items-center gap-3 rounded-lg border bg-card px-4 py-3 transition ${
                        !section.visible ? "border-admin-border opacity-50" : "border-admin-border hover:border-admin-accent/30"
                      }`}
                    >
                      <GripVertical className="size-5 shrink-0 cursor-grab text-muted-foreground" />
                      <span className="text-xs font-semibold text-muted-foreground">{String(idx + 1).padStart(2, "0")}</span>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${section.visible ? "text-foreground" : "text-muted-foreground"}`}>{section.label}</p>
                        <p className="text-xs text-muted-foreground">{section.type}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button onClick={() => moveSection(idx, -1)} disabled={idx === 0} className="grid size-8 place-items-center rounded text-muted-foreground hover:bg-admin-surface disabled:opacity-30" title="Move up">↑</button>
                        <button onClick={() => moveSection(idx, 1)} disabled={idx === sections.length - 1} className="grid size-8 place-items-center rounded text-muted-foreground hover:bg-admin-surface disabled:opacity-30" title="Move down">↓</button>
                        <button onClick={() => toggleVisible(idx)} className="grid size-8 place-items-center rounded text-muted-foreground hover:bg-admin-surface" title={section.visible ? "Hide" : "Show"}>
                          {section.visible ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                        </button>
                        <button onClick={() => setEditingSection(section.id)} className="grid size-8 place-items-center rounded text-muted-foreground hover:bg-admin-surface" title="Edit"><Pencil className="size-4" /></button>
                        <button onClick={() => duplicateSection(idx)} className="grid size-8 place-items-center rounded text-muted-foreground hover:bg-admin-surface" title="Duplicate"><Copy className="size-4" /></button>
                        <button onClick={() => deleteSection(idx)} className="grid size-8 place-items-center rounded text-destructive hover:bg-destructive/5" title="Delete"><Trash2 className="size-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AdminCard>
          </div>

          <div>
            {editingSection ? (
              <SectionEditor sectionId={editingSection} sectionType={sections.find((s) => s.id === editingSection)?.type ?? "Hero"} onClose={() => setEditingSection(null)} />
            ) : (
              <AdminCard>
                <CardHead title="Section Library" subtitle="Click a section to edit it" />
                <div className="space-y-2 p-5">
                  <p className="text-sm text-muted-foreground">Select a section from the list to edit its content. Use the arrows to reorder, the eye to toggle visibility, or the trash to remove.</p>
                  <Btn variant="primary" size="sm" className="w-full" onClick={() => setShowAddSection(true)}><Plus className="size-4" /> Add New Section</Btn>
                </div>
              </AdminCard>
            )}
          </div>
        </div>
      )}

      {/* Add Section Modal */}
      {showAddSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowAddSection(false)}>
          <div className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-card shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-admin-border px-5 py-4">
              <h3 className="font-display text-lg font-semibold text-foreground">Add Section</h3>
              <button onClick={() => setShowAddSection(false)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><X className="size-5" /></button>
            </div>
            <div className="grid gap-3 p-5 sm:grid-cols-2">
              {sectionLibrary.map((s) => (
                <button key={s.type} onClick={() => addSection(s.type)} className="flex items-start gap-3 rounded-lg border border-admin-border p-4 text-left transition hover:border-admin-accent/40 hover:bg-admin-surface">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-admin-accent-light text-admin-accent"><Plus className="size-4" /></span>
                  <div><p className="text-sm font-semibold text-foreground">{s.type}</p><p className="mt-0.5 text-xs text-muted-foreground">{s.description}</p></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SEO Tab */}
      {tab === "seo" && (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <AdminCard>
              <CardHead title="SEO Fields" />
              <div className="space-y-4 p-5">
                <Field label="SEO Title" hint="52 / 60 characters"><Input defaultValue={`Solvix IT | ${page.title}`} /></Field>
                <Field label="Meta Description" hint="148 / 160 characters"><Textarea defaultValue="Professional IT solutions, software development, web development and digital marketing services." rows={3} /></Field>
                <Field label="SEO Keywords">
                  <div className="flex flex-wrap gap-2 rounded-lg border border-admin-border bg-card p-2">
                    {["software development", "web development", "SEO services"].map((k) => (
                      <span key={k} className="flex items-center gap-1.5 rounded-md bg-admin-surface px-2.5 py-1 text-xs">{k}<button className="text-muted-foreground hover:text-destructive">×</button></span>
                    ))}
                    <input placeholder="Add keyword…" className="flex-1 min-w-[120px] bg-transparent text-sm outline-none" />
                  </div>
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Canonical URL"><Input defaultValue={`https://solvixit.com${page.slug}`} /></Field>
                  <Field label="Robots"><Select options={["Index, Follow", "Noindex, Nofollow", "Index, Nofollow", "Noindex, Follow"]} /></Field>
                </div>
              </div>
            </AdminCard>
            <AdminCard>
              <CardHead title="Open Graph" />
              <div className="space-y-4 p-5">
                <Field label="OG Title"><Input defaultValue={`Solvix IT | ${page.title}`} /></Field>
                <Field label="OG Description"><Textarea defaultValue="Websites, apps, cloud and marketing delivered by one Dubai based team." rows={2} /></Field>
                <Field label="OG Image"><div className="flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-admin-border bg-admin-surface text-sm text-muted-foreground"><Plus className="mr-1 size-5" /> Upload Image</div></Field>
              </div>
            </AdminCard>
            <AdminCard>
              <CardHead title="Twitter Card" />
              <div className="space-y-4 p-5">
                <Field label="Twitter Title"><Input defaultValue={`Solvix IT | ${page.title}`} /></Field>
                <Field label="Twitter Description"><Textarea defaultValue="Websites, apps, cloud and marketing delivered by one Dubai based team." rows={2} /></Field>
                <Field label="Twitter Image"><div className="flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-admin-border bg-admin-surface text-sm text-muted-foreground"><Plus className="mr-1 size-5" /> Upload Image</div></Field>
              </div>
            </AdminCard>
            <AdminCard>
              <CardHead title="Schema (JSON-LD)" />
              <div className="space-y-4 p-5">
                <Field label="Schema Type"><Select options={["Organization", "Service", "Article", "FAQ", "LocalBusiness", "Breadcrumb"]} defaultValue="Organization" /></Field>
                <Field label="JSON-LD">
                  <textarea rows={6} className="w-full rounded-lg border border-admin-border bg-admin-surface px-3 py-2 font-mono text-xs outline-none focus:border-admin-accent" defaultValue={`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Solvix IT Solutions",
  "url": "https://solvixit.com"
}`} />
                </Field>
                <div className="flex gap-2">
                  <Btn variant="outline" size="sm">Validate Schema</Btn>
                  <Btn variant="primary" size="sm">Save SEO</Btn>
                </div>
              </div>
            </AdminCard>
          </div>
          <div className="space-y-6">
            <AdminCard>
              <CardHead title="SEO Score" />
              <div className="p-5 text-center">
                <div className="inline-flex flex-col items-center justify-center">
                  <span className="font-display text-5xl font-bold text-emerald-600">{page.seoScore}</span>
                  <span className="text-sm text-muted-foreground">/ 100</span>
                </div>
                <p className="mt-2 text-xs font-medium text-emerald-600">Good — ready to publish</p>
              </div>
            </AdminCard>
            <AdminCard>
              <CardHead title="SEO Checklist" />
              <div className="space-y-2 p-5">
                {seoChecklist.map((item, i) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm">
                    <span className={`grid size-5 place-items-center rounded-full ${i < 7 ? "bg-emerald-500/15 text-emerald-600" : "bg-amber-500/15 text-amber-600"}`}>
                      {i < 7 ? <Check className="size-3" /> : "!"}
                    </span>
                    <span className={i < 7 ? "text-foreground" : "text-muted-foreground"}>{item}</span>
                  </div>
                ))}
              </div>
            </AdminCard>
          </div>
        </div>
      )}

      {/* Preview Tab */}
      {tab === "preview" && (
        <AdminCard>
          <div className="flex items-center justify-between border-b border-admin-border px-5 py-3">
            <div className="flex gap-1">
              {([{ key: "desktop", icon: Monitor, label: "Desktop" }, { key: "tablet", icon: Tablet, label: "Tablet" }, { key: "mobile", icon: Smartphone, label: "Mobile" }] as const).map((d) => (
                <button key={d.key} onClick={() => setPreviewDevice(d.key)} className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium ${previewDevice === d.key ? "bg-admin-accent text-admin-accent-foreground" : "text-muted-foreground hover:bg-admin-surface"}`}>
                  <d.icon className="size-4" /> {d.label}
                </button>
              ))}
            </div>
            <Btn variant="outline" size="sm"><ExternalLink className="size-4" /> Open Live Website</Btn>
          </div>
          <div className="bg-admin-workspace p-8">
            <div className={`mx-auto rounded-lg border border-admin-border bg-card shadow-sm transition-all ${previewDevice === "desktop" ? "max-w-4xl" : previewDevice === "tablet" ? "max-w-2xl" : "max-w-sm"}`}>
              <div className="hero-gradient px-8 py-12 text-white">
                <p className="text-xs uppercase tracking-[0.35em] opacity-70">IT Service Agency</p>
                <h1 className="mt-4 font-display text-3xl font-bold">Smart IT solutions and marketing that grow your business</h1>
                <p className="mt-4 text-sm opacity-85">We design, build and market digital products for companies across the UAE.</p>
                <div className="mt-6 flex gap-3">
                  <span className="rounded-full bg-white/20 px-5 py-2 text-sm">Get A Quote</span>
                  <span className="rounded-full border border-white/40 px-5 py-2 text-sm">Our Services</span>
                </div>
              </div>
              <div className="space-y-4 p-8">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg border border-admin-border p-4"><div className="h-3 w-20 rounded bg-admin-surface" /><div className="mt-2 h-2 w-full rounded bg-admin-surface" /><div className="mt-1 h-2 w-3/4 rounded bg-admin-surface" /></div>
                  ))}
                </div>
                <div className="h-32 rounded-lg border border-admin-border bg-admin-surface" />
              </div>
            </div>
          </div>
        </AdminCard>
      )}

      {/* Activity Tab */}
      {tab === "activity" && (
        <div className="grid gap-6 lg:grid-cols-2">
          <AdminCard>
            <CardHead title="Activity Log" />
            <div className="space-y-3 p-5">
              {activityLog.map((a, i) => (
                <div key={i} className="flex gap-3 border-b border-admin-border pb-3 last:border-0">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-admin-accent-light text-admin-accent"><ActivityIcon className="size-4" /></span>
                  <div><p className="text-sm font-medium text-foreground">{a.text}</p><p className="text-xs text-muted-foreground">{a.time}</p></div>
                </div>
              ))}
            </div>
          </AdminCard>
          <AdminCard>
            <CardHead title="Version History" />
            <div className="divide-y divide-admin-border">
              {versions.map((v) => (
                <div key={v.name} className="flex items-center justify-between px-5 py-3">
                  <div className="flex items-center gap-3">
                    <History className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{v.name}{v.current && <span className="ml-2 rounded-full bg-admin-accent-light px-2 py-0.5 text-[10px] font-semibold text-admin-accent">Current</span>}</p>
                      <p className="text-xs text-muted-foreground">{v.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-2"><Btn variant="ghost" size="sm">View</Btn>{!v.current && <Btn variant="outline" size="sm">Restore</Btn>}</div>
                </div>
              ))}
            </div>
          </AdminCard>
        </div>
      )}

      {/* Publish Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowPublishModal(false)}>
          <div className="w-full max-w-md rounded-xl bg-card shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="border-b border-admin-border px-5 py-4"><h3 className="font-display text-lg font-semibold text-foreground">Publish Page?</h3></div>
            <div className="space-y-3 p-5 text-sm">
              <Row label="Page" value={page.title} />
              <Row label="SEO Score" value={`${page.seoScore}/100`} />
              <Row label="URL" value={page.slug} />
              <Row label="Status" value="Ready to publish" badge />
              <div className="rounded-lg bg-admin-surface p-3">
                <div className="space-y-1">
                  {["Save Draft", "Preview", "SEO Validation", "Publish", "Database Updated", "API", "Website Updated"].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-xs"><Check className="size-3 text-emerald-600" /> {s}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 border-t border-admin-border px-5 py-4">
              <Btn variant="outline" onClick={() => setShowPublishModal(false)}>Cancel</Btn>
              <Btn variant="primary" onClick={() => setShowPublishModal(false)}><Globe className="size-4" /> Publish Page</Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${status === "Published" ? "bg-emerald-500/10 text-emerald-700" : "bg-amber-500/10 text-amber-700"}`}>
      <span className="size-1.5 rounded-full bg-current" /> {status}
    </span>
  );
}

function Row({ label, value, badge }: { label: string; value: string; badge?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      {badge ? (
        <span className="flex items-center gap-1.5 text-emerald-700"><span className="size-2 rounded-full bg-emerald-500" /> {value}</span>
      ) : (
        <span className="font-medium text-foreground">{value}</span>
      )}
    </div>
  );
}

function SectionEditor({ sectionId, sectionType, onClose }: { sectionId: string; sectionType: SectionType; onClose: () => void }) {
  return (
    <AdminCard>
      <div className="flex items-center justify-between border-b border-admin-border px-5 py-4">
        <div><h3 className="text-sm font-semibold text-foreground">Edit {sectionType} Section</h3><p className="mt-0.5 text-xs text-muted-foreground">Section ID: {sectionId}</p></div>
        <button onClick={onClose} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"><X className="size-4" /></button>
      </div>
      <div className="space-y-4 p-5">
        <SectionEditorContent type={sectionType} />
        <div className="flex gap-2 border-t border-admin-border pt-4">
          <Btn variant="primary" size="sm"><Save className="size-4" /> Save Section</Btn>
          <Btn variant="outline" size="sm" onClick={onClose}>Cancel</Btn>
        </div>
      </div>
    </AdminCard>
  );
}

function SectionEditorContent({ type }: { type: SectionType }) {
  switch (type) {
    case "Hero":
      return (
        <>
          <Field label="Heading"><Textarea defaultValue="Innovative IT Solutions For Your Business" rows={2} /></Field>
          <Field label="Description"><Textarea defaultValue="We help businesses build, scale and market digital products." rows={2} /></Field>
          <Field label="Badge"><Input defaultValue="500+ Happy Clients" /></Field>
          <Field label="Background Image"><div className="flex h-20 items-center justify-center rounded-lg border-2 border-dashed border-admin-border bg-admin-surface text-sm text-muted-foreground"><Plus className="mr-1 size-5" /> Upload</div></Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Primary Button Text"><Input defaultValue="Get Started" /></Field>
            <Field label="Primary Button URL"><Input defaultValue="/contact" /></Field>
            <Field label="Secondary Button Text"><Input defaultValue="Our Services" /></Field>
            <Field label="Secondary Button URL"><Input defaultValue="/services" /></Field>
          </div>
          <Field label="Alignment"><Select options={["Left", "Center", "Right"]} defaultValue="Left" /></Field>
        </>
      );
    case "About":
      return (
        <>
          <Field label="Section Title"><Input defaultValue="Built for measurable results" /></Field>
          <Field label="Description"><Textarea defaultValue="Based in Business Bay, Dubai, we bring engineers, designers and marketers together." rows={3} /></Field>
          <Field label="Image Alt Text"><Input defaultValue="Solvix team collaborating" /></Field>
          <Field label="Button Text"><Input defaultValue="More About Us" /></Field>
          <Field label="Button URL"><Input defaultValue="/about" /></Field>
          <div className="border-t border-admin-border pt-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Statistics</p>
            {[{ label: "Years Experience", value: "10+" }, { label: "Clients", value: "150+" }, { label: "Projects", value: "200+" }, { label: "Team Members", value: "25" }].map((s) => (
              <div key={s.label} className="mb-2 grid grid-cols-3 gap-2">
                <input defaultValue={s.label} className="col-span-2 rounded-md border border-admin-border bg-card px-3 py-1.5 text-sm" />
                <input defaultValue={s.value} className="rounded-md border border-admin-border bg-card px-3 py-1.5 text-sm" />
              </div>
            ))}
            <Btn variant="outline" size="sm" className="mt-2"><Plus className="size-4" /> Add Statistic</Btn>
          </div>
        </>
      );
    case "Services":
      return <ServiceSectionEditor />;
    case "Projects":
      return <ProjectSectionEditor />;
    case "Testimonials":
      return <TestimonialSectionEditor />;
    case "FAQ":
      return <FaqSectionEditor />;
    case "CTA":
      return (
        <>
          <Field label="Heading"><Input defaultValue="Ready to start your next project?" /></Field>
          <Field label="Description"><Textarea defaultValue="Tell us what you are building and we will come back with a clear scope." rows={2} /></Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Primary Button Text"><Input defaultValue="Get A Quote" /></Field>
            <Field label="Primary Button URL"><Input defaultValue="/contact" /></Field>
            <Field label="Secondary Button Text"><Input defaultValue="View Services" /></Field>
            <Field label="Secondary Button URL"><Input defaultValue="/services" /></Field>
          </div>
          <Field label="Visibility"><Select options={["Visible", "Hidden"]} defaultValue="Visible" /></Field>
        </>
      );
    default:
      return (
        <>
          <Field label="Section Title"><Input defaultValue={`${type} Section`} /></Field>
          <Field label="Description"><Textarea placeholder="Enter section description…" rows={3} /></Field>
        </>
      );
  }
}

function ServiceSectionEditor() {
  const [selected, setSelected] = useState(services.slice(0, 6).map((s) => s.slug));
  const [query, setQuery] = useState("");
  const filtered = services.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));
  const toggle = (slug: string) => setSelected((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);

  return (
    <>
      <Field label="Section Title"><Input defaultValue="Everything you need, under one roof" /></Field>
      <Field label="Section Description"><Textarea defaultValue="Thirteen focused services across technology and marketing." rows={2} /></Field>
      <div className="border-t border-admin-border pt-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Select Services</p>
        <div className="relative mb-2">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search service…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
        </div>
        <div className="max-h-48 space-y-1.5 overflow-y-auto">
          {filtered.map((s) => (
            <label key={s.slug} className="flex items-center gap-3 rounded-md border border-admin-border p-2.5 hover:bg-admin-surface">
              <input type="checkbox" checked={selected.includes(s.slug)} onChange={() => toggle(s.slug)} className="size-4 rounded border-admin-border accent-admin-accent" />
              <div className="flex-1"><p className="text-sm font-medium text-foreground">{s.name}</p><p className="text-xs text-muted-foreground">{s.category}</p></div>
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{selected.length} services selected</p>
      </div>
    </>
  );
}

function ProjectSectionEditor() {
  const [selected, setSelected] = useState(projects.slice(0, 3).map((p) => p.slug));
  const [query, setQuery] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const filtered = projects.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  const toggle = (slug: string) => setSelected((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);

  return (
    <>
      <Field label="Section Title"><Input defaultValue="Recent work we are proud of" /></Field>
      <Field label="Description"><Textarea defaultValue="A selection of platforms and campaigns delivered for clients." rows={2} /></Field>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={featuredOnly} onChange={() => setFeaturedOnly((v) => !v)} className="size-4 rounded accent-admin-accent" /> Show Featured Projects Only</label>
      <div className="border-t border-admin-border pt-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Select Projects</p>
        <div className="relative mb-2">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search project…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
        </div>
        <div className="max-h-48 space-y-1.5 overflow-y-auto">
          {filtered.map((p) => (
            <label key={p.slug} className="flex items-center gap-3 rounded-md border border-admin-border p-2.5 hover:bg-admin-surface">
              <input type="checkbox" checked={selected.includes(p.slug)} onChange={() => toggle(p.slug)} className="size-4 rounded border-admin-border accent-admin-accent" />
              <div className="flex-1"><p className="text-sm font-medium text-foreground">{p.name}</p><p className="text-xs text-muted-foreground">{p.category} · {p.industry}</p></div>
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{selected.length} projects selected</p>
      </div>
    </>
  );
}

function TestimonialSectionEditor() {
  const [selected, setSelected] = useState(testimonials.map((t) => t.id));
  const [query, setQuery] = useState("");
  const filtered = testimonials.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()) || t.company.toLowerCase().includes(query.toLowerCase()));
  const toggle = (id: string) => setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);

  return (
    <>
      <Field label="Section Title"><Input defaultValue="What our clients say" /></Field>
      <div className="border-t border-admin-border pt-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Select Testimonials</p>
        <div className="relative mb-2">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or company…" className="h-9 w-full rounded-lg border border-admin-border bg-card pl-9 pr-3 text-sm outline-none focus:border-admin-accent" />
        </div>
        <div className="max-h-48 space-y-1.5 overflow-y-auto">
          {filtered.map((t) => (
            <label key={t.id} className="flex items-center gap-3 rounded-md border border-admin-border p-2.5 hover:bg-admin-surface">
              <input type="checkbox" checked={selected.includes(t.id)} onChange={() => toggle(t.id)} className="size-4 rounded border-admin-border accent-admin-accent" />
              <div className="flex-1"><p className="text-sm font-medium text-foreground">{t.name}</p><p className="text-xs text-muted-foreground">{t.designation}, {t.company} · {t.rating}★</p></div>
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{selected.length} testimonials selected</p>
      </div>
    </>
  );
}

function FaqSectionEditor() {
  const [selected, setSelected] = useState(faqs.map((f) => f.id));
  const [showSchema, setShowSchema] = useState(true);
  const toggle = (id: string) => setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);

  return (
    <>
      <Field label="Section Title"><Input defaultValue="Questions we hear often" /></Field>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={showSchema} onChange={() => setShowSchema((v) => !v)} className="size-4 rounded accent-admin-accent" /> Show FAQ Schema (JSON-LD)</label>
      <div className="border-t border-admin-border pt-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Select FAQs</p>
        <div className="max-h-48 space-y-1.5 overflow-y-auto">
          {faqs.map((f) => (
            <label key={f.id} className="flex items-start gap-3 rounded-md border border-admin-border p-2.5 hover:bg-admin-surface">
              <input type="checkbox" checked={selected.includes(f.id)} onChange={() => toggle(f.id)} className="mt-0.5 size-4 rounded border-admin-border accent-admin-accent" />
              <div className="flex-1"><p className="text-sm font-medium text-foreground">{f.question}</p><p className="text-xs text-muted-foreground">{f.category} · {f.page}</p></div>
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{selected.length} FAQs selected</p>
      </div>
    </>
  );
}
