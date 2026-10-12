import { useEffect } from "react";
import content from "../constants/content";

// Lazy: starts after load (post-LCP), skipped on reduced motion. Failure/removal leaves the poster + CSS box.
export default function HeroShader() {
  useEffect(() => {
    const canvas = document.querySelector("[data-hero=canvas]");
    if (!canvas) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return canvas.remove();
    let dispose, dead = false;
    const start = () =>
      import("../lib/heroShader").then(({ default: init }) => {
        if (dead) return;
        dispose = init(canvas, { photo: content.hero.photo });
        if (!dispose) canvas.remove();
      });
    const go = () => (window.requestIdleCallback ? requestIdleCallback(start) : setTimeout(start, 200));
    if (document.readyState === "complete") go();
    else addEventListener("load", go, { once: true });
    return () => { dead = true; removeEventListener("load", go); dispose?.(); };
  }, []);
  return null;
}
