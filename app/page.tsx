import Link from "next/link";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <main>
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-zinc-50">
        <Container>
          {/* Name */}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            Andrew Dionne
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            Developer passionate about building seamless user experiences and
            scalable backends — blending creativity with engineering.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-zinc-800 transition"
            >
              See Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition"
            >
              Contact
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
