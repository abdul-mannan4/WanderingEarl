import Icon from "./ReviewIcon";
import LocationLogo from "../../TourSection/TourCard/LocationSvg";

interface ReviewProps {
  description: string;
  name: string;
  location: string;
}

export default function Review({ description, name, location }: ReviewProps) {
  return (
    <div className="h-full min-h-[240px] sm:min-h-0 flex flex-col justify-between border rounded-[16px] sm:rounded-[24px] border-[#D6D6D6] shadow-[0px_30px_60px_-24px_#00000029] bg-white px-[14px] sm:px-[18px] md:px-[20px] lg:px-[18px] xl:px-[28px] 2xl:px-10 py-[16px] sm:py-[20px] md:py-[22px] lg:py-[20px] xl:py-[36px] 2xl:py-[48px]">
      <div className="flex flex-col items-center flex-1">
        <div className="scale-90 sm:scale-95 md:scale-90 lg:scale-85 xl:scale-100 shrink-0">
          <Icon />
        </div>
        <div className="flex-1 flex items-center justify-center my-2 sm:my-3 md:my-3 lg:my-2.5 xl:my-5">
          <p className="font-inter font-normal text-[12px] min-[360px]:text-[13px] sm:text-[13.5px] md:text-[13.5px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] leading-[1.4] sm:leading-[1.4] md:leading-[1.4] lg:leading-[1.38] xl:leading-[1.45] 2xl:leading-[26px] text-[#292021] text-center">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-2 xl:gap-3 mt-auto pt-1 sm:pt-1.5 md:pt-1.5 lg:pt-1 xl:pt-2">
        <div className="font-poppins font-semibold text-[12px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px] text-center text-text-muted">
          {name}
        </div>
        <div className="w-full border-t border-[#D6D6D6]" />
        <div className="flex items-center gap-1.5 font-poppins font-normal text-[11px] sm:text-[12.5px] md:text-[13px] lg:text-[13px] xl:text-[14px] text-[#8F8F8F]">
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