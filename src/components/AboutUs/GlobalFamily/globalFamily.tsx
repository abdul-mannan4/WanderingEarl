import React from "react";
import Image from "next/image";

export default function GlobalFamilySection() {
  return (
    <section className="relative w-full bg-[#E8532B] overflow-hidden container !px-0">
      {/* SVG Clip Paths for Desktop & Mobile Curves matching Figma */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* Desktop Curve: Starts at X=0.45 Y=0.07, curves left to X=0 Y=0.45, sweeps to X=0.18 Y=1 */}
          <clipPath id="global-family-curve-desktop" clipPathUnits="objectBoundingBox">
            <path d="M 0.45,0.07 C 0.30,0.07 0,0.18 0,0.45 C 0,0.72 0.08,0.85 0.18,1 L 1,1 L 1,0 Z" />
          </clipPath>
          {/* Mobile Curve: Top straight, bottom arch transitioning into red section */}
          <clipPath id="global-family-curve-mobile" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.85 C 0.75,1 0.25,1 0,0.85 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-between min-h-[440px] sm:min-h-[480px] lg:h-[480px] xl:h-[540px] 2xl:h-[580px]">
        {/* Text Side - Left Aligned */}
        <div className="relative z-10 w-full lg:w-[50%] xl:w-[48%] 2xl:max-w-[742px] px-6 sm:px-10 lg:pl-[40px] xl:pl-[80px] lg:pr-6 py-6 sm:py-14 lg:py-16 xl:py-20 flex flex-col items-start text-left justify-center gap-4 sm:gap-5 lg:gap-6">
          <h2 className="font-extrabold text-white text-[24px] sm:text-[34px] lg:text-[38px] xl:text-[44px] leading-tight uppercase tracking-tight text-left">
            Our Global Family
          </h2>
          <p className="text-white/90 font-inter text-[14px] sm:text-[16px] xl:text-[18px] leading-relaxed max-w-full lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[742px] text-left">
            Our team also consists of our incredible travel partners, friends
            and endless local contacts in every country where we operate.
            These wonderful people work extremely hard to help us create and
            run our unique trips. We could not do this without all of them as
            it takes such a dedicated and global team to create our rewarding
            travel experiences!
          </p>
          <div className="flex justify-start items-start w-full">
            <button className="bg-[#0B2545] text-white font-medium text-[14px] sm:text-[15px] xl:text-[16px] px-7 py-3 xl:px-8 xl:py-3.5 rounded-full hover:bg-[#061830] transition-all shadow-md active:scale-95 text-left">
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Image Side */}
        {/* Desktop View (lg and above): Right side 1125px with Figma Desktop Curve */}
        <div className="hidden lg:block relative w-full lg:w-[50%] xl:w-[52%] 2xl:w-[1125px] ml-auto shrink-0 h-full">
          <div
            className="w-full h-full relative"
            style={{ clipPath: "url(#global-family-curve-desktop)" }}
          >
            <Image
              src="/images/aboutUs/globalFamily.jpg"
              alt="Team hiking together"
              fill
              sizes="(max-width: 1024px) 100vw, 1125px"
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Mobile View (< lg): Top Image with Mobile Curve */}
        <div className="block lg:hidden relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[260px] sm:min-h-[340px] shrink-0">
          <div
            className="w-full h-full relative"
            
          >
            <Image
              src="/images/aboutUs/globalFamily.jpg"
              alt="Team hiking together"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
