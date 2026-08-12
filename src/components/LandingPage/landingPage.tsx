import PageMain from "./MainPicture/mainPicture";
import StorySection from "./StorySection/storySection";
import TourSection from "./TourSection/tourSection";
import { tours24 } from "../data/tour24";
import { tours25 } from "../data/tour25";
import CountryMap from "./CountryMap/countryMap";
import FeatureSection from "./FeatureSection/featureSection";
import ClientReview from "./ClientReview/clientReview";
import ContactCTA from "./ContactCTA/contactCTA";






export default function LandingPage(){

return(
    <div>
        <PageMain />
        <StorySection />
        <TourSection year={2024} tours={tours24} layout="stacked" yearColor="text-[#1E365C]" titleColor="text-[#404040]" allTourBtn={true}/>
         <FeatureSection />
         <CountryMap />

        <div className="flex flex-col gap-[48px] sm:gap-[70px] md:gap-[100px] lg:gap-[140px]">
          <TourSection year={2025} tours={tours25} showGradient={false} layout="stacked" yearColor="text-[#1E365C]" titleColor="text-[#404040]" allTourBtn={true}/>
          <ClientReview />
          <ContactCTA />
        </div>
    </div>
)
}