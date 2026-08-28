"use client";

import React from "react";
import Coupon from "../Coupon/coupon";
import Image from "next/image";
import PaymentMethodOption from "./paymentMethodOptions";

type PaymentInformationProps = {
  paymentMethod: "card" | "bank" | "check";
  onPaymentMethodChange: (method: "card" | "bank" | "check") => void;
  cardData: {
    cardNumber: string;
    exp: string;
    cvv: string;
  };
  onCardDataChange: (field: string, value: string) => void;
  coupon: string;
  onCouponChange: (value: string) => void;
  agreeTerms: boolean;
  onAgreeTermsChange: (agree: boolean) => void;
  onBack?: () => void;
  onPlaceOrder?: () => void;
};

export default function PaymentInformationStep({
  paymentMethod,
  onPaymentMethodChange,
  cardData,
  onCardDataChange,
  coupon,
  onCouponChange,
  agreeTerms,
  onAgreeTermsChange,
}: PaymentInformationProps) {
  return (
    <div className="flex flex-col gap-[60px] animate-fade-in font-inter">
      <div className="flex flex-col gap-[30px] ">
      {/* Credit Card Option */}

      <div className="flex flex-col gap-[30px] rounded-[16px] px-[20px] pt-[24px] pb-[30px] bg-white shadow-[0px_16px_24px_-24px_#0000000F]
">
        <div
          onClick={() => onPaymentMethodChange("card")}
          className="flex items-center gap-[16px] cursor-pointer"
          >
         
            <span className="font-black  text-[24px] text-text-dark uppercase">
              CREDIT CARD
            </span>
        
          {/* Card Logos */}
          <div className="">
            <Image 
            src="/images/tourDetail/tourDetail-Gallery/creditCard.png"
            alt="Credit Card"
            height={38}
            width={170}
            priority
            />
          </div>
        </div>
 
        {paymentMethod === "card" && (
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[16px]">
              <label className="text-[20px] font-normal text-text-dark">Card Number</label>
              <input
                type="text"
                placeholder="Write"
                value={cardData.cardNumber}
                onChange={(e) => onCardDataChange("cardNumber", e.target.value)}
                className="p-[20px] border border-light-gray rounded-[12px] text-[20px] font-normal text-[#8F8F8F]"
                />
            </div>

            <div className="grid grid-cols-2 gap-[40px]">
              <div className="flex flex-col gap-[16px]">
                <label className="text-[20px] font-normal text-text-dark">MM / YY</label>
                <input
                  type="text"
                  placeholder="Write"
                  value={cardData.exp}
                  onChange={(e) => onCardDataChange("exp", e.target.value)}
                  className="p-[20px] border border-light-gray rounded-[12px] text-[20px] font-normal text-[#8F8F8F]"
                  />
              </div>
              <div className="flex flex-col gap-[16px]">
                <label className="text-[20px] font-normal text-text-dark">CVV</label>
                <input
                  type="text"
                  placeholder="Write"
                  value={cardData.cvv}
                  onChange={(e) => onCardDataChange("cvv", e.target.value)}
                  className="p-[20px] border border-light-gray rounded-[12px] text-[20px] font-normal text-[#8F8F8F]"
                  />
              </div>
            </div>
          </div>
        )}
      
      </div>

      <div className="flex gap-[40px] max-w-full w-full items-center">
          <div className="border-t border-[#EFEFEF] max-w-[467.5px] w-full"></div>
          <div className="text-center text-[20px] text-[#8F8F8F] font-normal">Or</div>
          <div className="border-t border-[#EFEFEF] max-w-[467.5px] w-full"></div>
      </div>

      {/* Direct Bank Transfer Option */}
        <PaymentMethodOption
  value="bank"
  label="Direct Bank Transfer"
  paymentMethod={paymentMethod}
  onPaymentMethodChange={onPaymentMethodChange}
/>

      
      <div className="flex gap-[40px] max-w-full w-full items-center">
          <div className="border-t border-[#EFEFEF] max-w-[467.5px] w-full"></div>
          <div className="text-center text-[20px] text-[#8F8F8F] font-normal">Or</div>
          <div className="border-t border-[#EFEFEF] max-w-[467.5px] w-full"></div>
      </div>

      {/* Check Payments Option */}
 <PaymentMethodOption
  value="card"
  label="Check Payments"
  paymentMethod={paymentMethod}
  onPaymentMethodChange={onPaymentMethodChange}
/>
</div>

      {/* Coupon in Step 2 */}
      <Coupon
        value={coupon}
        onChange={onCouponChange}
        onApply={onCouponChange}
      />

      {/* Privacy & Terms */}
      <div className="flex flex-col gap-[30px] font-inter">
        <p className="max-w-full w-full font-medium text-[18px] leading-[24px]">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described in
          our{" "}
          <a href="/privacyPolicy" className="underline decoration-solid [text-decoration-skip-ink:none] text-gray-700 font-medium underline-offset-3">
            privacy policy
          </a>
          .
        </p>

        <label className="flex items-start gap-[10px] cursor-pointer select-none font-inter text-[18px]">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => onAgreeTermsChange(e.target.checked)}
            className="accent-[#1E365C] w-[24px] h-[24px] cursor-pointer"
          />
          <span className="text-text-muted leading-[24px]">
            I have read and agree to the payment and website <span className="text-primary-navy underline [text-decoration-skip-ink:none] ">terms and conditions.</span>
          </span>
        </label>
      </div>
    </div>
  );
}
