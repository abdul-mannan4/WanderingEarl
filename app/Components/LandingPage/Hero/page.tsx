// Hero.tsx

export default function Hero() {
  return (
    <div className="w-full flex justify-start items-center box-border pt-[100px]   md:pt-[160px] lg:pt-[180px] 2xl:pt-[303px] ">
      {/* Gap between Text Group and Buttons set to exact 60px */}
      <div className="flex flex-col gap-[24px]  sm:gap-[20px] md:gap-[40px]  lg:gap-[45px]  xl:gap-[60px] w-full  items-center text-center ">
        {/* Text Group */}
        <div className="flex flex-col  md:gap-[5px] xl:gap-[25px]  items-center w-full origin-right">
          <h1 className="font-sans font-black xl:text-[64px] lg:text-[45px] md:text-[40px] sm:text-[30px] text-[20px]  lg:leading-[77px]  text-white uppercase whitespace-nowrap w-full text-justify flex justify-center items-center ">
            <span className="">
              UNIQUE, LOCAL, SMALL{" "}
              <span className="text-[#E9482B]">GROUPS</span>
            </span>
          </h1>

          <p className="font-inter font-medium xl:text-[24px] lg:text-[22px] md:text-[16px] sm:text-[14px] text-[12px] leading-[29px] text-white">
            Tours that show you something new.
          </p>
        </div>

        {/* Buttons Group */}
        <div className="flex sm:flex-row flex-col gap-[8px]  justify-center items-center md:gap-[12px] sm:gap-[10px]">
          <button className="bg-[#1E365C] hover:bg-[#152744] text-white font-inter font-semibold lg:leading-[22px] lg:text-[18px] md:text-[14px] text-[12px]
          md:leading-[18px]
          lg:pt-[16px] lg:pb-[16px] lg:px-[30px] 
          md:pt-[14px] md:pb-[14px] md:px-[28px]
           sm:pt-[12px] sm:pb-[12px] sm:px-[26px]
             pt-[8px] pb-[8px] px-[18px]
            rounded-[30px] cursor-pointer transition-all duration-200 self-center
          ">
            Visit 2024 Tours
          </button>

          <button className="bg-[#E9482B] hover:bg-[#d13a1f] text-white font-inter font-semibold lg:leading-[22px] lg:text-[18px] md:text-[14px] text-[12px]
          md:leading-[18px]
          lg:pt-[16px] lg:pb-[16px] lg:px-[30px] 
          md:pt-[14px] md:pb-[14px] md:px-[28px]
           sm:pt-[12px] sm:pb-[12px] sm:px-[26px]
             pt-[8px] pb-[8px] px-[18px]
            rounded-[30px] cursor-pointer transition-all duration-200 self-center">
            Visit 2025 Tours
          </button>
        </div>
      </div>
    </div>
  );
}
