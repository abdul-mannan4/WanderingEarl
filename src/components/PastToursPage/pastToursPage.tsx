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
      />
      <div className="mt-[-4px]">
        <PhotoGallery />
      </div>

      <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(30,54,92,0.1)_30%,rgba(30,54,92,0.4)_35%,rgba(30,54,92,0.67)_40%,rgba(30,54,92,0.9)_45%,#1E365C_50%,#1E365C_100%)]">
        <div className="2xl:pb-[140px] lg:pb-[100px] sm:pb-[60px] pb-[30px]">
          <ClientReview sliderColor="bg-[#D6D6D6]" />
        </div>
      
        <div className="pb-[60px] sm:pb-[80px] lg:pb-[100px]">
          <AskQuestion
            variant="dark"
            title="IF YOU HAVE ANY QUESTIONS, SIMPLY GET IN TOUCH. WE'RE HERE TO HELP AND WE ALWAYS REPLY QUICKLY."
          />
        </div>
      </div>

    </div>
  );
}
