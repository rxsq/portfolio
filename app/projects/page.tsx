import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main>
      <Container className="py-16">
        <h1 className="text-3xl font-semibold">Projects</h1>

        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.slug}
              className="overflow-hidden rounded-lg border hover:shadow-sm transition"
            >
              <article>
                {/* Clickable area (no inner <a> tags here) */}
                <Link href={`/projects/${p.slug}`} className="group block">
                  {/* Cover */}
                  <div className="relative aspect-[16/9] w-full bg-zinc-100">
                    {p.cover ? (
                      <Image
                        src={p.cover}
                        alt={`${p.title} cover`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        priority={false}
                      />
                    ) : null}
                  </div>

                  {/* Title + summary */}
                  <div className="p-5">
                    <h2 className="text-lg font-medium group-hover:underline">
                      {p.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm text-zinc-600">
                      {p.summary}
                    </p>

                    {p.tags?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded border px-2 py-0.5 text-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Link>

                {/* Secondary actions (outside the Link to avoid <a> nesting) */}
                {p.repo || p.demo || p.links?.length ? (
                  <div className="px-5 pb-5 -mt-2 flex flex-wrap gap-4 text-sm">
                    {p.repo && (
                      <a
                        className="underline"
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        className="underline"
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    )}
                    {p.links?.map((l) => (
                      <a
                        key={l.href}
                        className="underline"
                        href={l.href}
                        target={l.href.startsWith("/") ? undefined : "_blank"}
                        rel={
                          l.href.startsWith("/")
                            ? undefined
                            : "noopener noreferrer"
                        }
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
