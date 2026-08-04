"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "../../data/review";
import Review from "./ReviewCard/reviewCard";

export default function ClientReview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalItems = reviews.length;

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
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
    <div className="container ">
      <div className="flex flex-row justify-between items-end sm:items-center gap-4">
        <div className="section-title text-primary-navy">
          What Our Clients Say{" "}
          <span className="text-accent-orange sm:inline md:block">About Us</span>
        </div>

        <div className="flex flex-row gap-[16px] sm:gap-[35.61px] items-center shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous Review"
            className="w-[48px] h-[48px] sm:w-[65.39px] sm:h-[65.39px] flex items-center justify-center rounded-full border-[2px] border-border-gray text-[#8F8F8F] hover:border-primary-navy hover:text-primary-navy transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-9 sm:h-9" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Review"
            className="w-[48px] h-[48px] sm:w-[65.39px] sm:h-[65.39px] flex items-center justify-center rounded-full bg-primary-navy border-[2px] border-primary-navy text-white hover:bg-primary-navy-hover hover:border-primary-navy-hover transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-9 sm:h-9" />
          </button>
        </div>
      </div>

      <div className="mt-[24px] sm:mt-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="w-full sm:max-w-[488px] mx-auto md:max-w-none h-full"
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

      <div className="flex justify-center items-center gap-[12px] sm:gap-[16px] mt-[32px] sm:mt-[48px]">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`h-[11px] rounded-[6px] transition-all duration-300 cursor-pointer ${activePage === index
              ? "w-[40px] sm:w-[55px] bg-primary-navy"
              : "w-[18px] sm:w-[24px] bg-primary-navy/30 hover:bg-primary-navy/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}