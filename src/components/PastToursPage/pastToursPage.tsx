import PageMain from "../SharedComponents/MainPicture/bgPicture";
import ClientReview from "../SharedComponents/ClientReview/clientReview";

export default function PastToursPage() {
  return (
    <div>
      <PageMain
        title="PAST TOURS"
        imgSrc="/images/pastTours/pastTourBackGround.png"
      />

      <div className="2xl:pb-[140px] lg:pb-[100px] sm:pb-[60px] pb-[30px]">
        <ClientReview />
      </div>
    </div>
  );
}
