/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";
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

  return (
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
        <div className="mt-8">
          <h3 className="mb-6 text-xl font-semibold uppercase">Experience</h3>
          <div className="flex justify-between max-sm:flex-col">
            <div className="w-[calc(50%_-_1rem)] max-sm:w-full">
              {/* MONA Media */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">MONA Media</h3>
                <p className="italic">
                  Frontend Developer / Aug 2023 – Present
                </p>
                <ul className="pl-3 mt-2 space-y-1 text-sm list-disc list-outside">
                  <li>
                    Lead frontend for 2 e-commerce platforms (Petdays & Phong
                    thuy thien an), handling architecture & UI/UX.
                  </li>
                  <li>
                    Built SEO-optimized UIs with Next.js (App Router, SSR/SSG),
                    React & Tailwind CSS.
                  </li>
                  <li>
                    Integrated GraphQL (CMS) & REST APIs, implemented full VNPAY
                    payment flow.
                  </li>
                  <li>
                    Managed state with Zustand & React Query — optimized caching
                    & background syncing.
                  </li>
                  <li>
                    Enhanced performance with code splitting, lazy loading, and
                    image optimization.
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
            <div className="w-[calc(50%_-_1rem)] max-sm:w-full">
              {/* NAMTECH */}
              <div className="">
                <h3 className="text-lg font-semibold">NAMTECH Solution</h3>
                <p className="italic">
                  Frontend Developer / Aug 2022 – Aug 2023
                </p>
                <ul className="pl-3 mt-2 space-y-1 text-sm list-disc list-outside">
                  <li>
                    Delivered pixel-perfect UIs from Figma using HTML5, SCSS,
                    and vanilla JS.
                  </li>
                  <li>
                    Developed reusable WordPress blocks fetching dynamic content
                    via PHP.
                  </li>
                  <li>
                    Improved SEO with semantic HTML and clean markup structure.
                  </li>
                  <li>
                    Used Git/GitLab for version control and CI/CD deployment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
