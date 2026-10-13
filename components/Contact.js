import content from "../constants/content";
import Need from "./Need";

const { contact: c, links, ui, footer } = content;

export default function Contact() {
  return (
    <>
      <section id="contact" aria-labelledby="contact-h" className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:scroll-mt-12 py-16 sm:px-6 sm:py-24">
        <h2 id="contact-h" data-split className="display text-step-4">{c.h2}</h2>
        <p className="mt-6 max-w-xl">{c.body}<Need>{c.need}</Need></p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={links.email} aria-label={ui.emailLabel} className="btn btn-primary">{c.cta}</a>
          {links.cv ? <a href={links.cv} aria-label={ui.cvLabel} className="link">{c.cv}</a> : <Need>[NEED: CV PDF]</Need>}
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="link">{c.linkedin}<span className="sr-only"> ({ui.newTab})</span></a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="link">{c.github}<span className="sr-only"> ({ui.newTab})</span></a>
        </div>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 border-t border-line px-4 py-6 text-sm text-ink-2 sm:px-6">
        <p>{footer.text}</p>
      </footer>
    </>
  );
}
