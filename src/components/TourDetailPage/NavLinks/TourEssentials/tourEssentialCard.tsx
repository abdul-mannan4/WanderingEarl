import React from "react";
import Image from "next/image";

type TourEssentialProps = {
  IconUrl: string;
  title?: string;
  description: string;
  layout?:string
};

export default function TourEssentialCard({
  IconUrl,
  title,
  description,
  layout="self-start "
  
}: TourEssentialProps) {
  return (
    <div className="flex flex-col rounded-[16px] lg:rounded-[24px] border border-light-gray bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col gap-[10px] sm:gap-[15px] 3xl:gap-[20px] p-4 sm:p-5 3xl:px-[24px] 3xl:pt-[16px] 3xl:pb-[26px]">
        <div className={`flex h-[46px] w-[46px] sm:h-[56px] sm:w-[56px] lg:h-[70px] lg:w-[70px] 3xl:h-[80px] 3xl:w-[80px] items-center justify-center rounded-[12px] bg-[#F5F6F7] shrink-0  ${layout}`}>
          <Image
            src={IconUrl}
            alt={title || "Tour Essential Icon"}
            width={80}
            height={80}
            className="object-contain p-1.5 sm:p-2"
          />
        </div>

        <div className="flex flex-col gap-[6px] sm:gap-[8px] 3xl:gap-[12px]">
          {title && (
            <h3 className={`font-inter font-semibold text-[15px] sm:text-[18px] lg:text-[20px] text-text-dark ${layout}`}>
              {title}
            </h3>
          )}
          <p className="font-inter text-[13px] sm:text-[15px] lg:text-[18px] 3xl:text-[20px] font-normal text-text-dark leading-[20px] sm:leading-[24px] 3xl:leading-[28px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
