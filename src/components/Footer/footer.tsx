import React from "react";
import Image from "next/image";
import { title } from "process";
import { link } from "fs";

const footerLinks = [
  {
    title: "OUR PAGES",
    links: [
      { label: "Tours", href: "/tours" },
      { label: "About Us", href: "/about" },
      { label: "Our Style", href: "/ourStyle" },
    ],
  },
  {
    title: "TOUR PAGES",
    links: [
      { label: "Private Tours", href: "/privateTours" },
      { label: "Past Tours", href: "/pastTours" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { label: "Contact Us", href: "/contactUs" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Privacy Policy", href: "/privacyPolicy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      {
        label: "Refund / Cancellation Policy",
        href: "/refund-cancellation-policy",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="relative bg-primary-navy 2xl:aspect-[1921/441] py-[24px] min-[360px]:py-[28px] sm:py-[36px] lg:py-[50px] 2xl:py-0 overflow-hidden">
      <Image
        src="/images/landingPage/footer.png"
        alt="footer bg"
        fill
        sizes="100vw"
        className="object-cover object-center absolute inset-0"
      />
      <div className="bg-[linear-gradient(0deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.95)_54.63%,#1E365C_75.11%,#1E365C_100%)] absolute inset-0" />

      <div className="container flex flex-col justify-between h-full gap-[24px] sm:gap-[32px] md:gap-[50px] 2xl:gap-[106px] relative 2xl:!px-[80px] z-10">
        <div className="2xl:pt-[80px] flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[24px] lg:gap-[60px] xl:gap-[100px] 2xl:gap-[148px]">
          {/* Logo & Info Block - Centered on Mobile/Tablet */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-[12px] sm:gap-[18px] md:gap-[18px] lg:gap-[24px] 2xl:gap-[30px] w-full max-w-[520px] md:w-[220px] lg:w-[340px] xl:w-[380px] 2xl:w-[425px] shrink-0 mx-auto md:mx-0">
            <div className="w-[140px] sm:w-[170px] md:w-[160px] lg:w-[200px] 2xl:w-[255px] mx-auto md:mx-0">
              <Image
                src="/images/landingPage/logo.png"
                alt="logo"
                width={255}
                height={74}
                className="w-full h-auto mx-auto md:mx-0"
              />
            </div>
            <div className="text-[12px] min-[360px]:text-[13px] sm:text-[14px] md:text-[12px] lg:text-[14px] leading-[1.45] sm:leading-5 lg:leading-6 font-inter font-normal text-white w-full text-center md:text-left">
              <p>
                Thank you for such a well thought out and memorable trip. The
                sights and people of Morocco are wonderful. I appreciated you
                feeding my nerdy self with information on the geography, animals
                and plants of Morocco.
              </p>
            </div>
          </div>

          {/* Links Grid - Centered on Mobile/Tablet */}
          <div className="grid grid-cols-2 sm:grid-cols-4 flex-1 gap-x-8 gap-y-7 sm:gap-4 md:gap-3 lg:gap-8 2xl:gap-0 w-full max-w-[520px] md:max-w-none mx-auto md:mx-0">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col items-center md:items-start text-center md:text-left gap-[10px] min-[360px]:gap-[12px] sm:gap-[16px] md:gap-[16px] lg:gap-[24px] 2xl:gap-[40px]">
                <p className="font-inter font-black text-[12px] min-[360px]:text-[13px] sm:text-[14px] md:text-[13px] lg:text-[18px] 2xl:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] text-white uppercase tracking-wider sm:tracking-normal">
                  {section.title}
                </p>
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-[6px] min-[360px]:gap-[8px] sm:gap-[12px] md:gap-[10px] lg:gap-[16px] 2xl:gap-[29px]">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-inter font-normal text-[11px] min-[360px]:text-[12px] sm:text-[13px] md:text-[12px] lg:text-[15px] 2xl:text-[16px] leading-[16px] sm:leading-[18px] lg:leading-[19px] text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="2xl:pb-[36px] text-center pt-2 sm:pt-0">
          <p className="font-inter font-medium text-[11px] min-[360px]:text-[12px] sm:text-[13px] 2xl:text-[16px] leading-[17px] text-text-muted">
            ©2024 Wandering Earl, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}