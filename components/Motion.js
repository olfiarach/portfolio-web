import { useEffect } from "react";

// Spec §6. Reduced motion: nothing runs, so the static HTML is the final state (no Lenis, no pin, no scrub).
export default function Motion() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let off = () => {};
    let dead = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }, { SplitText }, { default: Lenis }] = await Promise.all([
        import("gsap"), import("gsap/ScrollTrigger"), import("gsap/SplitText"), import("lenis"),
      ]);
      if (dead) return;
      gsap.registerPlugin(ScrollTrigger, SplitText);

      const lenis = new Lenis({ lerp: 0.1 });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const onClick = (e) => {
        const a = e.target.closest('a[href^="#"], a[href^="/#"]');
        const hash = a?.getAttribute("href").replace(/^\//, ""); // nav uses "/#id" so it works off-home
        const el = a && document.querySelector(hash);
        if (!el) return;
        e.preventDefault();
        // Lenis ignores CSS scroll-margin; pass it as offset
        lenis.scrollTo(el, { duration: 0.7, offset: -parseFloat(getComputedStyle(el).scrollMarginTop) || 0 });
        el.focus?.({ preventScroll: true });
        history.pushState(null, "", hash);
      };
      document.addEventListener("click", onClick);

      const ctx = gsap.context(() => {
        const hero = (n) => document.querySelector(`[data-hero=${n}]`);

        // hero intro (once)
        const h1 = SplitText.create(hero("h1"), { type: "words", mask: "words" });
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(hero("kicker"), { opacity: 0, duration: 0.3 })
          .from(h1.words, { yPercent: 100, stagger: 0.04, duration: 0.8 }, ">-0.1")
          .from(hero("cta"), { opacity: 0, duration: 0.3 }, "-=0.4") // don't hold CTAs behind the shader wait
          .from(hero("box"), { clipPath: "inset(0 100% 100% 0)", duration: 0.6, ease: "power2.out" }, "+=1.2") // after the 1.2s shader sweep
          .from(hero("label"), { clipPath: "inset(0 100% 0 0)", duration: 0.5, ease: "steps(14)" });

        // section headings
        gsap.utils.toArray("[data-split]:not([data-hero])").forEach((el) => {
          const s = SplitText.create(el, { type: "words", mask: "words" });
          gsap.from(s.words, {
            yPercent: 110, opacity: 0, stagger: 0.03, duration: 0.7, ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          });
        });

        // section detection boxes
        gsap.utils.toArray("[data-box]").forEach((el) =>
          gsap.from(el, {
            clipPath: "inset(0 100% 100% 0)", duration: 0.5, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          })
        );

        // featured project pin (desktop only)
        gsap.matchMedia().add("(min-width: 1024px)", () => {
          const wrap = document.querySelector("[data-pin]");
          const steps = gsap.utils.toArray("[data-step]");
          wrap.classList.add("pinned");
          gsap.set(steps.slice(1), { opacity: 0 });
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: wrap, start: "top 60px", end: "+=200%", pin: true, scrub: 0.6 },
          });
          steps.slice(1).forEach((s, i) => {
            tl.to("[data-stepbox]", { y: 40 * (i + 1), duration: 1 }, i)
              .to(steps[i], { opacity: 0, duration: 1 }, i)
              .to(s, { opacity: 1, duration: 1 }, i);
          });
          tl.to({}, { duration: 0.5 });
          return () => wrap.classList.remove("pinned");
        });
      });

      const refresh = () => ScrollTrigger.refresh();
      document.fonts.ready.then(refresh);
      addEventListener("load", refresh);

      off = () => {
        removeEventListener("load", refresh);
        document.removeEventListener("click", onClick);
        ctx.revert();
        gsap.ticker.remove(tick);
        lenis.destroy();
        ScrollTrigger.killAll();
      };
    })();
    return () => { dead = true; off(); };
  }, []);
  return null;
}
