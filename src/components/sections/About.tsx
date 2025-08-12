/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TitleCustom } from "../animation/TitleCustom";
import SpotlightCard from "../animation/SpotlightCard";
import CountUp from "../animation/CountUp";
import LightRays from "../animation/LightRays";

const About: React.FC = () => {
  const cards = [
    {
      icon: "/ab1.svg",
      title: "Projects",
      count: 100,
      suffix: "",
    },
    {
      icon: "/ab2.svg",
      title: "Customer",
      count: 50,
      suffix: "",
    },
    {
      icon: "/ab3.svg",
      title: "Experience",
      count: 3,
      suffix: "years",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 30%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <>
      <section className="relative z-1 about sec-pd" id="about">
        <LightRays
          raysOrigin="top-center"
          raysColor="rgba(65, 18, 109, 0.6)"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div className="container">
          <div className="flex flex-col items-center ">
            <div className="flex flex-col mb-6 text-center">
              <div className="flex flex-col items-center">
                <TitleCustom className="text-primary" textCenter="center">
                  About me
                </TitleCustom>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-4 max-w-[50rem]"
              >
                Frontend Dev with 2+ years building fast, scalable, SEO-friendly
                apps using React, Next.js & GraphQL. Strong focus on animation,
                performance, and pixel-perfect UIs. I craft interfaces that not
                only look great — they drive results.
              </motion.div>
            </div>
            <div className="flex w-full gap-2 max-md:flex-wrap">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="flex-1 max-md:w-1/2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.2 + 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(65, 18, 109, 0.6)"
                  >
                    <div className="flex flex-col items-center justify-between gap-1 text-center">
                      <img
                        src={card.icon}
                        alt={card.title}
                        loading="lazy"
                        className="object-contain w-20 h-20"
                      />
                      <p className="text-3xl font-semibold uppercase">
                        {card.title}
                      </p>
                      <div className="flex items-center gap-1 text-2xl font-semibold">
                        +
                        <CountUp
                          from={0}
                          to={card.count}
                          separator=","
                          direction="up"
                          duration={1}
                          className="count-up-text"
                        />
                        {card.suffix && <span>{card.suffix}</span>}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="w-full mt-8" ref={containerRef}>
            <h3 className="mb-6 text-2xl font-semibold uppercase">Experience</h3>

            <div ref={ref} className="relative pb-20 mx-auto max-w-7xl">
              <div className="relative z-[1] flex items-start gap-8 pb-16">
                <div className="sticky flex items-center gap-2 text-2xl font-medium w-36 top-20 ex-dot">
                  <div className="flex-shrink-0 w-6 h-6 p-1 border rounded-full border-white/800 ex-dot-inner">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                  <span>Present</span>
                </div>
                <div className="">
                  <h3 className="text-lg font-semibold">MONA Media</h3>
                  <p className="italic">
                    Frontend Developer / Aug 2023 – Present
                  </p>
                  <ul className="pl-3 mt-4 space-y-1 text-sm list-disc list-outside">
                    <li>
                      Lead frontend for 2 e-commerce platforms (Petdays & Phong
                      thuy thien an), handling architecture & UI/UX.
                    </li>
                    <li>
                      Built SEO-optimized UIs with Next.js (App Router,
                      SSR/SSG), React & Tailwind CSS.
                    </li>
                    <li>
                      Integrated GraphQL (CMS) & REST APIs, implemented full
                      VNPAY payment flow.
                    </li>
                    <li>
                      Managed state with Zustand & React Query — optimized
                      caching & background syncing.
                    </li>
                    <li>
                      Enhanced performance with code splitting, lazy loading,
                      and image optimization.
                    </li>
                    <li>
                      Created smooth UX with GSAP, Animista — responsive across
                      99%+ devices.
                    </li>
                    <li>
                      Worked closely with design/backend for clean,
                      production-ready UI.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative z-[1] flex items-start gap-8 pb-8">
                <div className="sticky flex items-center gap-2 text-2xl font-medium w-36 top-20 ex-dot">
                  <div className="flex-shrink-0 w-6 h-6 p-1 border rounded-full border-white/800 ex-dot-inner">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                  <span>2022</span>
                </div>
                <div className="">
                  <h3 className="text-lg font-semibold">NAMTECH Solution</h3>
                  <p className="italic">
                    Frontend Developer / Aug 2022 – Aug 2023
                  </p>
                  <ul className="pl-3 mt-4 space-y-1 text-sm list-disc list-outside">
                    <li>
                      Delivered pixel-perfect UIs from Figma using HTML5, SCSS,
                      and vanilla JS.
                    </li>
                    <li>
                      Developed reusable WordPress blocks fetching dynamic
                      content via PHP.
                    </li>
                    <li>
                      Improved SEO with semantic HTML and clean markup
                      structure.
                    </li>
                    <li>
                      Used Git/GitLab for version control and CI/CD deployment.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  height: height + "px",
                }}
                className="absolute top-3 left-[0.7rem] w-[3px] bg-white/20 overflow-hidden to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
              >
                <motion.div
                  style={{
                    height: heightTransform,
                    opacity: opacityTransform,
                  }}
                  className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                />
              </div>
            </div>
          </div>
          {/* <div className="mt-8">
            <h3 className="mb-6 text-xl font-semibold uppercase">Experience</h3>
            <div
              ref={containerRef}
              className="relative flex flex-col justify-between"
            >
              <div
                ref={lineRef}
                className="absolute top-3 left-[0.7rem] w-0.5 bg-white/20"
                style={{ height: "100%" }}
              >
                <motion.div
                  className="absolute left-0 w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700"
                  style={{
                    height: heightTransform,
                    opacity: opacityTransform,
                  }}
                />
              </div>
              <div className="relative flex items-start gap-8 pb-16">
                <div className="sticky flex items-center gap-2 text-2xl font-medium w-36 top-20 ex-dot">
                  <div className="flex-shrink-0 w-6 h-6 p-1 border rounded-full border-white/800 ex-dot-inner">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                  <span>Present</span>
                </div>
                <div className="">
                  <h3 className="text-lg font-semibold">MONA Media</h3>
                  <p className="italic">
                    Frontend Developer / Aug 2023 – Present
                  </p>
                  <ul className="pl-3 mt-4 space-y-1 text-sm list-disc list-outside">
                    <li>
                      Lead frontend for 2 e-commerce platforms (Petdays & Phong
                      thuy thien an), handling architecture & UI/UX.
                    </li>
                    <li>
                      Built SEO-optimized UIs with Next.js (App Router,
                      SSR/SSG), React & Tailwind CSS.
                    </li>
                    <li>
                      Integrated GraphQL (CMS) & REST APIs, implemented full
                      VNPAY payment flow.
                    </li>
                    <li>
                      Managed state with Zustand & React Query — optimized
                      caching & background syncing.
                    </li>
                    <li>
                      Enhanced performance with code splitting, lazy loading,
                      and image optimization.
                    </li>
                    <li>
                      Created smooth UX with GSAP, Animista — responsive across
                      99%+ devices.
                    </li>
                    <li>
                      Worked closely with design/backend for clean,
                      production-ready UI.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-start gap-8 pb-8">
                <div className="sticky flex items-center gap-2 text-2xl font-medium w-36 top-20 ex-dot">
                  <div className="flex-shrink-0 w-6 h-6 p-1 border rounded-full border-white/800 ex-dot-inner">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                  <span>2022</span>
                </div>
                <div className="">
                  <h3 className="text-lg font-semibold">NAMTECH Solution</h3>
                  <p className="italic">
                    Frontend Developer / Aug 2022 – Aug 2023
                  </p>
                  <ul className="pl-3 mt-4 space-y-1 text-sm list-disc list-outside">
                    <li>
                      Delivered pixel-perfect UIs from Figma using HTML5, SCSS,
                      and vanilla JS.
                    </li>
                    <li>
                      Developed reusable WordPress blocks fetching dynamic
                      content via PHP.
                    </li>
                    <li>
                      Improved SEO with semantic HTML and clean markup
                      structure.
                    </li>
                    <li>
                      Used Git/GitLab for version control and CI/CD deployment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
