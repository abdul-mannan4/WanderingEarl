import PageMain from "./MainPicture/page";
import StorySection from "./StorySection.tsx/page";
import TourSection from "./TourSection/page";
import { tours24 } from "./TourSection/TourCard/tour24";
import { tours25 } from "./TourSection/TourCard/tour25";
import CountryMap from "./CountryMap/page";
import FeatureSection from "./FeatureSection/page";
import ClientReview from "./ClientReview/page";
import ContactCTA from "./ContactCTA/page";
import Footer from "../Footer/page";

export default function LandingPage(){

return(
    <div>
        <PageMain />
        <StorySection />
        <TourSection year={2024} tours={tours24}/>
         <FeatureSection />
         <CountryMap />

        <div className="flex flex-col gap-[140px]">

         <TourSection year={2025} tours={tours25} showGradient={false}/>
         <ClientReview />
         <ContactCTA />
         <Footer />
        </div>
    </div>
)
}