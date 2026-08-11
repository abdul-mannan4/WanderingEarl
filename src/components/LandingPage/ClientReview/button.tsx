import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselButtonProps {
  direction?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
}

export default function CarouselButton({
  direction = 'left',
  onClick,
  disabled = false,
}: CarouselButtonProps) {
  const isLeft = direction === 'left';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-[60px] h-[60px] flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
        isLeft
          ? 'bg-transparent border-[2px] border-[#D1D5DB] hover:border-[#1E365C] text-[#8F8F8F]'
          : 'bg-[#1E365C] border-[2px] border-[#1E365C] hover:bg-[#152744] text-white'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={isLeft ? 'Previous Slide' : 'Next Slide'}
    >
      {isLeft ? (
        <ChevronLeft className="w-6 h-6" />
      ) : (
        <ChevronRight className="w-6 h-6" />
      )}
    </button>
  );
}