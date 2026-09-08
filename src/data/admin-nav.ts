export type NavItem = {
  label: string;
  to: string;
  icon: string;
  badge?: string;
};

export type NavSection = {
  heading?: string;
  items: NavItem[];
};

export const navSections: NavSection[] = [
  {
    items: [{ label: "Dashboard", to: "/admin", icon: "LayoutDashboard" }],
  },
  {
    heading: "Content",
    items: [
      { label: "Pages", to: "/admin/pages", icon: "FileText" },
      { label: "Services", to: "/admin/services", icon: "Boxes" },
      { label: "Blogs", to: "/admin/blogs", icon: "Newspaper" },
      { label: "Portfolio", to: "/admin/portfolio", icon: "Briefcase" },
    ],
  },
  {
    heading: "Marketing",
    items: [
      { label: "Testimonials", to: "/admin/testimonials", icon: "Quote" },
      { label: "FAQ", to: "/admin/faq", icon: "HelpCircle" },
      { label: "Pricing", to: "/admin/pricing", icon: "BadgeDollarSign" },
    ],
  },
  {
    heading: "Website",
    items: [
      { label: "Media", to: "/admin/media", icon: "Images" },
      { label: "Menus", to: "/admin/menus", icon: "Menu" },
    ],
  },
  {
    heading: "Leads",
    items: [{ label: "Leads", to: "/admin/leads", icon: "Inbox", badge: "18" }],
  },
  {
    heading: "SEO",
    items: [
      { label: "SEO Manager", to: "/admin/seo", icon: "Search" },
      { label: "Redirects", to: "/admin/redirects", icon: "Repeat" },
    ],
  },
  {
    heading: "System",
    items: [
      { label: "Users & Roles", to: "/admin/users", icon: "Users" },
      { label: "Settings", to: "/admin/settings", icon: "Settings" },
    ],
  },
];
