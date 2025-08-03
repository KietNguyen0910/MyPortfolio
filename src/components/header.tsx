"use client";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import SidebarMenu from "./common/MenuMobile";

const sections = [
  { id: "banner", label: "Banner" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skill", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [activeId, setActiveId] = useState("");
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const [isOpenSidebarMenu, setIsOpenSidebarMenu] = useState(false);

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.6 }
    );

    const targets = document.querySelectorAll("section[id]");
    targets.forEach((sec) => observer.observe(sec));

    return () => targets.forEach((sec) => observer.unobserve(sec));
  }, []);

  // Move Indicator
  useEffect(() => {
    const activeLink = linkRefs.current[activeId];
    const indicator = indicatorRef.current;

    if (activeLink && indicator) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.parentElement!.getBoundingClientRect();
      setAnimate(true);
      indicator.style.left = `${rect.left - parentRect.left}px`;
      indicator.style.width = `${rect.width}px`;
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [activeId]);

  return (
    <>
      <header className="sticky top-0 z-50 hd">
        <div className="container px-4 mx-auto">
          <div className="hd-inner py-[.8rem] flex items-center justify-between">
            <div className="flex items-center">
              <span className="fw-7 text-[2rem] text-[#55e6a5] mr-2 leading-none">V</span>
              <span className="fw-7 text-white text-[1.2rem] leading-none">VUKIET</span>
            </div>

            <div
              className={`md:!hidden ${isOpenSidebarMenu ? "open" : ""}`}
              id="nav-icon3"
              onClick={() => setIsOpenSidebarMenu(!isOpenSidebarMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <nav className="relative flex items-center menu-list max-md:hidden">
              {/* Indicator */}
              <div
                ref={indicatorRef}
                className={clsx(
                  "absolute bottom-0 h-full z-[-1] bg-[#55e6a5] rounded-[0.8rem] transition-all duration-300 ease-in-out",
                  {
                    "scale-70 blur-[3px]": animate, // 👈 hiệu ứng khi di chuyển
                  }
                )}
              />
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  ref={(el) => void (linkRefs.current[item.id] = el)}
                  className={clsx(
                    "menu-item relative px-[1rem] z-[1] py-[.5rem] text-sm text-white hover:text-[#55e6a5] transition-colors",
                    {
                      "!text-[#3a3a3a]": activeId === item.id,
                    }
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <SidebarMenu
        activeId={activeId}
        data={sections}
        open={isOpenSidebarMenu}
        onClose={() => setIsOpenSidebarMenu(false)}
      />
    </>
  );
};

export default Header;
