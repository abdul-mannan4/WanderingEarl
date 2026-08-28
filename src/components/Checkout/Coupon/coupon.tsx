"use client";

import React, { useState } from "react";

type CouponProps = {
  value?: string;
  onApply?: (couponCode: string) => void;
  onChange?: (value: string) => void;
};

export default function Coupon({ value = "", onApply, onChange }: CouponProps) {
  const [couponInput, setCouponInput] = useState(value);
  const [couponMessage, setCouponMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleInputChange = (val: string) => {
    setCouponInput(val);
    if (onChange) onChange(val);
    if (couponMessage) setCouponMessage(null);
  };

  const handleApply = () => {
    if (!couponInput.trim()) {
      setCouponMessage({ text: "Please enter a coupon code", type: "error" });
      return;
    }
    if (onApply) {
      onApply(couponInput.trim());
    }
    setCouponMessage({
      text: `Coupon "${couponInput.trim()}" applied successfully!`,
      type: "success",
    });
  };

  return (
    <div className="flex flex-col gap-[20px] sm:gap-[26px] 2xl:gap-[30px] border border-[#EFEFEF] rounded-[16px] p-[16px] sm:p-[20px] 2xl:p-[24px] shadow-[0px_16px_24px_-16px_#00000015] bg-white">
      <div className="max-w-full w-full flex flex-col gap-[14px] sm:gap-[20px]">
        <p className="font-semibold text-[15px] sm:text-[17px] md:text-[18px] 2xl:text-[20px] text-accent-orange leading-snug">
          If you have a coupon code, please apply it below.
        </p>

        <div>
          <input
            type="text"
            placeholder="Write"
            value={couponInput}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full p-[14px] sm:p-[16px] 2xl:p-[20px] rounded-[12px] border border-light-gray text-[15px] sm:text-[17px] 2xl:text-[20px] text-text-dark font-inter placeholder:text-[#8F8F8F] focus:outline-none focus:border-[#1E365C] transition-colors"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleApply}
        className="w-full px-[24px] sm:px-[30px] py-[13px] sm:py-[16px] 2xl:py-[18px] rounded-[30px] bg-[#1E365C]/10 hover:bg-[#1E365C] text-primary-navy font-inter font-bold text-[14px] sm:text-[16px] hover:text-white transition-all cursor-pointer active:scale-98"
      >
        Apply Coupon
      </button>

      {couponMessage && (
        <p
          className={`text-xs sm:text-sm font-medium font-inter -mt-2 ${
            couponMessage.type === "success" ? "text-[#1AA903]" : "text-red-500"
          }`}
        >
          {couponMessage.text}
        </p>
      )}
    </div>
  );
}
