import React from 'react'
import TourPageMain from './MainPicture/bgPicture'
import TourSection from "@/components/LandingPage/TourSection/tourSection";
import { allTours24 } from "@/components/data/allTours";

export default function TourRoute() {
  return (
    <div>
      <TourPageMain />
      <div className="pb-[94px]">
        <TourSection
          year={2024}
          tours={allTours24}
          layout="inline"
          centerGrid={true}
          linearGradient="linear-gradient(
  180deg,
  rgba(30,54,92,1) 0%,
  rgba(30,54,92,0.94) 15%,
  rgba(30,54,92,0.82) 30%,
  rgba(30,54,92,0.58) 50%,
  rgba(30,54,92,0.25) 70%,
  rgba(30,54,92,0) 100%
)"
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
          containerPadding="lg:!px-[30px] xl:!px-[50px] 2xl:!px-[60px] min-[1920px]:!px-[80px]"
          yearColor="text-[#E9482B]"
          titleColor="text-[#404040]"
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
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
          containerPadding="lg:!px-[30px] xl:!px-[50px] 2xl:!px-[60px] min-[1920px]:!px-[80px]"
          yearColor="text-[#E9482B]"
          titleColor="text-[#404040]"
          fontSize="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        />
      </div>
    </div>
  )
}
