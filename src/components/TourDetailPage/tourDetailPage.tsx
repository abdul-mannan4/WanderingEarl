"use client";

import React, { useState } from "react";
import PageMain from "@/components/SharedComponents/MainPicture/bgPicture";
import Cart from "@/components/DetailCart/cart";
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



      <div className="relative z-10 mt-[40px] sm:mt-[60px] md:mt-[80px] lg:mt-[120px] 2xl:mt-[200px] flex flex-col xl:flex-row 
      justify-center xl:justify-between items-center xl:items-start container 2xl:!px-[80px]  gap-[24px] md:gap-[36px] lg:gap-[48px] xl:gap-[48px] 3xl:gap-[129px]">
        <div className="w-full flex-1 max-w-full xl:max-w-[1038px] min-w-0">
          <TourPageNav activeTab={activeTab} setActiveTab={setActiveTab} />

          <div key={activeTab} className="animate-fade-in mt-[20px] sm:mt-[26px] lg:mt-[32px] 3xl:mt-[40px]">
            {activeTab === "details" && <Details tour={tour} />}
            {activeTab === "gallery" && <Gallery />}
            {activeTab === "map" && <Map />}
            {activeTab === "itinerary" && <Itinerary />}
            {activeTab === "tour-essentials" && <TourEssential />}
            {activeTab === "whats-included" && <WhatsIncluded />}
          </div>
        </div>

        <div className="w-full max-w-full xl:max-w-[420px] 2xl:max-w-[593px] 3xl:max-w-[593px] flex justify-center shrink-0 xl:sticky xl:top-[30px] 2xl:top-[40px] self-center xl:self-start mx-auto xl:mx-0">
          <Cart tourId={tour.id} />
        </div>
      </div>

      <div className="my-[40px] md:my-[52px] lg:my-[80px] 2xl:mt-[150px] 2xl:mb-[150px]">

        <TourSection title="RELATED TOURS" tours={relatedTours} allTourBtn={true} showGradient={false} centerGrid={true}  
        containerPadding="2xl:!px-[80px]"/>
      </div>
    </div>
  );
}

