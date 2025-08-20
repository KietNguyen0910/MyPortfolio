"use client";
import { useEffect, useState } from "react";
import TextType from "./TextType";
import Spline from "@splinetool/react-spline";
import Galaxy from "./Galaxy";

export function LoadingScreenEffect() {
  const [show, setShow] = useState(true);
  const [hidden, setHidden] = useState(false);

  const handleClose = () => {
    setHidden(true);
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9998] flex items-center justify-center bg-black overflow-hidden ${
        hidden ? "fade-out" : ""
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none z-[-2] ${
          hidden ? "star-warp" : ""
        }`}
        id="loading-screen-5"
      >
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1}
          glowIntensity={0.1}
          saturation={0}
          hueShift={10}
          starSpeed={0.01}
          speed={0.01}
        />
        {/* <FlyBird colorBird={"white"} classCustom={"z-[999]"} /> */}
      </div>

      <div className="flex flex-col justify-center container-mobile">
        <div
          className={`w-full spline-container ${hidden ? "robot-zoom" : ""}`}
        >
          <Spline scene="https://prod.spline.design/K2JCbEP3ODx8kyIf/scene.splinecode" />
        </div>

        <div className="md:absolute md:left-[50%] md:top-[30%] max-md:mt-auto">
          <div
            className={`l-logo text-center max-md:flex max-md:flex-col max-md:items-center relative z-10  ${
              hidden ? "fade-out-bck" : ""
            }`}
          >
            <div className="text-[3vw] max-md:text-[4.5vw] font-medium uppercase">
              <TextType
                text={["Welcome to my Portfolio!"]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
            <button
              type="button"
              className="flex items-center justify-center px-6 py-3 mt-2 font-medium duration-300 border border-white cursor-pointer rounded-xl w-fit click-btn btn-style900"
              data-hover="Click me!"
              onClick={handleClose}
            >
              Visit my Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
