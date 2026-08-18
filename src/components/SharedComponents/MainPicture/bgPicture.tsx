// PageMain.tsx
import Image from "next/image";
import Overlay from "@/components/LandingPage/MainPicture/Overlay/overlay";
import OverlayText from "./overlayText";

type PageMain = {
  title: string,
  imgSrc: string
}

export default function PageMain({ title, imgSrc }: PageMain) {
  return (
    <>
      <div className="relative w-full overflow-x-hidden flex flex-col bg-[#1E365C]">
        {/* Dedicated Aspect Ratio Container */}
        <div className="relative w-full aspect-[668/700] md:aspect-[760/400] lg:aspect-[1921/774] xl:aspect-[1921/472] overflow-hidden">
          {/* Background Image */}
          <Image
            src={imgSrc}
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />

          <div
            className="absolute inset-0 bottom-[-2px] w-full h-[calc(100%+3px)] bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.25)_30%,rgba(30,54,92,0.65)_55%,rgba(30,54,92,0.95)_75%,#1E365C_85%,#1E365C_100%)]">
            <OverlayText title={title} />
          </div>

        </div>

      </div>
    </>
  );
}
