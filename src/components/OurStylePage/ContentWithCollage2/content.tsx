import React from 'react'
import Collage from './collage'

export default function ContentCollage() {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 lg:gap-6 xl:gap-10 2xl:gap-12 min-[1910px]:gap-[128px] px-4 sm:px-6 md:px-12 lg:px-8 xl:px-12 2xl:px-16 min-[1910px]:!px-[208px] pb-8 lg:pb-12 xl:pb-16 2xl:pb-[120px]'>

      {/* Collage Section Container - vertically centered */}
      <div className="w-full sm:w-[480px] lg:w-[380px] xl:w-[460px] 2xl:w-[540px] min-[1910px]:w-[614px] shrink-0 self-center mb-6 lg:mb-0">
        <Collage />
      </div>

      <div className='flex flex-col justify-center gap-3 lg:gap-3.5 xl:gap-6 2xl:gap-[24px] min-[1910px]:gap-[40px] w-full flex-1 max-w-[762px] font-inter font-medium text-text-dark lg:text-left'>
        <div className='font-inter font-bold text-[26px] sm:text-[30px] lg:text-[30px] xl:text-[35px] 2xl:text-[36px] min-[1910px]:text-[40px] uppercase leading-tight lg:leading-[34px] xl:leading-[40px] 2xl:leading-[44px] min-[1910px]:leading-[48px]'>
          <p className='text-accent-orange'>TOURS</p>
          <span>that are good for everyone.</span>
        </div>

        <div className='flex flex-col gap-2.5 lg:gap-3 xl:gap-5 2xl:gap-[24px] min-[1910px]:gap-[40px] font-medium text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] min-[1910px]:text-[20px] leading-normal lg:leading-[22px] xl:leading-[26px] 2xl:leading-[30px] min-[1910px]:leading-[35.2px]'>
          <p>
            Our tours are full of people and places we love. And, like anything else that we love, we want to take care of them. We want to make sure the people and places we visit together don’t just survive, but thrive.
          </p>
          <p>
            That’s why we choose to support local businesses, especially women-owned and minority-owned businesses. We believe a rising tide lifts all boats, which is why we avoid mass tourism and big-bus itineraries, and instead focus on the people that make up the fabric of their local community.
          </p>
        </div>
      </div>

    </div>
  )
}
