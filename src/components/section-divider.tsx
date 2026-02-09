"use client";

import { motion } from "motion/react";

type SectionDividerProps = {
  className?: string;
  animated?: boolean;
};

export function SectionDivider({
  className = "",
  animated = false,
}: SectionDividerProps) {
  if (animated) {
    return (
      <motion.hr
        className={`border-0 border-t border-divider ${className}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        style={{ transformOrigin: "left" }}
      />
    );
  }

  return <hr className={`border-0 border-t border-divider ${className}`} />;
}
