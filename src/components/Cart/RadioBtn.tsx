"use client"

import React, { useState } from "react";

export default function RadioButton() {
  const [selected, setSelected] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setSelected(!selected)}
      className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer rounded-full border-2 border-[#1B2A4A] flex items-center justify-center"
    >
      {selected && (
        <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#1B2A4A]" />
      )}
    </button>
  );
}