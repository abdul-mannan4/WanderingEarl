"use client";

import React, { useState } from "react";
import OrderSummary from "../Checkout/OrderSummary/orderSummary";
import Coupon from "../Checkout/Coupon/coupon";
import CartSection from "./CartSection/cartSection";
import { useCart } from "@/context/CartContext";

export default function CartComponent() {
  const { cartItems, totalDeposit, totalTripCost, dueToday, futurePayments } = useCart();
  const [coupon, setCoupon] = useState("");

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="container 2xl:!px-[80px] mx-auto pt-8 sm:pt-12 md:pt-[60px] 2xl:pt-[80px]">
        {/* Page Main Title */}
        <h1 className="font-inter font-black text-[32px] sm:text-[44px] md:text-[54px] 2xl:text-[63px] text-[#1E1E1E] uppercase tracking-tight pb-[20px] sm:pb-[30px] border-b border-light-gray">
          CART
        </h1>

        <div className="mt-[32px] sm:mt-[48px] md:mt-[60px] 2xl:mt-[80px] flex flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-start gap-[24px] md:gap-[36px] lg:gap-[48px] xl:gap-[48px] 3xl:gap-[129px]">
          {/* Left Main Content (1038px width) */}
          <div className="flex flex-col gap-[36px] sm:gap-[48px] 2xl:gap-[60px] font-inter w-full flex-1 max-w-full xl:max-w-[1038px] min-w-0">
            <CartSection />
            <Coupon
              value={coupon}
              onChange={setCoupon}
              onApply={(code) => setCoupon(code)}
            />
          </div>

          {/* Right Side Order Summary Card (Max 593px width) */}
          <div className="w-full max-w-full xl:max-w-[420px] 2xl:max-w-[520px] 3xl:max-w-[593px] flex justify-center shrink-0 xl:sticky xl:top-[30px] 2xl:top-[40px] self-center xl:self-start mx-auto xl:mx-0">
            <OrderSummary
              isCartPage={true}
              items={cartItems}
              depositPerPerson={500}
              totalTripCost={totalTripCost}
              dueToday={dueToday}
              futurePayments={futurePayments}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
