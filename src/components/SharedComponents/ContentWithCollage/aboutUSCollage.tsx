import React from "react";
import Image from "next/image";

export default function AboutUSCollage() {
  return (
    <div
      className="relative w-full max-w-full lg:max-w-[740px] h-[320px] sm:h-[400px] lg:h-[460px] 2xl:h-[520px] mx-auto shrink-0 aspect-[614/430] lg:aspect-[740/520]"
    >
      {/* Image 1 (Left Back) */}
      <div className="absolute left-0 top-0 w-[42.84%] h-[78%] overflow-hidden shadow-lg z-10 rounded-[16px] sm:rounded-[24px]">
        <Image
          src="/images/aboutUs/aboutUsCollage/Image1.jpg"
          alt="Travelers on stairs 1"
          priority
          fill
          sizes="(max-width: 768px) 50vw, 317px"
          className="object-cover"
        />
      </div>

      {/* Image 2 (Bottom Main Front Overlap - ends at 88% height leaving 12% bottom gap) */}
      <div className="absolute left-[22.4%] top-[36.5%] z-10 w-[77.6%] h-[62%]">
        <div className="border-t-[10px] sm:border-t-[16px] 2xl:border-t-[20px] border-l-[10px] sm:border-l-[16px] 2xl:border-l-[20px] border-white box-content w-full h-full rounded-tl-[24px] sm:rounded-tl-[36px] 2xl:rounded-tl-[44px]">
          <div className="relative w-full h-full rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg">
            <Image
              src="/images/aboutUs/aboutUsCollage/Image2.jpg"
              alt="Travelers on stairs 2"
              priority
              fill
              sizes="(max-width: 768px) 75vw, 574px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

 <div className="absolute left-[57.4%] top-[2%] z-10 w-[40.13%] h-[42%]">
  <div className="border-[8px] sm:border-[12px] 2xl:border-[16px] border-white box-content w-full h-full rounded-[24px] sm:rounded-[36px] 2xl:rounded-[44px] shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)]">
    <div className="relative w-full h-full rounded-[16px] sm:rounded-[24px] overflow-hidden">
      <Image
        src="/images/aboutUs/aboutUsCollage/Image3.jpg"
        alt="Travelers on stairs 3"
        priority
        fill
        sizes="(max-width: 768px) 45vw, 297px"
        className="object-cover"
      />
    </div>
  </div>
</div>
    </div>
  );
}
