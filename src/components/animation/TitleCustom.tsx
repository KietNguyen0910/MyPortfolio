"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
  textCenter: "left" | "center";
}

export const TitleCustom = ({ children, className }: TitleProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "words" });

    gsap.from(split.words, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      delay: 0.2,
      stagger: 0.05,
      duration: 1.5,
      ease: "power3.out",
    });

    return () => {
      split.revert(); // Cleanup để tránh memory leak
    };
  }, []);

  return (
    <h2 className={`relative w-fit ${className}`}>
      <span
        ref={textRef}
        className="font-sec relative z-[1] text-pretty text-2xl font-bold uppercase leading-[1.3] sm:text-3xl md:text-4xl"
      >
        {children}
      </span>
    </h2>
  );
};
