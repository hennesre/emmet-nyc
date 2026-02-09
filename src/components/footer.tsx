"use client";

import { AnimateIn } from "./animate-in";

export function Footer() {
  return (
    <AnimateIn>
      <footer className="pb-12 pt-20 md:pt-24">
        <p className="font-mono text-sm text-text-tertiary">Built in NYC</p>
      </footer>
    </AnimateIn>
  );
}
