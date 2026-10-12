import content from "../constants/content";
import Need from "./Need";

const { hero: h, links, ui } = content;

export default function Hero() {
  return (
    <section aria-label="Introduction" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
      <div className="lg:col-span-7">
        <p data-hero="kicker" className="mono text-ink-2">{h.kicker}</p>
        <h1 data-hero="h1" data-split className="display mt-6 text-step-4">{h.h1}</h1>
        <p className="mt-6 max-w-xl text-ink-2">{h.sub}</p>
        <div data-hero="cta" className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={links.email} aria-label={ui.emailLabel} className="btn btn-primary">{h.cta}</a>
          {links.cv ? (
            <a href={links.cv} aria-label={ui.cvLabel} className="link">{h.cv}</a>
          ) : (
            <Need>[NEED: CV PDF]</Need>
          )}
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            {h.linkedin}<span className="sr-only"> ({ui.newTab})</span>
          </a>
        </div>
        <p className="mono mt-6 text-ink-2">{h.chip}</p>
      </div>
      <div className="lg:col-span-5">
        <figure
          data-hero="media"
          role="img"
          aria-label={h.alt}
          className="relative aspect-[4/5] w-full overflow-hidden bg-line sm:aspect-[3/2] lg:aspect-[4/5]"
        >
          {h.photo && <img src={h.photo} alt="" className="h-full w-full object-cover" />}
          <canvas data-hero="canvas" aria-hidden="true" className="absolute inset-0 h-full w-full" />
          {h.label && (
            <div aria-hidden="true" data-hero="box" className="hero-box">
              <span data-hero="label" className="hero-label mono">{h.label}</span>
            </div>
          )}
          <span className="sr-only">{ui.fallbackNote}</span>
          {!h.photo && <span className="mono absolute bottom-2 left-2 text-ink-2">{ui.heroFallback}</span>}
        </figure>
        <a href={links.demo} target="_blank" rel="noopener noreferrer" className="link mono mt-3 inline-block">
          {content.project.demoCta}<span className="sr-only"> ({ui.newTab})</span>
        </a>
        {h.need.map((n) => <Need key={n}>{n}</Need>)}
      </div>
    </section>
  );
}
