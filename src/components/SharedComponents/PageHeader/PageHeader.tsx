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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1E365C_0%,#1E365C_78%,rgba(30,54,92,0.85)_86%,rgba(30,54,92,0.5)_93%,rgba(30,54,92,0.15)_97%,rgba(30,54,92,0)_100%)] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 2xl:px-[80px] pt-8 sm:pt-10 md:pt-12 2xl:pt-[60px] pb-16 sm:pb-20 md:pb-20 lg:pb-14 2xl:pb-[60px] flex flex-col-reverse lg:flex-col gap-6 sm:gap-8 md:gap-10 2xl:gap-[50px]">
        {/* Title & Description: cleanly balanced header layout */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 lg:gap-10 xl:gap-16 text-left">
          <h2 className="font-extrabold font-inter text-[26px] sm:text-[32px] md:text-[38px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] text-white max-w-[650px] 2xl:max-w-[760px] leading-[1.18] sm:leading-[1.14] tracking-[-0.02em]">
            {title}
          </h2>
          <div className="font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] text-white/80 max-w-[540px] 2xl:max-w-[640px] leading-[1.65] lg:pb-1">
            <p>{description}</p>
            {isextraSpan && spanData && (
              <p className="mt-2.5 font-medium text-white/95">{spanData}</p>
            )}
          </div>
        </div>

        {/* Responsive Image Container: Aspect ratio changes across breakpoints */}
        <div className="relative w-full aspect-[16/6] sm:aspect-[21/8] md:aspect-[21/7] lg:aspect-[21/8] xl:aspect-[1760/480] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl">
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