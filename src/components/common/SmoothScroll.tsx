// components/common/SmoothScroll.ts
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // debug để chắc chắn vẫn scroll được
    lenis.on("scroll", () => {
      // console.log({ scroll, limit });
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}
