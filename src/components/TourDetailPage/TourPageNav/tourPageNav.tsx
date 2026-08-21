"use client";
import React from "react";

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

  return (
    <nav className="rounded-[16px] w-full max-w-[1038px] flex justify-between bg-white overflow-x-auto shadow-sm">
      {navLinks.map((item, index) => {
        const isActive = activeTab === item.link;

        return (
          <button
            key={index}
            type="button"
            onClick={() => setActiveTab(item.link)}
            className={`px-[24px] lg:px-[39px] font-inter font-semibold uppercase text-[14px] lg:text-[16px] py-[16px] lg:py-[20px] cursor-pointer transition-all duration-300 ease-out whitespace-nowrap rounded-[14px] ${isActive
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

