import React from 'react';

interface FeatureCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description }) => {
  return (
    <div className="bg-white rounded-[16px] sm:rounded-[24px] border-[1px] flex flex-col items-center justify-between gap-[24px] sm:gap-[32px] 2xl:gap-[40px] border-[#D6D6D6] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.16)] pb-[24px] sm:pb-[32px] 2xl:pb-[40px] w-full h-full">
      <div className="px-[20px] sm:px-[30px] 2xl:px-[40px] pt-[20px] sm:pt-[26px] 2xl:pt-[30px] flex flex-col gap-[12px] sm:gap-[14px] 2xl:gap-[16px] items-center text-center">
        <div className="bg-[#1E365C]/5 rounded-[16px] border-[2px] border-[#FEF6F4]">
          <div className="pt-[20px] pb-[21px] px-[18px] sm:pt-[27px] sm:pb-[28px] sm:px-[25px]">
            <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-[#E84A27]" />
          </div>
        </div>
        <div className="font-inter font-bold text-[18px] sm:text-[20px] 2xl:text-[24px] text-center leading-[1.2] 2xl:leading-[29px]">
          <p>{title}</p>
        </div>
        <div className="font-normal text-[14px] sm:text-[16px] 2xl:text-[20px] text-center text-[#404040] 2xl:h-[72px] line-clamp-3 leading-[1.35] 2xl:leading-[24px]">
          <p>{description}</p>
        </div>
      </div>
      <button className="flex items-center justify-center gap-[10px] px-[20px] sm:px-[24px] 2xl:px-[30px] pt-[10px] pb-[11px] sm:pt-[12px] sm:pb-[13px] 2xl:pt-[15px] 2xl:pb-[16px] rounded-[30px] border border-[#1E365C] cursor-pointer text-[14px] sm:text-[16px] 2xl:text-[18px] font-inter font-semibold text-[#1E365C] leading-[22px] hover:bg-[#1E365C]/5 transition-colors">
        <span>Learn More</span>
      </button>
    </div>
  );
};

export default FeatureCard;
