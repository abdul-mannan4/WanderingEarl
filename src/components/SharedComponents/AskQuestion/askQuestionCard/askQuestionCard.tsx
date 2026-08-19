// askQuestionCard/askQuestionCard.tsx
import React from 'react'

type AskQuestionCardProps = {
  variant?: 'dark' | 'light'
}

export default function AskQuestionCard({ variant = 'light' }: AskQuestionCardProps) {
  const isDark = variant === 'dark'

  const wrapperClass = isDark
    ? 'border border-dashed border-white/40'
    : 'border border-border-gray'

  const labelClass = isDark ? 'text-white' : 'text-light-gray'

  const inputClass = isDark
    ? 'bg-primary-navy border border-white/30 text-white placeholder:text-white/50 '
    : 'bg-white border border-border-gray text-text-dark placeholder:text-text-muted'

  return (
    <div className={`w-full max-w-[1206px] rounded-[16px] flex flex-col gap-[15px] sm:gap-[25px] lg:gap-[42px]`}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[15px] sm:gap-[25px] lg:gap-[80px]'>
                <div className='flex flex-col gap-2 lg:gap-4 '>
                    <label className={`text-[14px] sm:text-[18px] lg:text-[20px] font-normal font-inter ${labelClass} leading-none lg:leading-[1.2]`}>First Name</label>
                           <input
                        type='text'
                        placeholder='Write'
                        className={`w-full font-medium rounded-lg py-2 px-3 sm:px-4 sm:py-3  text-[14px] sm:text-[18px] lg:text-[20px]  text-light-gray focus:outline-none focus:ring-2 focus:ring-accent-orange ${inputClass} leading-relaxed lg:leading-[1.92]`}
                    />
                </div>  

                <div className='flex flex-col gap-2 lg:gap-4'>
                    <label className={`text-[14px] font-normal lg:text-[20px] font-inter ${labelClass} leading-relaxed lg:leading-[1.2]`}>Last Name</label>
                    <input
                        type='text'
                        placeholder='Write'
                        className={`w-full font-medium rounded-lg py-2 px-3 sm:px-4 sm:py-3  text-[14px] sm:text-[18px] lg:text-[20px]  text-light-gray focus:outline-none focus:ring-2 focus:ring-accent-orange ${inputClass} leading-relaxed lg:leading-[1.92]`}
                    />
                </div>
        </div>



        <div className='flex flex-col gap-2 lg:gap-4 sm:col-span-2 '>
            <label className={`text-[14px] lg:text-[20px] font-normal font-inter ${labelClass}  lg:leading-[1.2]`}>Email Address</label>
               <input
                        type='email'
                        placeholder='Email'
                        className={`w-full font-medium rounded-lg py-2 px-3 sm:px-4 sm:py-3 text-[14px] sm:text-[18px] lg:text-[20px] text-light-gray focus:outline-none focus:ring-2 focus:ring-accent-orange ${inputClass} leading-relaxed lg:leading-[1.92]`}
                    />
        </div>

        <div className='flex flex-col gap-2 lg:gap-4 sm:col-span-2'>
            <label className={`text-[14px]  sm:text-[18px] lg:text-[20px] font-normal font-inter ${labelClass}  lg:leading-[1.2]`}>Message</label>
            <textarea
                placeholder='Write'
                rows={5}
                className={`w-full rounded-lg py-2 px-3 sm:px-4 sm:py-3  text-[14px] sm:text-[18px]  lg:text-[20px] font-medium resize-y focus:outline-none focus:ring-2 focus:ring-accent-orange ${inputClass} leading-relaxed lg:leading-[2.01]`}
            />
        </div>
      


    </div>
  )
}