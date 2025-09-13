import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <Container className="py-16">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-4 max-w-prose text-zinc-700">
          Email:{" "}
          <a className="underline" href="mailto:andrewdionne09@gmail.com">
            andrewdionne09@gmail.com
          </a>
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            className="rounded-lg border p-4 hover:bg-zinc-50"
            href="https://github.com/rxsq"
          >
            GitHub
          </a>
          <a
            className="rounded-lg border p-4 hover:bg-zinc-50"
            href="https://www.linkedin.com/in/andrewdionne09/"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </main>
  );
}
