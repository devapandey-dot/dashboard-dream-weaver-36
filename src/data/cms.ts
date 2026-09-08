// Sample CMS data powering the admin dashboard screens (front-end only).

export type SectionType =
  | "Hero"
  | "About"
  | "Service Categories"
  | "Services"
  | "Statistics"
  | "Projects"
  | "Testimonials"
  | "Pricing"
  | "CTA"
  | "Contact"
  | "FAQ"
  | "Clients"
  | "Text"
  | "Image"
  | "Gallery"
  | "Video";

export type PageSection = {
  id: string;
  type: SectionType;
  label: string;
  visible: boolean;
};

export type CmsPage = {
  id: string;
  title: string;
  slug: string;
  type: "System Page" | "Custom Page" | "Landing Page";
  status: "Published" | "Draft";
  seoScore: number;
  updated: string;
  sections: PageSection[];
};

export const sectionLibrary: { type: SectionType; icon: string; description: string }[] = [
  { type: "Hero", icon: "Layout", description: "Headline, description, badge and call to action buttons." },
  { type: "About", icon: "Info", description: "Company introduction with image and statistics." },
  { type: "Service Categories", icon: "Grid2x2", description: "Top level category cards with icons." },
  { type: "Services", icon: "Boxes", description: "Pull services directly from the Services collection." },
  { type: "Statistics", icon: "BarChart3", description: "Animated counters for key business numbers." },
  { type: "Projects", icon: "Briefcase", description: "Selected portfolio projects from the CMS." },
  { type: "Testimonials", icon: "Quote", description: "Client reviews with rating, photo and company." },
  { type: "Pricing", icon: "BadgeDollarSign", description: "Pricing plans with features and highlight." },
  { type: "CTA", icon: "Megaphone", description: "Conversion band with heading and two buttons." },
  { type: "Contact", icon: "Mail", description: "Contact details plus enquiry form block." },
  { type: "FAQ", icon: "HelpCircle", description: "Selected FAQs with optional FAQ schema output." },
  { type: "Clients", icon: "Building2", description: "Client logo strip or marquee." },
  { type: "Text", icon: "Type", description: "Free rich text block." },
  { type: "Image", icon: "Image", description: "Single image with caption and alt text." },
  { type: "Gallery", icon: "Images", description: "Multi image grid or slider." },
  { type: "Video", icon: "Video", description: "YouTube, Vimeo or uploaded video embed." },
];

const homeSectionTypes: SectionType[] = [
  "Hero",
  "About",
  "Service Categories",
  "Services",
  "Statistics",
  "Projects",
  "Testimonials",
  "Pricing",
  "CTA",
  "Contact",
  "FAQ",
  "Clients",
];

const mkSections = (types: SectionType[]): PageSection[] =>
  types.map((t, i) => ({ id: `s${i + 1}`, type: t, label: `${t} Section`, visible: true }));

export const cmsPagesFull: CmsPage[] = [
  {
    id: "home",
    title: "Home",
    slug: "/",
    type: "System Page",
    status: "Published",
    seoScore: 94,
    updated: "2 min ago",
    sections: mkSections(homeSectionTypes),
  },
  {
    id: "about-us",
    title: "About Us",
    slug: "/about-us/",
    type: "System Page",
    status: "Published",
    seoScore: 91,
    updated: "15 min ago",
    sections: mkSections(["Hero", "About", "Statistics", "Testimonials", "CTA"]),
  },
  {
    id: "services",
    title: "Services",
    slug: "/services/",
    type: "System Page",
    status: "Published",
    seoScore: 96,
    updated: "2 hours ago",
    sections: mkSections(["Hero", "Service Categories", "Services", "FAQ", "CTA"]),
  },
  {
    id: "portfolio",
    title: "Portfolio",
    slug: "/portfolio/",
    type: "System Page",
    status: "Published",
    seoScore: 89,
    updated: "1 day ago",
    sections: mkSections(["Hero", "Projects", "Clients", "CTA"]),
  },
  {
    id: "contact",
    title: "Contact",
    slug: "/contact/",
    type: "System Page",
    status: "Published",
    seoScore: 88,
    updated: "2 days ago",
    sections: mkSections(["Hero", "Contact", "FAQ", "CTA"]),
  },
  {
    id: "web-development",
    title: "Custom Landing Page",
    slug: "/web-development/",
    type: "Landing Page",
    status: "Draft",
    seoScore: 76,
    updated: "3 days ago",
    sections: mkSections(["Hero", "Services", "Testimonials", "Pricing", "CTA"]),
  },
  {
    id: "careers",
    title: "Careers",
    slug: "/careers/",
    type: "Custom Page",
    status: "Draft",
    seoScore: 71,
    updated: "5 days ago",
    sections: mkSections(["Hero", "Text", "Gallery", "CTA"]),
  },
];

