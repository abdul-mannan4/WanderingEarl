import React from 'react'
import PageHeader from '../SharedComponents/PageHeader/PageHeader'
import TourSection from '../SharedComponents/TourSection/tourSection'
import { tours24 } from '../data/tour24'
import ContactSection from '../SharedComponents/ContactCTA/contactCTA'
import ContentCollage1 from './ContentWithCollage1/content'
import ContentCollage2 from './ContentWithCollage2/content'
import InfoSection from './InfoSection/inforSection'

const PageHeaderData = {
  title: "Our Style",
  description: "Incredible, small-group tours that are anything but typical. Get to the heart of your destination. Interact with local people and their communities. Learn about their culture. Visit destinations that a regular group tour can’t visit.",
  spanData: "Travel with us, as a friend.",
  imageSrc: "/images/ourStyle/pageHeader.png"
}

export default function OurStylePage() {


  return (
    <div>
      <div className='mb-8 md:mb-[59px] '>

        <PageHeader title={PageHeaderData.title} description={PageHeaderData.description} imageSrc={PageHeaderData.imageSrc} isextraSpan={true} spanData={PageHeaderData.spanData} />
      </div>

      <ContentCollage1 />
      <ContentCollage2 />

      <InfoSection />
      <ContactSection />
      <div className="pb-[150px] pt-[141px]">
        <TourSection
          title="Tours"
          tours={tours24}
          showGradient={false}
          layout="inline"
          titleColor="text-text-muted"
          allTourBtn={true}
        />
      </div>
    </div>

  )
}
