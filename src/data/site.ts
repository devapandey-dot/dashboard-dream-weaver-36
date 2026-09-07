import heroNetwork from "@/assets/hero-network.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutTeam2 from "@/assets/about-team-2.jpg";
import why1 from "@/assets/why-1.jpg";
import why2 from "@/assets/why-2.jpg";
import why3 from "@/assets/why-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const images = {
  heroNetwork,
  aboutTeam,
  aboutTeam2,
  why1,
  why2,
  why3,
  project1,
  project2,
  project3,
};

export const company = {
  name: "Solvix IT",
  tagline: "IT Service Agency",
  email: "info@solvixit.com",
  phone: "+971 561368466",
  address: "Business Bay, Dubai, United Arab Emirates",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  name: string;
  category: "IT Solutions" | "Digital Marketing";
  icon: string;
  short: string;
  long: string;
  features: string[];
  process: { title: string; text: string }[];
  benefits: string[];
  status: "Published" | "Draft";
};

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    category: "IT Solutions",
    icon: "Globe",
    short:
      "Fast, secure and scalable websites engineered around your business goals and built to convert.",
    long: "We design and build high performance websites using modern frameworks, headless CMS architecture and SEO-first markup. Every build is responsive, accessible and optimised for Core Web Vitals so your brand performs on every device.",
    features: [
      "Custom UI/UX design",
      "Headless CMS integration",
      "Core Web Vitals optimisation",
      "E-commerce and payments",
      "Multi-language support",
      "Ongoing maintenance",
    ],
    process: [
      { title: "Discovery", text: "We map goals, audience and technical requirements." },
      { title: "Design", text: "Wireframes and high fidelity screens approved before build." },
      { title: "Build", text: "Component driven development with weekly demos." },
      { title: "Launch", text: "QA, SEO checks, redirects and go-live support." },
    ],
    benefits: [
      "Higher conversion rates",
      "Lower bounce rate",
      "Editable content without a developer",
      "Search engine ready structure",
    ],
    status: "Published",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "IT Solutions",
    icon: "Smartphone",
    short:
      "Native and cross-platform mobile applications with clean architecture and delightful interfaces.",
    long: "From product strategy to App Store release, we deliver iOS and Android applications that feel fast and reliable. We use React Native and Flutter for cross-platform reach, and Swift or Kotlin where native depth is required.",
    features: [
      "iOS and Android delivery",
      "React Native and Flutter",
      "Offline-first data sync",
      "Push notifications",
      "Payments and subscriptions",
      "Store submission support",
    ],
    process: [
      { title: "Strategy", text: "Feature prioritisation and release roadmap." },
      { title: "Prototype", text: "Clickable prototype validated with users." },
      { title: "Development", text: "Two week sprints with test builds." },
      { title: "Release", text: "Store listing, analytics and crash reporting." },
    ],
    benefits: ["Faster time to market", "One codebase, two platforms", "Measurable user retention"],
    status: "Published",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    category: "IT Solutions",
    icon: "PenTool",
    short:
      "Research led interface design that turns complex products into simple, confident experiences.",
    long: "Our design team combines user research, information architecture and visual craft to create interfaces people understand instantly. Every project ships with a reusable design system.",
    features: [
      "User research and interviews",
      "Information architecture",
      "Wireframes and prototypes",
      "Design systems",
      "Usability testing",
      "Accessibility review",
    ],
    process: [
      { title: "Research", text: "Understand users, competitors and constraints." },
      { title: "Structure", text: "Flows, sitemaps and low fidelity layouts." },
      { title: "Visual", text: "Brand aligned high fidelity screens." },
      { title: "Handoff", text: "Tokens, components and developer documentation." },
    ],
    benefits: ["Fewer support tickets", "Consistent brand experience", "Faster development"],
    status: "Published",
  },
  {
    slug: "software-development",
    name: "Custom Software Development",
    category: "IT Solutions",
    icon: "Code2",
    short:
      "Bespoke platforms, portals and internal tools tailored precisely to how your business operates.",
    long: "We build custom software when off-the-shelf tools stop fitting. ERP modules, CRM integrations, booking engines and internal dashboards, all built on maintainable TypeScript and PostgreSQL foundations.",
    features: [
      "Requirement engineering",
      "API and integration layer",
      "Role based access control",
      "Automated testing",
      "Cloud deployment",
      "Documentation and training",
    ],
    process: [
      { title: "Audit", text: "Map current workflows and pain points." },
      { title: "Architecture", text: "Data model, APIs and security design." },
      { title: "Delivery", text: "Iterative releases into staging." },
      { title: "Support", text: "SLA backed maintenance and enhancements." },
    ],
    benefits: ["Automated manual work", "Single source of truth", "Scales with your team"],
    status: "Published",
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    category: "IT Solutions",
    icon: "Cloud",
    short:
      "Cloud migration, infrastructure as code and cost optimisation across AWS, Azure and GCP.",
    long: "We move workloads to the cloud without downtime and keep them affordable afterwards. Containerised deployments, CI/CD pipelines, monitoring and disaster recovery come as standard.",
    features: [
      "Cloud migration planning",
      "Docker and Kubernetes",
      "CI/CD pipelines",
      "Monitoring and alerting",
      "Backup and disaster recovery",
      "Cost optimisation",
    ],
    process: [
      { title: "Assess", text: "Inventory workloads and dependencies." },
      { title: "Plan", text: "Migration waves and rollback strategy." },
      { title: "Migrate", text: "Move, verify and cut over safely." },
      { title: "Optimise", text: "Right-size resources and automate scaling." },
    ],
    benefits: ["Lower infrastructure spend", "Higher uptime", "Elastic scaling"],
    status: "Published",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    category: "IT Solutions",
    icon: "ShieldCheck",
    short:
      "Security audits, penetration testing and hardening that protect your data and your reputation.",
    long: "We assess your applications and infrastructure against OWASP and ISO benchmarks, fix what we find, and put continuous monitoring in place so issues surface before attackers do.",
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "Secure code review",
      "Access management",
      "Incident response plan",
      "Compliance readiness",
    ],
    process: [
      { title: "Scope", text: "Define assets and threat model." },
      { title: "Test", text: "Automated scanning plus manual exploitation." },
      { title: "Remediate", text: "Prioritised fixes with our engineers." },
      { title: "Monitor", text: "Continuous scanning and reporting." },
    ],
    benefits: ["Reduced breach risk", "Client trust", "Audit ready evidence"],
    status: "Published",
  },
  {
    slug: "business-process-automation",
    name: "Business Process Automation",
    category: "IT Solutions",
    icon: "Workflow",
    short:
      "Remove repetitive manual work with automated workflows across your existing tools and data.",
    long: "We connect the systems your team already uses and automate the handoffs between them, from lead routing and invoicing to reporting and approvals.",
    features: [
      "Workflow mapping",
      "Third party integrations",
      "Document automation",
      "Approval chains",
      "Automated reporting",
      "Error alerting",
    ],
    process: [
      { title: "Map", text: "Document the current process end to end." },
      { title: "Design", text: "Identify automation candidates and ROI." },
      { title: "Build", text: "Implement, test and pilot with one team." },
      { title: "Scale", text: "Roll out organisation wide with training." },
    ],
    benefits: ["Hours saved weekly", "Fewer human errors", "Faster turnaround"],
    status: "Published",
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    category: "Digital Marketing",
    icon: "Search",
    short:
      "Technical, on-page and off-page SEO that grows qualified organic traffic month after month.",
    long: "Our SEO programme starts with a full technical audit, then compounds through content clusters, digital PR and continuous optimisation informed by real search data.",
    features: [
      "Technical SEO audit",
      "Keyword research",
      "On-page optimisation",
      "Content strategy",
      "Link acquisition",
      "Monthly reporting",
    ],
    process: [
      { title: "Audit", text: "Crawl, index and competitor analysis." },
      { title: "Fix", text: "Resolve technical blockers first." },
      { title: "Grow", text: "Publish and optimise target content." },
      { title: "Report", text: "Rankings, traffic and revenue attribution." },
    ],
    benefits: ["Sustainable traffic", "Lower cost per lead", "Stronger brand authority"],
    status: "Published",
  },
  {
    slug: "ppc-advertising",
    name: "PPC Advertising",
    category: "Digital Marketing",
    icon: "MousePointerClick",
    short:
      "Google and Meta ad campaigns engineered around cost per acquisition, not vanity clicks.",
    long: "We build and manage paid campaigns with tight audience targeting, conversion tracking and continuous creative testing so every dirham of spend is accountable.",
    features: [
      "Campaign strategy",
      "Search and display ads",
      "Meta and LinkedIn ads",
      "Landing page testing",
      "Conversion tracking",
      "Budget optimisation",
    ],
    process: [
      { title: "Plan", text: "Goals, budget and audience mapping." },
      { title: "Launch", text: "Structured campaigns with tracking." },
      { title: "Test", text: "Creative and bid experiments weekly." },
      { title: "Scale", text: "Shift budget to winning segments." },
    ],
    benefits: ["Immediate visibility", "Predictable lead flow", "Transparent reporting"],
    status: "Published",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    category: "Digital Marketing",
    icon: "Share2",
    short:
      "Always-on social strategy, content production and community engagement for growing brands.",
    long: "We plan monthly content calendars, produce the creative, publish across channels and engage your community, then report on what actually moved the needle.",
    features: [
      "Channel strategy",
      "Content calendar",
      "Creative production",
      "Community management",
      "Influencer collaboration",
      "Performance reporting",
    ],
    process: [
      { title: "Listen", text: "Audience and competitor research." },
      { title: "Create", text: "Monthly content plan and assets." },
      { title: "Publish", text: "Scheduled posting and engagement." },
      { title: "Refine", text: "Double down on top performing formats." },
    ],
    benefits: ["Engaged audience", "Consistent brand voice", "Warm inbound leads"],
    status: "Published",
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    category: "Digital Marketing",
    icon: "FileText",
    short:
      "Copywriting, video and design assets that tell your story clearly across every channel.",
    long: "Long form articles, product copy, motion graphics and photography, produced by a team that understands both search intent and brand tone.",
    features: [
      "SEO article writing",
      "Brand copywriting",
      "Video and reels",
      "Motion graphics",
      "Photography",
      "Editorial calendar",
    ],
    process: [
      { title: "Brief", text: "Topic research and messaging framework." },
      { title: "Produce", text: "Draft, design and review cycles." },
      { title: "Approve", text: "Two revision rounds included." },
      { title: "Distribute", text: "Publish and repurpose per channel." },
    ],
    benefits: ["Consistent publishing", "Higher engagement", "Reusable asset library"],
    status: "Published",
  },
  {
    slug: "digital-branding",
    name: "Digital Branding",
    category: "Digital Marketing",
    icon: "Sparkle",
    short:
      "Brand identity, positioning and guidelines that make your business instantly recognisable.",
    long: "We define who you are, who you serve and how you sound, then translate it into a complete visual identity system ready for web, print and social.",
    features: [
      "Brand positioning",
      "Logo and identity",
      "Typography and colour",
      "Brand guidelines",
      "Collateral design",
      "Rebrand rollout",
    ],
    process: [
      { title: "Discover", text: "Workshops with your leadership team." },
      { title: "Define", text: "Positioning, values and messaging." },
      { title: "Design", text: "Identity concepts and refinement." },
      { title: "Deliver", text: "Full guideline document and assets." },
    ],
    benefits: ["Clear differentiation", "Premium perception", "Consistent execution"],
    status: "Published",
  },
  {
    slug: "community-management",
    name: "Community Management",
    category: "Digital Marketing",
    icon: "Users",
    short:
      "Daily moderation, response handling and community growth that protects your brand online.",
    long: "Our team monitors your channels, responds within agreed SLAs, escalates issues and reports sentiment so your community stays healthy and loyal.",
    features: [
      "Daily moderation",
      "Response templates",
      "Escalation workflow",
      "Sentiment reporting",
      "Community campaigns",
      "Crisis support",
    ],
    process: [
      { title: "Setup", text: "Tone of voice and response playbook." },
      { title: "Operate", text: "Daily monitoring and replies." },
      { title: "Engage", text: "Proactive conversations and campaigns." },
      { title: "Report", text: "Monthly sentiment and growth summary." },
    ],
    benefits: ["Faster response times", "Higher retention", "Protected reputation"],
    status: "Published",
  },
];

