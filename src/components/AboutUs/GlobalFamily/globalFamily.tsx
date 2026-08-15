import React from "react";
import Image from "next/image";

export default function GlobalFamilySection() {
  return (
    <section className="relative w-full bg-[#E8532B] overflow-hidden container !px-0">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-stretch min-h-[400px] sm:min-h-[440px] lg:min-h-[460px] xl:min-h-[520px] 2xl:min-h-[580px] ">
        {/* Text Side - Increased text width on md to lg (max-w-[660px]) for balanced horizontal paragraph lines */}
        <div className="relative z-10 w-full lg:max-w-[560px] xl:max-w-[680px] 2xl:max-w-[742px] px-6 sm:px-10 lg:pl-[40px] xl:pl-[80px] lg:pr-6 py-10 sm:py-14 lg:py-16 xl:py-20 flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-4 sm:gap-5 lg:gap-6">
          <h2 className="font-extrabold text-white text-[28px] sm:text-[34px] lg:text-[38px] xl:text-[44px] leading-tight uppercase tracking-tight">
            Our Global Family
          </h2>
          <p className="text-white/90 font-inter text-[15px] sm:text-[16px] xl:text-[18px] leading-relaxed max-w-[440px] md:max-w-[660px] lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[742px]">
            Our team also consists of our incredible travel partners, friends
            and endless local contacts in every country where we operate.
            These wonderful people work extremely hard to help us create and
            run our unique trips. We could not do this without all of them as
            it takes such a dedicated and global team to create our rewarding
            travel experiences!
          </p>
          <div className="pt-2 flex justify-center lg:justify-start">
            <button className="bg-[#0B2545] text-white font-medium text-[14px] sm:text-[15px] xl:text-[16px] px-7 py-3 xl:px-8 xl:py-3.5 rounded-full hover:bg-[#061830] transition-all shadow-md active:scale-95">
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Image Side with Curve */}
        <div className="relative w-full lg:w-[40%] xl:w-[44%] 2xl:w-[1125px] ml-auto shrink-0 min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] xl:min-h-[520px] 2xl:min-h-full">
          <svg className="absolute w-0 h-0" aria-hidden="true">
            <defs>
              <clipPath id="global-family-curve-desktop" clipPathUnits="objectBoundingBox">
                <path d="M 0.25,0.07 C 0.2,0.07 0,0.18 0,0.45 C 0,0.72 0.08,0.8 0.18,1 L 1,1 L 1,0 Z" />
              </clipPath>
              <clipPath id="global-family-curve-mobile" clipPathUnits="objectBoundingBox">
                <path d="M 0,0.18 C 0.2,0.04 0.5,0 1,0.12 L 1,1 L 0,1 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Desktop Curved Image Container */}
          <div
            className="hidden lg:block absolute inset-0 w-full h-full"
            style={{ clipPath: "url(#global-family-curve-desktop)" }}
          >
            <Image
              src="/images/aboutUs/globalFamily.jpg"
              alt="Team hiking together"
              fill
              sizes="(max-width: 1024px) 100vw, 1125px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Mobile/Tablet Image Container (Spans 100% full screen width edge-to-edge) */}
          <div
            className="block lg:hidden absolute inset-0 w-full h-full"
            style={{ clipPath: "url(#global-family-curve-mobile)" }}
          >
            <Image
              src="/images/aboutUs/globalFamily.jpg"
              alt="Team hiking together"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
