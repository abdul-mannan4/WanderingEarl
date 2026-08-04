// PageMain.tsx
import Image from "next/image";
import Navbar from "../../Navbar/navbar";

import StorySection from "../StorySection/page";
import Overlay from "./Overlay/overlay";
import TourSection from "../TourSection/page";
export default function PageMain() {
  return (
    <div className="relative w-full overflow-x-hidden flex flex-col">

      {/* Figma Aspect Ratio Container */}
      <div className="relative w-full max-[350px]:h-[50vh] max-[350px]:min-h-[50vh] max-[350px]:aspect-auto aspect-[668/500] sm:aspect-[668/540] md:aspect-[760/600] lg:aspect-[1921/980] xl:aspect-[1921/780]">

        {/* Background Image */}
        <Image
          src="/images/backgroundPic.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />

        <Overlay />


        {/* 1. Navbar Flow */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar variant="transparent" />
        </div>


      </div>

      {/* Next Section */}


    </div>
  );
}