export const serviceCategories = [
  {
    title: "Digital Marketing Services",
    icon: "Megaphone",
    text: "SEO, PPC, social media and content programmes that generate measurable demand for your business.",
  },
  {
    title: "IT Solutions & Development",
    icon: "MonitorSmartphone",
    text: "Websites, mobile apps, custom software, cloud infrastructure and cybersecurity under one roof.",
  },
  {
    title: "Content Creation",
    icon: "Clapperboard",
    text: "Copy, video, motion and photography produced to a consistent standard across every channel.",
  },
];

export const stats = [
  { value: "200+", label: "Successful Projects" },
  { value: "150+", label: "Happy Clients" },
  { value: "20,000+", label: "Tasks Completed" },
  { value: "760+", label: "Cups Of Coffee" },
];

export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string;
  industry: string;
  tech: string[];
  image: string;
  description: string;
  status: "Published" | "Draft";
};

export const projects: Project[] = [
  {
    slug: "gulf-retail-ecommerce",
    name: "Gulf Retail E-Commerce Platform",
    client: "Gulf Retail Group",
    category: "Website Development",
    industry: "Retail",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: project1,
    description:
      "A multi-language storefront with headless CMS, real-time inventory and a checkout that lifted online revenue by 62% in the first quarter after launch.",
    status: "Published",
  },
  {
    slug: "medcare-patient-app",
    name: "MedCare Patient Mobile App",
    client: "MedCare Clinics",
    category: "Mobile App Development",
    industry: "Healthcare",
    tech: ["React Native", "NestJS", "AWS"],
    image: project2,
    description:
      "Appointment booking, teleconsultation and prescription tracking for a clinic network across the UAE, delivered on iOS and Android from a single codebase.",
    status: "Published",
  },
  {
    slug: "logix-operations-dashboard",
    name: "Logix Operations Dashboard",
    client: "Logix Freight",
    category: "Custom Software",
    industry: "Logistics",
    tech: ["React", "TypeScript", "PostgreSQL", "Redis"],
    image: project3,
    description:
      "A live operations dashboard consolidating fleet, warehouse and delivery data, replacing eleven spreadsheets and cutting daily reporting time to minutes.",
    status: "Published",
  },
  {
    slug: "aurora-brand-launch",
    name: "Aurora Brand Launch Campaign",
    client: "Aurora Interiors",
    category: "Digital Marketing",
    industry: "Interior Design",
    tech: ["Meta Ads", "Google Ads", "GA4"],
    image: why2,
    description:
      "A full launch campaign combining brand identity, paid social and search, generating 1,400 qualified leads in ninety days.",
    status: "Published",
  },
  {
    slug: "nova-seo-growth",
    name: "Nova SEO Growth Programme",
    client: "Nova Consultancy",
    category: "SEO Services",
    industry: "Professional Services",
    tech: ["Technical SEO", "Content", "Digital PR"],
    image: why3,
    description:
      "Twelve months of technical fixes and content clustering took organic sessions from 3k to 41k per month.",
    status: "Published",
  },
  {
    slug: "cloudshift-migration",
    name: "CloudShift Infrastructure Migration",
    client: "CloudShift Systems",
    category: "Cloud Solutions",
    industry: "Technology",
    tech: ["AWS", "Kubernetes", "Terraform"],
    image: why1,
    description:
      "Zero downtime migration of a legacy monolith to containerised AWS infrastructure, reducing hosting cost by 38%.",
    status: "Published",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  designation: string;
  company: string;
  rating: number;
  review: string;
  featured: boolean;
  status: "Published" | "Draft";
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jessica T.",
    designation: "Project Manager",
    company: "Gulf Retail Group",
    rating: 5,
    review:
      "The mobile app we developed with Solvix IT Solutions exceeded our expectations. The seamless design and functionality have enhanced our customer experience. Their team was a pleasure to work with.",
    featured: true,
    status: "Published",
  },
  {
    id: "t2",
    name: "Brad K.",
    designation: "Department Manager",
    company: "Logix Freight",
    rating: 5,
    review:
      "Working with Solvix IT Solutions was a game changer for our business. Their custom software streamlined our operations and improved efficiency beyond expectation. Highly professional and dependable.",
    featured: true,
    status: "Published",
  },
  {
    id: "t3",
    name: "Amina R.",
    designation: "Marketing Head",
    company: "Aurora Interiors",
    rating: 5,
    review:
      "Our organic traffic tripled within eight months. The reporting is clear, the team is responsive, and they genuinely care about the numbers that matter to us.",
    featured: false,
    status: "Published",
  },
  {
    id: "t4",
    name: "Daniel M.",
    designation: "Founder",
    company: "Nova Consultancy",
    rating: 4,
    review:
      "Solvix rebuilt our website from scratch and the difference in speed and lead quality was immediate. Communication throughout the project was excellent.",
    featured: false,
    status: "Published",
  },
];

