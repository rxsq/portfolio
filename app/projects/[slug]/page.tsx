import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { projects } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proj = projects.find((p) => p.slug === slug);

  return {
    title: proj?.title ?? "Project",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const proj = projects.find((p) => p.slug === slug);
  if (!proj) notFound();

  return (
    <main>
      {/* Hero */}
      <div className="border-b bg-zinc-50">
        <Container className="py-8">
          <h1 className="text-3xl font-semibold">{proj.title}</h1>
          <p className="mt-3 max-w-prose text-zinc-700">{proj.summary}</p>

          {/* Quick facts */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-600">
            {proj.role && (
              <span className="rounded border px-2 py-0.5">
                Role: {proj.role}
              </span>
            )}
            {proj.period && (
              <span className="rounded border px-2 py-0.5">
                Period: {proj.period}
              </span>
            )}
            {proj.tech?.length ? (
              <span className="rounded border px-2 py-0.5">
                Tech: {proj.tech.join(", ")}
              </span>
            ) : null}
          </div>

          {/* CTAs */}
          {proj.repo ||
          proj.demo ||
          proj.links?.length ||
          proj.downloads?.length ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {proj.repo && (
                <a
                  className="rounded-md border px-4 py-2 hover:bg-zinc-100"
                  href={proj.repo}
                >
                  View Code
                </a>
              )}
              {proj.demo && (
                <a
                  className="rounded-md bg-black px-4 py-2 text-white"
                  href={proj.demo}
                >
                  Live Demo
                </a>
              )}
              {proj.links?.map((l) => (
                <a
                  key={l.href}
                  className="rounded-md border px-4 py-2 hover:bg-zinc-100"
                  href={l.href}
                >
                  {l.label}
                </a>
              ))}
              {proj.downloads?.map((d) => (
                <a
                  key={d.href}
                  className="rounded-md border px-4 py-2 hover:bg-zinc-100"
                  href={d.href}
                  download
                >
                  {d.label}
                </a>
              ))}
            </div>
          ) : null}
        </Container>
      </div>

      {/* Cover */}
      {proj.cover ? (
        <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl">
          <Image
            src={proj.cover}
            alt={`${proj.title} cover`}
            fill
            className="object-cover"
            sizes="1200px"
          />
        </div>
      ) : null}

      {/* Body */}
      <Container className="py-12">
        {/* Highlights */}
        {proj.highlights?.length ? (
          <section>
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-4 list-disc pl-5 text-zinc-700">
              {proj.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Metrics */}
        {proj.metrics?.length ? (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Outcomes</h2>
            <ul className="mt-4 list-disc pl-5 text-zinc-700">
              {proj.metrics.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Gallery */}
        {proj.gallery?.length ? (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Gallery</h2>

            <div className="mt-4">
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  {proj.gallery.map((img) => (
                    <CarouselItem key={img} className="basis-full">
                      <figure className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border">
                        <Image
                          src={img}
                          alt={`${proj.title} screenshot`}
                          fill
                          className="object-cover"
                        />
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </section>
        ) : null}

        {/* Back link */}
        <div className="mt-12">
          <Link className="underline" href="/projects">
            ← Back to Projects
          </Link>
        </div>
      </Container>
    </main>
  );
}
