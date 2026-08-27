"use client";

import React from "react";

type RadioButtonProps = {
  selected?: boolean;
  onSelect?: () => void;
  disabled?: boolean;
};

export default function RadioButton({
  selected = false,
  onSelect,
  disabled = false,
}: RadioButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#1B2A4A] flex items-center justify-center ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {selected && (
        <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#1B2A4A]" />
      )}
    </button>
  );
}