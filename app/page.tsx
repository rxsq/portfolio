import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <main>
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-zinc-50">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left side: Text */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
                Andrew Dionne
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
                Developer building scalable backend systems, rich APIs, and
                real-time distributed applications.
              </p>

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
            </div>

            {/* Right side: Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/me.jpg"
                alt="Andrew Dionne portrait"
                width={240}
                height={240}
                className="rounded-full shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
