"use client";

import React, { useState } from "react";
import PageMain from "@/components/SharedComponents/MainPicture/bgPicture";
import Cart from "@/components/Cart/cart";
import UserLogo from "@/components/SharedComponents/TourSection/TourCard/userLogo";
import CalendarLogo from "@/components/SharedComponents/TourSection/TourCard/CalendarLogo";
import LocationLogo from "@/components/SharedComponents/TourSection/TourCard/LocationSvg";
import { Tour } from "../data/type";
import TourPageNav from "./TourPageNav/tourPageNav";
import Gallery from "./NavLinks/Gallery/gallery";
import Details from "./NavLinks/Details/details";
import Itinerary from "./NavLinks/Itinerary/itinerary";
import Map from "./NavLinks/Map/map";
import TourEssential from "./NavLinks/TourEssentials/tourEssential";
import WhatsIncluded from "./NavLinks/WhatIncluded/whatsIncluded";
import TourSection from "../SharedComponents/TourSection/tourSection";
import { relatedTours } from "../data/relatedTours";

type TourDetailPageProps = {
  tour: Tour;
};

export default function TourDetailPage({ tour }: TourDetailPageProps) {
  const [activeTab, setActiveTab] = useState("details");

  const highlights = [
    {
      icon: "🍲",
      text: "Spoil yourself with the delicious cuisine and rich local flavors.",
    },
    {
      icon: "🏪",
      text: "Dive deep into the incredible food and culture markets.",
    },
  ];

  return (
    <div className="relative">
      <PageMain
        title={tour.title}
        imgSrc="/images/tourDetail/bgPicture.png"
        objectPosition="center 50%"
      />

      

      <div className=" relative z-10 mt-[100px] sm:mt-[150px] lg:mt-[200px] flex flex-row justify-center container !px-0 gap-[129px] items-start">
        <div className="w-[1038px]">
          <TourPageNav activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Active section displays here with smooth animation */}
          <div key={activeTab} className="animate-fade-in mt-4">
            {activeTab === "details" && <Details />}
            {activeTab === "gallery" && <Gallery />}
            {activeTab === "map" && <Map />}
            {activeTab === "itinerary" && <Itinerary />}
            {activeTab === "tour-essentials" && <TourEssential />}
            {activeTab === "whats-included" && <WhatsIncluded />}
          </div>
        </div>

        <Cart />
      </div>

        <div className="my-[40px] md:my-[52px] lg:my-[80px] 2xl:mt-[150px] 2xl:mb-[150px]">

        <TourSection title="RELATED TOURS" tours={relatedTours} allTourBtn={true} showGradient={false}  gridCols = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"/>
        </div>
    </div>
  );
}

