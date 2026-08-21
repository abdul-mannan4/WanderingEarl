// data/tours.ts

import { Tour } from "./type";

export const tours24: Tour[] = [
  {
    id: "wander-across-mexico-2024",
    image: "/images/cardImages/Card1.png",
    title: "Wander Across Mexico",
    description:
      "Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
    spotsBooked: 2,
    totalSpots: 12,
    location: "Mexico",
    dateRange: "Nov 08 — Nov 17, 2024",
    duration: "10 days",
    badge: "spots-left" as const,
    badgeText: "ONLY 2 SPOTS LEFT",
    buttonType: "details" as const,
  },
  {
    id: "wander-to-vietnam-2024",
    image: "/images/cardImages/Card2.png",
    title: "Wander to Vietnam",
    description:
      "Join our unique journey into the heart of Vietnam! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
    spotsBooked: 2,
    totalSpots: 12,
    location: "Vietnam",
    dateRange: "Nov 08 — Nov 17, 2024",
    duration: "10 days",
    badge: "sold-out" as const,
    badgeText: "SOLD OUT",
    buttonType: "waitlist" as const,
  },
  {
    id: "wander-across-romania-2024",
    image: "/images/cardImages/Card3.png",
    title: "Wander Across Romania",
    description:
      "Join our unique journey into the heart of ROMANIA! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
    spotsBooked: 2,
    totalSpots: 12,
    location: "Romania",
    dateRange: "Nov 08 — Nov 17, 2024",
    duration: "10 days",
    badge: null,
    buttonType: "details" as const,
  },
];