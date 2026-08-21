import React from "react";
import Image from "next/image";

type TourEssentialProps = {
  IconUrl: string;
  title: string;
  description: string;
};

export default function TourEssentialCard({
  IconUrl,
  title,
  description,
}: TourEssentialProps) {
  return (
    <div className="flex flex-col xl:gap-[40px] md:gap-[20px] gap-[10px] rounded-[16px] lg:rounded-[24px] border border-light-gray">
      <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] px-[24px] pt-[16px] pb-[26px]">
       <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#F5F6F7] sm:h-[60px] sm:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px]">
  <Image
    src={IconUrl}
    alt={title}
    width={80}
    height={80}
    className="h-[32px] w-[32px] object-contain sm:h-[38px] sm:w-[38px] lg:h-[45px] lg:w-[45px] xl:h-[50px] xl:w-[50px]"
  />
</div>

        <div className="flex flex-col gap-[8px] md:gap-[10px] xl:gap-[12px]">
          <h1 className="font-inter font-semibold text-[12px] sm:text-[16px] lg:text-[20px] text-text-dark">
            {title}
          </h1>
          <p className="font-inter text-[12px] sm:text-[16px] lg:text-[20px] font-normal text-text-dark leading-[28px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
