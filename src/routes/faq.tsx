import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { faqs } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Solvix IT Solutions" },
      {
        name: "description",
        content:
          "Answers to common questions about our software development, timelines, support and working with clients in the UAE.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Solvix IT" },
      {
        property: "og:description",
        content: "Services, timelines, pricing and support questions answered.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything clients usually ask before starting a project with us."
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.id}
              className="group rounded-xl border border-border bg-card p-6 [&_summary]:cursor-pointer"
            >
              <summary className="font-display text-base font-semibold text-foreground">
                {f.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
