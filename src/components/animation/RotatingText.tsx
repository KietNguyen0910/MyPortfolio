"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const words = ["developer", "designer", "creator"];

export default function FlipWords() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="flip-container">
      <div className="text-5xl uppercase max-sm:text-4xl cd-headline text-primary rotate-1 cd-words-wrapper">
        {words.map((w, i) => (
          <b
            key={i}
            className={clsx(
              i === current && "is-visible",
              i === prev && "is-hidden"
            )}
          >
            {w}
          </b>
        ))}
      </div>
    </div>
  );
}