export type Faq = {
  id: string;
  question: string;
  answer: string;
  category: string;
  page: string;
  status: "Published" | "Draft";
};

export const faqs: Faq[] = [
  {
    id: "f1",
    question: "What types of software solutions does Solvix IT Solutions offer in the UAE?",
    answer:
      "We provide custom software development, web and mobile application development, cloud integration and cybersecurity services. Every solution is tailored to your business processes and built to scale with your growth across the UAE and wider GCC market.",
    category: "Services",
    page: "Home",
    status: "Published",
  },
  {
    id: "f2",
    question: "How can software solutions help my business grow in the UAE?",
    answer:
      "The right software removes manual work, gives leadership real-time visibility and lets you serve customers faster than competitors. Our clients typically see measurable efficiency gains within the first quarter after launch.",
    category: "Business",
    page: "Home",
    status: "Published",
  },
  {
    id: "f3",
    question: "Do you offer software solutions for specific industries?",
    answer:
      "Yes. We have delivered projects across retail, healthcare, logistics, real estate, education and professional services, and we adapt our approach to the compliance and workflow requirements of each sector.",
    category: "Industries",
    page: "Home",
    status: "Published",
  },
  {
    id: "f4",
    question: "How long does it take to develop a custom software solution?",
    answer:
      "A focused web platform typically takes 6 to 10 weeks, while larger enterprise systems run 3 to 6 months. We share a detailed timeline after the discovery phase and deliver in two-week sprints so you see progress continuously.",
    category: "Process",
    page: "Home",
    status: "Published",
  },
  {
    id: "f5",
    question: "Can Solvix IT Solutions support me even after the software is developed?",
    answer:
      "Absolutely. Every project includes a warranty period, and we offer ongoing maintenance plans covering updates, monitoring, security patches and feature enhancements.",
    category: "Support",
    page: "Home",
    status: "Published",
  },
  {
    id: "f6",
    question: "Do you work with clients outside the UAE?",
    answer:
      "Yes. We work with clients across the GCC, Europe and North America, with overlapping working hours and a dedicated account manager for every engagement.",
    category: "General",
    page: "Contact",
    status: "Published",
  },
];

