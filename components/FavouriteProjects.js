import content from "../constants/content";
import Need from "./Need";

const { project: p, links, ui } = content;

export default function FavouriteProjects() {
  return (
    <section id="work" aria-labelledby="work-h" data-section className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:scroll-mt-12 py-16 sm:px-6 sm:py-24">
      <div data-pin>
        <p data-box className="mono det text-ink-2">{p.kicker}</p>
        <h2 id="work-h" data-split className="display mt-6 text-step-4">
          {p.title}{p.need && <Need>{p.need}</Need>}
        </h2>
        <p className="mt-4 max-w-2xl text-step-2 display" style={{ letterSpacing: "-0.01em" }}>{p.oneLiner}</p>
        <p className="mt-4 max-w-2xl text-ink-2">{p.why}</p>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <ol aria-hidden="true" className="mono relative hidden text-ink-2 lg:col-span-3 lg:block">
            <span data-stepbox className="absolute left-0 top-0 h-10 w-full border-2 border-signal" />
            {p.steps.map((s) => <li key={s.label} className="flex h-10 items-center px-3">{s.label}</li>)}
          </ol>
          <ol className="steps space-y-10 lg:col-span-9">
            {p.steps.map((s) => (
              <li key={s.label} data-step className="step">
                <p className="mono text-ink-2">{s.label}</p>
                {s.stat && <p className="display mt-2 text-step-2">{s.stat}</p>}
                <h3 className="display mt-2 text-step-2">{s.heading}</h3>
                <p className="mt-2 max-w-xl text-ink-2">{s.body}{s.need && <Need>{s.need}</Need>}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6">
          {links.repo ? (
            <a href={links.repo} target="_blank" rel="noopener noreferrer" className="link">{p.repoCta}<span className="sr-only"> ({ui.newTab})</span></a>
          ) : <Need>[NEED: repo URL]</Need>}
          {links.demo ? (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="link">{p.demoCta}<span className="sr-only"> ({ui.newTab})</span></a>
          ) : <Need>[NEED: video]</Need>}
        </div>
        <p className="mono mt-6 text-ink-2">{p.tags.join(" · ")}</p>
      </div>
    </section>
  );
}
