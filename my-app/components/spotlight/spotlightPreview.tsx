import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./spotlight";

export function SpotlightPreview() {
  return (
    <div className="relative flex h-[40rem] w-full h-screen overflow-hidden rounded-md bg-black antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] z-10"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-[#2A7B9B] to-[#51BD88] bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Richie Stan.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-3xl font-normal text-neutral-300">
          Welcome to my personal portfolio.
        </p>
      </div>
    </div>
  );
}
