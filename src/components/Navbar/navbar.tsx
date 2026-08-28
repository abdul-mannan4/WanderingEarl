"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  className?: string;
  variant?: "transparent" | "solid";
};

const navLinks =
  [
    { label: "TOURS", href: "/tours" },
    { label: "ABOUT US", href: "/aboutUs" },
    { label: "OUR STYLE", href: "/ourStyle" },
    { label: "PRIVATE TOURS", href: "/privateTours" },
    { label: "PAST TOURS", href: "/pastTours" },
    { label: "CONTACT US", href: "/contactUS" },
  ]

const overlayRoutes = ["/", "/tours"];
const relativeRoutes = ["/aboutUS", "/ourStyle", "/privateTours", "/pastTours", "/contactUS",];


export default function Navbar({
  className = "",
  variant = "transparent",
}: NavbarProps) {


  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const isOverlay = overlayRoutes.includes(pathName);
  const positionClass = isOverlay ? "absolute top-0 left-0" : "relative";


  const bgStyles = {
    transparent: "bg-transparent",
    solid: "bg-primary-navy",

  };

  const buttonStyles = {

    transparent: "bg-primary-navy text-white/90 hover:bg-primary-navy-hover",
    solid: "bg-accent-orange text-white hover:bg-accent-orange-hover",
  }

  const isLandingPage = pathName === "/"

  return (
    <nav
      className={` ${positionClass} w-full z-50 ${bgStyles[variant]} ${className}`}>
      <div
        className="container hidden lg:flex flex-row items-center justify-between pt-3 2xl:pt-[30px] pb-3 2xl:!px-[80px] box-border lg:!px-[20px]">
        {/* 1. Logo Container (Nest Hub par chota, XL par full size) */}
        <Link href="/">
          <img
            src="/images/landingPage/logo.png"
            alt="Wandering Earl Tours Logo"
            className="object-contain 
            md:w-[180px] md:h-12
            lg:max-w-[170px] lg:-ml-[1px]
            xl:max-w-[200px] xl:h-auto
            2xl:w-auto 2xl:max-w-none"
          />
        </Link>


        <div className="flex items-center gap-1.5
         min-[1024px]:gap-1.5 min-[1280px]:gap-3
          min-[1536px]:gap-[20px] min-[1800px]:gap-[30px] 
          font-sans font-medium text-[11px] min-[1024px]:text-[13px] min-[1280px]:text-[14px] min-[1536px]:text-[15px] min-[1800px]:text-[18px] text-white/90 antialiased whitespace-nowrap min-[1024px]:-ml-[1.5px]">


          {navLinks.map((link) => {
            const isActive = pathName === link.href;

            return (
              <Link href={link.href}
                key={link.href}
                className={`py-1 px-1.5 lg:px-1.5 lg:py-1.5 xl:py-[10px] xl:px-[16px] hover:text-white transition-colors 
                ${isLandingPage ? "text-white" : "text-[#8F8F8F]"}
                
                ${isActive ? "bg-[#FFFFFF1A] text-white rounded-[12px]" : ""
                  }`}>
                {link.label}
              </Link>
            );



          })}

        </div>

        <div
          className="flex items-center gap-3
        xl:gap-[16px] flex-shrink-0">
          <div className="flex items-center justify-center">
            <img
              src="/images/landingPage/cart.png"
              alt="Cart Logo"
              className="w-[25px] h-[25px] lg:w-8 lg:h-8  xl:w-auto xl:h-auto"
            />
          </div>

          <button className={`h-[32px] lg:h-[36px] xl:h-[40px]  lg:rounded-[24px] md:rounded-[20px] font-inter font-medium text-[11px] lg:text-[13px] xl:text-[14px] leading-none md:px-4 lg:px-6 xl:px-[30px] cursor-pointer flex items-center justify-center flex-shrink-0 whitespace-nowrap  transition-colors *:
            ${buttonStyles[variant]}
            `}>
            Login
          </button>



        </div>
      </div>

      {/* MOBILE LAYOUT (< 1024px) */}
      <div className="flex lg:hidden items-center justify-between w-full px-2 sm:px-5 py-3">
        <Link href="/" className="shrink-0">
          <img
            src="/images/landingPage/logo.png"
            alt="Wandering Earl Tours Logo"
            className="object-contain h-14  sm:h-16 w-auto max-w-[180px] sm:max-w-[220px]"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Login button */}
          <button
            className={`hidden sm:flex rounded-[20px] font-inter font-medium text-[12px] px-7 py-3 cursor-pointer items-center justify-center whitespace-nowrap transition-colors ${buttonStyles[variant]}`}
          >
            Login
          </button>
          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-8 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] max-h-[100dvh] w-[63vw] sm:w-[55vw] z-50 bg-[#1E365C] flex flex-col overflow-hidden p-5 border-r border-white/10 shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="shrink-0 flex justify-between items-center pb-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="shrink-0">
            <img
              src="/images/landingPage/logo.png"
              alt="Logo"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links with scrollable middle area */}
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 font-inter font-medium text-[14px] sm:text-[15px]">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                href={link.href}
                key={link.href}
                className={`py-2 px-4 hover:text-white transition-colors ${isActive ? "bg-[#FFFFFF1A] text-white rounded-[12px] max-w-full font-bold" : ""
                  } ${isLandingPage ? "text-white" : "text-[#8F8F8F]"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer: Cart + Login (always pinned at bottom) */}
        <div className="shrink-0 pt-4 mt-auto border-t border-white/20 flex items-center justify-between gap-3">
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer" aria-label="Cart">
            <img
              src="/images/landingPage/cart.png"
              alt="Cart Logo"
              className="w-7 h-7 object-contain"
            />
          </button>

          <button className="h-[40px] bg-accent-orange hover:bg-accent-orange-hover active:scale-[0.98] cursor-pointer text-white rounded-[24px] font-inter font-bold text-[14px] px-6 transition-all shadow-md flex items-center justify-center">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
