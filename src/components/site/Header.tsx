import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Menu, X } from "lucide-react";
import { company, navLinks } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary-deep text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Mail className="size-3.5" /> {company.email}
            </a>
            <a href={`tel:${company.phone}`} className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Phone className="size-3.5" /> {company.phone}
            </a>
          </div>
          <Link to="/admin" className="opacity-90 hover:opacity-100">
            CMS Dashboard
          </Link>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="brand-gradient grid size-9 place-items-center rounded-lg font-display text-lg font-bold text-primary-foreground">
              S
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl font-bold tracking-tight text-foreground">
                Solvix
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                IT Solutions
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="pill" className="hidden sm:inline-flex">
              <Link to="/contact">Get A Quote</Link>
            </Button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-md border border-border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/admin" onClick={() => setOpen(false)} className="text-sm font-medium text-primary">
                CMS Dashboard
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
