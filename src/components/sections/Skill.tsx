"use client";
import React from "react";
import { TitleCustom } from "../animation/TitleCustom";
import Aurora from "../animation/Aurora";
import { motion } from "framer-motion";

const data = [
  {
    img: "nextjs.webp",
    title: "Next.js",
  },
  {
    img: "react.png",
    title: "React.js",
  },
  {
    img: "ts.png",
    title: "TypeScript",
  },
  {
    img: "html.png",
    title: "HTML 5",
  },
  {
    img: "grap.webp",
    title: "GraphQL",
  },
  {
    img: "tailwind.svg",
    title: "Tailwind",
  },
  {
    img: "scss.png",
    title: "SCSS",
  },
  {
    img: "mui.png",
    title: "Material UI",
  },
  {
    img: "antd.svg",
    title: "Ant Design",
  },
];

const Skill: React.FC = () => {
  return (
    <section className="relative overflow-hidden skill sec-pd" id="skill">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <TitleCustom className="text-primary" textCenter="center">
            Skill
          </TitleCustom>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 max-w-[50rem] text-center"
          >
            Frontend dev fluent in React, Next.js & GraphQL — blending
            performance, animation, and pixel-perfect UI into every build.
          </motion.div>
        </div>
        <div className="flex gap-[2rem] max-sm:gap-[1.2rem] flex-wrap mt-4">
          {data?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1, // mỗi item delay thêm 0.1s
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-[calc(100%/3-2rem)] max-md:w-[calc(100%/2-1rem)] max-sm:w-[calc(100%/2-0.6rem)]"
            >
              <SkillItem item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item?: any;
};
const SkillItem = ({ item }: Props) => {
  return (
    <div className="relative border border-[rgba(255,255,255,0.1)] border-solid group">
      <div className="relative flex flex-col p-4 overflow-hidden">
        <div className="absolute inset-0 w-[120%] duration-300 opacity-20 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[0]">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        <div className="flex flex-col items-center gap-2 max-md:px-3 max-md:py-3 max-sm:px-0 px-10 py-6 rounded-2xl backdrop-blur-2xl z-[5]">
          <p className="text-2xl font-semibold text-center max-sm:text-lg">{item?.title}</p>
          <img
            className="object-contain h-10 max-sm:h-6 filter invert brightness-0"
            src={item?.img}
            alt={`skill`}
            loading="lazy"
          />
        </div>
      </div>

      <img
        className="absolute top-0 left-0 z-[1] w-4 object-contain -translate-1/2"
        src={"/plus.png"}
        alt={`plus`}
        loading="lazy"
      />
      <img
        className="absolute top-0 left-[100%] z-[1] w-4 object-contain -translate-1/2"
        src={"/plus.png"}
        alt={`plus`}
        loading="lazy"
      />
      <img
        className="absolute top-[100%] left-[100%] z-[1] w-4 object-contain -translate-1/2"
        src={"/plus.png"}
        alt={`plus`}
        loading="lazy"
      />
      <img
        className="absolute top-[100%] left-0 z-[1] w-4 object-contain -translate-1/2"
        src={"/plus.png"}
        alt={`plus`}
        loading="lazy"
      />
    </div>
  );
};

export default Skill;
