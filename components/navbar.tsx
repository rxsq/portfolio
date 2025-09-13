"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          Andrew Dionne
        </Link>
        <nav className="flex gap-4 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded px-2 py-1 hover:bg-zinc-100 ${
                  active ? "bg-zinc-100" : ""
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
