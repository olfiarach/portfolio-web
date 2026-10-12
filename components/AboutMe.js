import content from "../constants/content";

export default function AboutMe() {
  return (
    <section aria-label="Statement" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p data-split className="display text-step-2 max-w-4xl" style={{ letterSpacing: "-0.01em", lineHeight: 1.3 }}>
        {content.statement}
      </p>
    </section>
  );
}
