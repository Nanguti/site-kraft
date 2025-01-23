"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { IconType } from "react-icons";
import {
  FaCode,
  FaSearch,
  FaShoppingCart,
  FaPaintBrush,
  FaWordpress,
  FaTools,
} from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

const services: Service[] = [
  {
    title: "Custom Web Development",
    description:
      "Tailored web solutions built with cutting-edge technologies to meet your specific business needs.",
    icon: FaCode,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your website's visibility and rank higher on Google with our expert SEO services.",
    icon: FaSearch,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Build powerful online stores with secure payment integration and inventory management.",
    icon: FaShoppingCart,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Web Design",
    description:
      "Create stunning, responsive websites that provide exceptional user experience across all devices.",
    icon: FaPaintBrush,
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "CMS Development",
    description:
      "Easy-to-use content management systems that give you full control over your website.",
    icon: FaWordpress,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Website Maintenance",
    description:
      "Regular updates, security patches, and technical support to keep your website running smoothly.",
    icon: FaTools,
    color: "from-red-400 to-red-600",
  },
];

const ServicesGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize(); // Initial size
    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }> = [];
    const particleCount = 100; // Increased for better visibility

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 1, // Increased speed
        vy: (Math.random() - 0.5) * 1, // Increased speed
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges instead of bouncing
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // Increased opacity
        ctx.fill();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            // Increased connection distance
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              0.2 * (1 - distance / 150)
            })`; // Increased opacity
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <section
        className="relative container overflow-hidden bg-gradient-to-br
       from-blue-900 via-indigo-900 to-purple-900 py-20 mt-32 rounded-lg"
      >
        {/* Animated Background Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-20"
        />

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-bold text-white md:text-4xl"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-2xl text-gray-300"
            >
              We offer comprehensive web development and digital marketing
              solutions to help your business thrive in the digital world.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 transition-opacity 
                    duration-300 group-hover:opacity-10`}
                />

                <div className="relative">
                  <div className="mb-4 inline-block rounded-lg bg-white/10 p-3">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;
