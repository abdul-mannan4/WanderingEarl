import React from "react";
import PriceIcon from "./cartIcon"; // Adjust path if needed
import RadioButton from "./RadioBtn";
import CartSectionComponent from "./cartSectionComponent";

export default function ReserveHeader() {
  return (
    <div
      className="relative pt-[24px] sm:pt-[36px] md:pt-[48px] w-[calc(100%-40px)] sm:w-full max-w-[500px] md:max-w-[540px rounded-[24px] shadow-[0px_40px_48px_-16px_#00000029]
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

      <div className="mx-auto w-full px-4 sm:px-6 pb-[24px] sm:pb-[36px] md:pb-[48px] flex flex-col gap-[14px]  md:gap-[20px] xl:gap-[30px] font-inter">
        <CartSectionComponent title="Choose an Option" btnText1="Shared Room" btnText2="Single Supliment" border1="border-[#E9482B]" btnMoney1="$3,798" btnMoney2="$4,445" sold={true} />
        <CartSectionComponent title="Payment:" btnText1="Pay Deposit" btnText2="Pay in Full" sold={false} />
        <CartSectionComponent title="Pay a deposit of $500 per person:" heighlightedWord="$500 per person" isCounterBtn={true} isCheckoutBtn={true} gap="gap-[136px]" />
      </div>
    </div>
  );
}
