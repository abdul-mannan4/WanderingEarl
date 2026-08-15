import React from "react";
import Image from "next/image";

type PageHeaderProps = {
  title: string;
  description: string;
  imageSrc: string;
  isextraSpan?: boolean;
  spanData?: string;
};

export default function PageHeader({
  title,
  description,
  imageSrc,
  isextraSpan = false,
  spanData,
}: PageHeaderProps) {
  return (
    <section className="relative w-full overflow-hidden mt-[-2px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1E365C_0%,#1E365C_60%,rgba(30,54,92,0.85)_75%,rgba(30,54,92,0.5)_88%,rgba(30,54,92,0.15)_95%,rgba(30,54,92,0)_100%)] backdrop-blur-[240px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 2xl:px-[80px] pt-10 sm:pt-14 md:pt-16 2xl:pt-[80px] pb-10 sm:pb-14 md:pb-16 2xl:pb-[141px] flex flex-col gap-8 md:gap-12 2xl:gap-[80px]">
        {/* Title & Description: flex-col items-center on medium screens and below (< lg), flex-row on large screens (lg+) */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12 text-center lg:text-left">
          <h2 className="font-black font-inter text-[36px] sm:text-[44px] md:text-[52px] 2xl:text-[64px] text-white shrink-0 lg:max-w-[45%] xl:max-w-[870px] leading-tight 2xl:py-[33.5px]">
            {title}
          </h2>
          <p className="font-inter font-medium text-[16px] sm:text-[18px] md:text-[20px] text-light-gray lg:max-w-[50%] xl:max-w-[870px] leading-relaxed">
            {description}
            {isextraSpan && (
              <>
                <br />
                <br />
                <span>{spanData}</span>
              </>
            )}
          </p>
        </div>

        {/* Responsive Image Container: Aspect ratio changes across breakpoints */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] xl:aspect-[1760/480] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl">
          <Image
            src={imageSrc}
            alt={title}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1760px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}