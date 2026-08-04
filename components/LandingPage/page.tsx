import PageMain from "./MainPicture/mainPicture";
import StorySection from "./StorySection/page";
import TourSection from "./TourSection/page";
import { tours24 } from "../data/tour24";
import { tours25 } from "../data/tour25";
import CountryMap from "./CountryMap/countryMap";
import FeatureSection from "./FeatureSection/featureSection";
import ClientReview from "./ClientReview/clientReview";
import ContactCTA from "./ContactCTA/contactCTA";
import Footer from "../Footer/footer";

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