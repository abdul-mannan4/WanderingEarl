export interface Tour {
  image: string;
  title: string;
  description: string;
  spotsBooked: number;
  totalSpots: number;
  location: string;
  dateRange: string;
  duration: string;
  badge: "spots-left" | "sold-out" | null;
  badgeText?: string;
  buttonType: "details" | "waitlist";
}