import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  images,
  services,
  serviceCategories,
  stats,
  projects,
  testimonials,
  faqs,
  plans,
  posts,
  clients,
  company,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solvix IT Solutions — IT & Digital Marketing Agency in Dubai" },
      {
        name: "description",
        content:
          "Solvix IT Solutions builds websites, mobile apps, cloud platforms and digital marketing programmes for ambitious businesses across the UAE.",
      },
      { property: "og:title", content: "Solvix IT Solutions — IT & Digital Marketing Agency" },
      {
        property: "og:description",
        content: "Websites, apps, cloud and marketing delivered by one Dubai based team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Solvix IT Solutions" },
      {
        name: "twitter:description",
        content: "Websites, apps, cloud and marketing delivered by one Dubai based team.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.slice(0, 3);
  const homeFaqs = faqs.slice(0, 5);
  const homePosts = posts.slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] opacity-70">{company.tagline}</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Smart IT solutions and marketing that grow your business
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-85 md:text-base">
              We design, build and market digital products for companies across the UAE — from
              websites and mobile apps to cloud infrastructure and performance campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="pill">
                <Link to="/contact">Get A Quote</Link>
              </Button>
              <Button asChild variant="outline" size="pill" className="border-white/40 bg-transparent text-primary-foreground hover:bg-white/10">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <img
            src={images.heroNetwork}
            alt="Global technology network"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Clients strip */}
      <div className="border-b border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-8">
          {clients.map((c) => (
            <span key={c} className="font-display text-lg font-semibold text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* What we do */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="What We Do" title="One team for technology and growth" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceCategories.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-8 transition hover:shadow-lg"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src={images.aboutTeam} alt="Solvix team" className="rounded-xl" />
            <img src={images.aboutTeam2} alt="Solvix office" className="mt-8 rounded-xl" />
          </div>
          <div>
            <SectionHeading eyebrow="About Us" title="Built for measurable results" align="left" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Based in {company.address}, we bring engineers, designers and marketers together so
              your project moves from idea to launch to growth without handovers between agencies.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Dedicated project manager on every engagement",
                "Transparent weekly reporting",
                "Design, development and marketing in-house",
                "Support and maintenance after launch",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="pill" className="mt-8">
              <Link to="/about">More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Our Services" title="Everything you need, under one roof" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary/70">{s.category}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="hero" size="pill">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="hero-gradient text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold">{s.value}</p>
              <p className="mt-2 text-sm opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Why Choose Us" title="A partner invested in your outcome" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { img: images.why1, title: "Experienced Team", text: "Senior engineers, designers and strategists with GCC delivery experience." },
            { img: images.why2, title: "Transparent Process", text: "Clear scope, weekly demos and reporting you can act on." },
            { img: images.why3, title: "Long Term Support", text: "Maintenance, monitoring and optimisation after go-live." },
          ].map((w) => (
            <div key={w.title} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={w.img} alt={w.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Portfolio" title="Recent work we are proud of" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <div key={p.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
                <img src={p.image} alt={p.name} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary/70">{p.category}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="hero" size="pill">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.review}"</p>
              <p className="mt-5 font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">
                {t.designation}, {t.company}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Pricing" title="Simple, transparent packages" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className={`rounded-2xl border p-8 ${
                  p.featured
                    ? "border-primary bg-primary text-primary-foreground shadow-xl"
                    : "border-border bg-card"
                }`}
              >
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>
                  {p.description}
                </p>
                <p className="mt-6 font-display text-4xl font-bold">
                  {p.currency} {p.price}
                </p>
                <p className={`text-xs ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>
                  {p.period}
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                      <span className={p.featured ? "" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="hero" size="pill">
              <Link to="/pricing">Compare All Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading eyebrow="FAQ" title="Questions we hear often" />
        <div className="mt-10 space-y-4">
          {homeFaqs.map((f) => (
            <details
              key={f.question}
              className="rounded-xl border border-border bg-card p-6 [&_summary]:cursor-pointer"
            >
              <summary className="font-display font-semibold text-foreground">{f.question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Insights" title="From our blog" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {homePosts.map((p) => (
              <div key={p.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary/70">{p.category}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="hero" size="pill">
              <Link to="/blog">Read The Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to start your next project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm opacity-85">
            Tell us what you are building and we will come back with a clear scope, timeline and
            price within two working days.
          </p>
          <Button asChild variant="hero" size="pill" className="mt-8">
            <Link to="/contact">Get A Quote</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
