"use client";

import React from "react";
import Link from "next/link";
import { WalletSvg2 } from "../OrderSummary/walletSvg";

type PaymentSuccessProps = {
  email?: string;
};

export default function PaymentSuccessStep({ email }: PaymentSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-[100px]  animate-fade-in">
      {/* Credit Card Success Icon from Figma */}
     
     
      <div className="flex flex-col items-center gap-[30px]">
         
        <div className="w-20 h-20 sm:w-[157px] sm:h-[157px] rounded-full bg-[#E9482B0D] flex items-center justify-center shadow-inner relative ">
        
        <WalletSvg2 />
        </div>

        
          <h2 className="text-[20px] font-medium text-[#404040]">
          Your Payment Was Successful!
         </h2>
        
      </div>

   <div className="mt-[160px] max-w-[294px] w-full">
  <Link
    href="/"
    className="px-[48px] py-[20px] w-full rounded-[40px] bg-[#1E365C] hover:bg-[#152744] text-white text-[20px] font-bold transition-all shadow-md active:scale-95 block text-center"
  >
    Confirm
  </Link>
</div>
    </div>
  );
}
