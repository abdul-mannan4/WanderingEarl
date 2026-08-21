import { notFound } from "next/navigation";
import { allTours } from "@/components/data/tours";
import TourDetailPage from "@/components/TourDetailPage/tourDetailPage";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TourDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const tour = allTours.find((item) => item.id === id);

  if (!tour) {
    notFound();
  }

  return <TourDetailPage tour={tour} />;
}
