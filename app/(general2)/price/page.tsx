import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing page",
  description: "Pagina de precios de m iservicio",
  keywords: ["Price page", "Leonando", "Information"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">PRICE PAGE</span>
    </>
  );
}
