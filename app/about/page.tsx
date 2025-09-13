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
              Hi, I'm Andrew, a third-year Computer Programming & Analysis
              student at Niagara College with a passion for building full-stack
              applications that are both reliable and enjoyable to use. I like
              working across the stack, whether that means designing clean UIs,
              shaping APIs, or wiring up background services that make
              everything run smoothly.
            </p>
            <p>
              At AeroSports Parks, I've helped create dashboards, reporting
              tools, and control systems that keep interactive arcade rooms
              running for hundreds of players a day. My work has ranged from
              building React/Node.js admin panels to writing C# services that
              talk over UDP and serial connections to synchronize LED
              controllers and devices in real time.
            </p>
            <p>
              What excites me most is turning complex problems into clear,
              working solutions. Whether it's a scalable backend, a responsive
              interface, or a system that blends software with hardware, I enjoy
              taking ownership across the stack and making sure the final
              product feels dependable and seamless for the people who use it.
            </p>
            <p>
              As I move toward graduation, I'm eager to keep building my
              experience through internships, junior roles, and projects where I
              can contribute as a full-stack developer and continue growing my
              skills in both software and real-time systems.
            </p>
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
              <li>
                <span className="font-medium">Current:</span> Software Developer
                @ Aerosports Parks
              </li>
              <li>
                <span className="font-medium">Focus:</span> Web apps,
                dashboards, backend APIs, real-time control
              </li>
            </ul>
          </div>
        </div>

        {/* Skills / tools */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Skills & tools</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Frontend</h3>
              <p className="mt-2 text-sm text-zinc-600">
                React, HTML/CSS, JavaScript, ASP.NET MVC, Responsive UI
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Backend</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Node.js, .NET (MVC/API), Express, REST, Auth (JWT/Cookies)
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Databases</h3>
              <p className="mt-2 text-sm text-zinc-600">
                SQL Server, MySQL, SQLite, MongoDB
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Cloud & Dev</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Azure, GitHub Actions, Postman, VS/VS Code
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Languages</h3>
              <p className="mt-2 text-sm text-zinc-600">
                C#, JavaScript/TypeScript, Java, Python
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Hardware/Realtime</h3>
              <p className="mt-2 text-sm text-zinc-600">
                UDP, COM/serial integration for LED controllers & devices
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="mt-12">
          <div className="rounded-lg border p-6">
            <h2 className="font-medium">Currently open to</h2>
            <ul className="mt-3 list-disc pl-5 text-zinc-700">
              <li>Internships or junior full-stack roles (React/Node/.NET)</li>
              <li>Projects involving dashboards, scheduling, or reporting</li>
              <li>
                Systems that mix web backends with real-time device control
              </li>
            </ul>
          </div>
        </section>
      </Container>
    </main>
  );
}
