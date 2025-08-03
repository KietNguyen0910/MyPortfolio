"use client";
import React from "react";
import { TitleCustom } from "../animation/TitleCustom";
import { motion } from "framer-motion";
import Magnet from "../animation/Magnet";
import CircularText from "../animation/CircularText";

const link_social = [
  {
    img: "linked1.png",
    link: "https://www.linkedin.com/in/nguyenvukiet0910",
  },
  {
    img: "fb.png",
    link: "https://www.facebook.com/KietNgyn/",
  },
  {
    img: "tel.png",
    link: "https://www.facebook.com/KietNgyn/",
  },
];

const Contact: React.FC = () => {
  return (
    <section
      className=" relative overflow-hidden sec-pd bg-[#121212]"
      id="contact"
    >
      <div className="container relative z-[2]">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col">
            <TitleCustom className="text-primary" textCenter="center">
              Contact with me
            </TitleCustom>
            <div className="flex flex-col gap-1">
              <p className="mt-4">
                <span className="text-xl font-semibold">Let's connect</span>{" "}
                <br /> You can also find me on
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-3">
                {link_social?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1, // mỗi item delay thêm 0.1s
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Magnet
                      padding={5}
                      magnetStrength={1}
                      wrapperClassName=""
                      innerClassName=""
                    >
                      <a
                        href={item?.link}
                        className="flex items-center justify-center w-10 group duration-300 hover:bg-white h-10 p-3 border border-[rgba(255,255,255,0.2)] border-solid rounded-full"
                      >
                        <img
                          className="object-contain w-4 h-4 transition duration-300 flex-shink-0 filter invert brightness-0 group-hover:invert-0 group-hover:brightness-100"
                          src={item?.img}
                          alt={`mail`}
                          loading="lazy"
                        />
                      </a>
                    </Magnet>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-gray-400">Or reach me directly at:</p>
              <a
                href="mailto:kietngyn.it@gmail.com"
                className="flex items-center gap-2 font-medium duration-300 hover:underline hover:text-[#55e6a5]"
              >
                <img
                  className="object-contain w-4 h-4 flex-shink-0 filter invert brightness-0"
                  src={"/mail.png"}
                  alt={`mail`}
                  loading="lazy"
                />
                kietngyn.it@gmail.com
              </a>
            </div>
          </div>
          {/* <div className="flex">
            <div className="relative z-[1]">
              <img
                className="object-contain filter grayscale"
                src={"person1.png"}
                alt={`ar`}
                loading="lazy"
              />

              <div className="absolute inset-0 z-[-1]">
                <div className="w-full h-full border-radius-ani"></div>
              </div>
            </div>
          </div> */}
          <div className="flex items-end">
            <div className="relative group">
              <img
                className="absolute filter invert brightness-0 object-contain w-6 h-6 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 duration-500 group-hover:scale-[1.35]"
                src={"ar-top.png"}
                alt={`ar`}
                loading="lazy"
              />
              <CircularText
                text="BACKTOTOP*BACKTOTOP*"
                onHover="speedUp"
                spinDuration={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
