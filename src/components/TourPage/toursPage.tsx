import React from 'react'
import PageMain from '../SharedComponents/MainPicture/bgPicture'
import TourSection from "@/components/SharedComponents/TourSection/tourSection";
import { allTours24 } from "@/components/data/allTours";

export default function TourRoute() {
  return (
    <div>
      <PageMain title='TOURS' imgSrc='/images/tourPage/tourBackground.png'/>
      <div className="pb-[94px]">
        <TourSection
          year={2024}
          tours={allTours24}
          layout="inline"
          centerGrid={true}
          linearGradient="linear-gradient(180deg,
                                          rgba(30,54,92,1) 0%,
                                          rgba(30,54,92,0.94) 15%,
                                          rgba(30,54,92,0.82) 30%,
                                          rgba(30,54,92,0.58) 50%,
                                          rgba(30,54,92,0.25) 70%,
                                          rgba(30,54,92,0) 100%    )"

          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          cardWidth="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] 2xl:w-[calc(25%-15px)] max-w-[488px] md:max-w-none"
          containerPadding="!px-[16px] sm:!px-[24px] md:!px-[32px] lg:!px-[40px] xl:!px-[50px] 2xl:!px-[60px] min-[1800px]:!px-[80px]"
          yearColor="text-accent-orange"
          titleColor="text-text-muted"
          fontSize="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        />
      </div>

      <div className="pb-[144px]">
        <TourSection
          year={2025}
          tours={allTours24}
          showGradient={false}
          layout="inline"
          centerGrid={true}
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          cardWidth="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] 2xl:w-[calc(25%-15px)] max-w-[488px] md:max-w-none"
          containerPadding="!px-[16px] sm:!px-[24px] md:!px-[32px] lg:!px-[40px] xl:!px-[50px] 2xl:!px-[60px] min-[1800px]:!px-[80px]"
          yearColor="text-accent-orange"
          titleColor="text-text-muted"
          fontSize="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        />
      </div>
    </div>
  )
}
