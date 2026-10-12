import content from "../constants/content";

const { stack: s } = content;

export default function Stack() {
  return (
    <section aria-labelledby="stack-h" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="mono text-ink-2">{s.kicker}</p>
      <h2 id="stack-h" data-split className="display mt-6 text-step-2">{s.h2}</h2>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-4">
        {s.groups.map(([name, items]) => (
          <div key={name}>
            <h3 className="mono text-ink-2">{name}</h3>
            <ul className="mt-4 space-y-2">
              {items.map(([label, logo]) => (
                <li key={label} className="flex items-center gap-3">
                  {/* Iconify SVG Logos (real tech marks only) */}
                  {logo ? <img src={`https://api.iconify.design/logos/${logo}.svg`} alt="" width="20" height="20" loading="lazy" className="logo" /> : <span aria-hidden="true" className="logo" />}
                  {label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
