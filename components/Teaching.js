import content from "../constants/content";

const { teaching: t } = content;

export default function Teaching() {
  return (
    <section id="teaching" aria-labelledby="teach-k" className="mx-auto max-w-6xl scroll-mt-12 px-4 py-24 sm:px-6">
      <p id="teach-k" data-box className="mono det text-ink-2">{t.kicker}</p>
      <p className="display mt-6 text-step-4">{t.big}</p>
      <p className="display text-step-2">{t.under}</p>
      <p className="mono mt-6 text-ink-2">{t.places}</p>
      <p className="mt-6 max-w-2xl">{t.body}</p>
      <p className="mt-4 max-w-2xl text-sm text-ink-2">{t.why}</p>
    </section>
  );
}
