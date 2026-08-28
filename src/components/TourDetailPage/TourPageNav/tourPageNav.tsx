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
    <div className="relative w-full overflow-hidden rounded-[16px] border border-light-gray shadow-[0px_16px_24px_-24px_#0000000F] bg-white xl:max-w-[1038px]">
      {/* Left scroll shadow indicator */}
      <div
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 transition-opacity duration-300 ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Right scroll shadow indicator */}
      <div
        className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 transition-opacity duration-300 ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav
        ref={navRef}
        onScroll={checkScroll}
        className="w-full flex flex-nowrap items-stretch justify-between bg-white overflow-x-auto scrollbar-hide scroll-smooth min-w-0"
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
              className={`shrink-0 flex items-center justify-center px-[20px] sm:px-[26px] lg:px-[32px] 3xl:px-[40px] py-[16px] sm:py-[20px] 2xl:py-[24px] font-inter font-semibold uppercase text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] cursor-pointer transition-all duration-300 whitespace-nowrap select-none ${
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
