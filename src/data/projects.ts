export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: "live" | "in-development";
  url?: string;
};

export const projects: Project[] = [
  {
    name: "NYC Weekend Newsletter",
    description:
      "AI-curated weekend events in New York, delivered every Thursday.",
    stack: ["TypeScript", "Claude API", "Vercel"],
    status: "live",
    url: "https://newsletter.emmet.nyc/",
  },
  {
    name: "UnseenBard",
    description:
      "Ambient soundboard for Dungeon Masters to layer atmospheric audio during tabletop RPG sessions.",
    stack: ["Next.js", "TypeScript", "Howler.js"],
    status: "in-development",
    url: "https://unseenbard.com",
  },
  {
    name: "Movie Rankings",
    description:
      "Stack-rank your movie preferences through pairwise comparisons.",
    stack: ["Express", "SQLite"],
    status: "in-development",
  },
];
