// InfoCard.tsx
import Image from 'next/image'

interface InfoCardProps {
  image: string
  alt: string
  title: string
  highlightedWord?: string
  paragraphs: string[]
  paddingX: string
  ishide?: boolean
}

export default function InfoCard({ image, alt, title, highlightedWord, paragraphs, paddingX, ishide = false }: InfoCardProps) {
  return (
    <div className="relative w-full min-h-[480px] sm:min-h-[500px] lg:min-h-0 lg:w-1/2 lg:aspect-square overflow-hidden shrink-0 rounded-none shadow-lg lg:shadow-none ">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E365C] via-[#1E365C]/90 to-[#1E365C]/40 lg:bg-[linear-gradient(180deg,#1E365C00_0%,#1E365C00_0%,#1E365C33_20%,#1E365CD9_85%,#1E365C_100%)]" />
      <div className={`absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:pb-8 xl:pb-12 2xl:pb-[60px] ${paddingX} text-white`}>
        <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-bold uppercase mb-3 sm:mb-4 lg:mb-4 xl:mb-6 2xl:mb-[25px] 3xl:!mb-[40px]  leading-tight 2xl:leading-[48px] drop-shadow-sm">
          {highlightedWord ? (
            <>
              {title.split(highlightedWord)[0]}
              <span className="text-accent-orange">{highlightedWord}</span>
              {title.split(highlightedWord)[1]}
            </>
          ) : (
            title
          )}
        </h3>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-[20px] leading-relaxed 2xl:leading-[26px] 3xl:!leading-[36px] font-inter font-medium text-white/90 ${i < paragraphs.length - 1 ? 'mb-3 sm:mb-4 lg:mb-4 xl:mb-6 2xl:mb-[25px] 3xl:!mb-[40px]' :
              `${ishide ? 'max-[480px]:hidden' : ""}`}`}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}