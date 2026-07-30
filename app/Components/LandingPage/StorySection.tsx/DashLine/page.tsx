import React from "react";

export default function DashLine({ className = "" }: { className?: string }) {
  return (
    <svg
      width="248.93"
      height="192.89"
      viewBox="0 0 252 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.50001 140.103C2.32001 167.433 25.89 192.353 53.17 194.213C80.45 196.073 107.38 174.213 110.65 147.023C111.46 140.273 110.86 133.023 107.11 127.353C103.36 121.683 95.86 118.113 89.5 120.463C82.3 123.103 79.14 132.393 81.56 139.673C83.98 146.953 90.63 152.153 97.77 154.933C105.412 157.765 113.702 158.363 121.672 156.656C129.641 154.948 136.959 151.007 142.77 145.293C155.61 132.293 158.48 112.783 163.33 95.1325C173.96 56.4125 191.9 -3.55748 250.43 1.76252"
        stroke="#6AACCE"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="8 8"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}