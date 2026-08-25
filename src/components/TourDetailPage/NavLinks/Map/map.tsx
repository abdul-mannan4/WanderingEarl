import React from "react";
import Image from "next/image";

export default function Map() {
  return (
    <div className="relative w-full aspect-square">
      <Image
        src="/images/tourDetail/worldMap.png"
        alt="World Map"
        fill
        sizes="(max-width: 768px) 100vw, 1038px"
        className="object-contain"
        priority
      />
    </div>
  );
}