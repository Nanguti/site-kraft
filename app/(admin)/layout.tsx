"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Only set sidebar on client-side
      if (typeof window !== "undefined") {
        setIsSidebarOpen(window.innerWidth >= 768);
      }
    };

    // Ensure initial client-side state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div
            className={`flex flex-col flex-1 transition-all duration-100 ${
              isSidebarOpen ? "" : "ml-0 md:ml-20"
            }`}
          >
            <Navbar toggleSidebar={toggleSidebar} />
            <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
