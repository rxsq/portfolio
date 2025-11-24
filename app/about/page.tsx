import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <Container className="py-16">
        <h1 className="text-3xl font-semibold">About</h1>

        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {/* Bio */}
          <div className="md:col-span-2 space-y-4 text-zinc-700">
            <p>
              Hi, I&apos;m Andrew Dionne, a software developer based in Ontario
              with experience building web applications, backend APIs, and
              real-time systems.
            </p>

            <p>
              I&apos;m currently completing my final term in the Computer
              Programming & Analysis program at Niagara College. Through both
              coursework and hands-on industry projects, I&apos;ve learned how
              to design, build, and deploy full-stack applications that solve
              real-world problems. While I&apos;m mostly interested in backend
              development and API design, I also enjoy working on frontend
              interfaces and integrating software with hardware systems.
            </p>

            <p>
              Outside of programming, I spend time focusing on health and
              fitness, exploring new technologies, and playing games.
            </p>

            {/*Resume */}
            <a
              href="/Andrew-Dionne-Resume.pdf"
              download="Andrew-Dionne-Resume.pdf"
              className="inline-block mt-4 rounded-md border px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition"
            >
              Download Resume (PDF)
            </a>
          </div>

          {/* Quick facts */}
          <div className="rounded-lg border p-4">
            <h2 className="font-medium">Quick facts</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <span className="font-medium">Location:</span> Ontario, Canada
              </li>
              <li>
                <span className="font-medium">Education:</span> Computer
                Programming & Analysis (Diploma), Niagara College — expected Dec
                2025
              </li>
              {/* <li>
                <span className="font-medium">Current:</span> Software Developer
                @ Aerosports Parks
              </li> */}
              <li>
                <span className="font-medium">Focus:</span> Web apps,
                dashboards, backend APIs, real-time control
              </li>
            </ul>
          </div>
        </div>

        {/* Skills / tools */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Skills & Tools</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Backend & APIs</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Node.js, Express, .NET (MVC/API), REST APIs, Authentication (JWT
                & Cookies)
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Databases</h3>
              <p className="mt-2 text-sm text-zinc-600">
                SQL Server, MySQL, SQLite, MongoDB, Entity Framework Core
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Frontend</h3>
              <p className="mt-2 text-sm text-zinc-600">
                React, HTML/CSS, JavaScript/TypeScript, ASP.NET MVC, Responsive
                UI
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Languages</h3>
              <p className="mt-2 text-sm text-zinc-600">
                C#, JavaScript/TypeScript, Java, Python
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Cloud & DevOps</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Azure App Services, GitHub Actions, CI/CD, Postman
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Realtime & Hardware</h3>
              <p className="mt-2 text-sm text-zinc-600">
                UDP messaging, COM/Serial communication, PC/SC scanning, device
                integration
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="mt-12">
          <div className="rounded-lg border p-6">
            <h2 className="font-medium">Currently open to</h2>
            <ul className="mt-3 list-disc pl-5 text-zinc-700">
              <li>Internships or junior software development roles</li>
              <li>
                Opportunities involving web applications, APIs, or full-stack
                work
              </li>
              <li>
                Projects that involve problem-solving, system design, or
                real-time technologies
              </li>
            </ul>
          </div>
        </section>
      </Container>
    </main>
  );
}
