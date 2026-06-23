export type ProjectLink = { label: string; href: string };
export type ProjectDownload = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  gallery?: string[];
  tags?: string[];
  tech?: string[];
  role?: string;
  period?: string;
  highlights?: string[];
  metrics?: string[];
  links?: ProjectLink[];
  downloads?: ProjectDownload[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  // -----------------------------------------------------------
  // Arcade Operations Admin System (Case Study)
  // -----------------------------------------------------------
  {
    slug: "arcade-ops-admin",
    title: "Arcade Operations Admin System",
    summary:
      "Full-stack operations platform and API backend powering multi-location arcade facilities. Includes a Next.js admin panel for managers and a Node.js/Express REST API supporting players, scores, devices, games, and real-time gameplay monitoring across all locations.",
    cover: "/projects/arcade-ops-admin/cover.png",
    gallery: [
      "/projects/arcade-ops-admin/login-screen.png",
      "/projects/arcade-ops-admin/cover.png",
      "/projects/arcade-ops-admin/game-control.png",
      "/projects/arcade-ops-admin/multi-location.png",
      "/projects/arcade-ops-admin/player-scores.png",
      "/projects/arcade-ops-admin/analytics-dashboard.png",
      "/projects/arcade-ops-admin/device-control.png",
    ],
    tags: ["Next.js", "Node.js", "Express", "REST APIs", "Admin Panel"],
    tech: [
      "Next.js (App Router)",
      "Node.js + Express",
      "Modular REST API architecture",
      "Authentication + API key permissions",
      "Real-time dashboards",
      "Smart device control endpoints",
      "Multi-location data model",
    ],
    role: "Full-stack Developer",
    period: "2025",
    highlights: [
      "Designed and built the full Next.js admin panel used daily by operations teams and administrators.",
      "Developed a modular Node.js/Express REST API powering players, scores, devices, games, sessions, and admin workflows.",
      "Architected multi-location routing and data structure enabling all arcade sites to use a unified backend.",
      "Built live dashboards with real-time gameplay activity, performance metrics, and device health.",
      "Implemented endpoints and UI for controlling smart devices such as LED systems, door locks, game controllers, and room hardware.",
      "Created tools for managing players, gameplay history, leaderboards, game variants, and location-specific settings.",
      "Implemented secure authentication, including API keys, role-based access, and session management.",
    ],
    metrics: [
      "Handles 2,000+ daily plays across multiple arcade locations",
      "Reduced operational setup time by ~50%",
    ],
  },

  // -----------------------------------------------------------
  // Volunteer Management & Attendance System
  // -----------------------------------------------------------
  {
    slug: "volunteer-attendance",
    title: "Volunteer Management & Attendance Platform",
    summary:
      "ASP.NET Core MVC + API system for managing volunteers, events, shift schedules, time tracking, and automated reminder workflows.",

    cover: "/projects/volunteer-attendance/cover.png",

    gallery: [
      "/projects/volunteer-attendance/attendance-page.png",
      "/projects/volunteer-attendance/attendance-report.png",
      "/projects/volunteer-attendance/calendar.png",
      "/projects/volunteer-attendance/shift-assignment.png",
      "/projects/volunteer-attendance/volunteer-details.png",
      "/projects/volunteer-attendance/reminder-email.png",
    ],

    tags: [
      "ASP.NET Core MVC",
      "C#",
      "REST API",
      "Hangfire",
      "Scheduling",
      "Azure",
    ],

    tech: [
      "ASP.NET Core MVC + API",
      "Entity Framework Core",
      "Hangfire recurring/background jobs",
      "JWT authentication & role-based access",
      "SQLite",
      "FullCalendar UI",
      "Azure App Service deployment",
    ],

    role: "Full-stack developer (API-focused)",

    period: "2025",

    highlights: [
      "Designed and built the backend API for managing volunteers, shifts, attendance records, and availability.",
      "Implemented Hangfire-based background services for recurring shift reminders.",
      "Developed QR-based attendance tracking with secure time-in/time-out endpoints.",
      "Created scheduling logic including conflict detection, staff assignment rules, and calendar integrations.",
      "Built role-based JWT authentication for admins, coordinators, and volunteers.",
      "Implemented detailed attendance reporting with exportable summaries.",
    ],

    metrics: [
      "Reduced staff coordination overhead by automating reminders and confirmations.",
      "Improved volunteer attendance reliability with timely Hangfire-powered notifications.",
      "Streamlined shift assignment and event scheduling workflows for administrators.",
    ],
  },

  // -----------------------------------------------------------
  // POS Wristband System – Staff Tool
  // -----------------------------------------------------------
  {
    slug: "pos-wristband",
    title: "Arcade POS Wristband Registration",
    summary:
      "WPF + API-driven wristband system used by staff to register players, assign play time, scan NFC wristbands, and synchronize real-time game access with backend services.",

    cover: "/projects/pos-wristband/cover.png",

    gallery: [
      "/projects/pos-wristband/initialize.png",
      "/projects/pos-wristband/renew.png",
      "/projects/pos-wristband/lookup-modal.png",
    ],

    tags: ["WPF", "C#", "API Integration", "PC/SC Scanner", "Device Control"],

    tech: [
      "C# / WPF",
      "REST APIs (.NET & Node hybrid backend)",
      "PC/SC smart-card scanning",
      "Player + wristband lifecycle management",
      "Real-time sync with game engine",
    ],

    role: "Lead developer",
    period: "2025",

    highlights: [
      "Built the full wristband workflow: initialization, renewal, parent/child linking, and registration against backend APIs.",
      "Implemented PC/SC smart-card reader integration with automatic reconnect, health monitoring, and fallback to COM-based scanners.",
      "Designed and consumed REST endpoints for player lookup, wristband reset, and time extension—ensuring strong validation and idempotency.",
      "Added safety rules including master-wristband protection, duplicate-scan prevention, and staff override flows.",
      "Integrated the POS with the arcade game engine so new wristband assignments propagate immediately to all game rooms.",
    ],

    metrics: [],
  },

  // -----------------------------------------------------------
  // Game Selection Kiosk (Player-Facing)
  // -----------------------------------------------------------
  {
    slug: "game-selection",
    title: "Arcade Game Selection & Room Orchestration System",
    summary:
      "Touchscreen game-selection system powering interactive arcade rooms. Handles real-time device orchestration, UDP communication, player routing, score reporting, scanner integration, and room access control.",
    cover: "/projects/game-selection/cover.png",
    gallery: [
      "/projects/game-selection/how-to-play.png",
      "/projects/game-selection/tile-hunt-screen.png",
      "/projects/game-selection/admin-panel.png",
      "/projects/game-selection/scorecard.png",
      "/projects/game-selection/scorecard-custom.png",
    ],
    tags: ["C#", "UDP", "Real-time systems", "Distributed devices", "Hardware"],
    tech: [
      "UDP messaging",
      "Socket communication",
      "Device orchestration",
      "Game engine integration",
      "REST API score reporting",
      "Room access control",
      "Smart scanner fallback",
      "Touchscreen UI",
    ],
    role: "Core developer",
    period: "2024-2025",
    highlights: [
      "Built real-time UDP communication between the touchscreen kiosk, room hardware, and the game engine.",
      "Implemented player routing, coordinating which players enter which rooms and start which games.",
      "Created a staff-only admin menu for restarting apps, PCs, simulating scans, updating games, and swapping displays.",
      "Integrated PC/SC wristband scans with fallback simulation when scanners fail.",
      "Added game configuration per location, enabling administrators to enable/disable titles remotely.",
      "Developed score collection + API reporting to sync results back to the central admin system.",
      "Handled room door locks, hardware state, and engine-ready signals through socket connections.",
      "Built custom in-room scorecard screens and game-specific instruction overlays.",
      "Managed a three-monitor setup: touchscreen kiosk, room identifier screen, and in-room scorecard display.",
    ],
    metrics: [
      "System controls 8+ interactive rooms simultaneously per location",
      "Processes hundreds of hardware events per minute",
    ],
  },

  // -----------------------------------------------------------
  // SerialMonitorWPF – Multi-port Laser/Sensor Debugger
  // -----------------------------------------------------------

  {
    slug: "serial-monitor-wpf",
    title: "SerialMonitorWPF (Laser & Sensor Debugger)",
    summary:
      "WPF diagnostic tool for real-time monitoring of COM-port laser and sensor grids, displaying raw hex packets, parsed binary states, and device connection statuses to help engineers debug arcade hardware.",
    cover: "/projects/serial-monitor-wpf/cover.png",
    gallery: [],
    tags: ["WPF", "C#", "Serial/COM", "Diagnostics", "Hardware Integration"],
    tech: [
      "WPF",
      "SerialPort communication",
      "Real-time packet parsing",
      "Binary grid visualization",
      "Hardware diagnostics tooling",
    ],
    role: "Sole developer",
    period: "2025",
    highlights: [
      "Built multi-port COM monitoring for up to four laser and sensor controllers.",
      "Displays both raw hex data and parsed binary grid formats for easy fault detection.",
      "Added real-time response monitoring to identify slow, degraded, or stuck sensors.",
      "Widely used by on-site engineers to troubleshoot hardware failures.",
    ],
    metrics: [
      "Significantly reduced time required to diagnose sensor issues",
      "Improved accuracy of hardware troubleshooting",
    ],
  },

{
  slug: "grumpy-uncle-designs-website",
  title: "Grumpy Uncle Designs Website",
  summary:
    "Client website for a custom escape room, themed entertainment, and interactive-build company. Designed and developed a polished marketing site that presents services, project work, company background, FAQs, and a secure contact flow.",

  cover: "/projects/grumpy-uncle-designs/cover-homepage.png",

  gallery: [
    "/projects/grumpy-uncle-designs/cover-homepage.png",
    "/projects/grumpy-uncle-designs/builds-section.png",
    "/projects/grumpy-uncle-designs/about-section.png",
    "/projects/grumpy-uncle-designs/contact-section.png",
    "/projects/grumpy-uncle-designs/faq-section.png",

  ],

  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Client Website",
    "Vercel",
    "Resend",
  ],

  tech: [
    "Next.js App Router",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Responsive design",
    "Reusable content-driven components",
    "Cloudflare Turnstile",
    "Resend email integration",
    "Vercel deployment",
    "Custom domain configuration",
    "SEO and accessibility improvements",
  ],

  role: "Designer and full-stack developer",

  period: "2026",

  highlights: [
    "Designed and developed the full public-facing website for Grumpy Uncle Designs, a business focused on escape rooms, themed environments, challenge rooms, custom props, and interactive attractions.",
    "Translated client-provided content, branding direction, and project media into a clear website structure that highlights services, experience, and completed work.",
    "Built responsive sections for the homepage, service offerings, project gallery, company background, FAQ content, and contact flow.",
    "Created reusable, content-driven components so project details, services, FAQs, links, and site information can be updated without rebuilding page layouts.",
    "Integrated a secure contact form using Resend for email delivery and Cloudflare Turnstile to reduce automated spam submissions.",
    "Optimized the site for deployment with production environment variables, custom-domain setup, preview deployments, and a clean handoff process for the client.",
    "Reviewed layout, accessibility, mobile responsiveness, image presentation, and SEO basics before launch.",
  ],

  metrics: [
    "Built as a real client-facing business website.",
    "Provides a central online presence for service inquiries, project showcases, and future Google Business Profile visibility.",
    "Includes protected contact submissions and a maintainable content structure for future updates.",
  ],

  demo: "https://gudescaperoomproductions.com",
},

