// nicheIcon.ts (data file — keep as-is, just showing the shape)
import { LucideIcon, Camera, Building2, Shirt, Aperture, Flower2, Sparkles, Mountain, Bike, Footprints, UtensilsCrossed, ScrollText, Compass } from 'lucide-react'

export interface InterestItem {
  icon: LucideIcon
  label: string
}

export const interests: InterestItem[] = [
  { icon: Camera, label: 'Portrait photography' },
  { icon: Building2, label: 'Abandoned buildings' },
  { icon: Shirt, label: 'Textiles / crafts' },
  { icon: Aperture, label: 'Photography workshops' },
  { icon: Flower2, label: 'Wellness / spa' },
  { icon: Sparkles, label: 'Yoga / meditation retreats' },
  { icon: Mountain, label: 'Adventure / hiking' },
  { icon: Bike, label: 'Biking' },
  { icon: Footprints, label: 'Marathon / running' },
  { icon: UtensilsCrossed, label: 'Food/drink' },
  { icon: ScrollText, label: 'History' },
  { icon: Compass, label: 'General sightseeing' },
]