import type { Project } from "../types/models";

export const projects: Project[] = [
  {
    number: "01",
    img: "/images/store_preview.webp",
    title: "Ecommerce Application",
    description:
      "A fully functional ecommerce application featuring product browsing, cart management and an integrated checkout experience.",
    features: [
      "REST API integration",
      "Reactive cart state management",
      "Form validation with Vee-Validate",
      "Paystack payment integration",
    ],
    technologies: [
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Vee-Validate",
      "Paystack",
    ],
    demo: "https://store-alt.netlify.app/",
    repository: "https://github.com/opeyemi-code/store-vue",
    featured: true,
  },
  {
    number: "02",
    img: "/images/weather_now_preview.webp",
    title: "Weather Application",
    description:
      "A responsive weather application that allows users to search for locations and access current weather information.",
    features: [
      "Location search and geocoding",
      "Open-Meteo API integration",
      "Data caching with TanStack Query",
      "Metric and imperial units",
    ],
    technologies: ["React", "TypeScript", "Vite", "TanStack Query"],
    demo: "https://weather-app-kappa-lilac-52.vercel.app/",
    repository: "https://github.com/opeyemi-code/WEATHER-APP",
    featured: false,
  },
  {
    number: "03",
    img: "/images/markdown-previewer-preview.webp",
    title: "MarkdownPro",
    description:
      "A Markdown editor with real-time preview and note management capabilities, designed to make writing and organising notes easier.",
    features: [
      "Real-time Markdown preview",
      "Create, edit and delete notes",
      "LocalStorage persistence",
      "Markdown import and export",
      "Reusable toast notifications",
    ],
    technologies: ["React", "TypeScript", "Markdown"],
    demo: "https://markdownpro-alt.netlify.app/",
    repository: "https://github.com/opeyemi-code/MarkDown-Previewer",
    featured: false,
  },
];
