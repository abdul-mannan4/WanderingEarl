
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

          <div className="container 2xl:!px-[80px] pb-[40px] md:pb-[80px] 2xl:pb-[115px]">
            {/* Map Wrapper with exact aspect ratio of Maps.svg (1761 x 699) */}
            <div className="relative w-full aspect-[1761/699]">
              {/* World Map SVG */}
              <img src="/svg/Maps.svg" alt="Map SVG" className="w-full h-full object-fill block" />

              {/* Location Pins & Badges overlay */}
              {[
                { name: "Africa", left: "22.5%", top: "40.7%" },
                { name: "Korea", left: "28.9%", top: "70%" },
                { name: "United Kingdom", left: "53.5%", top: "23.7%" },
                { name: "India", left: "69.6%", top: "39.7%" },
                { name: "USA", left: "58.6%", top: "74.1%" },
                { name: "China", left: "83.9%", top: "29%" },
                { name: "Russia", left: "84.5%", top: "74%" },
              ].map((location) => (
                <div
                  key={location.name}
                  className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-full cursor-pointer group z-20"
                  style={{ left: location.left, top: location.top }}
                >
                  {/* Speech Bubble Tooltip Badge */}
                  <div className="relative flex flex-col items-center mb-0.5 sm:mb-0.5 md:mb-1 2xl:mb-[18px] drop-shadow-md">
                    {/* White Rounded Text Box */}


                    
                    <div className="bg-white text-[#1E365C] font-inter font-medium text-[8px] sm:text-[10px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] px-2 sm:px-2.5 md:px-3 lg:px-3.5 xl:px-4 2xl:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5 2xl:py-3 rounded-[5px] sm:rounded-[6px] md:rounded-[8px] 2xl:rounded-[10px] border border-white/90 whitespace-nowrap leading-tight text-center">
                      {location.name}
                    </div>

                    {/* Polygon 1 Pointer Arrow at bottom center (Figma: 26x18px, 2px radius, rotated -180, #FFFFFF, 50% overlap into white box) */}
                    <svg
                      width="26"
                      height="18"
                      viewBox="0 0 18 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      className="w-[8px] sm:w-[12px] md:w-[16px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] h-[5.5px] sm:h-[8.3px] md:h-[11px] lg:h-[13.8px] xl:h-[15.9px] 2xl:h-[18px] -mt-[2.8px] sm:-mt-[4px] md:-mt-[5.5px] lg:-mt-[7px] xl:-mt-[8px] 2xl:-mt-[9px] shrink-0"
                    >
                      <path
                        d="M10.526 11.6582C9.72646 12.617 8.25363 12.617 7.45407 11.6582L0.467847 3.28093C-0.61839 1.97841 0.307805 -1.18272e-08 2.00382 -1.60098e-07L15.9763 -1.38161e-06C17.6723 -1.52988e-06 18.5985 1.97841 17.5122 3.28093L10.526 11.6582Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </div>

                  {/* Red Pin Icon (Figma 1920 Setup: 68px x 96px) */}
                  <img
                    src="/svg/location.svg"
                    alt={`${location.name} Pin`}
                    className="w-[18px] sm:w-[26px] md:w-[36px] lg:w-[46px] xl:w-[56px] 2xl:w-[68px] h-[25.4px] sm:h-[36.7px] md:h-[51px] lg:h-[65px] xl:h-[79px] 2xl:h-[96px] drop-shadow-md shrink-0 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}