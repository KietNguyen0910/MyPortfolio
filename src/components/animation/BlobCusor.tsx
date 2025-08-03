"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#5227FF",
  trailCount = 3,
  sizes = [60, 125, 75],
  opacities = [0.6, 0.6, 0.6],
  shadowColor = "rgba(0,0,0,0.75)",
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = "blob",
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 100,
}: {
  blobType?: string;
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  useEffect(() => {
    let lastX = 0,
      lastY = 0;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const { left, top } = updateOffset();
      let x = 0,
        y = 0;
      if (e instanceof MouseEvent) {
        x = e.clientX;
        y = e.clientY;
      } else if (e instanceof TouchEvent && e.touches[0]) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      }
      lastX = x;
      lastY = y;
      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase,
        });
      });
    };

    const handleScroll = () => {
      const { left, top } = updateOffset();
      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: lastX - left,
          y: lastY - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase,
        });
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateOffset, fastDuration, slowDuration, fastEase, slowEase]);

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex }}
    >
      <div
        className="absolute inset-0 overflow-hidden cursor-default pointer-events-none select-none"
        style={{ filter: useFilter ? `url(#${filterId})` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              blobsRef.current[i] = el;
            }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === "circle" ? "50%" : "0",
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
            }}
          >
            <div
              className="absolute"
              style={{
                width: 30,
                height: 30,
                borderRadius: blobType === "circle" ? "50%" : "0",
                backgroundColor: "transparent", // nền trong suốt
                opacity: 1, // full visible vì không dùng màu nền nữa
                border: "1px solid rgba(255,255,255,0.1)", // viền trắng nhạt
                boxShadow: "none", // bỏ shadow nếu không cần
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
