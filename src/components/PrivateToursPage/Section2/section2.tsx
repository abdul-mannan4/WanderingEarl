import React from 'react'
import NicheSection from './Niches/nicheSection'
import ContactSection from '@/components/SharedComponents/ContactCTA/contactCTA'
import ClientReview from '@/components/SharedComponents/ClientReview/clientReview'
import CountriesSection from './Countries/countriesSection'

export default function Section2() {
  return (
    <div className="container flex flex-col gap-12 sm:gap-20 lg:gap-[100px] xl:gap-[140px] !px-0 pb-12 sm:pb-20 lg:pb-[100px] xl:pb-[140px]">
      <NicheSection />
      <CountriesSection />
      <ContactSection />
      <ClientReview />
    </div>
  )
}
