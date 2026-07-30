// Components/TourBadge.tsx
type BadgeType = "spots-left" | "sold-out";

interface TourBadgeProps {
  type: BadgeType;
  text?: string;
}

export default function TourBadge({ type, text }: TourBadgeProps) {
  if (type === "spots-left") {
    return (
      <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#FFB800] rounded-full flex flex-col items-center justify-center text-center p-1 shadow-md z-10">
        <span className="font-inter font-black text-[10px] sm:text-[12px] leading-[10px] sm:leading-[12px] text-[#1E1E1E] uppercase">ONLY</span>
        <span className="font-inter font-black text-[10px] sm:text-[12px] leading-[10px] sm:leading-[12px] text-[#C60F13] uppercase">2 SPOTS</span>
        <span className="font-inter font-black text-[8px] sm:text-[10px] leading-[9px] sm:leading-[11px] text-[#1E1E1E] uppercase">LEFT</span>
      </div>
    );
  }

  return (
    <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#C60F13] rounded-full flex flex-col items-center justify-center text-center p-1 shadow-md z-10">
      <span className="font-inter font-black text-[9px] sm:text-[11px] leading-[10px] sm:leading-[12px] text-white uppercase">SOLD</span>
      <span className="font-inter font-black text-[9px] sm:text-[11px] leading-[10px] sm:leading-[12px] text-white uppercase">OUT</span>
    </div>
  );
}