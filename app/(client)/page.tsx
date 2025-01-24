import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import Industries from "@/components/home/Industries";
import CaseStudies from "@/components/home/CaseStudies";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Site Kraft Systems - Leading web development and SEO company in Nairobi",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      <Industries />
      <CaseStudies />
      <Team />
      <Testimonials />
      <BlogPreview />
      <ContactForm />
    </>
  );
}