// -----------------------------------------------------------
// Escape Room Puzzle Monitoring UI
// -----------------------------------------------------------
{
  slug: "escape-room-puzzle-monitoring-ui",
  title: "Escape Room Puzzle Monitoring UI",
  summary:
    "Staff dashboard used daily at a live escape room attraction to monitor puzzle hardware, diagnose issues, and trigger controls such as force solve and reset. The app connects a Next.js frontend to a Node.js backend, serial bridge, and ESP32-based puzzle hardware.",

  cover: "/projects/escape-room-puzzle-monitoring-ui/cover-dashboard-overview.png",

  gallery: [
    "/projects/escape-room-puzzle-monitoring-ui/cover-dashboard-overview.png",
    "/projects/escape-room-puzzle-monitoring-ui/satellite-live-view.png",
    "/projects/escape-room-puzzle-monitoring-ui/power-puzzle-visualizer.png",
    "/projects/escape-room-puzzle-monitoring-ui/developer-raw-state-view.png",
    "/projects/escape-room-puzzle-monitoring-ui/escaoe-room-puzzle-hardware-integration.png"
  ],

  tags: [
    "Next.js",
    "Node.js",
    "Express",
    "Serial/COM",
    "ESP32",
    "Staff Tool",
  ],

  tech: [
    "Next.js App Router",
    "TypeScript",
    "Tailwind CSS",
    "Node.js + Express",
    "SerialPort communication",
    "ESP32 / ESP-NOW hardware",
    "Real-time polling dashboard",
    "Hardware diagnostics",
    "Staff control workflows",
    "Windows startup scripts",
  ],

  role: "Sole full-stack / hardware integration developer",

  period: "2026",

  highlights: [
    "Built a staff dashboard used daily to monitor live escape room puzzle hardware.",
    "Created a Node.js/Express backend that receives puzzle state from a serial bridge and exposes clean API endpoints to the frontend.",
    "Integrated ESP32-based puzzle hardware using serial communication between the backend, bridge device, and physical puzzle boards.",
    "Designed live puzzle views for satellite alignment nodes, progress bars, solved state, device presence, and online status.",
    "Built a visual power-puzzle page that displays expected wiring, current connections, incorrect connections, and solved state in a staff-readable format.",
    "Added staff-safe force solve and reset controls with confirmation prompts to prevent accidental actions during operation.",
    "Implemented backend offline handling, local logging, startup scripts, and stable defaults for a Windows deployment.",
  ],

  metrics: [
    "Used daily in a live escape room environment.",
    "Monitors multiple physical puzzle systems from one staff interface.",
    "Improves troubleshooting by exposing live puzzle state, hardware status, and staff controls without needing to inspect the ESP32 devices directly.",
  ],
},


];
