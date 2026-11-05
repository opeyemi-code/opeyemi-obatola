import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { footerLinks } from "../../data/footer";

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-280 px-5 py-12 md:px-8 md:py-16">
        {/* Footer main content */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-[320px]">
            <a href="#home" className="font-display text-3xl text-foreground">
              Opeyemi<span className="text-primary">.</span>
            </a>

            <p className="mt-4 text-sm leading-7 text-muted">
              Frontend Developer focused on building thoughtful, responsive and
              accessible web experiences.
            </p>

            <p className="mt-3 text-sm font-medium text-primary">
              React · TypeScript · Next.js
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Quick links
            </h3>

            <nav className="grid grid-cols-2 gap-x-10 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Connect
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/opeyemi-code"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary"
              >
                <FaGithub size={17} />
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https:/linkedin.com/in/opeyemi-obatola"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary"
              >
                <FaLinkedin size={17} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Opeyemi Obatola. All rights reserved.
          </p>

          <a
            href="#home"
            className="w-fit text-xs font-medium text-muted transition-colors hover:text-primary"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
