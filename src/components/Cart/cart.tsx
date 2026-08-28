"use client";

import React, { useState } from "react";
import PriceIcon from "./cartIcon"; // Adjust path if needed
import CartSectionComponent from "./cartSectionComponent";

type CartProps = {
  tourId?: string;
};

export default function ReserveHeader({ tourId = "wander-across-mexico-2024" }: CartProps) {
  const [roomOption, setRoomOption] = useState<"btn1" | "btn2">("btn2"); // Single Supplement active by default (Shared is sold)
  const [paymentOption, setPaymentOption] = useState<"btn1" | "btn2">("btn1"); // Pay Deposit active by default
  const [guestsCount, setGuestsCount] = useState<number>(1);

  const isPayInFull = paymentOption === "btn2";
  const roomPrice = roomOption === "btn1" ? 3798 : 4445;
  const fullPrice = roomPrice * guestsCount;
  const depositPrice = 500 * guestsCount;

  return (
    <div
      className="relative pt-[24px] sm:pt-[36px] md:pt-[48px] w-full max-w-full xl:max-w-[480px] 2xl:max-w-[520px] 3xl:!max-w-[593px] min-[1800px]:!max-w-[593px] mx-auto rounded-[24px] shadow-[0px_40px_48px_-16px_#00000029]
    flex flex-col gap-[20px] md:gap-[30px] xl:gap-[40px] mb-[24px] md:mb-[36px]
    ">
      <div className="absolute top-[1%] left-1/2 -translate-x-1/2 z-0 w-12 h-12 sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] bg-[#E9482B] rounded-full" />

      <div className="absolute top-[3%] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <PriceIcon />
      </div>

      <div className="relative z-10 w-full bg-[#E9482B] rounded-t-[24px] sm:rounded-b-[10px] pt-4 sm:pt-5 md:pt-6 pb-3 sm:pb-4 text-center">
        <h2 className="text-white text-base sm:text-xl md:text-[36px] font-inter font-black uppercase tracking-wider">
          RESERVE NOW
        </h2>
      </div>

      <div className="mx-auto w-full px-4 sm:px-6 pb-[24px] sm:pb-[36px] md:pb-[48px] flex flex-col gap-[14px] md:gap-[20px] xl:gap-[30px] font-inter bg-white rounded-b-[24px]">
        <CartSectionComponent
          title="Choose an Option"
          btnText1="Shared Room"
          btnText2="Single Supliment"
          border1="border-[#D6D6D6]"
          btnMoney1="$3,798"
          btnMoney2="$4,445"
          sold={true}
          selectedOption={roomOption}
          onSelectOption={setRoomOption}
        />
        <CartSectionComponent
          title="Payment:"
          btnText1="Pay Deposit"
          btnText2="Pay in Full"
          sold={false}
          selectedOption={paymentOption}
          onSelectOption={setPaymentOption}
        />
        <CartSectionComponent
          title={
            isPayInFull
              ? `Pay in full of $${fullPrice.toLocaleString()}:`
              : `Pay a deposit of $${depositPrice.toLocaleString()} per person:`
          }
          heighlightedWord={
            isPayInFull
              ? `$${fullPrice.toLocaleString()}`
              : `$${depositPrice.toLocaleString()} per person`
          }
          isCounterBtn={true}
          isCheckoutBtn={true}
          count={guestsCount}
          onCountChange={setGuestsCount}
          tourId={tourId}
          roomOption={roomOption === "btn1" ? "Shared Room" : "Single Supplement"}
          paymentOption={isPayInFull ? "Pay in Full" : "Pay Deposit"}
        />
      </div>
    </div>
  );
}
