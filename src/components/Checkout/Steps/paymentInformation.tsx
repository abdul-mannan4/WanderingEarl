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
          className="flex items-center justify-between gap-[12px] sm:gap-[16px] cursor-pointer"
        >
          <span className="font-black text-[18px] sm:text-[22px] md:text-[24px] text-text-dark uppercase whitespace-nowrap">
            CREDIT CARD
          </span>

          {/* Card Logos */}
          <div className="w-[110px] sm:w-[140px] md:w-[170px] shrink-0">
            <Image 
              src="/images/tourDetail/tourDetail-Gallery/creditCard.png"
              alt="Credit Card"
              height={38}
              width={170}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {paymentMethod === "card" && (
          <div className="flex flex-col gap-[20px] sm:gap-[30px] 2xl:gap-[40px]">
            {/* Card Number */}
            <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
              <label className="text-[15px] sm:text-[16px] 2xl:text-[18px] font-normal text-text-dark">
                Card Number
              </label>
              <input
                type="text"
                placeholder="Write"
                value={cardData.cardNumber}
                onChange={(e) => onCardDataChange("cardNumber", e.target.value)}
                className="w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] rounded-[12px] border border-light-gray text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter text-text-dark placeholder:text-[#8F8F8F] focus:outline-none focus:border-[#1E365C] transition-colors"
              />
            </div>

            {/* MM/YY & CVV: Stacked vertically on mobile, 2 cols on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[24px] 2xl:gap-[40px]">
              <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
                <label className="text-[15px] sm:text-[16px] 2xl:text-[18px] font-normal text-text-dark">
                  MM / YY
                </label>
                <input
                  type="text"
                  placeholder="Write"
                  value={cardData.exp}
                  onChange={(e) => onCardDataChange("exp", e.target.value)}
                  className="w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] rounded-[12px] border border-light-gray text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter text-text-dark placeholder:text-[#8F8F8F] focus:outline-none focus:border-[#1E365C] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
                <label className="text-[15px] sm:text-[16px] 2xl:text-[18px] font-normal text-text-dark">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="Write"
                  value={cardData.cvv}
                  onChange={(e) => onCardDataChange("cvv", e.target.value)}
                  className="w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] rounded-[12px] border border-light-gray text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter text-text-dark placeholder:text-[#8F8F8F] focus:outline-none focus:border-[#1E365C] transition-colors"
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
        value="check"
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
      <div className="flex flex-col gap-[14px] sm:gap-[20px] 2xl:gap-[30px] font-inter">
        <p className="max-w-full w-full font-normal text-[13px] sm:text-[15px] 2xl:text-[18px] leading-[145%] text-text-muted">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described in
          our{" "}
          <a href="/privacyPolicy" className="underline decoration-solid [text-decoration-skip-ink:none] text-text-dark font-medium underline-offset-3 hover:text-accent-orange transition-colors">
            privacy policy
          </a>
          .
        </p>

        <label className="flex items-start gap-2 sm:gap-[10px] cursor-pointer select-none font-inter text-[13px] sm:text-[15px] 2xl:text-[18px]">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => onAgreeTermsChange(e.target.checked)}
            className="accent-[#1E365C] w-4 h-4 sm:w-5 sm:h-5 2xl:w-[24px] 2xl:h-[24px] mt-0.5 cursor-pointer shrink-0"
          />
          <span className="text-text-muted leading-[145%]">
            I have read and agree to the payment and website{" "}
            <span className="text-primary-navy underline [text-decoration-skip-ink:none] font-medium hover:text-accent-orange transition-colors">
              terms and conditions.
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
