import Image from "next/image";
import { SpotlightPreview } from "@/components/spotlight/spotlightPreview";
import logo from "@/assets/lynxPounce.png";

export default function Home() {
  return (
    <>
      <Image
        src={logo}
        alt="brand logo of a lynx cat"
        className="absolute top-0 right-5 z-10"
        width={150}
        height={150}
        priority
      />
      <SpotlightPreview />
    </>
  );
}
