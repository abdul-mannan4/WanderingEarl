
import Image from 'next/image'
import UserLogo from './userLogo'
import LocationLogo from './LocationSvg'
import CalendarLogo from './CalendarLogo'
import TourBadge from './TourBadge'

type BadgeType = "spots-left" | "sold-out" | null;
type ButtonType = "details" | "waitlist";

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  spotsBooked: number;
  totalSpots: number;
  location: string;
  dateRange: string;
  duration: string;
  badge?: BadgeType;
  badgeText?: string;
  buttonType: ButtonType;
}


export default function TourCard({
  image,
  title,
  description,
  spotsBooked,
  totalSpots,
  location,
  dateRange,
  duration,
  badge = null,
  badgeText,
  buttonType,
}: TourCardProps) {
  return (
    <div className='rounded-[16px] sm:rounded-[24px] pb-[16px] sm:pb-[20px] 2xl:pb-[24px] bg-white overflow-hidden shadow-[0px_40px_48px_-16px_#00000029] w-full h-full flex flex-col justify-between'>
      <div className='flex flex-col gap-[16px] sm:gap-[20px] 2xl:gap-[24px] h-full justify-between'>
        <div className='w-full aspect-[488/301] relative shrink-0'>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover absolute inset-0"
          />
          {badge && <TourBadge type={badge} text={badgeText} />}
        </div>

        <div className='px-[14px] sm:px-[16px] 2xl:px-[20px] flex flex-col gap-[18px] sm:gap-[22px] 2xl:gap-[30px] bg-white h-full justify-between flex-1'>
          <div className='flex flex-col gap-[16px] sm:gap-[20px] 2xl:gap-[24px]'>
            <div className='flex flex-col gap-[8px] sm:gap-[10px]'>
              <h1 className='font-inter font-black text-[16px] sm:text-[18px] 2xl:text-[20px] leading-[1.2] 2xl:leading-[24px] uppercase text-[#1E1E1E]'>
                {title}
              </h1>
              <p className='font-inter font-normal text-[13px] sm:text-[14px] 2xl:text-[16px] leading-[1.35] 2xl:leading-[22px] text-[#1E1E1E]'>
                {description}
              </p>
            </div>

            <div className='flex flex-col gap-[12px] sm:gap-[16px]'>
              <div className='flex flex-wrap sm:flex-nowrap items-center gap-x-[16px] gap-y-[8px]'>
                <div className='flex flex-row items-center gap-[8px]'>
                  <div>
                    <UserLogo />
                  </div>
                  <p className='font-inter font-semibold text-[12px] sm:text-[13px] 2xl:text-[14px] leading-[100%] text-center self-center'>
                    <span className="font-bold text-[#404040]">{spotsBooked}<span className='text-[#8F8F8F]'> out of {totalSpots} </span> spots booked</span>
                  </p>
                </div>
                <div className='flex flex-row items-center gap-[8px]'>
                  <div>
                    <LocationLogo />
                  </div>
                  <p className='font-inter font-normal text-[12px] sm:text-[13px] 2xl:text-[14px] leading-[100%] text-[#404040] self-center'>
                    {location}
                  </p>
                </div>
              </div>

              <div className='flex flex-row items-center gap-[8px]'>
                <div>
                  <CalendarLogo />
                </div>
                <p className='font-inter font-normal text-[12px] sm:text-[13px] 2xl:text-[14px] leading-[100%] text-[#404040] self-center'>
                  {dateRange} <span className='text-[#8F8F8F]'>({duration})</span>
                </p>
              </div>
            </div>
          </div>

          <div className='mt-auto pt-[4px]'>
            {buttonType === 'details' ? (
              <button className='px-[20px] sm:px-[24px] 2xl:px-[30px] pt-[10px] pb-[11px] sm:pt-[12px] sm:pb-[13px] 2xl:pt-[15px] 2xl:pb-[16px] w-full rounded-[30px] border-[1px] border-[#D6D6D6] font-inter font-bold text-[14px] sm:text-[16px] 2xl:text-[18px] leading-[21px] text-center text-[#1E365C] cursor-pointer hover:bg-[#1E365C]/5 transition-colors'>
                Details
              </button>
            ) : (
              <button className='px-[20px] sm:px-[24px] 2xl:px-[30px] pt-[10px] pb-[11px] sm:pt-[12px] sm:pb-[13px] 2xl:pt-[15px] 2xl:pb-[16px] w-full rounded-[30px] border-[1px] border-[#E9482B4D]/30 font-inter font-bold text-[14px] sm:text-[16px] 2xl:text-[18px] leading-[21px] text-center text-[#E9482B] cursor-pointer hover:bg-[#E9482B]/5 transition-colors'>
                Add to Waitlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
