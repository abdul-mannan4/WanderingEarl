import React from 'react'
type OverLayProp = {
  title: string
}

export default function OverlayText({ title }: OverLayProp) {
  return (
    <div className='flex h-full w-full justify-center items-center px-4 sm:px-6 md:px-8'>
      <h1 className='font-inter font-black text-[30px] xs:text-[34px] sm:text-[44px] md:text-[52px] lg:text-[60px] 2xl:text-[64px] leading-[1.1] sm:leading-tight text-white text-center uppercase tracking-tight drop-shadow-md max-w-[280px] xs:max-w-[340px] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl'>
        {title}
      </h1>
    </div>
  )
}
