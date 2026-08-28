"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Tour } from "@/components/data/type";
import { useCart } from "@/context/CartContext";

// Modular Subcomponents
import StepIndicator from "./Steps/stepIndicator";
import CustomerDetailsStep, {
  CustomerDetails,
  getFirstCustomerDetailsError,
} from "./Steps/customerDetails";
import PaymentInformationStep from "./Steps/paymentInformation";
import PaymentSuccessStep from "./Steps/paymentSuccess";
import OrderSummary from "./OrderSummary/orderSummary";

type CheckoutComponentProps = {
  tour: Tour;
};

function CheckoutContent({ tour }: CheckoutComponentProps) {
  const { cartItems } = useCart();
  const searchParams = useSearchParams();

  // Pricing calculations from cart
  const totalTripCost = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.count,
    0
  );
  const dueToday = cartItems.reduce(
    (sum, item) => sum + item.depositPerPerson * item.count,
    0
  );
  const futurePayments = Math.max(0, totalTripCost - dueToday);

  // Step State: 1 = Customer Details, 2 = Payment Info, 3 = Done
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State (Step 1)
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    state: "",
    zipCode: "",
    email: "",
    coupon: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerDetails, string>>>({});

  // Form State (Step 2)
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank" | "check">("card");
  const [cardData, setCardData] = useState({
    cardNumber: "",
    exp: "",
    cvv: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleCardDataChange = (field: string, val: string) => {
    setCardData((prev) => ({ ...prev, [field]: val }));
  };

  const handleStepNavigation = (targetStep: 1 | 2 | 3) => {
    if (targetStep < step) {
      setStep(targetStep);
      return;
    }
    if (targetStep === 2 && step === 1) {
      handleNextStep();
    }
  };

  const handleBackStep = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    }
  };

  const handleNextStep = () => {
    if (cartItems.length === 0) return;

    if (step === 1) {
      const firstError = getFirstCustomerDetailsError(customerDetails);
      if (firstError) {
        setErrors({ [firstError.field]: firstError.message });
        const el = document.getElementById(`checkout-${firstError.field}`);
        if (el) {
          el.focus();
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        setErrors({});
        setStep(2);
      }
    } else if (step === 2) {
      if (agreeTerms) {
        setStep(3);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="container 2xl:!px-[80px] mx-auto pt-8 sm:pt-12 md:pt-[60px] 2xl:pt-[80px]">
        {/* Page Main Title */}
        <h1 className="font-inter font-black text-[32px] sm:text-[44px] md:text-[54px] 2xl:text-[63px] text-[#1E1E1E] uppercase tracking-tight pb-[20px] sm:pb-[30px] border-b border-light-gray">
          CHECKOUT
        </h1>

        <div className="mt-[32px] sm:mt-[48px] md:mt-[60px] 2xl:mt-[80px] flex flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-start gap-[24px] md:gap-[36px] lg:gap-[48px] xl:gap-[48px] 3xl:gap-[129px]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center font-inter w-full flex-1 max-w-[1038px] border border-light-gray rounded-[16px] bg-white gap-6">
              <h2 className="text-[22px] sm:text-[28px] font-bold text-text-dark">
                Your cart is currently empty
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#8F8F8F] max-w-[480px]">
                Please explore our tours and add at least one tour to your cart before proceeding to checkout.
              </p>
              <Link
                href="/tours"
                className="px-[32px] sm:px-[48px] py-[14px] sm:py-[18px] rounded-[40px] bg-primary-navy hover:bg-[#152744] text-white text-[15px] sm:text-[18px] font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Explore Tours
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-[36px] sm:gap-[48px] 2xl:gap-[60px] font-inter w-full flex-1 max-w-full xl:max-w-[1038px] min-w-0">
              <StepIndicator
                currentStep={step}
                onStepChange={handleStepNavigation}
              />

              {step === 1 && (
                <CustomerDetailsStep
                  tourId={tour?.id || "wander-across-mexico-2024"}
                  data={customerDetails}
                  setData={setCustomerDetails}
                  errors={errors}
                  setErrors={setErrors}
                />
              )}

              {step === 2 && (
                <PaymentInformationStep
                  paymentMethod={paymentMethod}
                  onPaymentMethodChange={setPaymentMethod}
                  cardData={cardData}
                  onCardDataChange={handleCardDataChange}
                  coupon={customerDetails.coupon || ""}
                  onCouponChange={(val) =>
                    setCustomerDetails((prev) => ({ ...prev, coupon: val }))
                  }
                  agreeTerms={agreeTerms}
                  onAgreeTermsChange={setAgreeTerms}
                />
              )}

              {step === 3 && (
                <PaymentSuccessStep email={customerDetails.email} />
              )}

              {/* Centrally Managed Bottom Navigation Buttons */}
              {step < 3 && (
                <div className="flex items-center justify-between w-full max-w-[1038px] pt-4 gap-4">
                  {step === 1 ? (
                    <Link
                      href="/cart"
                      className="px-[24px] sm:px-[48px] py-[14px] sm:py-[20px] rounded-[40px] border border-gray-300 text-[15px] sm:text-[20px] text-[#8F8F8F] font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center text-center max-w-[316px] w-full"
                    >
                      Back
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="px-[24px] sm:px-[48px] py-[14px] sm:py-[20px] rounded-[40px] border border-gray-300 text-[15px] sm:text-[20px] text-[#8F8F8F] font-semibold hover:bg-gray-50 transition-colors cursor-pointer inline-flex items-center justify-center text-center max-w-[316px] w-full"
                    >
                      Back
                    </button>
                  )}

                  <button
                    type="button"
                    disabled={step === 2 && !agreeTerms}
                    onClick={handleNextStep}
                    className="px-[24px] sm:px-[48px] py-[14px] sm:py-[20px] rounded-[40px] bg-[#1E365C] hover:bg-[#152744] text-white text-[15px] sm:text-[20px] font-bold transition-all shadow-md active:scale-95 disabled:opacity-50 cursor-pointer inline-flex items-center justify-center text-center max-w-[316px] w-full"
                  >
                    {step === 1 ? "Next Step" : "Place Order"}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* RIGHT SIDE: Figma Matching Order Summary Card */}
          <div className="w-full max-w-full xl:max-w-[420px] 2xl:max-w-[593px] 3xl:max-w-[593px] flex justify-center shrink-0 xl:sticky xl:top-[30px] 2xl:top-[40px] self-center xl:self-start mx-auto xl:mx-0">
            <OrderSummary
              tour={tour}
              items={cartItems}
              depositPerPerson={500}
              totalTripCost={totalTripCost}
              dueToday={dueToday}
              futurePayments={futurePayments}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutComponent({ tour }: CheckoutComponentProps) {
  return (
    <Suspense
      fallback={
        <div className="container py-20 text-center font-inter font-bold">
          Loading checkout...
        </div>
      }
    >
      <CheckoutContent tour={tour} />
    </Suspense>
  );
}
