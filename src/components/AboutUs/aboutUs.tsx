import React from "react";
import TourSection from "../SharedComponents/TourSection/tourSection";
import { tours24 } from "../data/tour24";
import PageHeader from "../SharedComponents/PageHeader/PageHeader";
import ContentCollage from "../SharedComponents/ContentWithCollage/contentCollage";
import TeamSection from "./TeamSection/teamSection";
import GlobalFamilySection from "./GlobalFamily/globalFamily";

const PageHeaderData = {
  title: "About Us",
  description:
    "We’re a small team of people who are passionate about travel. Our goal is to create unique, inspiring, and thoughtful tours that surprise and delight you. We’re just as excited as you are about travel and we make it our mission to ensure that on one of our tours, you’re thrilled from start to finish!",
  imageSrc: "/images/aboutUs/pageHeader.png",
};

export default function AboutUs() {
  return (
    <div>
      <div>
        <PageHeader
          title={PageHeaderData.title}
          description={PageHeaderData.description}
          imageSrc={PageHeaderData.imageSrc}
        />
      </div>
      <ContentCollage />
      
      {/* GlobalFamilySection edge-to-edge full screen width background */}
      <div className="pb-16 lg:pb-[140px]">
        <GlobalFamilySection />
      </div>

      <TeamSection />
      
      <div className="py-[150px]">
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
  );
}
