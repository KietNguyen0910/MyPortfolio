"use client";

import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";

type AnimatedBorderButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
};

export default function AnimatedBorderButton({
  children,
  className,
  onClick,
  href,
}: AnimatedBorderButtonProps) {
  const isExternal = href?.startsWith("http");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Đo size thực tế của button hoặc anchor
  useEffect(() => {
    const ref = href ? anchorRef.current : buttonRef.current;
    if (ref) {
      const { width, height } = ref.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [children, href]); // cập nhật nếu text đổi hoặc href đổi

  const { width, height } = size;

  const baseClass = clsx(
    "relative btn-pri font-semibold text-white",
    "bg-transparent border-none cursor-pointer group",
    "inline-flex items-center justify-center px-6 py-3",
    className
  );

  const content = (
    <>
      {width > 0 && height > 0 && (
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="absolute top-0 left-0 pointer-events-none"
          preserveAspectRatio="none"
        >
          <polyline
            points={`${width - 1},1 ${width - 1},${height - 1} 1,${
              height - 1
            } 1,1 ${width - 1},1`}
            className="transition-all duration-1000 ease-in-out stroke-white fill-none"
            style={{
              strokeDasharray: 2 * (width + height),
              strokeDashoffset: 2 * (width + height),
            }}
          />
        </svg>
      )}
      <span className="relative z-10 pointer-events-none whitespace-nowrap">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className={baseClass}
        ref={anchorRef}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={baseClass} ref={buttonRef} onClick={onClick}>
      {content}
    </button>
  );
}
