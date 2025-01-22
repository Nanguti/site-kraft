import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive web development and SEO services tailored for businesses in Nairobi",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Our Services</h1>
      {/* Content will go here */}
    </div>
  );
}
