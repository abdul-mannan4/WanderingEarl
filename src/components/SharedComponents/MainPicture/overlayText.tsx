import React from 'react'
type OverLayProp = {
  title: string
}

export default function OverlayText({ title }: OverLayProp) {
  return (
    <div className='flex h-full justify-center items-center'>
      <h1 className='font-inter font-black  text-[clamp(38px,5vw,64px)] text-white text-center uppercase'>
        {title}
      </h1>
    </div>
  )
}
