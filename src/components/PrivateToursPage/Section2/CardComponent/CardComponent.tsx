// Niche Card/nicheCard.tsx
import React from 'react';
import Image from 'next/image';

interface NicheCardProps {
  Icon: string
  label: string;
}

export const NicheCard: React.FC<NicheCardProps> = ({ Icon, label }) => {
  return (
    <div className="bg-white rounded-[16px] sm:rounded-[20px] 2xl:rounded-[24px] border border-[#D6D6D6] shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1)] 
    hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.15)] 
    transition-all duration-300 flex flex-col items-center justify-center 
    gap-[12px] sm:gap-[16px] xl:gap-[24px] 2xl:gap-[30px] px-4 sm:px-5 xl:px-8 2xl:px-[40px] pt-3 sm:pt-5 xl:pt-6 2xl:pt-[30px] pb-4 sm:pb-6 xl:pb-8 2xl:pb-[40px] w-full 2xl:w-[425px] h-[150px] sm:h-[180px] lg:h-[200px] xl:h-[215px] 2xl:h-[229px] mx-auto">
      <div className="relative w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px] shrink-0">
        <Image
          src={Icon}
          alt={label}
          fill
          sizes="(max-width: 1536px) 80px, 100px"
          className="object-contain"
        />
      </div>
      <p className="font-inter font-medium text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[24px] text-center text-text-dark leading-[1.22]">
        {label}
      </p>
    </div>
  );
};

export default NicheCard;