import React from 'react'
import AboutUSCollage from './aboutUSCollage'

export default function ContentCollage() {
  return (
    <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 2xl:gap-16 min-[1910px]:gap-[128px] px-4 sm:px-6 md:px-12 lg:px-12 2xl:px-16 min-[1910px]:!px-[208px] pt-8 md:pt-[59px] pb-12 md:pb-[140px]'>
      {/* Text Section */}
      <div className='flex flex-col gap-4 2xl:gap-5 min-[1910px]:gap-6 w-full flex-1 max-w-[614px] font-inter font-medium text-text-dark text-[16px] sm:text-[18px] lg:text-[18px] 2xl:text-[19px] min-[1910px]:text-[20px] leading-relaxed text-center lg:text-left'>
        <p className='lg:pt-[24px]'>
          Our team at Wandering Earl Tours has a strong desire to bring rich cultural connections around the world to people who would appreciate them the most. And we hold this mission at the core of everything we do.
        </p>
        <p>
          Focused, purposeful and incredibly rewarding trips are the goal, and each member of our team brings their own insights, skills and enthusiasm to the table. When combined, our goal is achieved, with unique Wandering Earl Tours that we are all genuinely excited to offer!
        </p>
      </div>

      {/* Collage Section Container with bottom margin when stacked */}
      <div className="w-full sm:w-[500px] lg:w-[480px] xl:w-[540px] 2xl:w-[640px] min-[1910px]:w-[740px] shrink-0 mb-6 sm:mb-10 lg:mb-0">
        <AboutUSCollage />
      </div>
    </div>
  )
}
