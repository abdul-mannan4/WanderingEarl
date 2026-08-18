import React from "react";
import Image from "next/image";

export default function PrivateTourStory() {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 xl:gap-10 2xl:gap-12 min-[1910px]:gap-[128px] px-4 sm:px-6 md:px-12 lg:px-8 xl:px-12 2xl:!px-[80px] pb-8 lg:pb-[120px]">
      <div className="flex flex-col justify-center gap-3 lg:gap-3.5 xl:gap-6 2xl:gap-[24px] min-[1910px]:gap-[40px] w-full flex-1 max-w-[762px] font-inter font-medium text-text-dark text-left">
        <div className="font-inter font-bold text-[26px] sm:text-[30px] lg:text-[30px] xl:text-[35px] 2xl:text-[36px] min-[1910px]:text-[40px] uppercase leading-tight lg:leading-[34px] xl:leading-[40px] 2xl:leading-[44px] min-[1910px]:leading-[48px]">
          <h2>
            <span className="text-accent-orange">PRIVATE TOURS</span>
            <span className="text-black">,</span>
            <br />
            PERFECTLY CRAFTED.
          </h2>
        </div>

        <div className="flex flex-col gap-2.5 lg:gap-3 xl:gap-5 2xl:gap-[24px] min-[1910px]:gap-[40px] font-medium text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] min-[1910px]:text-[20px] leading-normal lg:leading-[22px] xl:leading-[26px] 2xl:leading-[30px] min-[1910px]:leading-[35.2px]">
          <p>
            Whether you’re a group of friends, a photography organization, a
            textile club, abandoned building enthusiasts, or anything in
            between, we’ll create a magical private tour for your group
          </p>
          <p>
            Unlike tour operators that use the exact same itinerary over and
            over again, we ensure that every trip is 100% unique. We want to
            learn about your specific interests, goals, budget and more in order
            to carefully craft and customize every aspect of the trip in a way
            that will suit your group perfectly. We choose the ideal route, best
            lodgings, most rewarding activities, tastiest restaurants, and more,
            that will all lead to the most extraordinary trip possible. Since
            2013, we’ve offered our highly-regarded, excellent value trips to
            dozens of groups in dozens of countries around the world.
          </p>
          <p></p>
        </div>
      </div>
<div className="w-full max-w-[762px] lg:max-w-[870px]  lg:flex-1 shrink-0 self-center mb-6 lg:mb-0">
        <div className="border-[8px] sm:border-[12px] lg:border-[16px] border-white box-border rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-[-15px_15px_30px_0px_#00000033] sm:shadow-[-25px_20px_45px_0px_#00000045] lg:shadow-[-40px_30px_60px_0px_#00000066] w-full aspect-[870/557] relative">
          <div className="relative w-full h-full rounded-[6px] sm:rounded-[8px] overflow-hidden shadow-[-40px_30px_60px_0px_rgba(0, 0, 0, 0.4)]
">
            <Image
              src="/images/privateTours/groupPhoto.png"
              alt="Group of travelers on a private tour"
              fill
              sizes="(max-width: 640px) 360px, (max-width: 768px) 500px, (max-width: 1024px) 650px, 870px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
