import type { ReactNode } from "react";
import { Link, useRouterState, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Boxes,
  Newspaper,
  Briefcase,
  Quote,
  HelpCircle,
  BadgeDollarSign,
  Images,
  Menu as MenuIcon,
  Inbox,
  Search as SearchIcon,
  Repeat,
  Users,
  Settings,
  Bell,
  ChevronDown,
  LogOut,
  User,
  PanelLeftClose,
  PanelLeft,
  X,
  ExternalLink,
  HelpCircle as HelpIcon,
} from "lucide-react";
import { navSections } from "@/data/admin-nav";

const iconMap: Record<string, typeof LayoutDashboard> = {
  LayoutDashboard,
  FileText,
  Boxes,
  Newspaper,
  Briefcase,
  Quote,
  HelpCircle,
  BadgeDollarSign,
  Images,
  Menu: MenuIcon,
  Inbox,
  Search: SearchIcon,
  Repeat,
  Users,
  Settings,
};

export function AdminLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter();
  const location = useRouterState({ select: (s) => s.location });

  useEffect(() => {
    setMobileOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) =>
    to === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(to);

  return (
    <div className="flex min-h-screen bg-admin-workspace">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-admin-sidebar transition-all duration-200 lg:relative ${
          collapsed ? "lg:w-[72px]" : "lg:w-[260px]"
        } ${mobileOpen ? "w-[260px]" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex items-center gap-3 px-5 py-5">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-admin-accent font-display text-lg font-bold text-admin-accent-foreground">
            S
          </span>
          {!collapsed && (
            <div className="leading-none">
              <span className="block font-display text-base font-bold text-white">SOLVIX IT</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-admin-sidebar-muted">
                CMS
              </span>
            </div>
          )}
          <button
            className="ml-auto text-admin-sidebar-muted hover:text-white lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          {navSections.map((section, i) => (
            <div key={i} className="mb-1">
              {section.heading && !collapsed && (
                <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-admin-sidebar-muted">
                  {section.heading}
                </p>
              )}
              {section.items.map((item) => {
                const Icon = iconMap[item.icon] ?? FileText;
                const active = isActive(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-admin-sidebar-active text-white"
                        : "text-admin-sidebar-foreground hover:bg-admin-sidebar-hover hover:text-white"
                    }`}
                  >
                    <Icon className="size-[18px] shrink-0" />
                    {!collapsed && <span className="flex-1">{item.label}</span>}
                    {!collapsed && item.badge && (
                      <span className="rounded-full bg-admin-accent px-2 py-0.5 text-[10px] font-bold text-admin-accent-foreground">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="border-t border-admin-sidebar-border p-3">
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-admin-accent text-xs font-bold text-admin-accent-foreground">
              AK
            </span>
            {!collapsed && (
              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-sm font-medium text-white">Ahmed Karim</p>
                <p className="truncate text-xs text-admin-sidebar-muted">Super Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-admin-border bg-card px-4 lg:px-6">
          <button
            onClick={() => setMobileOpen(true)}
            className="grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface lg:hidden"
          >
            <MenuIcon className="size-5" />
          </button>
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="hidden size-9 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface lg:grid"
          >
            {collapsed ? <PanelLeft className="size-5" /> : <PanelLeftClose className="size-5" />}
          </button>

          <AdminBreadcrumb />

          <div className="ml-auto hidden items-center md:flex">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search pages, services, blogs…"
                className="h-9 w-56 rounded-lg border border-admin-border bg-admin-surface pl-9 pr-3 text-sm outline-none focus:border-admin-accent focus:ring-2 focus:ring-admin-accent/20 lg:w-72"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-1 md:ml-2">
            <Link
              to="/"
              className="grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface"
              title="View website"
            >
              <ExternalLink className="size-[18px]" />
            </Link>
            <button className="grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface">
              <HelpIcon className="size-[18px]" />
            </button>
            <button className="relative grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-admin-surface">
              <Bell className="size-[18px]" />
              <span className="absolute right-2 top-2 size-2 rounded-full bg-admin-accent" />
            </button>

            <div className="relative">
              <button
                onClick={() => setProfileOpen((v) => !v)}
                className="flex items-center gap-2 rounded-md py-1 pl-1 pr-2 hover:bg-admin-surface"
              >
                <span className="grid size-8 place-items-center rounded-full bg-admin-accent text-xs font-bold text-admin-accent-foreground">
                  AK
                </span>
                <span className="hidden text-left leading-tight sm:block">
                  <span className="block text-sm font-medium text-foreground">Ahmed Karim</span>
                  <span className="block text-xs text-muted-foreground">Super Admin</span>
                </span>
                <ChevronDown className="size-4 text-muted-foreground" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-12 z-50 w-48 rounded-lg border border-admin-border bg-card py-1 shadow-lg">
                  <Link
                    to="/admin/settings"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-admin-surface"
                  >
                    <User className="size-4" /> My Profile
                  </Link>
                  <Link
                    to="/admin/settings"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-admin-surface"
                  >
                    <Settings className="size-4" /> Settings
                  </Link>
                  <div className="my-1 border-t border-admin-border" />
                  <button
                    onClick={() => router.navigate({ to: "/" })}
                    className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive hover:bg-destructive/5"
                  >
                    <LogOut className="size-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}

function AdminBreadcrumb() {
  const location = useRouterState({ select: (s) => s.location });
  const segments = location.pathname.split("/").filter(Boolean);

  const labels: Record<string, string> = {
    admin: "Dashboard",
    pages: "Pages",
    services: "Services",
    blogs: "Blogs",
    portfolio: "Portfolio",
    testimonials: "Testimonials",
    faq: "FAQ",
    pricing: "Pricing",
    media: "Media",
    menus: "Menus",
    leads: "Leads",
    seo: "SEO Manager",
    redirects: "Redirects",
    users: "Users & Roles",
    settings: "Settings",
  };

  if (segments.length <= 1)
    return (
      <span className="hidden text-sm font-medium text-foreground lg:block">Dashboard</span>
    );

  return (
    <nav className="hidden items-center gap-1.5 text-sm lg:flex">
      <Link to="/admin" className="text-muted-foreground hover:text-foreground">
        Dashboard
      </Link>
      {segments.slice(1).map((seg, i) => {
        const isLast = i === segments.length - 2;
        const label = labels[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1);
        return (
          <span key={i} className="flex items-center gap-1.5">
            <span className="text-muted-foreground">/</span>
            <span className={isLast ? "font-medium text-foreground" : "text-muted-foreground"}>
              {label}
            </span>
          </span>
        );
      })}
    </nav>
  );
}
