// Hero.tsx

export default function Hero() {
  return (
    <div className="container flex justify-start items-center box-border pt-[75px] min-[360px]:pt-[85px] sm:pt-[130px] md:pt-[160px] lg:pt-[180px] 2xl:pt-[303px]">
      {/* Gap between Text Group and Buttons */}
      <div className="flex flex-col gap-[14px] min-[360px]:gap-[18px] sm:gap-[24px] md:gap-[40px] lg:gap-[45px] xl:gap-[60px] w-full items-center text-center">
        {/* Text Group */}
        <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[5px] xl:gap-[25px] items-center w-full">
          <h1 className="font-sans font-black max-[300px]:whitespace-normal max-[350px]:whitespace-nowrap max-[350px]:text-[14px] text-[18px] min-[360px]:text-[21px] min-[400px]:text-[28px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[64px] leading-[1.25] sm:leading-[1.2] lg:leading-[77px] text-white uppercase w-full flex justify-center items-center text-center">
            <span>
              UNIQUE, LOCAL, SMALL{" "}
              <span className="text-accent-orange">GROUPS</span>
            </span>
          </h1>

          <p className="font-inter font-medium text-[12px] min-[360px]:text-[13px] sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[24px] leading-[1.35] md:leading-[29px] text-white text-center">
            Tours that show you something new.
          </p>
        </div>

        {/* Buttons Group */}
        <div className="flex sm:flex-row flex-col gap-[10px] sm:gap-[10px] md:gap-[12px] justify-center items-center w-full">
          <button className="bg-primary-navy hover:bg-primary-navy-hover text-white font-inter font-semibold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[18px] lg:leading-[22px] md:leading-[18px] py-[9px] sm:py-[12px] md:py-[14px] lg:py-[16px] px-[22px] sm:px-[26px] md:px-[28px] lg:px-[30px] rounded-[30px] cursor-pointer transition-all duration-200 w-[160px] sm:w-auto flex items-center justify-center shadow-md">
            Visit 2024 Tours
          </button>

          <button className="bg-accent-orange hover:bg-accent-orange-hover text-white font-inter font-semibold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[18px] lg:leading-[22px] md:leading-[18px] py-[9px] sm:py-[12px] md:py-[14px] lg:py-[16px] px-[22px] sm:px-[26px] md:px-[28px] lg:px-[30px] rounded-[30px] cursor-pointer transition-all duration-200 w-[160px] sm:w-auto flex items-center justify-center shadow-md">
            Visit 2025 Tours
          </button>
        </div>
      </div>
    </div>
  );
}
