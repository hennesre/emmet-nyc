"use client";

import { AnimateIn } from "./animate-in";

const links = [
  { label: "GitHub", href: "https://github.com/hennesre" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emmethennessy/" },
];

export function Links() {
  return (
    <section>
      <AnimateIn>
        <h2 className="font-heading text-sm font-medium uppercase tracking-widest text-text-tertiary">
          Elsewhere
        </h2>
      </AnimateIn>

      <ul className="mt-8 space-y-4">
        {links.map((link, i) => (
          <AnimateIn key={link.label} delay={i * 0.1}>
            <li>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group inline-flex items-center gap-2 text-lg text-accent transition-colors hover:text-accent-hover"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-accent-hover transition-all duration-300 group-hover:w-full" />
                </span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            </li>
          </AnimateIn>
        ))}
      </ul>
    </section>
  );
}
