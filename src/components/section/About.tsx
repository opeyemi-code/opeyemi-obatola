import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-280 px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          {/* Section heading */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              01 / About me
            </p>

            <h2 className="max-w-87.5 font-display text-4xl leading-tight text-foreground md:text-5xl">
              A little about who I am.
            </h2>
          </div>

          {/* About content */}
          <div>
            <p className="text-lg leading-8 text-foreground md:text-xl md:leading-9">
              I'm a frontend developer passionate about turning ideas into
              functional, accessible and intuitive digital experiences.
            </p>

            <p className="mt-6 text-base leading-8 text-muted">
              My journey into technology has been driven by curiosity and a
              desire to solve problems through code. I enjoy working with React,
              TypeScript and modern frontend tools to build applications that
              are not only visually appealing but also maintainable and
              reliable.
            </p>

            <p className="mt-5 text-base leading-8 text-muted">
              Through personal projects and collaborative development
              experience, I've worked with REST APIs, form validation,
              application state management and responsive UI development. I'm
              continuously learning, improving my engineering practices and
              looking forward to contributing to a team where I can grow as a
              developer.
            </p>

            {/* Additional details */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <p className="text-sm text-muted">Education</p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  Frontend Engineering
                </p>
                <p className="mt-1 text-sm text-muted">AltSchool Africa</p>
              </div>

              <div>
                <p className="text-sm text-muted">Based in</p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  Lagos, Nigeria
                </p>
                <p className="mt-1 text-sm text-muted">
                  Open to diverse work arrangements
                </p>
              </div>
            </div>

            {/* CV link */}
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              Let's connect
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
