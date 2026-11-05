// import contactLinks from "../../data/contact.js"
import { contactLinks } from "../../data/contact";
import { ArrowUpRight, Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-280 px-5 py-24 md:px-8 md:py-32">
        {/* Section heading */}
        <div className="max-w-175">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            06 / Get in touch
          </p>

          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            Have a project or opportunity in mind?
            <span className="text-primary"> Let's talk.</span>
          </h2>

          <p className="mt-6 max-w-137.5 text-base leading-8 text-muted">
            I'm open to frontend developer opportunities, collaborations and
            interesting projects. If you think we could work together, I'd love
            to hear from you.
          </p>
        </div>

        {/* Contact panel */}
        <div className="mt-12 flex flex-col justify-between gap-10 rounded-2xl bg-[#17211d] p-7 text-white md:flex-row md:items-center md:p-12">
          <div>
            <p className="text-sm text-white/60">Have something to discuss?</p>

            <h3 className="mt-3 font-display text-3xl md:text-4xl">
              I'd love to hear from you.
            </h3>

            <a
              href="mailto:opeyemiobatola@gmail.com"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#17211d] transition-colors hover:bg-[#edf5f0]"
            >
              <Mail size={17} />
              Send me an email
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-5 border-t border-white/15 pt-7 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <Icon
                    size={21}
                    className="text-white/70 transition-colors group-hover:text-white"
                  />

                  <div>
                    <p className="text-sm font-medium">{link.label}</p>

                    <p className="mt-1 text-xs text-white/50">{link.value}</p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-white/50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