export const dashboardStats = [
  { label: "Total Pages", value: 24, icon: "FileStack", trend: "+3 this month" },
  { label: "Total Services", value: 12, icon: "Boxes", trend: "All published" },
  { label: "Total Blogs", value: 48, icon: "Newspaper", trend: "+7 drafts" },
  { label: "Portfolio Projects", value: 18, icon: "Briefcase", trend: "+2 this month" },
  { label: "Testimonials", value: 24, icon: "Quote", trend: "6 featured" },
  { label: "FAQs", value: 32, icon: "HelpCircle", trend: "Across 5 pages" },
  { label: "Pricing Plans", value: 3, icon: "BadgeDollarSign", trend: "1 popular" },
  { label: "Media Files", value: 186, icon: "Images", trend: "2.4 GB used" },
];

export const leadStats = [
  { label: "Total Leads", value: 126 },
  { label: "New Leads", value: 18 },
  { label: "Contact Requests", value: 34 },
  { label: "Quote Requests", value: 21 },
];

export const recentContent = [
  { name: "Website Development", type: "Service", status: "Published", updated: "2 min ago" },
  { name: "About Us", type: "Page", status: "Published", updated: "15 min ago" },
  { name: "Best SEO Practices", type: "Blog", status: "Draft", updated: "1 hour ago" },
  { name: "Fintech Platform", type: "Portfolio", status: "Published", updated: "3 hours ago" },
  { name: "Cloud Solutions", type: "Service", status: "Published", updated: "6 hours ago" },
  { name: "Client Testimonial — Aurora", type: "Testimonial", status: "Published", updated: "1 day ago" },
];

export const draftCounts = [
  { label: "Draft Pages", value: 4 },
  { label: "Draft Blogs", value: 7 },
  { label: "Draft Services", value: 2 },
  { label: "Draft Portfolio", value: 3 },
];

export const systemStatus = [
  { label: "Website", value: "Online" },
  { label: "API", value: "Connected" },
  { label: "Database", value: "Connected" },
  { label: "Media Storage", value: "Connected" },
];

export const activityLog = [
  { text: "Admin created page", time: "Today 10:32 AM" },
  { text: "Admin updated Hero section", time: "Today 11:15 AM" },
  { text: "SEO metadata updated", time: "Today 11:32 AM" },
  { text: "Page published", time: "Today 11:45 AM" },
];

export const versions = [
  { name: "Version 3", time: "Today 11:45 AM", current: true },
  { name: "Version 2", time: "Yesterday 4:12 PM", current: false },
  { name: "Version 1", time: "12 Aug 2026", current: false },
];

export const redirects = [
  { from: "/old-service/", to: "/services/website-development/", code: "301", hits: 1284 },
  { from: "/blog/old-post/", to: "/blog/seo-checklist-before-you-launch/", code: "301", hits: 412 },
  { from: "/company/", to: "/about-us/", code: "301", hits: 233 },
  { from: "/prices/", to: "/pricing/", code: "302", hits: 96 },
];

export const cmsUsers = [
  { name: "Ahmed Karim", email: "ahmed@solvixit.com", role: "Super Admin", status: "Active" },
  { name: "Sara Malik", email: "sara@solvixit.com", role: "Editor", status: "Active" },
  { name: "Vikram Rao", email: "vikram@solvixit.com", role: "SEO Manager", status: "Active" },
  { name: "Lina Fares", email: "lina@solvixit.com", role: "Author", status: "Invited" },
];

export const menus = [
  {
    name: "Primary Menu",
    location: "Header",
    items: ["Home", "About", "Services", "Portfolio", "Blog", "Pricing", "FAQ", "Contact"],
  },
  {
    name: "Footer Menu",
    location: "Footer",
    items: ["About", "Services", "Portfolio", "Privacy Policy", "Terms", "Contact"],
  },
];

export const seoPages = [
  { page: "Home", slug: "/", title: 52, desc: 148, score: 94, issues: 0 },
  { page: "About Us", slug: "/about-us/", title: 47, desc: 139, score: 91, issues: 1 },
  { page: "Services", slug: "/services/", title: 55, desc: 152, score: 96, issues: 0 },
  { page: "Portfolio", slug: "/portfolio/", title: 43, desc: 121, score: 89, issues: 2 },
  { page: "Contact", slug: "/contact/", title: 39, desc: 118, score: 88, issues: 2 },
  { page: "Custom Landing Page", slug: "/web-development/", title: 61, desc: 92, score: 76, issues: 4 },
];

export const seoChecklist = [
  "SEO Title",
  "Meta Description",
  "Canonical URL",
  "H1",
  "Featured Image",
  "Image Alt Text",
  "Internal Links",
  "Schema",
  "Open Graph Image",
];
