import React from "react";
import Image from "next/image";
import { TeamData } from "./teamData";

export default function TeamPage() {
  return (
    <div className="pt-8 sm:pt-16 md:pt-[100px] flex flex-col gap-12 sm:gap-16 md:gap-[80px] lg:gap-[120px] container">
      {TeamData.map((member, index) => {
        const isReversed = index % 2 !== 0; // even index (0,2,4) = text left; odd (1,3,5) = image left

        return (
          <div
            key={member.name}
            className={`flex flex-col ${
              isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center lg:items-start xl:items-center gap-6 sm:gap-8 lg:gap-[40px] xl:gap-[64px]`}
          >
            {/* Image - Responsive size (40% on lg, 44% on xl, max-622px on 2xl) to prevent text squishing */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:w-[40%] xl:w-[44%] 2xl:max-w-[622px] aspect-square rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 1024px) 100vw, 622px"
                className="object-cover"
              />
            </div>

            {/* Text Column - flex-1 w-full so text has plenty of room to breathe on lg & xl */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[32px] xl:gap-[48px] font-inter text-text-dark text-[15px] sm:text-[16px] xl:text-[18px] leading-relaxed w-full flex-1 min-w-0">
              {/* Name & Position: order-1 (top) on mobile/tablet flex-col (< lg), order-2 (bottom) on desktop lg:flex-row */}
              <div className="order-1 lg:order-2 flex items-center gap-[8px] max-w-full font-medium text-[18px] md:text-[20px]">
                <span className="text-text-primary-navy font-semibold">{member.name}</span>
                <span className="font-light text-[20px] text-text-light-gray">|</span>
                <span className="text-[#8F8F8F]">{member.position}</span>
                <hr className="hidden lg:block flex-1 border-t border-text-light-gray" />
              </div>

              {/* Description Paragraphs: Responsive paragraph spacing */}
              <div className="order-2 lg:order-1 flex flex-col gap-3 sm:gap-4 lg:gap-[20px] xl:gap-[24px]">
                <p>{member.description1}</p>
                {member.despcription2 && <p>{member.despcription2}</p>}
                {member.despcription3 && <p>{member.despcription3}</p>}
                {member.despcription4 && <p>{member.despcription4}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}