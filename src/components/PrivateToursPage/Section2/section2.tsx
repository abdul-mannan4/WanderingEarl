import React from 'react'
import NicheSection from './Niches/nicheSection'
import ContactSection from '@/components/SharedComponents/ContactCTA/contactCTA'
import ClientReview from '@/components/SharedComponents/ClientReview/clientReview'
import CountriesSection from './Countries/countriesSection'

export default function Section2() {
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-16 lg:gap-[80px] xl:gap-[140px] pb-12 sm:pb-20 lg:pb-[100px] xl:pb-[140px]">
      <NicheSection />
      <CountriesSection />
      <ContactSection />
      <ClientReview />
    </div>
  )
}
