import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "../../data/education";

function Education() {
  return (
    <section id="education" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-280 px-5 py-24 md:px-8 md:py-32">
        {/* Section heading */}
        <div className="mb-14 max-w-150">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            05 / Education
          </p>

          <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
            Education & learning.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            My academic background and professional certifications that have
            shaped my journey in technology.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Education */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-subtle text-primary">
                <GraduationCap size={21} />
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((item) => (
                <article
                  key={item.institution}
                  className="border-l-2 border-border pl-5"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {item.period}
                  </p>

                  <h4 className="mt-3 text-lg font-semibold text-foreground">
                    {item.qualification}
                  </h4>

                  <p className="mt-1 text-sm font-medium text-muted">
                    {item.institution}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-subtle text-primary">
                <Award size={21} />
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((certification) => (
                <article
                  key={certification.name}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <h4 className="text-base font-semibold leading-7 text-foreground">
                    {certification.name}
                  </h4>

                  <p className="mt-2 text-sm text-muted">
                    {certification.issuer}
                  </p>

                  {certification.period && (
                    <p className="mt-2 text-xs text-muted">
                      {certification.period}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
