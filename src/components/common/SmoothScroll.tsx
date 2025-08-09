"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // tốc độ mượt
        effects: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
