"use client";

import React from "react";
import Link from "next/link";
import { WalletSvg2 } from "../OrderSummary/walletSvg";

type PaymentSuccessProps = {
  email?: string;
};

export default function PaymentSuccessStep({ email }: PaymentSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-[54px] sm:mt-[75px] 2xl:mt-[100px] animate-fade-in font-inter">
      {/* Credit Card Success Icon */}
      <div className="flex flex-col items-center gap-[20px] sm:gap-[26px] 2xl:gap-[30px]">
        <div className="w-[84px] h-[84px] sm:w-[110px] sm:h-[110px] lg:w-[157px] lg:h-[157px] rounded-full bg-[#E9482B0D] flex items-center justify-center shadow-inner relative">
          <WalletSvg2 className="w-[46px] h-[40px] sm:w-[58px] sm:h-[51px] lg:w-[80px] lg:h-[70px]" />
        </div>

        <h2 className="text-[17px] sm:text-[20px] font-medium text-[#404040]">
          Your Payment Was Successful!
        </h2>
      </div>

      <div className="mt-[60px] sm:mt-[90px] 2xl:mt-[140px] max-w-[260px] sm:max-w-[294px] w-full">
        <Link
          href="/"
          className="px-[32px] sm:px-[48px] py-[14px] sm:py-[18px] 2xl:py-[20px] w-full rounded-[40px] bg-[#1E365C] hover:bg-[#152744] text-white text-[16px] sm:text-[20px] font-bold transition-all shadow-md active:scale-95 block text-center"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}
