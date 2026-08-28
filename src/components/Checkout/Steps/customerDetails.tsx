"use client";

import React from "react";
import CustomDropdown from "./customDropdown";
import Coupon from "../Coupon/coupon";

export type CustomerDetails = {
  firstName: string;
  lastName: string;
  country: string;
  streetAddress: string;
  townCity: string;
  state: string;
  zipCode: string;
  email: string;
  coupon?: string;
};

const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Mexico",
  "Spain",
  "Italy",
  "Japan",
];

const STATES = [
  "California",
  "New York",
  "Texas",
  "Florida",
  "Washington",
  "Illinois",
  "Colorado",
  "Massachusetts",
  "Georgia",
  "Other",
];

export function getFirstCustomerDetailsError(data: CustomerDetails): {
  field: keyof CustomerDetails;
  message: string;
} | null {
  if (!data.firstName.trim()) {
    return { field: "firstName", message: "First name is required" };
  }
  if (!data.lastName.trim()) {
    return { field: "lastName", message: "Last name is required" };
  }
  if (!data.country.trim() || data.country === "Select") {
    return { field: "country", message: "Please select a country" };
  }
  if (!data.streetAddress.trim()) {
    return { field: "streetAddress", message: "Street address is required" };
  }
  if (!data.townCity.trim()) {
    return { field: "townCity", message: "Town/City is required" };
  }
  if (!data.state.trim() || data.state === "Select") {
    return { field: "state", message: "Please select a state" };
  }
  if (!data.zipCode.trim()) {
    return { field: "zipCode", message: "ZIP code is required" };
  }
  if (!data.email.trim()) {
    return { field: "email", message: "Email is required" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    return { field: "email", message: "Enter a valid email address" };
  }

  return null;
}

export function validateCustomerDetails(data: CustomerDetails) {
  const first = getFirstCustomerDetailsError(data);
  if (!first) return {};
  return { [first.field]: first.message };
}

export type CustomerDetailsStepProps = {
  tourId: string;
  data: CustomerDetails;
  setData: React.Dispatch<React.SetStateAction<CustomerDetails>>;
  errors: Partial<Record<keyof CustomerDetails, string>>;
  setErrors: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof CustomerDetails, string>>>
  >;
  onNext?: () => void;
};

export default function CustomerDetailsStep({
  tourId,
  data,
  setData,
  errors,
  setErrors,
}: CustomerDetailsStepProps) {
  const handleChange = (field: keyof CustomerDetails, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    // Clear error immediately when user begins filling that field
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <div className="flex flex-col gap-[36px] sm:gap-[48px] 2xl:gap-[60px] animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[24px] 2xl:gap-[40px]">
        {/* First Name */}
        <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
          <label className="font-inter font-normal text-[15px] sm:text-[16px] 2xl:text-[18px] text-text-dark">
            First Name
          </label>
          <input
            id="checkout-firstName"
            type="text"
            placeholder="Write"
            value={data.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className={`w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] rounded-[12px] border text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter placeholder:text-[#8F8F8F] focus:outline-none transition-colors ${
              errors.firstName
                ? "border-red-500 bg-red-50/20 text-red-900 focus:border-red-500"
                : "border-light-gray text-text-dark focus:border-[#1E365C]"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs sm:text-sm font-medium font-inter mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
          <label className="font-inter font-normal text-[15px] sm:text-[16px] 2xl:text-[18px] text-text-dark">
            Last Name
          </label>
          <input
            id="checkout-lastName"
            type="text"
            placeholder="Write"
            value={data.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className={`w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] rounded-[12px] border text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter placeholder:text-[#8F8F8F] focus:outline-none transition-colors ${
              errors.lastName
                ? "border-red-500 bg-red-50/20 text-red-900 focus:border-red-500"
                : "border-light-gray text-text-dark focus:border-[#1E365C]"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs sm:text-sm font-medium font-inter mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Country / Region */}
        <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
          <label className="font-inter font-normal text-[15px] sm:text-[16px] 2xl:text-[18px] text-text-dark">
            Country / Region
          </label>
          <CustomDropdown
            id="checkout-country"
            options={COUNTRIES}
            value={data.country}
            onChange={(val) => handleChange("country", val)}
            placeholder="Select"
            hasError={!!errors.country}
          />
          {errors.country && (
            <p className="text-red-500 text-xs sm:text-sm font-medium font-inter mt-1">{errors.country}</p>
          )}
        </div>

        {/* Street Address */}
        <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
          <label className="font-inter font-normal text-[15px] sm:text-[16px] 2xl:text-[18px] text-text-dark">
            Street Address
          </label>
          <input
            id="checkout-streetAddress"
            type="text"
            placeholder="Write"
            value={data.streetAddress}
            onChange={(e) => handleChange("streetAddress", e.target.value)}
            className={`w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] rounded-[12px] border text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter placeholder:text-[#8F8F8F] focus:outline-none transition-colors ${
              errors.streetAddress
                ? "border-red-500 bg-red-50/20 text-red-900 focus:border-red-500"
                : "border-light-gray text-text-dark focus:border-[#1E365C]"
            }`}
          />
          {errors.streetAddress && (
            <p className="text-red-500 text-xs sm:text-sm font-medium font-inter mt-1">
              {errors.streetAddress}
            </p>
          )}
        </div>

        {/* Town / City */}
        <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
          <label className="font-inter font-normal text-[15px] sm:text-[16px] 2xl:text-[18px] text-text-dark">
            Town / City
          </label>
          <input
            id="checkout-townCity"
            type="text"
            placeholder="Write"
            value={data.townCity}
            onChange={(e) => handleChange("townCity", e.target.value)}
            className={`w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] rounded-[12px] border text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter placeholder:text-[#8F8F8F] focus:outline-none transition-colors ${
              errors.townCity
                ? "border-red-500 bg-red-50/20 text-red-900 focus:border-red-500"
                : "border-light-gray text-text-dark focus:border-[#1E365C]"
            }`}
          />
          {errors.townCity && (
            <p className="text-red-500 text-xs sm:text-sm font-medium font-inter mt-1">{errors.townCity}</p>
          )}
        </div>

        {/* State */}
        <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
          <label className="font-inter font-normal text-[15px] sm:text-[16px] 2xl:text-[18px] text-text-dark">
            State
          </label>
          <CustomDropdown
            id="checkout-state"
            options={STATES}
            value={data.state}
            onChange={(val) => handleChange("state", val)}
            placeholder="Select"
            hasError={!!errors.state}
          />
          {errors.state && (
            <p className="text-red-500 text-xs sm:text-sm font-medium font-inter mt-1">{errors.state}</p>
          )}
        </div>

        {/* ZIP Code */}
        <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
          <label className="font-inter font-normal text-[15px] sm:text-[16px] 2xl:text-[18px] text-text-dark">
            ZIP Code
          </label>
          <input
            id="checkout-zipCode"
            type="text"
            placeholder="Write"
            value={data.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
            className={`w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] rounded-[12px] border text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter placeholder:text-[#8F8F8F] focus:outline-none transition-colors ${
              errors.zipCode
                ? "border-red-500 bg-red-50/20 text-red-900 focus:border-red-500"
                : "border-light-gray text-text-dark focus:border-[#1E365C]"
            }`}
          />
          {errors.zipCode && (
            <p className="text-red-500 text-xs sm:text-sm font-medium font-inter mt-1">{errors.zipCode}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5 sm:gap-2 2xl:gap-[16px]">
          <label className="font-inter font-normal text-[15px] sm:text-[16px] 2xl:text-[18px] text-text-dark">
            Email
          </label>
          <input
            id="checkout-email"
            type="email"
            placeholder="Write"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full h-[48px] sm:h-[52px] 2xl:h-[62px] px-[16px] sm:px-[18px] 2xl:px-[20px] rounded-[12px] border text-[15px] sm:text-[16px] 2xl:text-[18px] font-inter placeholder:text-[#8F8F8F] focus:outline-none transition-colors ${
              errors.email
                ? "border-red-500 bg-red-50/20 text-red-900 focus:border-red-500"
                : "border-light-gray text-text-dark focus:border-[#1E365C]"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm font-medium font-inter mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Coupon Code Component */}
      <Coupon
        value={data.coupon || ""}
        onApply={(code) => setData((prev) => ({ ...prev, coupon: code }))}
        onChange={(code) => setData((prev) => ({ ...prev, coupon: code }))}
      />
    </div>
  );
}
