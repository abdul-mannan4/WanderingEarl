export default function CountryMap() {
  return (
    <div className="relative z-0">
      <div className="pt-[50px] md:pt-[90px] 2xl:pt-[103px] relative">
        <div className="absolute -top-[100px] sm:-top-[120px] md:-top-[160px] 2xl:-top-[80px] -left-[60px] sm:-left-[60px] md:-left-[100px] 2xl:-left-[160px] -right-[60px] sm:-right-[60px] md:-right-[100px] 2xl:-right-[160px] -bottom-[100px] sm:-bottom-[120px] md:-bottom-[160px] 2xl:-bottom-[80px]
         bg-[linear-gradient(180deg,rgba(120,150,190,0)_0%,rgba(75,105,150,0.4)_12%,#1E365C_25%,#1E365C_75%,rgba(75,105,150,0.4)_88%,rgba(120,150,190,0)_100%)] 
        2xl:bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,#1E365C_20%,#1E365C_80%,rgba(30,54,92,0)_100%)] blur-[60px] pointer-events-none z-0" />

        <div className="relative z-10 pt-[30px] md:pt-[50px] 2xl:pt-[77px] pb-[40px] md:pb-[80px] 2xl:pb-[125px] flex flex-col gap-[32px] sm:gap-[48px] md:gap-[60px] 2xl:gap-[80px]">
          <div className="pt-[20px] sm:pt-[60px] lg:pt-[60px] 2xl:pt-[151px] container text-center">


            <p className="section-title text-white">
              countries where we are offering tours{" "}
              <span className="text-accent-orange block">each year</span>
            </p>
          </div>

          <div className="container pb-[40px] md:pb-[80px] 2xl:pb-[115px]">
            <img src="/svg/Maps.svg" alt="Map SVG" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}