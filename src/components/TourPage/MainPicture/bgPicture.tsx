// PageMain.tsx
import Image from "next/image";
import Overlay from "@/components/LandingPage/MainPicture/Overlay/overlay";
import OverlayText from "./overlayText";

export default function TourPageMain() {
  return (
    <>
      <div className="relative w-full overflow-x-hidden flex flex-col bg-[#1E365C]">
        {/* Dedicated Aspect Ratio Container */}
        <div className="relative w-full aspect-[668/700] sm:aspect-[668/620] md:aspect-[760/600] lg:aspect-[1921/580] xl:aspect-[1921/500]">
          {/* Background Image */}
          <Image
            src="/images/tourPage/tourBackground.png"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />

          <div
            className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.2)_40%,rgba(30,54,92,0.55)_50%,#1E365C_100%)]">
            <OverlayText />
          </div>

        </div>


      </div>
    </>
  );
}
