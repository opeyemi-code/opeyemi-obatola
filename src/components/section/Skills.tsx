import { skillGroups } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-280 px-5 py-24 md:px-8 md:py-32">
        {/* Section heading */}
        <div className="mb-14 max-w-150">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            02 / Skills
          </p>

          <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
            My technical toolkit.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            The technologies and tools I use to build, maintain and improve
            modern web applications.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-xl border border-border p-6 transition-colors hover:border-primary/40 md:p-8"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-subtle text-primary">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {group.description}
                </p>

                {/* Individual skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
