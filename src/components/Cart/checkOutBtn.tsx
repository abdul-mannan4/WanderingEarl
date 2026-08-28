"use client";

import React from 'react'
import Link from 'next/link'

type CheckOutBtnProps = {
  tourId?: string;
  guests?: number;
  roomOption?: string;
  paymentOption?: string;
};

export default function CheckOutBtn({
  tourId = "wander-across-mexico-2024",
  guests = 1,
  roomOption = "Single Supplement",
  paymentOption = "Deposit",
}: CheckOutBtnProps) {
  const queryParams = new URLSearchParams({
    guests: String(guests),
    room: roomOption,
    payment: paymentOption,
  });

  return (
    <Link
      href={`/checkout/${tourId}?${queryParams.toString()}`}
      className='w-full h-[48px] sm:h-[52px] 2xl:h-[58px] flex items-center justify-center px-4 sm:px-6 bg-primary-navy text-white font-inter font-semibold text-[14px] sm:text-[16px] rounded-full whitespace-nowrap hover:opacity-90 transition-opacity cursor-pointer text-center'
    >
      Checkout
    </Link>
  );
}

