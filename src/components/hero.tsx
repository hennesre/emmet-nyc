"use client";

import { motion } from "motion/react";
import { SectionDivider } from "./section-divider";

export function Hero() {
  return (
    <section className="pt-20 md:pt-24">
      <motion.h1
        className="font-heading text-6xl font-bold tracking-tight text-text md:text-[80px] md:leading-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        emmet.nyc
      </motion.h1>

      <motion.p
        className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Product manager based in New York. Into coffee, books, and exploring
        every corner of this city I can get to.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <SectionDivider className="mt-12 md:mt-20" animated />
      </motion.div>
    </section>
  );
}
