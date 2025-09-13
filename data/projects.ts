export type ProjectLink = { label: string; href: string };
export type ProjectDownload = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: string; // hero/cover image path (public/)
  gallery?: string[]; // additional images (public/)
  tags?: string[];
  tech?: string[]; // longer, for detail page
  role?: string;
  period?: string; // e.g., "2025", "2024–2025"
  highlights?: string[]; // bullet points
  metrics?: string[]; // outcomes/metrics
  links?: ProjectLink[]; // Code, Demo, Docs, etc.
  downloads?: ProjectDownload[]; // zip, PDF, etc.
  repo?: string; // legacy single-link compatibility
  demo?: string; // legacy single-link compatibility
};

export const projects: Project[] = [
  {
    slug: "volunteer-attendance",
    title: "Volunteer Management & Attendance",
    summary:
      "Responsive ASP.NET Core MVC app with scheduling, dashboards, and role-based auth; deployed on Azure.",
    cover: "/projects/volunteer-attendance/cover.png",
    gallery: [
      "/projects/volunteer-attendance/schedule.png",
      "/projects/volunteer-attendance/dashboard.png",
      "/projects/volunteer-attendance/mobile.png",
    ],
    tags: ["ASP.NET Core MVC", "Azure", "SQLite", "FullCalendar"],
    tech: [
      "ASP.NET Core MVC",
      ".NET API",
      "Azure",
      "SQLite",
      "JWT & Cookies auth",
      "FullCalendar",
    ],
    role: "Full-stack developer",
    period: "2025",
    highlights: [
      "Built MVC frontend with dashboards and interactive scheduling.",
      "Implemented role-based authentication with personalized dashboards.",
      "Iterated with stakeholders; refined workflows from feedback.",
    ],
    metrics: ["Fast, responsive UI across devices", "Clear scheduling UX"],
    links: [
      { label: "Code", href: "https://github.com/YOU/volunteer-attendance" },
      { label: "Demo", href: "#" },
    ],
    downloads: [
      {
        label: "Screenshots (ZIP)",
        href: "/projects/volunteer-attendance/volunteer-screens.zip",
      },
    ],
  },
  {
    slug: "ncr-reporting",
    title: "NCR Reporting System",
    summary:
      "Node.js/Express reporting app with clean UI and SQL backend for streamlined data collection.",
    cover: "/projects/ncr-reporting/cover.png",
    gallery: [
      "/projects/ncr-reporting/report-list.png",
      "/projects/ncr-reporting/report-detail.png",
    ],
    tags: ["Node.js", "Express", "SQL", "HTML/CSS"],
    tech: ["Node.js", "Express", "SQL (Server/MySQL)", "REST"],
    role: "Full-stack developer",
    period: "2024",
    highlights: [
      "Focused on clean layouts for faster reporting.",
      "Collaborated in Agile environment and iterated on UI/UX.",
    ],
    metrics: [
      "Quicker report entry and review",
      "Consistent layout across screens",
    ],
    links: [{ label: "Code", href: "https://github.com/YOU/ncr-reporting" }],
  },
  // You can also add “work projects” as case studies if appropriate:
  {
    slug: "arcade-ops-dashboards",
    title: "Arcade Ops Dashboards & Control",
    summary:
      "Admin panels and device control for interactive arcade rooms (700-1,000 daily plays).",
    cover: "/projects/arcade-ops/cover.png",
    gallery: [
      "/projects/arcade-ops/overview.png",
      "/projects/arcade-ops/control.png",
    ],
    tags: ["React", "Node.js", "C#", "UDP", "Serial/COM"],
    tech: ["React", "Node.js", "REST APIs", "C# services", "UDP", "Serial/COM"],
    role: "Full-stack developer",
    period: "2025",
    highlights: [
      "React/Node admin panels for multi-room monitoring.",
      "C# services syncing LED controllers and devices in real time.",
    ],
    metrics: ["~50% reduction in setup time", "Scaled to 8+ rooms"],
    links: [
      // omit code link if private—keep case-study style
      { label: "Case study", href: "#" },
    ],
  },
];
