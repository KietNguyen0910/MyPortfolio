/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { Drawer } from "@mui/material";
import clsx from "clsx";

interface SidebarMenuProps {
  open: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  activeId: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  open,
  onClose,
  data,
  activeId,
}) => {
  const slideVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: easeOut,
      },
    }),
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 380,
          maxWidth: "90vw",
          background: "rgba(0, 0, 0, 0.6)",
          // backdropFilter: "blur(20px)",
          boxShadow: "none",
          border: "none",
        },
        "& .MuiBackdrop-root": {
          backdropFilter: "blur(4px)",
        },
      }}
    >
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "tween", duration: 0.3 }}
        className="flex flex-col h-full"
      >
        {/* Menu Content */}
        <div className="flex-1 overflow-auto">
          <div className="px-4 py-6">
            <AnimatePresence>
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {data.map((item: { name: React.Key | null | undefined; id: boolean | React.Key | null | undefined; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: unknown) => (
                <motion.div
                  key={item.name}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  className="mb-2"
                >
                  <a
                    key={String(item.id)}
                    href={`#${item.id}`}
                    onClick={onClose}
                    className={clsx(
                      "menu-item relative px-[1rem] rounded-lg z-[1] py-[0.5rem] flex text-lg uppercase transition-colors",
                      activeId === item.id
                        ? "bg-[#55e6a5] !text-black"
                        : "!text-white"
                    )}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Drawer>
  );
};

export default SidebarMenu;
