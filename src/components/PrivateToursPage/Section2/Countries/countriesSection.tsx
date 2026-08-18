// NicheSection.tsx
import React from 'react'
import CardComponent from '../CardComponent/CardComponent'

const countryData = [
  { icon: "/images/privateTours/countryFlags/Image1.png", label: 'India' },
  { icon: "/images/privateTours/countryFlags/Image2.png", label: 'Vietnam' },
  { icon: "/images/privateTours/countryFlags/Image3.png", label: 'Thailand' },
  { icon: "/images/privateTours/countryFlags/Image4.png", label: 'Cambodia' },
  { icon: "/images/privateTours/countryFlags/Image5.png", label: 'Nepal' },
  { icon: "/images/privateTours/countryFlags/Image6.png", label: 'Morocco' },
  { icon: "/images/privateTours/countryFlags/Image7.png", label: 'Mauritania' },
  { icon: "/images/privateTours/countryFlags/Image8.png", label: 'Egypt' },
  { icon: "/images/privateTours/countryFlags/Image9.png", label: 'Mexico' },
  { icon: "/images/privateTours/countryFlags/Image10.png", label: 'Peru' },
  { icon: "/images/privateTours/countryFlags/Image11.png", label: 'Ecuador' },
  { icon: "/images/privateTours/countryFlags/Image12.png", label: 'Romania' },
  { icon: "/images/privateTours/countryFlags/Image13.png", label: 'Portugal' },
  { icon: "/images/privateTours/countryFlags/Image14.png", label: 'Spain' },
  { icon: "/images/privateTours/countryFlags/Image15.png", label: 'Iceland' },
  { icon: "/images/privateTours/countryFlags/Image16.png", label: 'Bosnia' },
  { icon: "/images/privateTours/countryFlags/Image17.png", label: 'Montenegro' },
  { icon: "/images/privateTours/countryFlags/Image18.png", label: 'Georgia' },
  { icon: "/images/privateTours/countryFlags/Image19.png", label: 'Armenia' },
  { icon: "/images/privateTours/countryFlags/Image20.png", label: 'Turkey' },
  { icon: "/images/privateTours/countryFlags/Image21.png", label: 'Greece' },
  { icon: "/images/privateTours/countryFlags/Image22.png", label: 'Iraq' },
  { icon: "/images/privateTours/countryFlags/Image23.png", label: 'Jordan' },
  { icon: "/images/privateTours/countryFlags/Image24.png", label: 'Kyrgyzstan' },
  { icon: "/images/privateTours/countryFlags/Image25.png", label: 'Uzbekistan' },
  { icon: "/images/privateTours/countryFlags/Image26.png", label: 'Tajikistan' },
  { icon: "/images/privateTours/countryFlags/Image27.png", label: 'Turkmenistan' },
]

export default function CountriesSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-8 xl:px-12 2xl:!px-[80px] mt-0">
      <div className="w-full flex flex-col items-center gap-6 xl:gap-[80px]">
          <div className="w-full flex justify-start lg:justify-center items-center text-left lg:text-center font-inter max-w-[850px] mx-auto">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px]  lg:leading-[50.5px] uppercase text-text-dark">
            COUNTRIES
            <span className="block font-normal text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed text-text-muted capitalize">
              Some of the countries we've organized private tours to include:
            </span>
          </h2>
        </div>

        <div className="relative z-10 w-full flex flex-wrap justify-center gap-3 sm:gap-5 lg:gap-6 2xl:gap-[20px]">
          {countryData.map((country) => (
            <div
              key={country.label}
              className="flex justify-center
                w-[calc(50%-6px)]
                sm:w-[calc(33.333%-13.33px)]
                md:w-[calc(25%-15px)]
                lg:w-[calc(20%-19.2px)]
                xl:w-[calc(16.666%-20px)]
                2xl:w-[calc(16.666%-16.67px)]"
            >
              <CardComponent
                Icon={country.icon}
                label={country.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}