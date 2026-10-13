import content from "../constants/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 sm:gap-x-6 sm:px-6">
        {content.nav.map(([label, href]) => (
          <a key={href} href={href} className="mono inline-flex min-h-11 items-center">{label}</a>
        ))}
        <a href={content.links.email} aria-label={content.ui.emailLabel} className="btn btn-primary mono">
          {content.navCta}
        </a>
      </nav>
    </header>
  );
}
