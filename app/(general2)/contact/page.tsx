import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "Contactos de la pagina",
  keywords: ["Contact page", "Leonando", "Information"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">CONTANCT PAGE</span>
    </>
  );
}
