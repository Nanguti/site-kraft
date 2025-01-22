"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ServicesGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: { x: number; y: number; r: number; vy: number }[] = [];
    const particleCount = 150;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        vy: Math.random() * 1.5 + 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y > canvas.height) p.y = -p.r;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173, 216, 230, 0.8)`; // Light blue particles
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
      icon: "🌐",
    },
    {
      title: "SEO Services",
      description: "Improve your search rankings and online visibility.",
      icon: "🚀",
    },
    {
      title: "Digital Solutions",
      description: "Comprehensive digital strategies for business growth.",
      icon: "💡",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="relative py-20 rounded-lg text-white bg-indigo-950 ">
        {/* Particle Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 -z-10 h-full w-full"
        />

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Title */}
          <motion.h2
            className="mb-12 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            What We Offer
          </motion.h2>

          {/* Service Cards */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 p-6 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {/* Animated Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl shadow-md">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mt-4 text-gray-300">{service.description}</p>

                {/* Interactive Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 blur-xl"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;
