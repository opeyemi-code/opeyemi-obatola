import { Code2, Layers3, Palette, Wrench } from "lucide-react";
import type { SkillGroups } from "../types/models";

export const skillGroups: SkillGroups[] = [
  {
    title: "Languages & Core",
    description: "The foundations I use to build web applications.",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    description: "Technologies for building interactive interfaces.",
    icon: Layers3,
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "React Hooks",
      "TanStack Query",
      "Vue Reactivity",
    ],
  },
  {
    title: "Styling & UI",
    description: "Tools for creating responsive user interfaces.",
    icon: Palette,
    skills: ["Tailwind CSS", "Bootstrap", "Zod", "Vee-Validate"],
  },
  {
    title: "Tools & Workflow",
    description: "Tools that support my development workflow.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "Webpack", "Vercel"],
  },
];
