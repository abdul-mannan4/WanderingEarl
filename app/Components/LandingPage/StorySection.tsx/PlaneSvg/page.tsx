import React from "react";

interface PlaneProps {
  className?: string;
}

export default function PlaneSvg({ className = "" }: PlaneProps) {
  return (
    <svg
      width="66"
      height="48"
      viewBox="0 0 66 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.8364 11.57L0.426392 37L14.1364 22.04L65.5464 23.5L9.8364 11.57Z"
        fill="#983827"
      />
      <path
        d="M0.706421 0C0.706421 0 11.1464 9 9.70642 11.87L65.0464 23.17C65.0464 23.17 38.4364 4.55 0.706421 0Z"
        fill="#EC5D44"
      />
      <path
        d="M0.00638558 37.49C-0.423614 38.3 21.0064 35.31 21.0064 35.31L13.6664 21.75C13.6664 21.75 3.79639 30.4 0.00638558 37.49Z"
        fill="#EF6047"
      />
      <path
        d="M13.6365 21.75C13.6365 21.75 23.7065 38.17 18.0665 47.77L65.9365 23.42C65.9365 23.42 18.7065 20.78 13.6365 21.75Z"
        fill="#E9482B"
      />
    </svg>
  );
}