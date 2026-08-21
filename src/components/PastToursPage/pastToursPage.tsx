import PageMain from "../SharedComponents/MainPicture/bgPicture";
import ClientReview from "../SharedComponents/ClientReview/clientReview";
import PhotoGallery from "./PastTourPictures/pastTourPicture";
import AskQuestion from "../SharedComponents/AskQuestion/askQuestion";

export default function PastToursPage() {
  return (
    <div>
      <PageMain
        title="PAST TOURS"
        imgSrc="/images/pastTours/pastTourBackGround.png"
        objectPosition="center 18%"
      />
      <div className="mt-[-3px]">

      <div>
        <PhotoGallery variant="featured"/>
      </div>

      <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(30,54,92,0.3)_30%,rgba(30,54,92,0.7)_35%,rgba(30,54,92,0.8)_40%,rgba(30,54,92,0.9)_45%,#1E365C_50%,#1E365C_100%)]">
        <div className="2xl:pb-[140px] lg:pb-[100px] sm:pb-[52px] pb-[40px]">
          <ClientReview sliderColor="bg-[#D6D6D6]" />
        </div>
      
        <div className="pb-[40px] sm:pb-[52px] lg:pb-[100px]">
          <AskQuestion
            variant="dark"
            title="IF YOU HAVE ANY QUESTIONS, SIMPLY GET IN TOUCH. WE'RE HERE TO HELP AND WE ALWAYS REPLY QUICKLY."
            />
        </div>
      </div>

            </div>
    </div>
  );
}
