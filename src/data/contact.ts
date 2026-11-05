import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { ContactLink } from "../types/models";

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/opeyemi-code",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https:linkedin.com/in/opeyemi-obatola",
    icon: FaLinkedin,
  },
];
