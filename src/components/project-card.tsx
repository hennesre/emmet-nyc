"use client";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isLive = project.status === "live";

  return (
    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-heading text-2xl font-semibold tracking-tight text-text md:text-[28px]">
          {project.name}
        </h3>
        {isLive && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            <span className="relative">
              Live
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent-hover transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
        ) : (
          <span className="shrink-0 text-sm text-text-tertiary">
            In development
          </span>
        )}
      </div>

      <p className="mt-2 text-text-secondary">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-card-bg px-3 py-1 font-mono text-xs text-text-tertiary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
