import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-280 px-5 py-24 md:px-8 md:py-32">
        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-150">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              03 / Selected work
            </p>

            <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
              Projects I've built.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted">
              A selection of applications I've developed while exploring
              frontend engineering, solving problems and improving my skills.
            </p>
          </div>

          <a
            href="https://github.com/opeyemi-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover"
          >
            More on GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-xl border border-border bg-background ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Project screenshot placeholder */}
              <img
                src={project.img}
                className="h-auto w-auto object-cover"
                alt={project.description}
              />

              {/* Project information */}
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest text-primary">
                    {project.number}
                  </span>

                  {project.featured && (
                    <span className="rounded-full bg-subtle px-3 py-1 text-xs font-medium text-primary">
                      Featured project
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl text-foreground md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-162.5 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-8 flex items-center gap-5 border-t border-border pt-5">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground"
                  >
                    {/* <Github size={16} /> */}
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
