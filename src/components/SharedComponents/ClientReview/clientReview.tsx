"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "../../data/review";
import Review from "./ReviewCard/reviewCard";

type ClientReviewProp={
  sliderColor?:string
}

export default function ClientReview({sliderColor="bg-primary-navy"}:ClientReviewProp) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalItems = reviews.length;

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const visibleReviews = Array.from({ length: itemsPerPage }, (_, i) => {
    return reviews[(currentIndex + i) % totalItems];
  });

  const activePage = Math.floor(currentIndex / itemsPerPage) % totalPages;

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 2xl:!px-[80px] w-full">
      <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
        <h2 className="font-inter font-black text-[22px] min-[360px]:text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] 2xl:text-[48px] uppercase leading-[1.15] text-primary-navy">
          What Our Clients Say{" "}
          <span className="text-accent-orange block whitespace-nowrap">About Us</span>
        </h2>

        <div className="flex flex-row gap-[10px] sm:gap-[16px] lg:gap-[30px] items-center shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous Review"
            className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full border-[2px] border-border-gray text-[#8F8F8F] hover:border-primary-navy hover:text-primary-navy transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Review"
            className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full bg-primary-navy border-[2px] border-primary-navy text-white hover:bg-primary-navy-hover hover:border-primary-navy-hover transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>

      <div className="mt-[20px] sm:mt-[28px] lg:mt-[32px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6 justify-items-center">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="w-full max-w-[500px] h-full mx-auto"
            >
              <Review
                description={review.description}
                name={review.name}
                location={review.location}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-[10px] sm:gap-[16px] mt-[28px] sm:mt-[48px]">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            aria-label={`Go to review page ${index + 1}`}
            className={`h-[10px] sm:h-[11px] rounded-[6px] transition-all duration-300 cursor-pointer ${
              activePage === index
                ? `w-[36px] sm:w-[55px] ${sliderColor}`
                : `w-[14px] sm:w-[24px] ${sliderColor}/30 hover:${sliderColor}/50`
            }`}
          />
        ))}
      </div>
    </div>
  );
}