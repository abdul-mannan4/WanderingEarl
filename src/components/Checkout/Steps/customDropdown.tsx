"use client";

import React, { useState, useRef, useEffect } from "react";
import DropDownArrow from "./dropDownArrow";

export type DropdownOption = {
  value: string;
  label: string;
};

type CustomDropdownProps = {
  id?: string;
  options: (string | DropdownOption)[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hasError?: boolean;
  className?: string;
};

export default function CustomDropdown({
  id,
  options,
  value,
  onChange,
  placeholder = "Select",
  hasError = false,
  className = "",
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const normalizedOptions: DropdownOption[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;
  const isPlaceholder = !value || value === placeholder;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] pr-[48px] border text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter bg-white text-left flex items-center justify-between cursor-pointer focus:outline-none transition-all duration-150 ${
          isOpen
            ? "rounded-t-[12px] rounded-b-none border-light-gray border-b-light-gray"
            : "rounded-[12px] border-light-gray hover:border-[#1E365C]"
        } ${
          hasError && !isOpen
            ? "border-red-500 bg-red-50/20 text-red-900 focus:border-red-500"
            : ""
        } ${isPlaceholder ? "text-[#8F8F8F]" : "text-text-dark font-medium"}`}
      >
        <span className="truncate">{displayLabel}</span>

        {/* Dropdown Arrow */}
        <div
          className={`absolute right-[16px] sm:right-[20px] top-1/2 -translate-y-1/2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <DropDownArrow />
        </div>
      </button>

      {/* Dropdown Menu attached directly to the box with dividing border line */}
      {isOpen && (
        <div className="absolute top-full -mt-[1px] left-0 w-full bg-white border border-light-gray rounded-b-[12px] shadow-[0px_20px_36px_-8px_#00000020] z-50 max-h-[260px] overflow-y-auto pb-2">
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] 2xl:py-[14px] text-[14px] sm:text-[15px] 2xl:text-[17px] font-inter cursor-pointer transition-colors duration-150 flex items-center justify-between ${
                  isSelected
                    ? "bg-[#1E365C] text-white font-semibold"
                    : "text-[#404040] hover:bg-[#1E365C] hover:text-white"
                }`}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <svg
                    className="w-4 h-4 text-white shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
