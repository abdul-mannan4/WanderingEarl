import Image from "next/image";

export default function contactSection() {
  return (
    <div className='container 2xl:!px-[80px]'>
      <div className="pt-[40px] sm:pt-[50px] md:pt-[60px] 2xl:pt-[85.41px] pb-[30px] sm:pb-[40px] md:pb-[50px] 2xl:pb-[84.41px]">
        <div className="relative flex justify-between bg-[#E9482B] border-[2px] sm:border-[3px] border-[#AF8A79] rounded-tl-[16px] sm:rounded-tl-[24px] rounded-tr-[100px] sm:rounded-tr-[240px] md:rounded-tr-[380px] lg:rounded-tr-[600px] 2xl:rounded-tr-[860px] rounded-bl-[16px] sm:rounded-bl-[24px] rounded-br-[16px] sm:rounded-br-[24px]">

          <div className="pt-[16px] sm:pt-[24px] md:pt-[30px] lg:pt-[50px] 2xl:pt-[112px] pl-[12px] sm:pl-[24px] md:pl-[35px] lg:pl-[50px] 2xl:pl-[128px] pr-[145px] sm:pr-[250px] md:pr-[310px] lg:pr-[420px] xl:pr-[500px] 2xl:pr-0 pb-[16px] sm:pb-[24px] md:pb-[30px] lg:pb-[50px] 2xl:pb-[103px] flex flex-col items-start gap-[10px] sm:gap-[16px] md:gap-[20px] 2xl:gap-[40px] z-10">

            <p className="font-[900] text-[10px] sm:text-[14px] md:text-[18px] lg:text-[26px] xl:text-[34px] 2xl:text-[40px] leading-[1.2] sm:leading-[1.25] 2xl:leading-[56px] max-w-[180px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[440px] xl:max-w-[550px] 2xl:max-w-[915px] tracking-[0%] uppercase text-white">
              If you have any questions, simply get in touch. We’re here to help
              and we always reply quickly.
            </p>
            <button
              className="pt-[6px] sm:pt-[8px] md:pt-[10px] 2xl:pt-[15px] px-[12px] sm:px-[18px] md:px-[22px] 2xl:px-[30px] pb-[6px] sm:pb-[9px] md:pb-[11px] 2xl:pb-[16px] flex gap-[6px] sm:gap-[10px] rounded-[20px] sm:rounded-[30px] bg-[#1E365C] font-[Inter] font-[700] text-[9px] sm:text-[12px] md:text-[14px] 2xl:text-[18px] leading-[100%] tracking-[0%] text-white cursor-pointer hover:bg-[#152744] transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="absolute w-[185px] h-[155px] sm:w-[300px] sm:h-[268px] md:w-[350px] md:h-[295px] lg:w-[500px] lg:h-[412px] xl:w-[620px] xl:h-[463px] 2xl:w-[723.47px] 2xl:h-[645.81px] right-0 -top-[20%] sm:-top-[22%] md:-top-[24%] lg:-top-[25%] xl:-top-[22%] 2xl:-top-[18%] pointer-events-none z-10">
            <Image
              src="/images/thumbsUp.png"
              fill
              alt="Tourist_Thumbs_UP"
              sizes="100"
              priority
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}