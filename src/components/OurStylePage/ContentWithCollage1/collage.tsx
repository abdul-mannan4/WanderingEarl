import React from "react";
import Image from "next/image";

export default function AboutUSCollage() {
  return (
    <div
      className="relative w-full max-w-[614px] mx-auto shrink-0"
      style={{ aspectRatio: "614 / 563.5" }}
    >
      {/* Image 1 (Left Back - smiley woman) */}
      <div className="absolute left-0 top-[0.49%] w-[48.37%] h-[99.91%] overflow-hidden shadow-lg z-10 rounded-[16px] sm:rounded-[24px]">
        <Image
          src="/images/ourStyle/Collage1/Image1.jpg"
          alt="Traveler posing with baggage"
          priority
          fill
          sizes="(max-width: 768px) 50vw, 297px"
          className="object-cover"
        />
      </div>

      {/* Image 2 (Bottom Main Front Overlap - hiking man) */}
      <div className="absolute left-[48.63%] top-[42.28%] z-10 w-[48.37%] h-[54.13%]">
        <div className="border-t-[10px] sm:border-t-[16px] 2xl:border-t-[20px] border-l-[10px] sm:border-l-[16px] 2xl:border-l-[20px] border-white box-content w-full h-full rounded-tl-[24px] sm:rounded-tl-[36px] 2xl:rounded-tl-[44px]">
          <div className="relative w-full h-full rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg">
            <Image
              src="/images/ourStyle/Collage1/Image3.jpg"
              alt="Hiking man on peak"
              priority
              fill
              sizes="(max-width: 768px) 45vw, 297px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Image 3 (Top Right Small Badge - hot air balloons) */}
      <div className="absolute left-[46.37%] top-[-4%] z-10 w-[51.63%] h-[39.58%]">
        <div className=" border-[16px] border-white box-content w-full h-full rounded-[40px] shadow-[-40px_30px_60px_0px_#00000066]">
          <div className="relative w-full h-full rounded-[24px] overflow-hidden">
            <Image
              src="/images/ourStyle/Collage1/Image2.jpg"
              alt="Hot air balloons over mountains"
              priority
              fill
              sizes="(max-width: 768px) 45vw, 317px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}