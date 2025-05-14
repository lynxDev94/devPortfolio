import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-black text-white border-t border-gray-400/15 z-50">
      <ul className="grid grid-cols-5 h-[100px] items-center text-center">
        <li className="border-r-1 h-full flex items-center border-gray-400/15 justify-center"><Link href="/">Home</Link></li>
        <li className="border-r-1 h-full flex items-center border-gray-400/15 justify-center">Blog</li>
        <li className="h-full flex items-center justify-center"><Link href="/">Contact</Link></li>
        <li className="col-span-2 h-[100px] flex items-center justify-center bg-gradient-to-r from-[#2A7B9B] to-[#51BD88]">
          <Link href="/projects">All Works</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
