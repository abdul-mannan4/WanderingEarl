import Image from "next/image";
import OverlayText from "./overlayText";

type PageMainProps = {
  title: string;
  imgSrc: string;
  objectPosition?: string;
  className?: string;
};

export default function PageMain({
  title,
  imgSrc,
  objectPosition = "center 20%",
  className = "",
}: PageMainProps) {
  return (
    <div className={`relative z-10 w-full flex flex-col bg-[#1E365C] ${className}`}>
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[480px] overflow-hidden">
        <Image
          src={imgSrc}
          alt={title || "Background"}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
          priority
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,54,92,0.25)_0%,rgba(30,54,92,0.1)_25%,rgba(30,54,92,0.45)_65%,rgba(30,54,92,0.8)_85%,#1E365C_100%)] flex items-center justify-center">
          <OverlayText title={title} />
        </div>
      </div>
    
      <div className="absolute bottom-0 left-0 h-[100px] sm:h-[150px] lg:h-[270px] translate-y-full  w-full bg-[linear-gradient(180deg,rgba(30,54,92,1)_0%,rgba(30,54,92,0.94)_15%,rgba(30,54,92,0.82)_30%,rgba(30,54,92,0.58)_50%,rgba(30,54,92,0.25)_70%,rgba(30,54,92,0)_100%)]" />
    </div>
  );
}
