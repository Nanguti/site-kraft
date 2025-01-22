import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Site Kraft Systems and our mission to deliver exceptional web development and SEO services in Nairobi",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">About Us</h1>
      {/* Content will go here */}
    </div>
  );
}
