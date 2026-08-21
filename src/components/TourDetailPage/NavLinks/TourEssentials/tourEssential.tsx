import React from 'react'
import TourEssentialCard from './tourEssentialCard';
export const tourEssentials = [
  {
    icon: "/images/tourDetail/Icon1.svg",
    title: "Medium Physical Level",
    description:
      "While the tour itself is not very strenuous, please note that it can involve the following: somewhat long days, a good amount of walking, being in the sun in potentially hot temperatures, long journeys, early morning wake-ups and other similar scenarios.",
  },
  {
     icon: "/images/tourDetail/Icon2.svg",
    title: "Accommodation",
    description:
      "We'll stay in 3* and 4* hotels during this trip. Accommodation is mid-range and all rooms have a private bathroom. There is a maximum of 6 single rooms available, offered on a first come-first served basis. The remainder of the rooms will be paired together, two travelers per room in two single beds. (*Please note: If you book a shared room and we cannot find another traveler to share that room, there will be an extra surcharge for having a single room.)",
  },
  {
    icon: "/images/tourDetail/Icon3.svg",
    title: "Transport",
    description:
      "During the trip, we'll get around with a combination of comfortable vans, public transportation and short flights between countries.",
  },
  {
     icon: "/images/tourDetail/Icon4.svg",
    title: "Meals",
    description:
      "Breakfast every day, 7 lunches and 10 dinners are included. With included meals, some will be served family style, others will involve food tasting at several places and other times you will be able to order anything you wish from the menu. All dietary restrictions can be accommodated.",
  },
  {
     icon: "/images/tourDetail/Icon5.svg",
    title: "Sustainability",
    description:
      "As with all of our trips, we aim to offer as sustainable an experience as we can. Reusable water bottles and shopping bags are provided to all guests, trash is recycled where possible and we avoid mass tourism activities that cause harm to the environment and/or do not benefit local communities.",
  },
  {
     icon: "/images/tourDetail/Icon6.svg",
    title: "Small Groups",
    description:
      "This tour requires a minimum of 8 participants and has a maximum of 12 participants in order to ensure the best small group tour experience. With such a small group, you'll be able to enjoy unique, rewarding activities that would not be accessible with more people. That's the kind of trip we love to offer!",
  },
];

export default function TourEssential() {
  return (
    <div
      id="tour-essentials"
      className="grid grid-cols-2 gap-[12px] lg:gap-[20px]"
    >
      {tourEssentials.map((item, index) => (
        <TourEssentialCard
          key={item.title || index}
          IconUrl={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}
