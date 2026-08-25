import React from "react";
import UserLogo from "@/components/SharedComponents/TourSection/TourCard/userLogo";
import CalendarLogo from "@/components/SharedComponents/TourSection/TourCard/CalendarLogo";
import LocationLogo from "@/components/SharedComponents/TourSection/TourCard/LocationSvg";
import { Tour } from "@/components/data/type";
import TourEssentialCard from "../TourEssentials/tourEssentialCard";

type DetailProps = {
  tour: Tour;
};
export const tourEssentials = [
  {
    icon: "/images/tourDetail/tourDetail-Gallery/Svg1.svg",
   
    description:
      "Spoil yourself with the delicious cuisine of Singapore, with its Chinese, Indian, Malaysian and Indonesian influences",
  },
  {
    icon: "/images/tourDetail/tourDetail-Gallery/Svg2.svg",
   
    description:
      "Dive deep into the incredible food markets of Bangkok",
  },
  {
     icon: "/images/tourDetail/tourDetail-Gallery/Svg3.svg",
 
    description:
      "Get ready for the vast foodie scene of Kuala Lumpur, with some of the best food in the world",
  },
  {
     icon: "/images/tourDetail/tourDetail-Gallery/Svg4.svg",
    
    description:
      "Travel back in time through the ancient city of Ayutthaya",
  },
  {
      icon: "/images/tourDetail/tourDetail-Gallery/Svg5.svg",
   
    description:
      "Enjoy time exploring the gorgeous Cameron Highlands of Malaysia",
  },
  {
      icon: "/images/tourDetail/tourDetail-Gallery/Svg6.svg",
   
    description:
      "Visit a tea plantation to learn about the process of making the finest teas",
  },
];


export default function Details({ tour }: DetailProps) {
  return (
    <section id="details">
      <div className="flex flex-col gap-[20px] sm:gap-[24px] lg:gap-[28px]  font-inter">
        <div className="flex flex-col gap-[12px] sm:gap-[16px]">
          <p className="font-medium text-[16px] sm:text-[20px] md:text-[22px] 2xl:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[30px] text-text-muted">
            Join us on an unforgettable food-focused adventure in Southeast
            Asia, where we will uncover the culinary secrets of Thailand,
            Malaysia and Singapore!
          </p>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 md:gap-5 lg:gap-[24px] ">
            <div className="flex flex-row items-center gap-[6px] 2xl:gap-[16px] shrink-0">
              <div>
                <UserLogo />
              </div>
              <p className="font-inter font-semibold text-[13px] sm:text-[14px] 2xl:text-[18px] leading-[100%] whitespace-nowrap self-center">
                <span className="font-bold text-text-muted">
                  {tour.spotsBooked}
                  <span className="text-[#8F8F8F] font-normal">
                    {" "}
                    out of {tour.totalSpots}{" "}
                  </span>{" "}
                  <span className="font-normal">
                  spots booked
                  </span>
                </span>
              </p>
            </div>
            <div className="hidden sm:block w-px bg-gray-300 self-stretch shrink-0" />

            <div className="flex flex-row items-center gap-[6px] 2xl:gap-[16px] shrink-0">
              <div>
                <LocationLogo />
              </div>
              <p className="font-inter font-normal text-[13px] sm:text-[14px] 2xl:text-[18px] leading-[100%] text-text-muted whitespace-nowrap self-center">
                {tour.location}
              </p>
            </div>
            <div className="hidden sm:block w-px bg-light-gray self-stretch shrink-0" />
            <div className="flex flex-row items-center gap-[6px] 2xl:gap-[16px]">
              <div>
                <CalendarLogo />
              </div>
              <p className="font-inter font-normal text-[13px] sm:text-[14px] 2xl:text-[18px] leading-[100%] text-text-muted whitespace-nowrap self-center">
                {tour.dateRange}{" "}
                <span className="text-[#8F8F8F]">({tour.duration})</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] sm:gap-[10px] rounded-[16px] border border-light-gray shadow-[0px_16px_24px_-24px_#0000000F] mx-auto items-start justify-center max-w-full w-full p-3.5 sm:p-4 md:p-[20px] bg-white">
          <h2 className="font-semibold font-inter text-[16px] sm:text-[18px] md:text-[20px] text-accent-orange">
            BOOK WITH CONFIDENCE
          </h2>
          <p className="font-medium font-inter text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[26px] md:leading-[28px] text-text-dark">
            To reserve your spot on a tour, a $500 deposit will be required. However, you can book with complete peace of mind as this deposit will be refundable - minus a 3% transaction fee - for 30 days. [Deposits are non-refundable within 90 days of the tour start date, even if 30 days have not yet passed since the payment date.]
          </p>
        </div>
        <div
            className="grid max-[490px]:grid-cols-1 grid-cols-2 2xl:grid-cols-3 gap-2.5 sm:gap-3.5 lg:gap-4"
            >
              {tourEssentials.map((item, index) => (
                <TourEssentialCard
                  key={index}
                  IconUrl={item.icon}
                  description={item.description}
                  layout="max-[490]:self-center self-start"
                />
              ))}
        </div>
        <div>
     <p className="text-text-muted text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[20px]  leading-[22px] sm:leading-[26px] md:leading-[28px] font-normal  flex flex-col gap-[16px] sm:gap-[20px] 2xl:gap-[40px]">
  <span>
    Calling all foodies and travel enthusiasts! This trip is a chance to embark on a culinary adventure through Southeast Asia, where you'll be immersed in the traditional food culture of each location, while also exploring some of the wonderful sights.
    </span>

<span>
  Our journey will take us through Bangkok, Ayutthaya, Kuala Lumpur, the Cameron Highlands and Singapore. You'll discover the secrets of traditional tea plantations and meet local chefs who serve up dishes that will remain etched in your memory forever. You'll indulge in the explosion of flavors and spices at sprawling markets and enjoy the absolute best street food on the planet. There will be a variety of excellent restaurant experiences, a cooking class and trips to famous local eateries that few visitors ever reach.
  </span>

<span>

Throughout the tour, you'll be in the company of like-minded travelers who share your passion for adventure and culinary exploration. This food tour is an exclusive opportunity to experience Southeast Asia through food, leaving you with a newfound appreciation for the rich culture and gastronomy of this captivating region of the world!
</span>
</p>
        </div>
      </div>
    </section>
  );
}
