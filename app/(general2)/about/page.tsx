import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
  keywords: ["About page", "Leonando", "Information"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">ABOUTE PAGE</span>
    </>
  );
}
