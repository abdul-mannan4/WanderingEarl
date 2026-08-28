"use client";
import React, { useEffect, useRef, useState } from "react";

type TourPageNavProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function TourPageNav({ activeTab, setActiveTab }: TourPageNavProps) {
  const navLinks = [
    { label: "Details", link: "details" },
    { label: "Gallery", link: "gallery" },
    { label: "Map", link: "map" },
    { label: "Itinerary", link: "itinerary" },
    { label: "Tour Essentials", link: "tour-essentials" },
    { label: "What's Included", link: "whats-included" },
  ];

  const navRef = useRef<HTMLElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
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
    const activeButton = buttonRefs.current[activeTab];
    if (activeButton && navRef.current) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    const timer = setTimeout(checkScroll, 350);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="relative !px-0 -mx-[20px] max-[350px]:-mx-[12px] md:-mx-[32px] lg:-mx-[40px] xl:mx-0 w-[calc(100%+40px)] max-[350px]:w-[calc(100%+24px)] md:w-[calc(100%+64px)] lg:w-[calc(100%+80px)] xl:w-full xl:max-w-[1038px] min-[1920px]:w-[1038px] overflow-hidden rounded-[12px] sm:rounded-[14px] xl:rounded-[16px] border border-light-gray shadow-[0px_16px_24px_-24px_#0000000F] bg-white">
      {/* Left scroll shadow indicator (hidden on xl+ where nav is complete) */}
      <div
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-r from-white via-white/80 to-transparent z-10 transition-opacity duration-300 xl:hidden ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Right scroll shadow indicator (hidden on xl+ where nav is complete) */}
      <div
        className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-l from-white via-white/80 to-transparent z-10 transition-opacity duration-300 xl:hidden ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav
        ref={navRef}
        onScroll={checkScroll}
        className="w-full h-[52px] sm:h-[56px] 3xl:h-[59px] flex flex-nowrap items-stretch justify-between bg-white overflow-x-auto scrollbar-hide scroll-smooth min-w-0"
      >
        {navLinks.map((item, index) => {
          const isActive = activeTab === item.link;

          return (
            <button
              key={index}
              ref={(el) => {
                buttonRefs.current[item.link] = el;
              }}
              type="button"
              onClick={() => setActiveTab(item.link)}
              className={`shrink-0 xl:flex-1 flex items-center justify-center h-full px-[16px] sm:px-[20px] lg:px-[24px] 3xl:px-[30px] py-0 font-inter font-semibold uppercase text-[13px] sm:text-[14px] lg:text-[15px] 3xl:text-[16px] leading-none cursor-pointer transition-colors duration-200 whitespace-nowrap select-none rounded-[12px] sm:rounded-[14px] 2xl:rounded-[16px] ${
                isActive
                  ? "bg-[#1E365C1A] text-primary-navy font-bold"
                  : "text-[#8F8F8F] hover:text-text-dark hover:bg-gray-50/80"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}