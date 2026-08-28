"use client";

import React from "react";

type PaymentMethod = "card" | "bank" | "check";

type PaymentMethodOptionProps = {
  value: PaymentMethod;
  label: string;
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (value: PaymentMethod) => void;
};

export default function PaymentMethodOption({
  value,
  label,
  paymentMethod,
  onPaymentMethodChange,
}: PaymentMethodOptionProps) {
  return (
    <div
      onClick={() => onPaymentMethodChange(value)}
      className="flex items-center justify-between cursor-pointer max-w-full w-full rounded-[16px] border border-[#EFEFEF] shadow-[0px_16px_24px_-24px_#0000000F] px-[16px] sm:px-[20px] py-[18px] sm:py-[24px] font-inter bg-white transition-colors hover:border-[#1E365C]/30"
    >
      <span className="font-black text-[18px] sm:text-[22px] md:text-[24px] text-text-dark uppercase leading-tight">
        {label}
      </span>
      <input
        type="radio"
        name="paymentMethod"
        checked={paymentMethod === value}
        onChange={() => onPaymentMethodChange(value)}
        className="accent-[#1E365C] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] cursor-pointer shrink-0"
      />
    </div>
  );
}