export type Plan = {
  id: string;
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  status: "Published" | "Draft";
};

export const plans: Plan[] = [
  {
    id: "p1",
    name: "Trial",
    price: "499",
    currency: "AED",
    period: "per month",
    description: "For small businesses starting their digital presence.",
    features: [
      "5 page responsive website",
      "Basic on-page SEO",
      "Contact form and analytics",
      "Email support",
      "1 revision round",
    ],
    featured: false,
    status: "Published",
  },
  {
    id: "p2",
    name: "Regular",
    price: "1,499",
    currency: "AED",
    period: "per month",
    description: "Our most popular plan for growing companies.",
    features: [
      "Up to 15 pages with CMS",
      "Full technical SEO programme",
      "Monthly content publishing",
      "Social media management",
      "Priority support",
      "Monthly performance report",
    ],
    featured: true,
    status: "Published",
  },
  {
    id: "p3",
    name: "Extended",
    price: "3,499",
    currency: "AED",
    period: "per month",
    description: "For established brands scaling across channels.",
    features: [
      "Unlimited pages and custom modules",
      "Dedicated account manager",
      "SEO, PPC and social combined",
      "Custom software integrations",
      "24/7 monitoring and support",
      "Quarterly strategy workshop",
    ],
    featured: false,
    status: "Published",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readMinutes: number;
  image: string;
  body: string[];
  status: "Published" | "Draft";
};

export const posts: Post[] = [
  {
    slug: "why-uae-businesses-are-leaving-wordpress",
    title: "Why UAE businesses are moving away from WordPress",
    excerpt:
      "Plugin bloat, security patches and slow page speed are pushing growing companies toward modern headless architecture.",
    category: "Development",
    tags: ["WordPress", "Headless CMS", "Performance"],
    author: "Solvix Editorial",
    date: "2026-08-18",
    readMinutes: 6,
    image: project1,
    status: "Published",
    body: [
      "WordPress powers a huge share of the web, and for a simple brochure site it still does the job. But once a business starts running campaigns, publishing weekly and integrating with internal systems, the cracks appear quickly.",
      "The most common complaint we hear is speed. A typical WordPress marketing site loads twenty or more plugins, each adding scripts and database queries. Core Web Vitals suffer, and Google notices.",
      "The second is security. Every plugin is an update you must apply, and a vulnerability you inherit. Moving to a custom CMS with a controlled API surface removes the majority of that risk overnight.",
      "The third is flexibility. A custom content model matches your actual business: services, sub-services, portfolio projects, pricing plans. You stop bending your content into blog posts and pages.",
      "Migration does not mean losing your SEO. With a careful URL map and 301 redirects, most of our clients hold their rankings through the switch and improve within two months as page speed rises.",
    ],
  },
  {
    slug: "seo-checklist-before-you-launch",
    title: "The 12 point SEO checklist to run before any launch",
    excerpt:
      "Redirects, canonical tags, structured data and analytics. Miss one and you can lose months of ranking progress.",
    category: "SEO",
    tags: ["SEO", "Launch", "Checklist"],
    author: "Solvix Editorial",
    date: "2026-07-29",
    readMinutes: 8,
    image: project3,
    status: "Published",
    body: [
      "Launch day is where SEO gains are most often lost. A site that ranked well for years can drop overnight if redirects are missing or the staging robots file ships to production.",
      "Start with a full crawl of the old site and export every indexed URL. Map each one to its new destination, and set permanent 301 redirects for anything that changed.",
      "Confirm each page has a unique title and meta description, a single H1, a canonical tag pointing at itself, and structured data where it applies.",
      "Finally, verify analytics and Search Console are live before the DNS change, not after. You want the baseline data from hour one.",
    ],
  },
  {
    slug: "custom-cms-vs-off-the-shelf",
    title: "Custom CMS vs off-the-shelf: how to choose",
    excerpt:
      "A practical framework for deciding when to build your own content platform and when to buy one.",
    category: "Strategy",
    tags: ["CMS", "Architecture"],
    author: "Solvix Editorial",
    date: "2026-06-11",
    readMinutes: 5,
    image: why3,
    status: "Published",
    body: [
      "Buying is faster and cheaper up front. Building gives you an exact fit and no licence ceiling. The right answer depends on how unusual your content model is.",
      "If your content is essentially pages and posts, buy. If your business logic lives inside your content, such as service hierarchies, regional pricing or approval workflows, build.",
      "The middle path many of our clients take is a custom admin over a standard database, which keeps the editing experience tailored while the infrastructure stays boring and reliable.",
    ],
  },
  {
    slug: "mobile-app-cost-uae",
    title: "What a mobile app really costs in the UAE",
    excerpt: "A transparent breakdown of scope, team, timeline and the hidden post-launch costs.",
    category: "Mobile",
    tags: ["Mobile", "Budget"],
    author: "Solvix Editorial",
    date: "2026-05-02",
    readMinutes: 7,
    image: project2,
    status: "Draft",
    body: [
      "App budgets vary widely because scope varies widely. A booking app with payments is a different animal to a content app with a feed.",
      "Plan for design, development, QA, store submission and at least twelve months of maintenance. Maintenance is the line most budgets forget.",
    ],
  },
];

export const clients = [
  "Gulf Retail",
  "MedCare",
  "Logix",
  "Aurora",
  "Nova",
  "CloudShift",
  "Meridian",
  "Skyline",
];

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string;
  page: string;
  createdAt: string;
  status: "New" | "Contacted" | "In Progress" | "Converted" | "Closed" | "Spam";
};

