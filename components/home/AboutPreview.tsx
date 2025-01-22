"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutPreview = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const bubbles: Bubble[] = [];

    class Bubble {
      x: number;
      y: number;
      radius: number;
      speed: number;
      alpha: number;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.radius = Math.random() * 5 + 2;
        this.speed = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.7 + 0.3;
      }

      update(canvas: HTMLCanvasElement) {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.radius;
          this.x = Math.random() * canvas.width;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${this.alpha})`;
        ctx.fill();
      }
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    for (let i = 0; i < 100; i++) {
      bubbles.push(new Bubble(canvas));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((bubble) => {
        bubble.update(canvas);
        bubble.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <section
        className=" p- container relative my-32 
      overflow-hidden rounded-lg bg-gradient-to-b from-gray-900 to-black py-20 text-white"
      >
        {/* Dropping Bubbles Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

        <div className="container mx-auto px-6 md:px-12">
          {/* Animated Heading */}
          <motion.h2
            className="mb-8 bg-gradient-to-r from-blue-400 via-cyan-400
             to-purple-500 bg-clip-text text-center text-4xl font-extrabold
              text-transparent md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            About <span className="text-white">Site Kraft Systems</span>
          </motion.h2>

          {/* Animated Description */}
          <motion.p
            className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We are a leading web development and SEO company based in Nairobi,
            committed to empowering businesses with innovative digital
            solutions. Our focus on cutting-edge technologies ensures your brand
            is success in a fast-evolving digital world.
          </motion.p>

          {/* Highlight Features Section */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
            {[
              {
                title: "Web Development",
                description:
                  "Crafting scalable, high-performance websites tailored to your unique needs.",
                gradient: "from-cyan-500 to-blue-500",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10.75a7.25 7.25 0 1114.5 0M12 14.25a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm6.82 1.5l3.18 3.5m0 0l-3.18 3.5m3.18-3.5H13"
                  />
                ),
              },
              {
                title: "SEO Optimization",
                description:
                  "Helping your business rise to the top of search engine rankings.",
                gradient: "from-purple-500 to-pink-500",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 14l3-3 3 3M9 10l3-3 3 3"
                  />
                ),
              },
              {
                title: "Custom Solutions",
                description:
                  "Tailored strategies designed to drive results and meet business goals.",
                gradient: "from-green-400 to-blue-500",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v8m0 0h8m-8 0H4"
                  />
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative rounded-xl bg-gradient-to-b from-gray-800/60 to-gray-900 p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Icon */}
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r ${feature.gradient}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="h-8 w-8"
                  >
                    {feature.icon}
                  </svg>
                </div>
                {/* Title */}
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-400">
                  {feature.title}
                </h4>
                {/* Description */}
                <p className="mt-2 text-sm text-gray-300 group-hover:text-gray-200">
                  {feature.description}
                </p>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur-lg transition duration-500 group-hover:opacity-25"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPreview;
