import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100svh-76px)] max-w-280 flex-col justify-center px-5 py-24 md:px-8"
    >
      {/* Availability indicator */}
      <div className="mb-8 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Frontend Developer
        </span>
      </div>

      {/* Main heading */}
      <h1 className="max-w-225 font-display text-5xl leading-[1.12] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[88px]">
        Building thoughtful experiences for the{" "}
        <span className="text-primary">modern web.</span>
      </h1>

      {/* Introduction */}
      <div className="mt-8 flex flex-col gap-8 md:mt-10">
        <p className="max-w-130 text-base leading-8 text-muted md:text-lg">
          I'm Opeyemi, a frontend developer focused on building responsive,
          accessible and maintainable web applications with React, TypeScript
          and modern frontend technologies.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/opeyemi-code"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-primary"
          >
            {/* <Github size={21} strokeWidth={1.7} /> */}
            <FaGithub size={21} strokeWidth={1.7} />
          </a>

          {/* Add your LinkedIn URL when available */}
          <a
            href="https:/linkedin.com/in/opeyemi-obatola"
            target="_blank"
            aria-label="LinkedIn and professional contact information"
            className="text-muted transition-colors hover:text-primary"
          >
            {/* <Linkedin size={21} strokeWidth={1.7} /> */}
            <FaLinkedin size={21} strokeWidth={1.7} />
          </a>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
        >
          Explore my work
          <ArrowUpRight size={17} />
        </a>

        <a
          href="mailto:opeyemiobatola@gmail.com"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Get in touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="mt-20 hidden items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted sm:flex">
        <ArrowDown size={15} />
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;
