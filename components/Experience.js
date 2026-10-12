import content from "../constants/content";

const { experience: e } = content;

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h" className="mx-auto max-w-6xl scroll-mt-12 px-4 py-24 sm:px-6">
      <p data-box className="mono det text-ink-2">{e.kicker}</p>
      <h2 id="exp-h" data-split className="display mt-6 text-step-4">{e.h2}</h2>
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {e.rows.map((r) => (
          <li key={r.org} className="row grid gap-2 px-2 py-8 md:grid-cols-12 md:gap-6">
            <span aria-hidden="true" className="row-label mono">{r.label}</span>
            <p className="mono text-ink-2 md:col-span-2">{r.dates}</p>
            <div className="md:col-span-4">
              <h3 className="display text-step-2">{r.role}</h3>
              <p className="text-ink-2">{r.org}</p>
            </div>
            <ul className="space-y-2 md:col-span-6">
              {r.lines.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
