"use client";

import { projects } from "@/data/projects";
import { AnimateIn } from "./animate-in";
import { ProjectCard } from "./project-card";
import { SectionDivider } from "./section-divider";

export function Projects() {
  return (
    <section>
      <AnimateIn>
        <h2 className="font-heading text-sm font-medium uppercase tracking-widest text-text-tertiary">
          Projects
        </h2>
      </AnimateIn>

      <div className="mt-8">
        {projects.map((project, i) => (
          <AnimateIn key={project.name} delay={i * 0.15}>
            <ProjectCard project={project} />
            {i < projects.length - 1 && (
              <hr className="border-0 border-t border-divider" />
            )}
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={projects.length * 0.15}>
        <SectionDivider className="mt-12 md:mt-20" />
      </AnimateIn>
    </section>
  );
}
