import React from 'react'
import PageHeader from '../SharedComponents/PageHeader/PageHeader'
import ContactSection from '../SharedComponents/ContactCTA/contactCTA'
import ClientReview from '../SharedComponents/ClientReview/clientReview'
import PrivateTourStory from './PrivateTourContent/contentWithCollage'

const PageHeaderData = {
  title: "Private Tours By Wandering Earl Tours",
  description: "Imagine an amazing private tour specifically crafted for your group or organization. We'll take care of every aspect of the trip, and will even provide one of our Expert Tour Leaders.",
  spanData: "All you need to do is enjoy.",
  imageSrc: "/images/privateTours/pageHeader.png"
}

export default function PrivateToursPage() {
  return (
    <div>
           <div className='mb-8 md:mb-[59px] '>
        
                <PageHeader title={PageHeaderData.title} description={PageHeaderData.description} imageSrc={PageHeaderData.imageSrc} isextraSpan={true} spanData={PageHeaderData.spanData}/>
              </div>
              
              <PrivateTourStory />
              <div className='2xl:mb-[140px] lg:mb-[100px] sm:mb-[60px] mb-[40px]'>

              <ContactSection />
              </div>

              
              <div className='2xl:pb-[140px] lg:pb-[100px] sm:pb-[60px] pb-[30px]'>
              <ClientReview />
              </div>
    </div>
  )
}
