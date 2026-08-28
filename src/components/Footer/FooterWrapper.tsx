"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  // Hide footer on checkout pages
  if (pathname.startsWith("/checkout")) {
    return null;
  }

  return <Footer />;
}
