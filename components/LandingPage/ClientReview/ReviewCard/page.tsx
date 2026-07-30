import Icon from "./ReviewIcon";
import LocationLogo from "../../TourSection/TourCard/LocationSvg";

interface ReviewProps {
  description: string;
  name: string;
  location: string;
}

export default function Review({ description, name, location }: ReviewProps) {
  return (
    <div className="h-full flex flex-col justify-between border rounded-[24px] border-[#D6D6D6] shadow-[0px_30px_60px_-24px_#00000029] bg-white px-[20px] sm:px-[30px] 2xl:px-10 py-[30px] sm:py-[40px] 2xl:py-[50px]">
      <div className="flex flex-col items-center flex-1">
        <Icon />
        <div className="flex-1 flex items-center justify-center my-4 sm:my-6">
          <p className="font-inter font-normal text-[14px] sm:text-[16px] 2xl:text-[18px] leading-[1.4] 2xl:leading-[26px] text-[#292021] text-center">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="font-poppins font-semibold text-[14px] sm:text-[16px] text-center text-[#404040]">
          {name}
        </div>
        <div className="w-full border-t border-[#D6D6D6]" />
        <div className="flex items-center gap-1.5 font-poppins font-normal text-[12px] sm:text-[14px] text-[#8F8F8F]">
          <div>
            <LocationLogo />
          </div> 
          <span className="leading-[100%]">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}