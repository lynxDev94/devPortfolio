import React from "react";
import Image from "next/image";
import { HeroParallax } from "@/components/hero-projects/hero-parallax";
import LynxBlack from "@/assets/lynxBlack.png";
import Link from "next/link";

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
];

function Projects() {
  return (
    <>
      <Link href="/">
        <Image
          src={LynxBlack}
          alt="brand logo of a lynx cat"
          className="fixed top-0 right-5 z-10"
          width={150}
          height={150}
          priority
        />
      </Link>
      <HeroParallax products={products} />
    </>
  );
}

export default Projects;
