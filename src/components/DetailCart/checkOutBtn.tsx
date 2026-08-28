"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

type CheckOutBtnProps = {
  tourId?: string;
  guests?: number;
  roomOption?: string;
  paymentOption?: string;
  title?: string;
  image?: string;
  price?: number;
};

export default function CheckOutBtn({
  tourId = "wander-across-mexico-2024",
  guests = 1,
  roomOption = "Single Supplement",
  paymentOption = "Deposit",
  title = "Wander Across Mexico",
  image = "/images/cardImages/Card1.png",
  price = 4450,
}: CheckOutBtnProps) {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleCheckoutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Add selected tour to global cart
    addToCart({
      tourId,
      title: title || tourId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      room: roomOption,
      image: image || "/images/cardImages/Card1.png",
      unitPrice: price || (roomOption.toLowerCase().includes("single") ? 4450 : 3975),
      depositPerPerson: 500,
      count: guests,
    });

    // Navigate to Cart page (or Checkout)
    router.push("/cart");
  };

  return (
    <button
      type="button"
      onClick={handleCheckoutClick}
      className="w-full h-[48px] sm:h-[52px] 2xl:h-[58px] flex items-center justify-center px-4 sm:px-6 bg-primary-navy hover:bg-[#152744] text-white font-inter font-bold text-[15px] sm:text-[16px] 2xl:text-[18px] rounded-full whitespace-nowrap shadow-sm active:scale-98 transition-all cursor-pointer text-center"
    >
      Checkout
    </button>
  );
}
