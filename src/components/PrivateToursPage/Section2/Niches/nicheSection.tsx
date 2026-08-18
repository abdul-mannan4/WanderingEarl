// NicheSection.tsx
import React from 'react'
import NicheCard from '../CardComponent/CardComponent'

const nicheData = [
  { icon: "/images/privateTours/Image1.png", label: 'Portrait photography' },
  { icon: "/images/privateTours/Image2.png", label: 'Abandoned buildings' },
  { icon: "/images/privateTours/Image3.png", label: 'Textiles / crafts' },
  { icon: "/images/privateTours/Image4.png", label: 'Photography workshops' },
  { icon: "/images/privateTours/Image5.png", label: 'Wellness / spa' },
  { icon: "/images/privateTours/Image6.png", label: 'Yoga / meditation retreats' },
  { icon: "/images/privateTours/Image7.png", label: 'Adventure / hiking' },
  { icon: "/images/privateTours/Image8.png", label: 'Biking' },
  { icon: "/images/privateTours/Image9.png", label: 'Marathon / running' },
  { icon: "/images/privateTours/Image10.png", label: 'Food/drink' },
  { icon: "/images/privateTours/Image11.png", label: 'History' },
  { icon: "/images/privateTours/Image12.png", label: 'General sightseeing' },
]

export default function NicheSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-8 xl:px-12 2xl:!px-[80px] mt-0">
      <div className="w-full flex flex-col items-center gap-6 xl:gap-[80px]">
        <div className="w-full flex justify-start lg:justify-center items-center text-left lg:text-center font-inter max-w-[850px] mx-auto">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[50.5px] uppercase text-text-dark">
            NICHES
            <span className="block font-normal text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed text-text-muted capitalize">
              Some of the niches that we&apos;ve organized private tours around include:
            </span>
          </h2>
        </div>

        <div className="relative z-10 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 2xl:gap-[20px] justify-items-center">
          {nicheData.map((niche) => (
            <div key={niche.label} className="w-full flex justify-center h-full">
              <NicheCard
                Icon={niche.icon}
                label={niche.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}