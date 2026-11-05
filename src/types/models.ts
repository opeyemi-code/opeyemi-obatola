import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
};

export type Education = {
  period: string;
  qualification: string;
  institution: string;
  description: string;
};

export type Experiences = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  projectLink?: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type Project = {
  number: string;
  img: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  demo: string;
  repository: string;
  featured: boolean;
};

export type SkillGroups = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};
