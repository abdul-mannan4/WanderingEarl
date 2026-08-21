"use client"

import React, { useState } from 'react'

export default function CounterBtn() {
  const [count, setCount] = useState(1)

  function handleIncrement() {
    setCount((prev) => prev + 1)
  }

  function handleDecrement() {
    setCount((prev) => Math.max(0, prev - 1))
  }

  return (
    <div className="flex items-center justify-between rounded-full border border-[#D6D6D6] px-3 sm:px-5 py-2 sm:py-3 xl:p-[20px] w-full min-h-[48px] sm:min-h-[58px]">
      {/* Minus Button */}
      <button
        type="button"
        onClick={handleDecrement}
        aria-label="Decrement"
        className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center transition-opacity hover:opacity-70 shrink-0"
      >
        <span className="h-[2px] sm:h-[3px] w-3.5 sm:w-5 rounded-full bg-[#404040]" />
      </button>

      {/* Counter Value */}
      <span className="text-[16px] sm:text-[20px] text-text-muted font-medium font-inter">
        {count}
      </span>


      <button
        type="button"
        onClick={handleIncrement}
        aria-label="Increment"
        className="relative flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center transition-opacity hover:opacity-70 shrink-0"
      >
        <span className="absolute h-[2px] sm:h-[3px] w-3.5 sm:w-5 rounded-full bg-[#E9482B]" />
        <span className="absolute h-3.5 sm:h-5 w-[2px] sm:w-[3px] rounded-full bg-[#E9482B]" />
      </button>
    </div>
  )
}

