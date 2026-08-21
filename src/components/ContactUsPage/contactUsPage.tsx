import React from 'react'
import PageMain from "../SharedComponents/MainPicture/bgPicture";
import AskQuestion from '../SharedComponents/AskQuestion/askQuestion';

export default function ContactUsPage() {
  return (
    <div className="bg-primary-navy">
      <PageMain
        title="CONTACT US"
        imgSrc="/images/contactUs/contactUsBackground.png"
        objectPosition="center 18%"
      />

      <div className="pb-[60px] sm:pb-[80px] lg:pb-[100px] bg-primary-navy">
        <AskQuestion
          variant="dark"
          title="Hello! Have a question?"
          subtitle='We’re here to help. If you have any questions or simply want to chat, let us know below. We’ll always reply quickly!'
        />
      </div>
    </div>
  )
}