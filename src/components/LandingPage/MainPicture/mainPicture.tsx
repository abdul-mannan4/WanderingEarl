// PageMain.tsx
import Image from "next/image";
import Overlay from "./Overlay/overlay";
import Hero from "../Hero/hero";

export default function PageMain() {
  return (
    <div className="relative w-full overflow-x-hidden flex flex-col">

      {/* Dedicated Aspect Ratio Container */}
      <div className="relative w-full aspect-[668/700] sm:aspect-[668/620] md:aspect-[760/600] lg:aspect-[1921/980] xl:aspect-[1921/780]">

        {/* Background Image */}
        <Image
          src="/images/landingPage/backgroundPic.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />

        <Overlay >
          <Hero />
        </Overlay>

      </div>




    </div>
  );
}