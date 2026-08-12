import React from "react";
import { Tour } from "../../data/type";
import TourCard from "./TourCard/tourCard";

interface TourSectionProps {
  year: string | number;
  title?: string;
  tours: Tour[];
  showGradient?: boolean;
  linearGradient?: string;
  layout?: "stacked" | "inline";
  containerPadding?: string;
  yearColor?: string;
  titleColor?: string;
  gridCols?: string;
  allTourBtn?: boolean;
  fontSize?: string;
  centerGrid?: boolean; // Controls whether remaining cards center on the last row
}

export default function TourSection({ 
  year,
  title = "TOURS", 
  tours, 
  showGradient = true,
  linearGradient = "bg-[linear-gradient(180deg,rgba(30,54,92,0.94)_1.84%,rgba(30,54,92,0.85)_22.16%,rgba(30,54,92,0.67)_40.63%,rgba(30,54,92,0.26)_66.16%,rgba(30,54,92,0)_87.56%)]",
  layout = "stacked",
  containerPadding = "min-[1920px]:!px-[208px]",
  yearColor,
  titleColor,
  gridCols = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  allTourBtn = false,
  fontSize = "text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] 2xl:text-[128px]",
  centerGrid = false
}: TourSectionProps) {

  const isRawGradient = linearGradient?.trim().startsWith("linear-gradient");
  const gradientStyle = isRawGradient
    ? { background: linearGradient.trim().replaceAll("_", " ") }
    : undefined;
  const gradientClass = isRawGradient ? "" : linearGradient;

  return (
    <div className="relative">
      {showGradient && (
        <div 
          className={`absolute top-0 left-0 right-0 h-[309px] pointer-events-none z-0 ${gradientClass}`}
          style={gradientStyle}
        />
      )}

      <div className="relative z-10">
        {/* Header Row */}
        <div
          className={`container flex flex-row ${allTourBtn ? "justify-between" : "justify-center"} items-end gap-[16px] ${containerPadding} ${showGradient ? "pt-[150px] lg:pt-[140px] 2xl:pt-[200px]" : "pt-0"
            }`}
        >
          <p className={`font-inter font-black ${yearColor} ${allTourBtn ? "text-left" : "text-center"} ${fontSize} leading-[1.05] 2xl:leading-[120px] uppercase`}>
            {year} <span className={`${layout === "stacked" ? "block" : "inline"} ${titleColor}`}>{title}</span>
          </p>

          {allTourBtn && (
            <button className="group flex items-center gap-2.5 pt-[10px] pb-[11px] md:pt-[15px] md:pb-[16px] px-[20px] xl:px-[30px] text-primary-navy rounded-[30px] border-[1px] border-primary-navy font-bold text-[14px] md:text-[16px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 shrink-0 mb-[6px] md:mb-[10px]">
              All Tours
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M14.7071 8.07112C15.0976 7.6806 15.0976 7.04743 14.7071 6.65691L8.34315 0.292947C7.95262 -0.0975778 7.31946 -0.0975779 6.92893 0.292946C6.53841 0.683471 6.53841 1.31664 6.92893 1.70716L12.5858 7.36401L6.92893 13.0209C6.53841 13.4114 6.53841 14.0446 6.92893 14.4351C7.31946 14.8256 7.95262 14.8256 8.34314 14.4351L14.7071 8.07112ZM-8.74228e-08 8.36401L14 8.36401L14 6.36401L8.74228e-08 6.36401L-8.74228e-08 8.36401Z"
                  fill="var(--primary-navy)"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Dynamic Card Container */}
        <div
          className={`container mt-[24px] md:mt-[32px] gap-[20px] ${containerPadding} ${centerGrid
              ? "flex flex-wrap justify-center"
              : gridCols
            }`}
        >
          {tours.map((tour, index) => (
            <div
              key={index}
              className={
                centerGrid
                  ? "w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] 2xl:w-[calc(25%-15px)] max-w-[488px] md:max-w-none"
                  : "w-full sm:max-w-[488px] mx-auto md:max-w-none md:last:col-span-2 md:last:max-w-[calc(50%-10px)] md:last:mx-auto lg:last:col-span-1 lg:last:max-w-none"
              }
            >
              <TourCard {...tour} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}