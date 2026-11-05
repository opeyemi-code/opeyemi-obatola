import { ArrowUpRight } from "lucide-react";
import { experiences } from "../../data/experiences";

function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-280 px-5 py-24 md:px-8 md:py-32">
        {/* Section heading */}
        <div className="mb-16 max-w-150">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            04 / Experience
          </p>

          <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
            Where I've worked.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            My professional journey, the experiences I've gained and the skills
            I've developed along the way.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-1.75 top-2 w-px bg-border" />

          <div className="space-y-14">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="relative pl-10 md:pl-14"
              >
                {/* Timeline marker */}
                <span className="absolute left-0 top-1 flex h-3.75 w-3.75 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {experience.period}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-muted">
                      {experience.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-border px-3 py-1.5 text-xs text-muted">
                    {experience.location}
                  </span>
                </div>

                <p className="mt-6 max-w-187.5 text-sm leading-7 text-muted">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <ul className="mt-6 space-y-3">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-sm leading-6 text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {responsibility}
                    </li>
                  ))}
                </ul>

                {/* Technologies and skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-subtle px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                {/* Live link */}
                {experience.projectLink && (
                  <a
                    href={experience.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
                  >
                    View Manarah
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
