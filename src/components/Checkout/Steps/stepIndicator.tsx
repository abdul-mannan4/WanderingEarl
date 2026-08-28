"use client";

import React, { useEffect, useRef, useState } from "react";

type StepIndicatorProps = {
  currentStep: 1 | 2 | 3;
  onStepChange: (step: 1 | 2 | 3) => void;
};

export default function StepIndicator({
  currentStep,
  onStepChange,
}: StepIndicatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Record<number, HTMLElement | null>>({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  useEffect(() => {
    const currentEl = stepRefs.current[currentStep];
    if (currentEl && containerRef.current) {
      currentEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    const timer = setTimeout(checkScroll, 350);
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="relative w-full overflow-hidden rounded-[16px] border border-light-gray shadow-[0px_16px_24px_-24px_#0000000F] bg-white">
      {/* Left scroll shadow indicator */}
      <div
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-r from-white via-white/80 to-transparent z-10 transition-opacity duration-300 ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Right scroll shadow indicator */}
      <div
        className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-l from-white via-white/80 to-transparent z-10 transition-opacity duration-300 ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Scrollable Step Items Container */}
      <div
        ref={containerRef}
        onScroll={checkScroll}
        className="w-full flex items-center justify-between p-[16px] sm:p-[20px] 2xl:p-[24px] gap-[16px] sm:gap-[20px] overflow-x-auto scrollbar-hide scroll-smooth min-w-0"
      >
        {/* Step 1: Customer Details */}
        <button
          ref={(el) => {
            stepRefs.current[1] = el;
          }}
          type="button"
          onClick={() => onStepChange(1)}
          className="flex items-center gap-2 sm:gap-[12px] 2xl:gap-[16px] transition-colors cursor-pointer select-none shrink-0"
        >
          <span
            className={`w-6 h-6 sm:w-7 sm:h-7 2xl:w-[30px] 2xl:h-[30px] rounded-full flex items-center justify-center text-[12px] sm:text-[14px] 2xl:text-[16px] font-bold shrink-0 transition-colors ${
              currentStep > 1
                ? "bg-[#1AA903] text-white"
                : currentStep === 1
                ? "bg-[#1E365C] text-white"
                : "border border-[#A0AEC0] text-[#A0AEC0] bg-transparent"
            }`}
          >
            1
          </span>
          <span
            className={`uppercase whitespace-nowrap transition-colors text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] font-semibold ${
              currentStep > 1
                ? "text-[#1AA903]"
                : currentStep === 1
                ? "text-text-dark"
                : "text-[#A0AEC0]"
            }`}
          >
            CUSTOMER DETAILS
          </span>
        </button>

        {/* Connecting Divider 1 */}
        <div
          className={`h-[1px] min-w-[30px] w-full max-w-[102px] shrink-1 transition-colors ${
            currentStep > 1 ? "bg-[#1AA903]" : "bg-light-gray"
          }`}
        />

        {/* Step 2: Payment Information */}
        <button
          ref={(el) => {
            stepRefs.current[2] = el;
          }}
          type="button"
          onClick={() => onStepChange(2)}
          className="flex items-center gap-2 sm:gap-[12px] 2xl:gap-[16px] transition-colors cursor-pointer select-none shrink-0"
        >
          <span
            className={`w-6 h-6 sm:w-7 sm:h-7 2xl:w-[30px] 2xl:h-[30px] rounded-full flex items-center justify-center text-[12px] sm:text-[14px] 2xl:text-[16px] font-bold shrink-0 transition-colors ${
              currentStep > 2
                ? "bg-[#1AA903] text-white"
                : currentStep === 2
                ? "bg-[#1E365C] text-white"
                : "border border-[#A0AEC0] text-[#A0AEC0] bg-transparent"
            }`}
          >
            2
          </span>
          <span
            className={`uppercase font-semibold whitespace-nowrap text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] transition-colors ${
              currentStep > 2
                ? "text-[#1AA903]"
                : currentStep === 2
                ? "text-[#1E365C]"
                : "text-[#A0AEC0]"
            }`}
          >
            PAYMENT INFORMATION
          </span>
        </button>

        {/* Connecting Divider 2 */}
        <div
          className={`h-[1px] min-w-[30px] w-full max-w-[102px] shrink-1 transition-colors ${
            currentStep > 2 ? "bg-[#1AA903]" : "bg-light-gray"
          }`}
        />

        {/* Step 3: Done */}
        <div
          ref={(el) => {
            stepRefs.current[3] = el;
          }}
          className="flex items-center gap-2 sm:gap-[12px] 2xl:gap-[16px] transition-colors cursor-pointer select-none shrink-0"
        >
          <span
            className={`w-6 h-6 sm:w-7 sm:h-7 2xl:w-[30px] 2xl:h-[30px] rounded-full flex items-center justify-center text-[12px] sm:text-[14px] 2xl:text-[16px] font-bold shrink-0 transition-colors ${
              currentStep === 3
                ? "bg-[#1E365C] text-white"
                : "border border-[#A0AEC0] text-[#A0AEC0] bg-transparent"
            }`}
          >
            3
          </span>
          <span
            className={`uppercase font-semibold whitespace-nowrap text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] transition-colors ${
              currentStep === 3 ? "text-[#1E365C]" : "text-[#A0AEC0]"
            }`}
          >
            DONE
          </span>
        </div>
      </div>
    </div>
  );
}
