import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className=" fixed bottom-0 pl-[130px]  text-lg  bg-black text-white border-t-1  border-gray-400/15  z-50 w-full">
      <ul className="flex h-[100px] items-center justify-between">
        <li>About</li>
        <li>Blog</li>
        <li className="mr-[70px]">Contact</li>
        <li className=" w-[30%] h-[100px] flex items-center justify-center z-50 bg-gradient-to-r from-[#2A7B9B] to-[#51BD88] ">
          <Link href="/projects">All Works</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
