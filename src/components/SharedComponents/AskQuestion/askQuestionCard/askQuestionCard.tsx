// askQuestionCard/askQuestionCard.tsx
import React from 'react'

type AskQuestionCardProps = {
  variant?: 'dark' | 'light'
}

export default function AskQuestionCard({ variant = 'light' }: AskQuestionCardProps) {
  const isDark = variant === 'dark'
  const labelClass = isDark ? 'text-white font-medium' : 'text-text-dark font-medium'

  const inputClass = isDark
    ? 'border border-white/30 text-white placeholder:text-white/50 focus:border-accent-orange'
    : 'bg-white border border-border-gray text-text-dark placeholder:text-text-muted focus:border-accent-orange'

  return (
    <div className="w-full max-w-[1206px] flex flex-col gap-[16px] sm:gap-[24px] lg:gap-[32px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[24px] lg:gap-[40px] xl:gap-[60px]">
        <div className="flex flex-col gap-2">
          <label className={`text-[14px] sm:text-[16px] lg:text-[18px] font-inter ${labelClass}`}>
            First Name
          </label>
          <input
            type="text"
            placeholder="Write"
            className={`w-full rounded-[10px] py-3 px-4 text-[14px] sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-accent-orange/40 ${inputClass}`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={`text-[14px] sm:text-[16px] lg:text-[18px] font-inter ${labelClass}`}>
            Last Name
          </label>
          <input
            type="text"
            placeholder="Write"
            className={`w-full rounded-[10px] py-3 px-4 text-[14px] sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-accent-orange/40 ${inputClass}`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={`text-[14px] sm:text-[16px] lg:text-[18px] font-inter ${labelClass}`}>
          Email Address
        </label>
        <input
          type="email"
          placeholder="Email"
          className={`w-full rounded-[10px] py-3 px-4 text-[14px] sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-accent-orange/40 ${inputClass}`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={`text-[14px] sm:text-[16px] lg:text-[18px] font-inter ${labelClass}`}>
          Message
        </label>
        <textarea
          placeholder="Write"
          rows={5}
          className={`w-full rounded-[10px] py-3 px-4 text-[14px] sm:text-[16px] resize-y focus:outline-none focus:ring-2 focus:ring-accent-orange/40 ${inputClass}`}
        />
      </div>
    </div>
  );
}
