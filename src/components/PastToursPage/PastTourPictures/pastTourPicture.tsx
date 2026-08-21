// PhotoGallery.tsx
import React from 'react';
import Image from 'next/image';

type AspectVariant = "default" | "featured";

const variantConfig: Record<
  AspectVariant,
  {
    item: string;
    last: string;
    lastFullSpan: boolean;
    paddingTop: string;
  }
> = {
  default: {
    item: "aspect-[573/374]",
    last: "aspect-[573/374]",
    lastFullSpan: false,
    paddingTop: "pt-[40px]", // sabhi screens pe max 40px
  },
  featured: {
    item: "aspect-[573/374]",
    last: "aspect-[1200/374] sm:aspect-[1200/374]",
    lastFullSpan: true,
    paddingTop:
      "pt-[40px] md:pt-[52px] lg:pt-[165px] xl:pt-[200px] 2xl:pt-[240px]",
  },
};

type PhotoGalleryProp = {
  TotalImage?: number;
  variant?: AspectVariant;
  gridCols?: string;
  showGradient?: boolean;
};

export default function PhotoGallery({
  TotalImage = 25,
  variant = "default",
  gridCols = "grid-cols-2 md:grid-cols-3",
  showGradient = true,
}: PhotoGalleryProp) {
  const galleryImages = Array.from({ length: TotalImage }, (_, i) => ({
    src: `/images/pastTours/Image${i + 1}.png`,
    alt: `Past tour photo ${i + 1}`,
  }));

  const {
    item: aspectRatio,
    last: lastAspectRatio,
    lastFullSpan,
    paddingTop,
  } = variantConfig[variant];

  return (
    <section className="relative">
      {showGradient && (
        <div className="absolute top-0 left-0 w-full h-[280px] sm:h-[340px] lg:h-[400px] bg-[linear-gradient(180deg,rgba(30,54,92,1)_0%,rgba(30,54,92,0.94)_15%,rgba(30,54,92,0.82)_30%,rgba(30,54,92,0.58)_50%,rgba(30,54,92,0.25)_70%,rgba(30,54,92,0)_100%)] pointer-events-none z-[-10]" />
      )}

      <div
        className={`relative z-10 container mx-auto !px-2.5 sm:!px-3 lg:!px-6 2xl:!px-[40px] pb-[40px] md:pb-[52px] lg:pb-[150px] ${paddingTop}`}
      >
        <div className={`grid ${gridCols} gap-1.5 sm:gap-3 lg:gap-4`}>
          {galleryImages.map((image, i) => {
            const isLast = i === galleryImages.length - 1;
            const applyFullSpan = isLast && lastFullSpan;

            return (
              <div
                key={i}
                className={`relative w-full rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[0_40px_48px_-16px_rgba(0,0,0,0.16)] ${
                  applyFullSpan
                    ? `col-span-full ${lastAspectRatio}`
                    : isLast
                    ? lastAspectRatio
                    : aspectRatio
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={applyFullSpan ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
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