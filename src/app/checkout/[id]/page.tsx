import { notFound } from "next/navigation";
import { allTours } from "@/components/data/tours";
import CheckoutComponent from "@/components/Checkout/checkoutPage";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CheckoutRoute({ params }: PageProps) {
  const { id } = await params;
  const tour = allTours.find((item) => item.id === id) || allTours[0];

  if (!tour) {
    notFound();
  }

  return <CheckoutComponent tour={tour} />;
}