export const leads: Lead[] = [
  {
    id: "L-1042",
    name: "Omar Haddad",
    email: "omar@meridiangroup.ae",
    phone: "+971 50 224 8891",
    service: "Website Development",
    message: "We need a corporate website rebuilt with Arabic and English versions.",
    source: "Contact Form",
    page: "/contact",
    createdAt: "2026-09-06 11:24",
    status: "New",
  },
  {
    id: "L-1041",
    name: "Priya Nair",
    email: "priya@skylinefit.com",
    phone: "+971 55 908 4412",
    service: "Mobile App Development",
    message: "Looking for a fitness booking app for 6 studio locations.",
    source: "Quote Request",
    page: "/services/mobile-app-development",
    createdAt: "2026-09-05 16:02",
    status: "Contacted",
  },
  {
    id: "L-1040",
    name: "James Whitfield",
    email: "james@cloudshift.io",
    phone: "+971 52 771 3320",
    service: "Cloud Solutions",
    message: "Migration from on-premise to AWS, roughly 40 services.",
    source: "Contact Form",
    page: "/services/cloud-solutions",
    createdAt: "2026-09-04 09:47",
    status: "In Progress",
  },
  {
    id: "L-1039",
    name: "Layla Mansour",
    email: "layla@auroradesign.ae",
    phone: "+971 56 331 0092",
    service: "SEO Services",
    message: "Interested in the Regular plan, please share a proposal.",
    source: "Pricing Page",
    page: "/pricing",
    createdAt: "2026-09-03 14:15",
    status: "Converted",
  },
  {
    id: "L-1038",
    name: "Unknown Sender",
    email: "promo@cheap-links.biz",
    phone: "-",
    service: "-",
    message: "Buy backlinks cheap guaranteed ranking.",
    source: "Contact Form",
    page: "/contact",
    createdAt: "2026-09-02 03:11",
    status: "Spam",
  },
  {
    id: "L-1037",
    name: "Hassan Al Rashid",
    email: "hassan@gulfretail.ae",
    phone: "+971 50 118 7734",
    service: "Business Process Automation",
    message: "Automating our purchase approval workflow.",
    source: "Quote Request",
    page: "/services/business-process-automation",
    createdAt: "2026-09-01 10:33",
    status: "Contacted",
  },
];

