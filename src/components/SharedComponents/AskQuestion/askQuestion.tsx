// askQuestion.tsx
import React from 'react'
import AskQuestionCard from './askQuestionCard/askQuestionCard'

type AskQuestionProps = {
  variant?: 'dark' | 'light'
  title: string
  highlightedWord?: string
  subtitle?: string
}

export default function AskQuestion({
  variant = 'light',
  title,
  highlightedWord,
  subtitle,
}: AskQuestionProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className="w-full py-[48px] sm:py-[64px] lg:py-[100px] xl:py-[140px] relative z-20"
    >
      <div className='container px-4 sm:px-6 lg:px-8 2xl:!px-[80px] flex flex-col items-center gap-[24px] sm:gap-[32px] lg:gap-[42px] xl:gap-[60px]'>
        <div className='flex flex-col lg:items-center text-left lg:text-center gap-[10px] sm:gap-[14px] max-w-full lg:max-w-[1504px]'>
          <h2
            className={`font-inter font-black uppercase text-[22px] sm:text-[32px] lg:text-[44px] leading-[1.15] tracking-tight ${
              isDark ? 'text-white' : 'text-primary-navy'
            }`}
          >
            {highlightedWord ? (
              <>
                {title.split(highlightedWord)[0]}
                <span className='text-accent-orange'>{highlightedWord}</span>
                {title.split(highlightedWord)[1]}
              </>
            ) : (
              title
            )}
          </h2>

          {subtitle && (
            <p
              className={`font-inter font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-[850px] ${
                isDark ? 'text-[#D6D6D6]' : 'text-text-muted'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <AskQuestionCard variant={variant} />
        
        <div className='flex justify-center'>
          <button
            type='submit'
            className='cursor-pointer bg-accent-orange hover:bg-accent-orange-hover text-white font-inter font-bold text-[14px] sm:text-[16px] lg:text-[18px] px-8 lg:px-[53px] py-3 lg:pt-[15px] lg:pb-[16px] rounded-full transition-all duration-300 hover:scale-105 shadow-md'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
