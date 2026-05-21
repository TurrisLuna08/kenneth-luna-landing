const links = {
  github: "https://github.com/kennethluna",
  linkedin: "https://linkedin.com/in/kennethluna",
  twitter: "https://x.com/kennethluna",
  email: "mailto:kenneth@kennethluna.com",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface border-t border-border/10">
      <div className="mx-auto max-w-5xl px-6 py-12 flex flex-col items-center gap-8">
        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            X / Twitter
          </a>
          <a
            href={links.email}
            className="text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            Email
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-foreground-muted">
          &copy; {year} Kenneth Luna. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}