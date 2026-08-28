"use client";

import React from "react";
import Image from "next/image";
import CounterBtn from "@/components/DetailCart/counterBtn";
import { useCart, CartItem } from "@/context/CartContext";

type CartSectionProps = {
  items?: CartItem[];
  onItemsChange?: (items: CartItem[]) => void;
};

export default function CartSection({
  items: propsItems,
  onItemsChange,
}: CartSectionProps = {}) {
  const { cartItems: contextItems, updateQuantity, removeFromCart } = useCart();
  const items = propsItems ?? contextItems;

  const handleUpdateQuantity = (id: string, count: number) => {
    if (onItemsChange) {
      if (count <= 0) {
        onItemsChange(items.filter((i) => i.id !== id));
      } else {
        onItemsChange(
          items.map((i) => (i.id === id ? { ...i, count } : i))
        );
      }
    } else {
      updateQuantity(id, count);
    }
  };

  const handleRemove = (id: string) => {
    if (onItemsChange) {
      onItemsChange(items.filter((i) => i.id !== id));
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="w-full max-w-full xl:max-w-[1038px] rounded-[16px] border border-[#EFEFEF] shadow-[0px_16px_24px_-16px_#00000015] bg-white p-[16px] sm:p-[24px] pb-[24px] sm:pb-[30px] flex flex-col gap-[20px] sm:gap-[24px] font-inter">
      {/* Cart Items List */}
      <div className="flex flex-col gap-[20px] sm:gap-[24px] w-full">
        {items.length === 0 ? (
          <div className="py-12 text-center text-[#8F8F8F] text-[16px]">
            Your cart is currently empty.
          </div>
        ) : (
          items.map((item, index) => {
            const totalDeposit = item.depositPerPerson * item.count;
            const totalPayable = item.unitPrice * item.count;

            return (
              <div
                key={item.id}
                className={`w-full ${
                  index !== items.length - 1
                    ? "border-b border-[#F0F0F0] pb-[20px] sm:pb-[24px]"
                    : "pb-2"
                }`}
              >
                {/* ========================================================================= */}
                {/* 1. MOBILE & TABLET LAYOUT (< lg): Clean Column Flow with Minor Gaps       */}
                {/* ========================================================================= */}
                <div className="flex flex-col gap-[14px] w-full lg:hidden">
                  {/* Top Row: Image + Title + Delete Cross */}
                  <div className="flex items-start justify-between gap-[12px] w-full">
                    <div className="flex items-center gap-[12px] min-w-0 flex-1">
                      <div className="relative w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] rounded-[12px] overflow-hidden shrink-0 bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="70px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <p className="font-semibold text-[15px] sm:text-[16px] text-text-dark leading-[135%]">
                          {item.title} - {item.room}
                        </p>
                      </div>
                    </div>

                    {/* Delete Cross Button */}
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      aria-label={`Remove ${item.title}`}
                      className="w-[24px] h-[24px] rounded-full bg-[#C60F13] hover:bg-[#a80c0f] border-2 border-white shadow-xs text-white flex items-center justify-center shrink-0 transition-transform active:scale-90 cursor-pointer mt-0.5"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="2.5" y1="2.5" x2="7.5" y2="7.5" />
                        <line x1="7.5" y1="2.5" x2="2.5" y2="7.5" />
                      </svg>
                    </button>
                  </div>

                  {/* Middle Row: Unit Price & Quantity Counter */}
                  <div className="flex items-center justify-between gap-[16px] w-full pt-1">
                    <div className="flex flex-col">
                      <span className="text-[12px] text-[#8F8F8F] font-medium">Price</span>
                      <span className="font-semibold text-[15px] sm:text-[17px] text-text-dark">
                        ${item.unitPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="w-[124px] sm:w-[140px] h-[44px] sm:h-[48px] shrink-0">
                      <CounterBtn
                        count={item.count}
                        onIncrement={() => handleUpdateQuantity(item.id, item.count + 1)}
                        onDecrement={() => handleUpdateQuantity(item.id, item.count - 1)}
                        className="w-full h-full flex items-center justify-between rounded-[30px] border border-[#D6D6D6] px-[12px] sm:px-[16px] bg-white"
                      />
                    </div>
                  </div>

                  {/* Bottom Row: Deposit & Total Summary Box */}
                  <div className="flex items-center justify-between bg-[#F8F9FA] rounded-[10px] px-[14px] py-[10px] w-full">
                    <div className="flex flex-col">
                      <span className="text-[12px] text-[#8F8F8F] font-medium">Due Deposit</span>
                      <span className="font-bold text-[16px] sm:text-[18px] text-text-dark leading-tight">
                        ${totalDeposit.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[12px] text-[#8F8F8F] font-medium">Total Trip</span>
                      <span className="text-[13px] sm:text-[14px] font-semibold text-text-dark leading-tight">
                        ${totalPayable.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ========================================================================= */}
                {/* 2. DESKTOP LAYOUT (lg+): Exact 1-Line Figma Matching with 50px Gaps        */}
                {/* ========================================================================= */}
                <div className="hidden lg:flex items-center justify-between gap-[50px] w-full">
                  {/* 1. Image + Title Column (Figma: 331px Fill, 24px Gap, 80px Hug) */}
                  <div className="flex items-center gap-[24px] w-[331px] shrink-0 min-w-0">
                    <div className="relative w-[80px] h-[80px] rounded-[12px] overflow-hidden shrink-0 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-[227px] max-w-[227px] flex flex-col justify-center min-w-0">
                      <p className="font-semibold text-[16px] 2xl:text-[18px] text-text-dark leading-[135%]">
                        {item.title} - {item.room}
                      </p>
                    </div>
                  </div>

                  {/* 2. Unit Price (Figma: Fixed 78px, Hug 24px) */}
                  <div className="w-[78px] shrink-0 text-center">
                    <span className="font-semibold text-[17px] 2xl:text-[18px] text-text-dark whitespace-nowrap">
                      ${item.unitPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* 3. Quantity Counter (Figma: Fixed 180px, Hug 64px, Radius 30px) */}
                  <div className="w-[180px] h-[64px] shrink-0">
                    <CounterBtn
                      count={item.count}
                      onIncrement={() => handleUpdateQuantity(item.id, item.count + 1)}
                      onDecrement={() => handleUpdateQuantity(item.id, item.count - 1)}
                      className="w-full h-full flex items-center justify-between rounded-[30px] border border-[#D6D6D6] px-[20px] bg-white"
                    />
                  </div>

                  {/* 4. Note / Deposit & Total Payable (Figma: Hug 177px, Hug 53px, Gap 10px) */}
                  <div className="w-[177px] shrink-0 flex flex-col text-right gap-[6px] 2xl:gap-[10px]">
                    <span className="font-bold text-[18px] 2xl:text-[20px] text-text-dark leading-none">
                      ${totalDeposit.toLocaleString()}
                    </span>
                    <span className="text-[12px] 2xl:text-[13px] text-[#8F8F8F] whitespace-nowrap leading-tight">
                      ${totalPayable.toLocaleString()} payable in total
                    </span>
                  </div>

                  {/* 5. Cross / Remove Button (Figma: Group 62, 24px x 24px, #C60F13, 3px White Border) */}
                  <div className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      aria-label={`Remove ${item.title}`}
                      className="w-[24px] h-[24px] rounded-full bg-[#C60F13] hover:bg-[#a80c0f] border-2 border-white shadow-xs text-white flex items-center justify-center shrink-0 transition-transform active:scale-90 cursor-pointer"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="2.5" y1="2.5" x2="7.5" y2="7.5" />
                        <line x1="7.5" y1="2.5" x2="2.5" y2="7.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Update Cart Button Row */}
      {items.length > 0 && (
        <div className="flex justify-end pt-2">
          <button
            type="button"
            className="px-[24px] sm:px-[28px] py-[10px] sm:py-[12px] rounded-[30px] bg-[#E9482B]/10 hover:bg-[#E9482B] text-[#E9482B] hover:text-white font-inter font-bold text-[13px] sm:text-[15px] transition-all cursor-pointer active:scale-98"
          >
            Update Cart
          </button>
        </div>
      )}
    </div>
  );
}
