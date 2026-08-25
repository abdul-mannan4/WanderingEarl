"use client";
import React, { useEffect, useRef } from "react";

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

  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeButton = buttonRefs.current[activeTab];
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center", // active tab ko horizontally center karega visible area me
      });
    }
  }, [activeTab]);

  return (
    <nav className="rounded-[16px] w-full max-w-[1038px] flex flex-nowrap justify-between bg-white overflow-x-auto shadow-sm scrollbar-hide">
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
            className={`shrink-0 px-[16px] sm:px-[22px] lg:px-[30px] 3xl:px-[39px] font-inter font-semibold uppercase text-[13px] sm:text-[14px] lg:text-[16px] py-[12px] sm:py-[15px] lg:py-[18px] 3xl:py-[20px] cursor-pointer transition-all duration-300 ease-out whitespace-nowrap rounded-[14px] ${
              isActive
                ? "bg-[#1E365C1A] text-primary-navy font-bold shadow-xs"
                : "text-[#8F8F8F] hover:text-text-dark hover:bg-gray-50/80"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}