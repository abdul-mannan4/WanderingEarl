"use client";

import React from "react";
import Link from "next/link";

type StepNavigationProps = {
  backHref: string;
  onNext: () => void;
  backLabel?: string;
  nextLabel?: string;
  disabled?: boolean;
  loading?: boolean;
};

export default function StepNavigation({
  backHref,
  onNext,
  backLabel = "Back",
  nextLabel = "Next Step",
  disabled = false,
  loading = false,
}: StepNavigationProps) {
  return (
    <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-2">
      <Link
        href={backHref}
        className="px-8 py-3 rounded-full border border-gray-300 text-[16px] sm:text-[20px] text-[#8F8F8F] font-semibold hover:bg-gray-50 transition-colors"
      >
        {backLabel}
      </Link>

      <button
        type="button"
        onClick={onNext}
        disabled={disabled || loading}
        className="px-10 py-3 rounded-full bg-[#1E365C] hover:bg-[#152744] disabled:opacity-50 disabled:cursor-not-allowed text-white text-[16px] sm:text-[20px] font-bold transition-all shadow-md active:scale-95 cursor-pointer"
      >
        {loading ? "Please wait..." : nextLabel}
      </button>
    </div>
  );
}