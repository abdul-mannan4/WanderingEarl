import React from 'react'

export default function  WhatsIncluded() {
  return (
    <div id='whats-included'>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
    <div className="flex items-center gap-2 mb-6 text-[#1A2B4C] font-extrabold tracking-wide">
      <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className='text-[16px] lg:text-[20px] font-inter font-semibold'>INCLUDED</span>
    </div>

    <ul className="list-disc list-outside ml-5 space-y-5 leading-relaxed font-inter font-medium text-[16px] lg:text-[20px]  text-text-muted">
      <li>Wandering Earl Tours Expert Tour Leader</li>
      <li>Small group (maximum 12 participants)</li>
      <li>Accommodation (11 nights – 3*/4* hotels and a guesthouse)</li>
      <li>Transportation within Southeast Asia (vans, public transportation and flights)</li>
      <li>Local English-speaking guides</li>
      <li>All mentioned activities and entrance fees</li>
      <li>Breakfast every day, 7 lunches and 10 dinners</li>
      <li>Water throughout the trip</li>
      <li>Gratuities at hotels/included meals</li>
      <li>All airport transfers</li>
    </ul>
  </div>

  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
    <div className="flex items-center gap-2 mb-6 text-[#C81E1E] font-extrabold tracking-wide">
      <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
      <span className='text-[16px] lg:text-[20px] font-inter font-semibold'>NOT INCLUDED</span>
    </div>

    <ul className="list-disc list-outside ml-5 space-y-5 leading-relaxed font-inter font-medium text-[16px] lg:text-[20px]  text-text-muted">
      <li>Flights to/from Bangkok and Singapore</li>
      <li>Passport/visa fees</li>
      <li>Meals and activities not mentioned</li>
      <li>Travel insurance (mandatory)</li>
      <li>Other gratuities</li>
    </ul>
  </div>
</div>
    </div>
  )
}
