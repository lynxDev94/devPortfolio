"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { useDrawer } from "@/context/DrawerContext";
import image from "@/assets/lynxBlack.png";
import Image from "next/image";

export function Hero() {
  const { isOpen, setIsOpen } = useDrawer();
  const handleOpenDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-black">
      <motion.div
        className="relative z-10 bg-black text-white p-8 w-full flex justiy-center items-center"
        initial={{ width: "100%" }}
        animate={{ width: isOpen ? "50%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Spotlight className="-top-40 md:-30 lg:-top-40 left-0 md:left-20" />

        <div className="mx-auto max-w-7xl">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
            words="Richie Stan."
          />
          <p className="mt-4 text-center text-3xl text-neutral-300">
            Front-End Developer.
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed top-0 right-0 h-screen bg-white pl-8 border-b-1 pt-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ width: "50%" }}
          >
            <button
              onClick={handleOpenDrawer}
              className="mb-6 px-4 py-2 bg-gray-200 rounded ml-2"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">My Projects</h2>
            <ul className="flex flex-col justify-between">
              <li>
                <div className="h-[100px] border-b-1 border-gray-400/15 grid grid-cols-4">
                  <Image src={image} alt="test" className="col-span-1" width={74} height={74} />
                  <h3>Some Project</h3>
                </div>
              </li>
              <li>
                <div className="h-[100px] border-b-1 border-gray-400/15">
                  Test
                </div>
              </li>
              <li>
                <div className="h-[100px] border-b-1 border-gray-400/15">
                  Test
                </div>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
