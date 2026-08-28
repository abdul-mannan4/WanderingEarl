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
      className="flex items-center justify-between cursor-pointer max-w-full w-full rounded-[16px] border border-[#EFEFEF] shadow-[0px_17px_60px_-24px_#0000003D] px-[20px] py-[24px] font-inter"
    >
  
        <span className="font-black text-[24px] text-text-dark uppercase">
          {label}
        </span>
        <input
          type="radio"
          name="paymentMethod"
          checked={paymentMethod === value}
          onChange={() => onPaymentMethodChange(value)}
          className="accent-[#1E365C] w-[24px] h-[24px] cursor-pointer"
        />
      </div>
   
  );
}