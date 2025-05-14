import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className=" fixed bottom-0 text-lg  bg-black text-white border-t-1  border-gray-400/15  z-50 w-full">
      <ul className="flex h-[100px] items-center text-center">
        <li className="w-[20%]">About</li>
        <li className="w-[20%]">Blog</li>
        <li className="w-[20%]">Contact</li>
        <li className="w-[40%] h-[100px] flex items-center justify-center z-50 bg-gradient-to-r from-[#2A7B9B] to-[#51BD88] ">
          <Link href="/projects">All Works</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
