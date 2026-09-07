import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { company, navLinks, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-lg bg-primary-foreground/15 font-display text-lg font-bold">
                S
              </span>
              <span className="font-display text-xl font-bold">Solvix IT</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              A premium IT and digital marketing agency in the UAE, delivering software, cloud and
              growth programmes for ambitious brands.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <span
                  key={i}
                  className="grid size-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:opacity-100 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="hover:opacity-100 hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Get In Touch</h4>
            <ul className="mt-4 space-y-3 text-sm opacity-80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" /> {company.address}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" /> {company.phone}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" /> {company.email}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs opacity-75 md:flex-row">
          <p>Copyright © 2026 Solvix IT Solutions. All rights reserved.</p>
          <p>Privacy Policy · Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  );
}
