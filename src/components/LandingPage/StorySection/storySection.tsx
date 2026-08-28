import Image from "next/image";
import DashLine from "./DashLine/page";
import PlaneSvg from "./PlaneSvg/page";
import GlobeSvg from "./GlobeSvg/globe";

export default function StorySection() {
  return (
    <div className="relative max-w-full bg-[#1E365C] -mb-[1px] z-10">
      <div className=" container relative grid grid-cols-1 lg:grid-cols-2 2xl:gap-0 lg:gap-[10px] items-start justify-between xl:pt-[50px] mt-[-1px] 2xl:mt-[0] min-[1920px]:!px-[208px]">

        <div className="xl:pb-[122px] xl:pt-[155px] lg:pt-[118px] lg:pb-[98px] md:pt-[52px] md:pb-[52px] pt-[40px] 
        pb-[40px]
        order-2 lg:order-1 2xl:max-w-[742px]  
        text-start">
          <div>
            <p className="uppercase font-[Inter] font-black  2xl:text-[48px] xl:text-[40px] md:text-[34px] lg:text-[30px] sm:text-[28px] text-[25px] leading-[122%] tracking-[0%] text-white">
              Sustainable and Responsible Travel
            </p>
            <p className="font-[400] lg:text-[14px] xl:text-[20px] 2xl:text-[24px] leading-[121%] tracking-[0.5%] text-white pt-[8px] xl:pt-[10px]">
              We're fully committed to promoting and offering responsible,{" "}
              respectful and sustainable travel experiences around the world.
            </p>
          </div>

          <div className="2xl:pt-[30px] pt-[18px]">
            <p className="font-[200] lg:text-[13px] xl:text-[16px] xl:leading-[24px] tracking-[0%] text-white ">
              Everything we do is aimed at enriching the lives of the people we
              work with. We want you to go way from our tours with great
              memories, new friends, and a real appreciation for the places we{" "}
              visit. But, more than that, we also want to leave those
              places better than we found them.
            </p>
            <p className="font-[Inter] font-[200] lg:text-[13px] xl:text-[16px] xl:leading-[24px] tracking-[0%] text-white pt-[10px]  xl:pt-[12px] hidden md:flex">
              We make a point of avoiding mass tourism destinations. Instead, we
              sustainably support local
              businesses, communities and the environment everywhere we
              go. Every aspect of our trips, from

              accommodation to local guides, activities to meals, and everything
              in between, are chosen to
              ensure that your tourism dollar leaves a positive and
              lasting impact and that our visit leaves a minimal footprint.
            </p>
            <div className="pt-[25px] xl:pt-[30px] flex lg:justify-start">
              <button className="pt-[14px] pb-[15px] px-[28px] text-[16px]  sm:pt-[15px] sm:pb-[16px] sm:px-[30px] font-bold sm:text-[18px] leading-[22px] text-white bg-accent-orange rounded-[30px] cursor-pointer hover:hover:bg-accent-orange-hover ">
                Book a Tour Now
              </button>
            </div>
          </div>
        </div>

        {/* Self-contained image cluster — one box, all children positioned by % of THIS box */}
        <div className="2xl:pt-[48px] xl:pt-[140px] lg:pt-[110px] pt-[20px] max-[350px]:pt-[10px] lg:order-2 order-1 w-full flex justify-center lg:justify-end 2xl:justify-end">
          <div className="relative w-full max-w-full lg:max-w-[500px] xl:max-w-[620px] 2xl:max-w-[705px] aspect-[705/609] 2xl:w-[705px] 2xl:h-[609px] shrink-0">
            <div className="absolute left-[18.30%] top-[27.09%] w-[42.41%] h-[72.91%] 2xl:w-[299px] 2xl:h-[444px] rounded-[16px] sm:rounded-[24px] border border-[#FFFFFF99] overflow-hidden shadow-[-15px_15px_30px_0px_#0000001A] sm:shadow-[-30px_30px_60px_0px_#0000001A]">
              <Image src="/images/landingPage/story-flag.jpg" alt="underImage" priority fill
                sizes="42.41vw"
                className="object-cover" />
            </div>

            <div className="absolute left-[57.59%] top-[8.37%] w-[42.41%] h-[72.91%] 2xl:w-[299px] 2xl:h-[444px] aspect-[299/444] overflow-hidden border border-[#FFFFFF99] rounded-[16px] sm:rounded-[24px] shadow-[-20px_15px_30px_0px_#00000066] sm:shadow-[-40px_30px_60px_0px_#00000066]">
              <Image src="/images/landingPage/story-mountain.jpg" fill priority sizes="(max-width: 1024px) 50vw, 300px" alt="upImage" className="object-cover" />
            </div>

            <div className="absolute left-[37.68%] top-[8.37%] w-[9.36%]">
              <PlaneSvg className="w-full h-auto" />
            </div>

            <div className="absolute left-0 top-[12.62%] w-[35.31%]">
              <DashLine className="w-full h-auto" />
            </div>

            <div className="absolute left-[50.78%] top-0 w-[22.70%]">
              <GlobeSvg className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}