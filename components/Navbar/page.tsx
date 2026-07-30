"use client";

import { useState } from "react";

type NavbarProps = {
  className?: string;
  variant?: "transparent" | "solid" | "dark";
};

export default function Navbar({
  className = "",
  variant = "transparent",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const bgStyles = {
    transparent: "bg-transparent",
    solid: "bg-[#1E365C]",
    dark: "bg-black/90",
  };

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 ${bgStyles[variant]} ${className}`}>
      {/* 
        DESKTOP & NEST HUB CONTAINER
        1024px (md/lg) par padding srif px-4 hai.
        1280px (xl) par exact Figma px-[80px] pt-[30px] pb-[20px] active hogi.
      */}
      <div
        className="hidden lg:flex flex-row items-center justify-between px-4  2xl:px-[80px]  pt-3 2xl:pt-[30px] pb-3
        xl:px-[40px]      
       w-full box-border">
        {/* 1. Logo Container (Nest Hub par chota, XL par full size) */}
        <div className="">
<img
  src="/images/logo.png"
  alt="Wandering Earl Tours Logo"
  className="object-contain 
  md:w-[180px] md:h-12
  lg:max-w-[200px] lg:-ml-[1px]
  xl:max-w-[200px] xl:h-auto
  2xl:w-auto 2xl:max-w-none"
/>
        </div>

        <div className="flex items-center gap-1 md:gap-1.5 2xl:gap-[30px] lg:gap-2 font-sans font-medium text-[11px] lg:text-[14px] md:text-[10px] 2xl:text-[18px] text-white/90 antialiased whitespace-nowrap lg:-ml-[1.5px]">
          <a
            href="#"
            className="py-1 px-1.5 xl:py-[10px] xl:px-[16px] hover:text-white transition-colors">
            TOURS
          </a>
          <a
            href="#"
            className="py-1 px-1.5 xl:py-[10px] xl:px-[16px] hover:text-white transition-colors">
            ABOUT US
          </a>
          <a
            href="#"
            className="py-1 px-1.5 xl:py-[10px] xl:px-[16px] hover:text-white transition-colors">
            OUR STYLE
          </a>
          <a
            href="#"
            className="py-1 px-1.5 xl:py-[10px] xl:px-[16px] hover:text-white transition-colors">
            PRIVATE TOURS
          </a>
          <a
            href="#"
            className="py-1 px-1.5 xl:py-[10px] xl:px-[16px] hover:text-white transition-colors">
            PAST TOURS
          </a>
          <a
            href="#"
            className="py-1 px-1.5 xl:py-[10px] xl:px-[16px] hover:text-white transition-colors">
            CONTACT US
          </a>
        </div>

        <div
          className="flex items-center gap-2
        xl:gap-[16px] flex-shrink-0">
          <div className="flex items-center justify-center">
            <img
              src="/images/cart.png"
              alt="Cart Logo"
              className="w-[25px] h-[25px] lg:w-8 lg:h-8  xl:w-auto xl:h-auto"
            />
          </div>

          <button className="h-[32px] lg:h-[36px] xl:h-[40px] bg-[#1E365C] text-white/90 lg:rounded-[24px] md:rounded-[20px] font-inter font-medium text-[11px] lg:text-[13px] xl:text-[14px] leading-none md:px-4 lg:px-6 xl:px-[30px] cursor-pointer flex items-center justify-center flex-shrink-0 whitespace-nowrap hover:bg-[#152744] transition-colors">
            Login
          </button>
        </div>
      </div>

      {/* MOBILE LAYOUT (< 768px) */}
      <div className="flex lg:hidden items-center justify-between w-full px-5  py-3 ">
        <img
          src="/images/logo.png"
          alt="Wandering Earl Tours Logo"
          className="object-contain sm:h-13 h-11"
        />

        <div className="flex items-center gap-3 relative ">
          {/* Login button first */}
          <button className="h-[36px] hidden sm:flex bg-[#1E365C] text-white/90 rounded-[20px] font-inter font-medium text-[12px] px-5 py-3.5 cursor-pointer items-center justify-center whitespace-nowrap hover:bg-[#152744] transition-colors">
            Login
          </button>
          {/* Hamburger second */}
          <button
            onClick={() => setIsOpen(true)}
            className="h-[36px] w-[36px] flex items-center justify-center text-white focus:outline-none cursor-pointer "
            aria-label="Toggle Navigation ">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Drawer */}
          <div
            className="h-screen w-[60vw] 
      bg-[linear-gradient(180deg,rgba(30,54,92,100)_100%,rgba(30,54,92,0.70)_100%,rgba(30,54,92,0.5)_100%)] 
      backdrop-blur-md
      px-6 pt-2 pb-6 space-y-4 border-r border-white/10">
            <div className="flex justify-end py-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white cursor-pointer hover:scale-110"
                aria-label="Close Navigation">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="w-auto flex justify-center px-[5px] py-[10px]">
              <img src="/images/logo.png" alt="" className="h-12 w-auto " />
            </div>

            <div className="flex flex-col gap-3 font-inter font-medium text-[14px] text-white/90">
              <a href="#" className="py-2 hover:text-white transition-colors">
                TOURS
              </a>
              <a href="#" className="py-2 hover:text-white transition-colors">
                ABOUT US
              </a>
              <a href="#" className="py-2 hover:text-white transition-colors">
                OUR STYLE
              </a>
              <a href="#" className="py-2 hover:text-white transition-colors">
                PRIVATE TOURS
              </a>
              <a href="#" className="py-2 hover:text-white transition-colors">
                PAST TOURS
              </a>
              <a href="#" className="py-2 hover:text-white transition-colors">
                CONTACT US
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/90 font-inter text-[14px]">
                <button className="flex flex-row gap-1">
                  <img
                    src="/images/cart.png"
                    alt="Cart Logo"
                    className="w-10 h-10"
                  />
                </button>
              </div>

              <button className="h-[38px] bg-white cursor-pointer  text-[#1E365C] rounded-[24px] font-inter font-medium text-[14px] px-[24px]">
                Login
              </button>
            </div>
          </div>

          {/* Outside Click Area */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </nav>
  );
}
