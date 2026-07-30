import React from "react";
import Image from "next/image";

const footerLinks = [
  {
    title: "OUR PAGES",
    links: ["Tours", "About Us", "Our Style"],
  },
  {
    title: "TOUR PAGES",
    links: ["Private Tours", "Past Tours"],
  },
  {
    title: "CONTACT",
    links: ["Contact Us"],
  },
  {
    title: "COMPANY",
    links: ["Privacy Policy", "Terms of Service", "Refund / Cancellation Policy"],
  },
];

export default function Footer() {
  return (
    <div className="relative bg-[#1E365C] 2xl:aspect-[1921/441] py-[30px] sm:py-[40px] lg:py-[50px] 2xl:py-0 overflow-hidden">
      <Image
        src="/images/footer.png"
        alt="footer bg"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center absolute inset-0"
      />
      <div className="bg-[linear-gradient(0deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.95)_54.63%,#1E365C_75.11%,#1E365C_100%)] absolute inset-0" />

      <div className="flex flex-col justify-between h-full gap-[30px] sm:gap-[40px] md:gap-[50px] 2xl:gap-[106px] px-[20px] sm:px-[40px] md:px-[50px] 2xl:px-[80px] relative z-10">
        <div className="2xl:pt-[80px] flex flex-col md:flex-row gap-8 md:gap-[40px] lg:gap-[60px] xl:gap-[100px] 2xl:gap-[148px]">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-[16px] sm:gap-[24px] 2xl:gap-[30px] w-full md:w-[280px] lg:w-[340px] xl:w-[380px] 2xl:w-[425px]">
            <div className="w-[150px] sm:w-[180px] md:w-[200px] 2xl:w-[255px]">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={255}
                height={74}
                className="w-full h-auto mx-auto sm:mx-0"
              />
            </div>
            <div className="text-[13px] sm:text-[14px] leading-6 font-inter font-normal text-white">
              <p>
                Thank you for such a well thought out and memorable trip. The
                sights and people of Morocco are wonderful. I appreciated you
                feeding my nerdy self with information on the geography, animals
                and plants of Morocco.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 flex-1 gap-6 sm:gap-4 md:gap-6 lg:gap-8 2xl:gap-0">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-[16px] sm:gap-[24px] 2xl:gap-[40px]">
                <p className="font-inter font-black text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] leading-[24px] text-white uppercase">
                  {section.title}
                </p>
                <div className="flex flex-col gap-[10px] sm:gap-[16px] 2xl:gap-[29px]">
                  {section.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="font-inter font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[16px] leading-[19px] text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="2xl:pb-[36px] text-center">
          <p className="font-inter font-medium text-[13px] sm:text-[14px] 2xl:text-[16px] leading-[19px] text-[#404040]">
            ©2024 Wandering Earl, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}