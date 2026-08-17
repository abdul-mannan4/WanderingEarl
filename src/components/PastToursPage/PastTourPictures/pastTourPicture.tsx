// PhotoGallery.tsx
import React from 'react';
import Image from 'next/image';

const TOTAL_IMAGES = 25; // update to match your actual file count

const galleryImages = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  src: `/images/pastTours/Image${i + 1}.png`,
  alt: `Past tour photo ${i + 1}`,
}));

export default function PhotoGallery() {
  return (
    <section className="relative">

      <div className="absolute top-0 left-0 w-full h-[280px] sm:h-[340px] lg:h-[400px] bg-gradient-to-b from-primary-navy via-primary-navy/70 to-transparent pointer-events-none z-[-10]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 2xl:!px-[80px] py-16 sm:py-24 lg:pb-[150px] pt-16 sm:pt-24 md:pt-32 lg:pt-[165px] xl:pt-[200px] 2xl:pt-[240px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {galleryImages.map((image, i) => {
            const isLast = i === galleryImages.length - 1;
            return (
              <div
                key={i}
                className={`relative w-full rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[0_40px_48px_-16px_rgba(0,0,0,0.16)] ${
                  isLast
                    ? 'col-span-full aspect-[1200/374] sm:aspect-[1200/374]'
                    : 'aspect-[573/374]'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={isLast ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}