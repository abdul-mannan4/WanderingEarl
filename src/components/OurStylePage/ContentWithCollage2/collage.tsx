import React from "react";
import Image from "next/image";

export default function AboutUSCollage() {
  return (
    <div
      className="relative w-full max-w-full lg:max-w-[614px] mx-auto shrink-0
        aspect-[614/430] lg:aspect-[614/550]"
    >
      {/* Image 1 (Top - villa/beach hotel, full width) */}
      <div className="absolute left-0 top-0 w-full h-[63.45%] z-10 rounded-[16px] sm:rounded-[24px] shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)]">
        <div className="relative w-full h-full overflow-hidden rounded-[16px] sm:rounded-[24px]">
          <Image
            src="/images/ourStyle/Collage2/Image1.jpg"
            alt="Blue villa by the sea"
            priority
            fill
            sizes="(max-width: 768px) 100vw, 614px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Image 2 (Bottom Left - alarm clock/world map flat lay) */}
      <div className="absolute left-0 top-[66.36%] z-10 w-[47.7%] h-[33.64%] rounded-[24px] sm:rounded-[36px] shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)]">
        <div className="relative w-full h-full overflow-hidden rounded-[24px] sm:rounded-[36px]">
          <Image
            src="/images/ourStyle/Collage2/Image2.jpg"
            alt="Alarm clock and world map flat lay"
            priority
            fill
            sizes="(max-width: 768px) 45vw, 297px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Image 3 (Bottom Right - island person, overlapping Image1) */}
      <div className="absolute left-[48.63%] top-[27.91%] z-20 w-[51.37%] h-[76.09%] rounded-[24px] sm:rounded-[36px] shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)]">
        <div className="border-[16px] border-white box-border w-full h-full rounded-[24px] sm:rounded-[36px]">
          <div className="relative w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden">
            <Image
              src="/images/ourStyle/Collage2/Image3.jpg"
              alt="Person standing on island outdoors"
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