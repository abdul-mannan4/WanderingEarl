import { Features } from "../../data/feature";
import { FeatureCard } from "./FeatureCard/featureCard";
import CountryMap from "../CountryMap/countryMap";
import TourSection from "../TourSection/tourSection";
import { tours25 } from "../../data/tour25";


import {
  SmallGroupsIcon,
  UniqueIcon,
  LocalIcon,
  PersonalIcon,
  ComfortableIcon,
  EducationalIcon,
} from "./FeatureCard/FeatureIcons";

const featuresData = [
  {
    icon: SmallGroupsIcon,
    title: 'SMALL GROUPS',
    description: '12 people or fewer, so you can go where big groups can’t. Forget about big buses, that’s not our style.',
  },
  {
    icon: UniqueIcon,
    title: 'UNIQUE',
    description: 'No two tours are alike. Every itinerary is carefully crafted to offer the most rewarding experience.',
  },
  {
    icon: LocalIcon,
    title: 'LOCAL',
    description: '100% local contacts. Direct cultural connections. We’ll immerse you in local culture, everywhere you go.',
  },
  {
    icon: PersonalIcon,
    title: 'PERSONAL',
    description: 'Be treated like a friend, not a customer. Every message you receive comes from a real person. You can even call us, too.',
  },
  {
    icon: ComfortableIcon,
    title: 'COMFORTABLE',
    description: 'High quality transportation. Carefully chosen accommodation. Incredible Expert Tour Leaders on every single trip.',
  },
  {
    icon: EducationalIcon,
    title: 'EDUCATIONAL',
    description: 'Itineraries packed with genuine local experiences, providing a fascinating education every step of the way.',
  },
];

export default function FeatureSection() {
  return (
    <div className='flex flex-col relative overflow-hidden mt-[40px] sm:mt-[60px] md:mt-[120px] 2xl:mt-[197px]'>
      {/* Top Text Header */}
      <div className='container min-[1920px]:!px-[208px] text-center flex flex-col gap-[12px] sm:gap-[20px] 2xl:gap-[24px] mb-[24px] sm:mb-[40px] md:mb-[60px] 2xl:mb-[80px] z-10'>
        <h2 className='section-title text-center text-text-dark uppercase self-center'>
          OUR TRIPS ARE NOT STANDARD <span className='text-accent-orange block'>GROUP TOURS</span>
        </h2>
        <h4 className='text-center font-inter font-normal text-[14px] sm:text-[20px] 2xl:text-[24px] leading-[1.3] 2xl:leading-[29px] text-text-dark'>
          Experience culture, wonder and fun like never before.
        </h4>
      </div>

      {/* Cards Grid - Placed in front */}
      <div className='relative z-10 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[20px] pb-[40px] sm:pb-[60px] lg:pb-[103px] min-[1920px]:!px-[208px]'>
        {featuresData.map((feature) => (
          <div key={feature.title} className="w-full max-w-[488px] mx-auto md:max-w-none h-full">
            <FeatureCard
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}