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
      className={`w-full lg:py-[100px] `}
    >
      <div className='container px-4 sm:px-6 lg:px-8 2xl:!px-[80px] flex flex-col items-center gap-[24px] sm:gap-[32px] lg:gap-[42px] xl:gap-[80px]'>
        <div className='flex flex-col items-center text-center gap-[8px] sm:gap-[12px] max-w-[1504px]'>
          <h2
            className={`font-inter font-bold uppercase text-[20px] sm:text-[28px] lg:text-[40px] leading-[1.2] ${
              isDark ? 'text-white' : 'text-text-dark'
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
              className={`font-inter font-medium text-[14px] sm:text-[16px] leading-[1.4] lg:text-[20px] max-w-[890px] ${
                isDark ? 'text-white/80' : 'text-text-muted'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <AskQuestionCard variant={variant} />
        <div className='flex justify-center cursor-pointer'>
                <button
                type='submit'
                className='cursor-pointer bg-accent-orange hover:bg-accent-orange-hover text-white font-inter font-bold text-[14px] sm:text-[16px] lg:text-[18px] px-8 lg:px-[53px] py-3 lg:pt-[15px] lg:pb-[16px] rounded-full transition-colors'
                >
                Submit
                </button>
      </div>
      </div>

    </div>
  )
}