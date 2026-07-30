export default function CountryMap() {
  return (
    <div className="relative z-0">
      <div className="pt-[50px] md:pt-[90px] 2xl:pt-[103px] relative">
        <div className="absolute -top-[240px] sm:-top-[300px] md:-top-[360px] 2xl:-top-[60px] -left-[60px] sm:-left-[60px] md:-left-[100px] 2xl:-left-[160px] -right-[60px] sm:-right-[60px] md:-right-[100px] 2xl:-right-[160px] -bottom-[100px] sm:-bottom-[140px] md:-bottom-[180px] 2xl:bottom-0
         bg-[linear-gradient(180deg,rgba(120,150,190,0)_0%,rgba(120,150,190,0.3)_8%,rgba(75,105,150,0.5)_15%,#1E365C_25%,#1E365C_77%,rgba(75,105,150,0.9)_85%,rgba(120,150,190,0.3)_93%,rgba(120,150,190,0)_100%)] 
        2xl:bg-[linear-gradient(180deg,rgba(30,54,92,0.3)_0%,#1E365C_20%,#1E365C_90%,rgba(30,54,92,0.4)_100%)] blur-[60px] pointer-events-none z-0" />

        <div className="relative z-10 pt-[30px] md:pt-[50px] 2xl:pt-[77px] pb-[40px] md:pb-[80px] 2xl:pb-[125px] flex flex-col gap-[32px] sm:gap-[48px] md:gap-[60px] 2xl:gap-[80px]">
          <div className="pt-[20px] sm:pt-[60px] lg:pt-[60px] 2xl:pt-[151px] px-[20px] sm:px-[50px] md:px-[120px] lg:px-[220px] xl:px-[300px] 2xl:px-[377px] text-center">
            <p className="font-inter font-black text-[24px] sm:text-[32px] md:text-[40px] 2xl:text-[48px] text-center uppercase leading-[1.15] 2xl:leading-[58px] text-white">
              countries where we are offering tours{" "}
              <span className="text-[#E9482B]">each year</span>
            </p>
          </div>

          <div className="px-[16px] sm:px-[32px] md:px-[50px] 2xl:px-[79.98px] pb-[40px] md:pb-[80px] 2xl:pb-[115px]">
            <img src="/svg/Maps.svg" alt="Map SVG" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
