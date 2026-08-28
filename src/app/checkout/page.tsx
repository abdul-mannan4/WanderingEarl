import { allTours } from "@/components/data/tours";
import CheckoutComponent from "@/components/Checkout/checkoutPage";

export default function CheckoutPage() {
  const defaultTour = allTours[0];
  return <CheckoutComponent tour={defaultTour} />;
}
