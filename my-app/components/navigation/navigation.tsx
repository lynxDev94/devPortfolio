// components/navigation/navigation.tsx
"use client";
import React from "react";
import { useDrawer } from "@/context/DrawerContext";

export default function Navigation() {
  const { isOpen, setIsOpen } = useDrawer();
  const handleIsOpen = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <nav className="fixed bottom-0 w-full bg-black text-white border-t border-gray-400/15 z-50">
      <ul className="grid grid-cols-5 h-[100px] items-center text-center">
        <li className="border-r h-full flex items-center justify-center border-gray-400/15 cursor-pointer">
          <button onClick={() => setIsOpen(false)}>Home</button>
        </li>
        <li className="border-r h-full flex items-center justify-center border-gray-400/15">
          <button onClick={() => setIsOpen(false)}>Blog</button>
        </li>
        <li className="h-full flex items-center justify-center">
          <button onClick={() => setIsOpen(false)}>Contact</button>
        </li>
        <li className="col-span-2 h-[100px] flex items-center justify-center bg-gradient-to-r from-[#2A7B9B] to-[#51BD88]">
          <button onClick={handleIsOpen}>
            {isOpen ? "Close Projects" : "All Works"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
