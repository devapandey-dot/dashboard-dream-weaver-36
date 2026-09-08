import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionHeading } from "@/components/site/SiteLayout";
import { images, stats, company } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Solvix IT Solutions — IT & Marketing Agency in Dubai" },
      {
        name: "description",
        content:
          "Meet Solvix IT Solutions, a Dubai based team delivering software, cloud and digital marketing programmes for ambitious brands.",
      },
      { property: "og:title", content: "About Solvix IT Solutions" },
      {
        property: "og:description",
        content: "A Dubai based IT and digital marketing team building measurable growth.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Engineering and marketing under one roof"
        subtitle="We help UAE businesses build the software they need and the demand to fill it."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src={images.aboutTeam} alt="Solvix team collaborating" className="rounded-xl" />
            <img src={images.aboutTeam2} alt="Solvix office" className="mt-8 rounded-xl" />
          </div>
          <div>
            <SectionHeading eyebrow="Who We Are" title="A partner, not a vendor" align="left" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Solvix IT Solutions is a premium technology and marketing agency based in{" "}
              {company.address}. We combine engineers, designers and marketers in one team so
              strategy, build and growth never get lost between agencies.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Since our first project we have delivered platforms for retail, healthcare, logistics
              and professional services clients across the GCC, always with clear reporting and
              accountable results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
