/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import React from "react";
import TextType from "../animation/TextType";
import RotatingWords from "../animation/RotatingText";
import Folder from "../animation/Folder";
import Particles from "../animation/Particles";
import ProfileCard from "../animation/ProfileCard";
import ScrollVelocity from "../animation/ScrollVelocity";

const Banner: React.FC = () => {
  return (
    <>
      <section
        className="relative overflow-hidden banner sec-pd z-[1] bg-[#121212]"
        id="banner"
      >
        <div className="absolute inset-[0] ">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={150}
            particleSpread={10}
            speed={0.08}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="container">
          <div className="flex max-sm:flex-col max-sm:gap-20">
            <div className="flex flex-col gap-3 w-[45%] max-sm:w-full">
              <div className="">
                <h1 className="text-5xl font-bold uppercase max-sm:text-4xl">
                  Hi, i'm Vu Kiet <br /> creative
                </h1>
                <RotatingWords />
              </div>

              <div className="text-2xl font-medium">
                <TextType
                  text={[
                    "Text typing effect",
                    "For your websites",
                    "Happy coding!",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>

              <p>
                I'm a Front-end Developer passionate about crafting modern,
                responsive, and user-friendly web interfaces.
              </p>
              <div className="flex items-center gap-2 mt-4 font-semibold ">
                <Folder size={2} color="#5227FF" className="custom-folder" />
              </div>
            </div>
            <div className="flex items-center justify-center flex-1">
              <ProfileCard
                name="Nguyen Vu Kiet"
                title="Frontend Developer"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/person1.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="py-4 bg-[#121212]">
        <ScrollVelocity
          texts={["Frontend Developer", "Scroll Down"]}
          className="custom-scroll-text"
          velocity={30}
        />
      </div>
    </>
  );
};

export default Banner;
