import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: {
    default: "Site Kraft Systems | Web Development & SEO Services in Nairobi",
    template: "%s | Site Kraft Systems",
  },
  description:
    "Professional web development and SEO services in Nairobi. We create modern, high-performance websites and digital solutions for businesses.",
  keywords: [
    "web development",
    "SEO",
    "Nairobi",
    "digital solutions",
    "website design",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Site Kraft Systems | Web Development & SEO Services in Nairobi",
    description: "Professional web development and SEO services in Nairobi.",
    url: "https://sitekraftsystems.com",
    siteName: "Site Kraft Systems",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
