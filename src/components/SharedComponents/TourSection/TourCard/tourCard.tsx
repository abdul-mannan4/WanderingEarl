import Image from 'next/image'
import UserLogo from './userLogo'
import LocationLogo from './LocationSvg'
import CalendarLogo from './CalendarLogo'
import TourBadge from './TourBadge'
import Link from 'next/link'

type BadgeType = "spots-left" | "sold-out" | null;
type ButtonType = "details" | "waitlist";

interface TourCardProps {
  id:string
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
  id,
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
      <div className='flex flex-col gap-[14px] sm:gap-[18px] 2xl:gap-[24px] h-full justify-between'>
        <div className='w-full aspect-[488/301] relative shrink-0'>
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover absolute inset-0"
          />
          {badge && <TourBadge type={badge} text={badgeText} />}
        </div>

        <div className='px-[12px] sm:px-[16px] 2xl:px-[20px] flex flex-col gap-[14px] sm:gap-[18px] 2xl:gap-[24px] bg-white h-full justify-between flex-1'>
          <div className='flex flex-col gap-[12px] sm:gap-[16px] 2xl:gap-[20px]'>
            <div className='flex flex-col gap-[6px] sm:gap-[8px]'>
              <h1 className='font-inter font-black text-[15px] sm:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[1.25] uppercase text-text-dark md:min-h-[2.5em] flex items-center'>
                {title}
              </h1>
              <p className='font-inter font-normal text-[12px] sm:text-[13px] xl:text-[14px] 2xl:text-[16px] leading-[1.4] 2xl:leading-[22px] text-text-dark md:line-clamp-3 min-h-[4.2em]'>
                {description}
              </p>
            </div>

            <div className='flex flex-col gap-[10px] sm:gap-[14px]'>
              <div className='flex flex-wrap items-center justify-start gap-x-[18px] sm:gap-x-[11px] lg:gap-x-[14px] gap-y-[6px]'>
                <div className='flex flex-row items-center gap-[6px] shrink-0'>
                  <div>
                    <UserLogo />
                  </div>
                  <p className='font-inter font-semibold text-[13px] sm:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-[100%] whitespace-nowrap self-center'>
                    <span className="font-bold text-text-muted">{spotsBooked}<span className='text-[#8F8F8F]'> out of {totalSpots} </span> spots booked</span>
                  </p>
                </div>
                <div className='flex flex-row items-center gap-[6px] shrink-0'>
                  <div>
                    <LocationLogo />
                  </div>
                  <p className='font-inter font-normal text-[11px] sm:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-[100%] text-text-muted whitespace-nowrap self-center'>
                    {location}
                  </p>
                </div>
              </div>

              <div className='flex flex-row items-center gap-[6px]'>
                <div>
                  <CalendarLogo />
                </div>
                <p className='font-inter font-normal text-[11px] sm:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-[100%] text-text-muted whitespace-nowrap self-center'>
                  {dateRange} <span className='text-[#8F8F8F]'>({duration})</span>
                </p>
              </div>
            </div>
          </div>

          <div className='mt-auto pt-[4px]'>
            {buttonType === 'details' ? (
              <Link  
              href={`/tours/${id}`}
              className='block px-[16px] sm:px-[24px] 2xl:px-[30px] pt-[9px] pb-[10px] sm:pt-[12px] sm:pb-[13px] 2xl:pt-[15px] 2xl:pb-[16px] w-full rounded-[30px] border-[1px] border-[#D6D6D6] font-inter font-bold text-[13px] sm:text-[15px] 2xl:text-[18px] leading-[21px] text-center text-primary-navy cursor-pointer hover:bg-primary-navy/5 transition-colors'>
                Details
              </Link>
            ) : (
              <button className='px-[16px] sm:px-[24px] 2xl:px-[30px] pt-[9px] pb-[10px] sm:pt-[12px] sm:pb-[13px] 2xl:pt-[15px] 2xl:pb-[16px] w-full rounded-[30px] border-[1px] border-accent-orange/30 font-inter font-bold text-[13px] sm:text-[15px] 2xl:text-[18px] leading-[21px] text-center text-accent-orange cursor-pointer hover:bg-accent-orange/5 transition-colors'>
                Add to Waitlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
