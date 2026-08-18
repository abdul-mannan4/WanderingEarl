// InfoSection.tsx
import InfoCard from "./infoCard"

export default function InfoSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:!px-0 pb-[32px] lg:pb-[100px] xl:pb-[141px] relative lg:pt-[20px] w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-0">
      <InfoCard
        image="/images/ourStyle/AeroPlane.jpg"
        alt="Airplane ticket and globe"
        title="NO COOKIE-CUTTER TRIPS."
        ishide={true}
        highlightedWord="COOKIE-CUTTER"
        paddingX="px-6 sm:px-10 lg:pl-10 lg:pr-14 xl:pl-14 xl:pr-20 2xl:pl-[80px] 2xl:pr-[138px]"
        paragraphs={[
          "We make a point of handcrafting every trip we offer, which is why we can say with pride that no two tours we offer are the same. Every time we sit down to make an itinerary for a tour, we build it from the ground up. We choose the ideal route, best lodgings, most rewarding activities, tastiest restaurants, and more, that will all lead to the most extraordinary trip possible.",
          `We also allow for flexibility on the spot, so if we see something fantastic happening (ever been to an Indian wedding?) we can stop and join in the fun without worrying that we'll be "off-schedule."`,
          "It's for these reasons that we don't make contracts with hotels, restaurants, and tourist sites like so many other operators. We want to have the freedom to offer the absolute best trip, and we want to make sure it's not just what you expected, but so much more.",
        ]}
      />

      <InfoCard
        image="/images/ourStyle/Hat.jpg"
        alt="Travel hat and boarding pass"
        title="SAFETY"
        
        paddingX="px-6 sm:px-10 lg:pl-14 lg:pr-10 xl:pl-20 xl:pr-14 2xl:pl-[138px] 2xl:pr-[80px]"
        paragraphs={[
          "Safety is not something we take lightly. When you travel with Wandering Earl Tours, you can be confident that the safety of every traveler, every team member and the local populations is our top priority...always.",
          "Every tour is led by one of our amazing Expert Tour Leaders who is there to ensure your trip runs smoothly and safely. These leaders are with you throughout your experience and are highly skilled in handling all kinds of situations. They also work side by side with our fantastic team of local contacts who offer a level of expertise that ensures any situation can be handled quickly and properly.",
        ]}
      />
    </div>
  )
}