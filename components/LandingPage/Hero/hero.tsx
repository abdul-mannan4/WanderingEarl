// Hero.tsx

export default function Hero() {
  return (
    <div className="container flex justify-start items-center box-border pt-[85px] min-[360px]:pt-[95px] min-[400px]:pt-[105px] min-[430px]:pt-[110px] sm:pt-[135px] md:pt-[160px] lg:pt-[180px] 2xl:pt-[303px]">
      {/* Gap between Text Group and Buttons */}
      <div className="flex flex-col gap-[12px] min-[360px]:gap-[16px] sm:gap-[24px] md:gap-[40px] lg:gap-[45px] xl:gap-[60px] w-full items-center text-center">
        {/* Text Group */}
        <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] xl:gap-[25px] items-center text-center w-full">
          <h1 className="font-sans font-black max-[300px]:whitespace-normal max-sm:whitespace-nowrap text-[16px] min-[360px]:text-[19px] min-[400px]:text-[22px] min-[430px]:text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] leading-[1.25] sm:leading-[1.2] lg:leading-[77px] text-white uppercase w-full flex justify-center items-center text-center">
            <span>
              UNIQUE, LOCAL, SMALL{" "}
              <span className="text-accent-orange">GROUPS</span>
            </span>
          </h1>

          <p className="font-inter font-medium text-[12px] min-[360px]:text-[13px] sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[24px] leading-[1.35] md:leading-[29px] text-white text-center drop-shadow-sm">
            Tours that show you something new.
          </p>
        </div>

        {/* Buttons Group - Proportional & Sleek on Mobile */}
        <div className="flex sm:flex-row flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center items-center w-full">
          <button className="bg-primary-navy hover:bg-primary-navy-hover text-white font-inter font-semibold text-[11px] min-[360px]:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[18px] lg:leading-[22px] md:leading-[18px] py-[6px] min-[360px]:py-[7.5px] sm:py-[12px] md:py-[14px] lg:py-[16px] px-[16px] sm:px-[26px] md:px-[28px] lg:px-[30px] rounded-[30px] cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 w-[130px] min-[360px]:w-[142px] sm:w-auto flex items-center justify-center shadow-md">
            Visit 2024 Tours
          </button>

          <button className="bg-accent-orange hover:bg-accent-orange-hover text-white font-inter font-semibold text-[11px] min-[360px]:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[18px] lg:leading-[22px] md:leading-[18px] py-[6px] min-[360px]:py-[7.5px] sm:py-[12px] md:py-[14px] lg:py-[16px] px-[16px] sm:px-[26px] md:px-[28px] lg:px-[30px] rounded-[30px] cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 w-[130px] min-[360px]:w-[142px] sm:w-auto flex items-center justify-center shadow-md">
            Visit 2025 Tours
          </button>
        </div>
      </div>
    </div>
  );
}
