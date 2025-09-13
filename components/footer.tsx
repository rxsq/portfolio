import { Container } from "./container";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-zinc-50/40 py-10 text-sm text-zinc-600">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Left side */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Andrew Dionne. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/rxsq"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrewdionne09/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:andrewdionne09@gmail.com"
            className="hover:text-zinc-900 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
