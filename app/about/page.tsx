import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

const skills = [
  {
    title: "Backend & APIs",
    items:
      "Node.js, Express, .NET API, REST APIs, authentication, business logic, and internal tooling.",
  },
  {
    title: "Frontend",
    items:
      "React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Razor, Bootstrap, and responsive interfaces.",
  },
  {
    title: "Databases",
    items:
      "SQL Server, MySQL, SQLite, MongoDB, schema design, query work, and operational data flows.",
  },
  {
    title: "Hardware & Realtime Systems",
    items:
      "Serial communication, device control, scoring systems, dashboards, monitoring tools, and hardware-connected workflows.",
  },
  {
    title: "Cloud & DevOps",
    items:
      "Azure, GitHub Actions, CI/CD pipelines, Docker, deployment workflows, and production support.",
  },
  {
    title: "Languages",
    items: "TypeScript, JavaScript, C#, Java, Python, HTML, and CSS.",
  },
];

const highlights = [
  "Built and maintained full-stack systems used across arcade game rooms and entertainment facilities.",
  "Developed APIs supporting high-frequency score submissions, wristband scans, player registrations, and multi-location workflows.",
  "Created dashboards and internal tools that help staff monitor devices, diagnose issues, and reduce manual work.",
  "Built and supported interactive arcade-style game systems where physical player actions connected to software, scoring, dashboards, and device controls.",
];

export default function AboutPage() {
  return (
    <main>
      <Container className="py-16">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            About me
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            I build software for web platforms, business operations, and
            physical interactive experiences.
          </h1>

          <p className="mt-5 text-base leading-7 text-zinc-700">
            Hi, I&apos;m Andrew Dionne, a software developer based in Ontario. I
            work on full-stack web applications, backend APIs, internal tools,
            dashboards, and software that connects with physical hardware.
          </p>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <section className="space-y-5 text-zinc-700 lg:col-span-2">
            <p>
              My work has been focused on building software that is actually
              used day-to-day by staff, operators, and customers. I&apos;ve
              worked on systems for arcade games, escape room operations, player
              management, score tracking, attendance workflows, and real-time
              monitoring.
            </p>

            <p>
              At Escape From the 6, I develop and maintain websites, internal
              tools, and software features that support escape room operations,
              arcade games, and interactive puzzle systems. A lot of my work
              sits between web software and physical experiences, including game
              logic, dashboards, troubleshooting tools, and hardware-connected
              workflows.
            </p>

            <p>
              Before that, I worked at Aerosports Parks, where I built and
              improved full-stack applications using Next.js, React, Node.js,
              and SQL Server. These systems supported dashboards and operations
              across multiple facilities, including score submissions, wristband
              scans, player registrations, and multi-location workflows.
            </p>

            <p>
              I also worked on the physical side of interactive arcade
              experiences, helping build and support games similar to
              Activate-style rooms. That included working with game hardware,
              control systems, real-time scoring, device troubleshooting, and
              software that connected physical player interactions to web-based
              dashboards and backend systems.
            </p>

            <p>
              I&apos;m also completing the Computer Programming &amp; Analysis
              program at Niagara College. Through school and industry projects,
              I&apos;ve built production-style applications with APIs,
              databases, authentication, dashboards, and deployment workflows.
            </p>

            <div className="pt-2">
              <a
                href="/Andrew-Dionne-Resume.pdf"
                download="Andrew-Dionne-Resume.pdf"
                className="inline-flex items-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                Download Resume
              </a>
            </div>
          </section>

          <aside className="h-fit rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <h2 className="font-medium text-zinc-950">Quick facts</h2>

            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-zinc-900">Location</dt>
                <dd className="mt-1 text-zinc-600">Ontario, Canada</dd>
              </div>

              <div>
                <dt className="font-medium text-zinc-900">Current role</dt>
                <dd className="mt-1 text-zinc-600">
                  Software Developer at Escape From the 6
                </dd>
              </div>

              <div>
                <dt className="font-medium text-zinc-900">Education</dt>
                <dd className="mt-1 text-zinc-600">
                  Computer Programming &amp; Analysis, Niagara College
                </dd>
              </div>

              <div>
                <dt className="font-medium text-zinc-900">Main focus</dt>
                <dd className="mt-1 text-zinc-600">
                  Web apps, APIs, dashboards, databases, and hardware-connected
                  systems
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <section className="mt-14">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
              What I&apos;ve worked on
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
              Experience with software that has to work in the real world.
            </h2>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-zinc-200 p-4 text-sm leading-6 text-zinc-700"
              >
                {highlight}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
              Skills &amp; tools
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
              Technologies I use to build, maintain, and improve systems.
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-xl border border-zinc-200 p-5"
              >
                <h3 className="font-medium text-zinc-950">{skill.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-xl border border-zinc-200 bg-zinc-950 p-6 text-white">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold">Currently interested in</h2>

            <p className="mt-3 leading-7 text-zinc-300">
              I&apos;m interested in junior software development opportunities,
              full-stack work, backend/API development, internal tools,
              dashboards, and projects where software connects with real
              operations or physical systems.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
