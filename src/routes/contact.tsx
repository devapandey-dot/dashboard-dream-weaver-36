import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { company, services } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Solvix IT Solutions — Dubai, UAE" },
      {
        name: "description",
        content:
          "Talk to our Dubai team about your website, app, software or marketing project. Get a quote within one business day.",
      },
      { property: "og:title", content: "Contact Solvix IT Solutions" },
      {
        property: "og:description",
        content: "Get in touch with our Business Bay, Dubai team for a project quote.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        subtitle="Send us a brief and we'll respond with next steps within one business day."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Get in touch</h2>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> {company.address}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" /> {company.phone}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" /> {company.email}
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                placeholder="Your name"
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <input
                placeholder="Email address"
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <input
                placeholder="Phone number"
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Select a service</option>
                {services.map((s) => (
                  <option key={s.slug}>{s.name}</option>
                ))}
              </select>
            </div>
            <textarea
              rows={5}
              placeholder="Tell us about your project"
              className="mt-4 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <Button type="submit" variant="hero" size="pill" className="mt-5 w-full">
              Send message
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