export const mediaFiles = [
  { name: "hero-network.jpg", type: "Image", size: "412 KB", uploaded: "2026-08-30", url: heroNetwork },
  { name: "about-team.jpg", type: "Image", size: "288 KB", uploaded: "2026-08-30", url: aboutTeam },
  { name: "about-team-2.jpg", type: "Image", size: "254 KB", uploaded: "2026-08-30", url: aboutTeam2 },
  { name: "project-ecommerce.jpg", type: "Image", size: "331 KB", uploaded: "2026-08-22", url: project1 },
  { name: "project-mobile.jpg", type: "Image", size: "298 KB", uploaded: "2026-08-22", url: project2 },
  { name: "project-dashboard.jpg", type: "Image", size: "344 KB", uploaded: "2026-08-19", url: project3 },
  { name: "team-meeting.jpg", type: "Image", size: "376 KB", uploaded: "2026-08-11", url: why1 },
  { name: "coworking.jpg", type: "Image", size: "402 KB", uploaded: "2026-08-11", url: why2 },
];

export const cmsPages = [
  { title: "Home", slug: "/", status: "Published", updated: "2026-09-02", sections: 13 },
  { title: "About", slug: "/about", status: "Published", updated: "2026-08-28", sections: 6 },
  { title: "Services", slug: "/services", status: "Published", updated: "2026-08-27", sections: 5 },
  { title: "Portfolio", slug: "/portfolio", status: "Published", updated: "2026-08-25", sections: 4 },
  { title: "Pricing", slug: "/pricing", status: "Published", updated: "2026-08-20", sections: 3 },
  { title: "FAQ", slug: "/faq", status: "Published", updated: "2026-08-18", sections: 2 },
  { title: "Contact", slug: "/contact", status: "Published", updated: "2026-08-15", sections: 4 },
  { title: "Careers", slug: "/careers", status: "Draft", updated: "2026-08-09", sections: 3 },
];

export const homeSections = [
  "Hero",
  "About",
  "Service Categories",
  "Why Us",
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
