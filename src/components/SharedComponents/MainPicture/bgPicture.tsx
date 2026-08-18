// PageMain.tsx
import Image from "next/image";
import Overlay from "@/components/LandingPage/MainPicture/Overlay/overlay";
import OverlayText from "./overlayText";

type PageMain={
  title:string,
  imgSrc:string
}

export default function PageMain({title,imgSrc}:PageMain) {
  return (
    <div className="relative z-10 w-full overflow-hidden flex flex-col bg-[#1E365C] mb-[-3px]">
      {/* Dedicated Aspect Ratio Container */}
      <div className="relative w-full aspect-[668/400] md:aspect-[760/400] lg:aspect-[1921/774] xl:aspect-[1921/472] overflow-hidden">
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
          className="absolute inset-0 top-0 left-0 right-0 h-[calc(100%+6px)] bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.25)_25%,rgba(30,54,92,0.65)_50%,rgba(30,54,92,0.95)_70%,#1E365C_80%,#1E365C_100%)]">
          <OverlayText title={title}/>
        </div>

      </div>

    </div>
  );
}
