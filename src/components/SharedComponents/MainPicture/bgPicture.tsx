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
    <div className="relative z-10 w-full overflow-hidden flex flex-col bg-[#1E365C]">
      <div className="relative w-full aspect-[668/700] sm:aspect-[668/620] md:aspect-[760/600] lg:aspect-[1921/484] xl:aspect-[1921/500]">
        <Image
          src={imgSrc}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.1)_30%,rgba(30,54,92,0.25)_45%,rgba(30,54,92,0.45)_55%,rgba(30,54,92,0.75)_70%,rgba(30,54,92,1)_100%)]">
          <OverlayText title={title}/>
        </div>
      </div>
    </div>
  );
}
