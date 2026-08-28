"use client";

import React from "react";
import Link from "next/link";
import { Tour } from "@/components/data/type";
import WalletSvg from "./walletSvg";
import { CartItem } from "@/context/CartContext";

type OrderSummaryProps = {
  tour?: Tour | string;
  room?: string;
  guests?: number;
  depositPerPerson?: number;
  totalTripCost?: number;
  dueToday?: number;
  futurePayments?: number;
  items?: CartItem[];
  isCartPage?: boolean;
};

export default function OrderSummary({
  tour,
  room,
  guests = 1,
  depositPerPerson = 500,
  totalTripCost = 0,
  dueToday = 0,
  futurePayments = 0,
  items = [],
  isCartPage = false,
}: OrderSummaryProps) {
  // If dynamic items are passed from Cart, calculate summary values
  const hasItems = items.length > 0;
  
  // Calculate only from items if on cart/checkout flow
  const calculatedDueToday = hasItems
    ? items.reduce((sum, item) => sum + item.depositPerPerson * item.count, 0)
    : 0;
  const calculatedTotal = hasItems
    ? items.reduce((sum, item) => sum + item.unitPrice * item.count, 0)
    : 0;
  const calculatedFuturePayments = hasItems
    ? Math.max(0, calculatedTotal - calculatedDueToday)
    : 0;

  return (
    <div className="h-fit self-start shrink-0 flex flex-col shadow-[0px_24px_48px_-16px_#00000020] rounded-[24px] overflow-hidden border border-gray-100 w-full max-w-full xl:max-w-[593px] bg-white font-inter">
      {/* Red/Orange Card Header */}
      <div className="bg-[#E9482B] px-[20px] sm:px-[36px] 2xl:px-[60px] py-[20px] sm:py-[28px] 2xl:py-[33px] text-center">
        <h2 className="font-inter font-black text-white text-[18px] sm:text-[22px] 2xl:text-[24px] uppercase tracking-tight leading-tight">
          {isCartPage ? "CART TOTALS" : "ORDER SUMMARY"}
        </h2>
      </div>

      {/* White Card Body (Figma Frame 170: Vertical Flow, Gap 30px) */}
      <div className="bg-white p-[20px] sm:p-[28px] 2xl:p-[36px] flex flex-col gap-[24px] 2xl:gap-[30px] font-inter">
        {/* Dynamic Cart Items list (Shown during Checkout) */}
        {!isCartPage && (
          <>
            {hasItems ? (
              <div className="flex flex-col gap-[24px] 2xl:gap-[30px]">
                {items.map((item) => (
                  <React.Fragment key={item.id}>
                    <div className="flex justify-between items-start gap-3 w-full">
                      <div className="flex-1 min-w-0 max-w-[50%]">
                        <p className="font-semibold text-[15px] sm:text-[17px] 2xl:text-[18px] leading-[135%] text-[#8F8F8F]">
                          {item.title} - {item.room}{" "}
                          <span className="font-semibold text-text-muted whitespace-nowrap">
                            × {item.count}
                          </span>
                        </p>
                      </div>
                      <div className="shrink-0 text-end flex flex-col gap-0.5 text-text-muted">
                        <span className="font-bold text-text-dark text-[16px] sm:text-[18px] 2xl:text-[20px]">
                          ${(item.depositPerPerson * item.count).toLocaleString()}
                        </span>
                        <span className="text-[11px] sm:text-[13px] font-semibold text-[#8F8F8F]">
                          ${(item.unitPrice * item.count).toLocaleString()} payable in total
                        </span>
                      </div>
                    </div>
                    {/* Divider line after each tour */}
                    <div className="h-[1px] w-full bg-light-gray" />
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <div className="py-4 text-center text-[#8F8F8F] text-[15px]">
                Your cart is currently empty.
              </div>
            )}
          </>
        )}

        {/* Subtotal */}
        <div className="flex justify-between items-center text-[15px] sm:text-[17px] 2xl:text-[20px] font-semibold text-[#8F8F8F]">
          <span>Subtotal</span>
          <span className="font-semibold text-text-dark">
            ${calculatedDueToday.toLocaleString()}
          </span>
        </div>

        <div className="h-[1px] w-full bg-light-gray" />

        {/* Due Today */}
        <div className="flex justify-between items-center font-semibold text-[15px] sm:text-[17px] 2xl:text-[20px]">
          <span className="text-text-dark">Due Today</span>
          <span className="font-black text-accent-orange text-[17px] sm:text-[19px] 2xl:text-[20px]">
            ${calculatedDueToday.toLocaleString()}
          </span>
        </div>

        {/* Future Payments */}
        <div className="flex justify-between items-center font-semibold text-[15px] sm:text-[17px] 2xl:text-[20px]">
          <span className="text-text-dark">Future Payments</span>
          <span className="font-black text-accent-orange text-[17px] sm:text-[19px] 2xl:text-[20px]">
            ${calculatedFuturePayments.toLocaleString()}
          </span>
        </div>

        <div className="h-[1px] w-full bg-light-gray" />

        {/* Payment Terms Link */}
        <div
          className={`flex flex-col items-center font-inter pt-1 ${
            isCartPage ? "gap-[40px]" : "gap-[16px] sm:gap-[20px]"
          }`}
        >
          <a
            href="/paymentTerms"
            className="underline decoration-solid text-[14px] sm:text-[16px] 2xl:text-[18px] leading-[22px] text-[#1E365C] font-normal hover:text-[#E9482B] transition-colors underline-offset-3"
          >
            Payment Terms and Schedule
          </a>

          {/* Cart Page: "Proceed to Checkout" (Only active when items exist) | Checkout Page: "Secure Checkout" */}
          {isCartPage ? (
            hasItems ? (
              <Link
                href="/checkout"
                className="w-full py-[14px] sm:py-[18px] 2xl:py-[20px] rounded-[40px] bg-[#1E365C] hover:bg-[#152744] text-white font-bold text-[16px] sm:text-[18px] text-center transition-all shadow-md active:scale-95 block"
              >
                Proceed to Checkout
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="w-full py-[14px] sm:py-[18px] 2xl:py-[20px] rounded-[40px] bg-gray-200 text-gray-400 font-bold text-[16px] sm:text-[18px] text-center cursor-not-allowed block select-none"
              >
                Proceed to Checkout
              </button>
            )
          ) : (
            <div className="flex items-center gap-[8px] sm:gap-[10px] rounded-[8px] bg-[#1AA9030D] font-semibold px-[12px] py-[6px] text-[13px] sm:text-[15px] 2xl:text-[16px] text-[#1AA903]">
              <WalletSvg />
              <span>Secure Checkout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
