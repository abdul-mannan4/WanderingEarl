"use client";

import React, { useState } from "react";

type CounterBtnProps = {
  count?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
};

export default function CounterBtn({
  count: controlledCount,
  onIncrement,
  onDecrement,
}: CounterBtnProps) {
  const [internalCount, setInternalCount] = useState(1);

  const isControlled = controlledCount !== undefined;
  const count = isControlled ? controlledCount : internalCount;

  function handleIncrement() {
    if (onIncrement) {
      onIncrement();
    } else {
      setInternalCount((prev) => prev + 1);
    }
  }

  function handleDecrement() {
    if (onDecrement) {
      onDecrement();
    } else {
      setInternalCount((prev) => Math.max(1, prev - 1));
    }
  }

  return (
    <div className="flex items-center justify-between rounded-full border border-[#D6D6D6] px-3 sm:px-4 2xl:px-5 w-full h-[48px] sm:h-[52px] 2xl:h-[58px]">
      {/* Minus Button */}
      <button
        type="button"
        onClick={handleDecrement}
        disabled={count <= 1}
        aria-label="Decrement"
        className={`flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center transition-opacity hover:opacity-70 shrink-0 ${
          count <= 1 ? "cursor-not-allowed opacity-40" : "cursor-pointer"
        }`}
      >
        <span className="h-[2px] sm:h-[3px] w-3.5 sm:w-5 rounded-full bg-[#404040]" />
      </button>

      {/* Counter Value */}
      <span className="text-[16px] sm:text-[20px] text-text-muted font-medium font-inter">
        {count}
      </span>

      {/* Plus Button */}
      <button
        type="button"
        onClick={handleIncrement}
        aria-label="Increment"
        className="relative flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center transition-opacity hover:opacity-70 shrink-0 cursor-pointer"
      >
        <span className="absolute h-[2px] sm:h-[3px] w-3.5 sm:w-5 rounded-full bg-[#E9482B]" />
        <span className="absolute h-3.5 sm:h-5 w-[2px] sm:w-[3px] rounded-full bg-[#E9482B]" />
      </button>
    </div>
  );
}

