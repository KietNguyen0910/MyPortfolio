"use client";
import { useEffect, useState } from "react";
import FlyBird from "./FlyBird";
import Silk from "./Silk";
import TextType from "./TextType";

export function LoadingScreenEffect() {
  const [show, setShow] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hiddenTimeout = setTimeout(() => {
      setHidden(true);
    }, 3000);

    const timeout = setTimeout(() => {
      setShow(false);
    }, 5000);

    const elements = document.querySelectorAll(".add-active");
    elements.forEach((el) => el.classList.add("active"));

    return () => {
      clearTimeout(hiddenTimeout);
      clearTimeout(timeout);
      elements.forEach((el) => el.classList.remove("active"));
    };
  }, []);

  // không cho scoll khi đang loading
  useEffect(() => {
    const prevent = (e: any) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    };

    window.addEventListener("wheel", prevent, {
      passive: false,
      capture: true,
    });
    window.addEventListener("touchmove", prevent, {
      passive: false,
      capture: true,
    });
    window.addEventListener("keydown", prevent, true);

    const t = setTimeout(() => {
      window.removeEventListener("wheel", prevent, { capture: true });
      window.removeEventListener("touchmove", prevent, { capture: true });
      window.removeEventListener("keydown", prevent, true);
    }, 4000);

    return () => {
      clearTimeout(t);
      window.removeEventListener("wheel", prevent, { capture: true });
      window.removeEventListener("touchmove", prevent, { capture: true });
      window.removeEventListener("keydown", prevent, true);
    };
  }, []);

  //   if (!show) return null

  return (
    <div
      className={`fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden`}
    >
      <div
        className={`absolute inset-0 z-[-2] bg-white ${
          hidden ? "bg-is-hidden-3" : ""
        }`}
        id="loading-screen-3"
      >
        <FlyBird colorBird={"primary"} classCustom={"z-[999]"} />
        <Silk
          speed={6}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className={`l-logo relative z-10  ${hidden ? "fade-out-bck" : ""}`}>
        <div className="text-[4.5vw] font-medium uppercase">
          <TextType
            text={["Welcome to my Portfolio!"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>
    </div>
  );
}
