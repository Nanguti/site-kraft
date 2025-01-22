"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaRocket, FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

const stats = [
  {
    icon: FaRocket,
    number: "100+",
    label: "Projects Completed",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaUsers,
    number: "50+",
    label: "Happy Clients",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaLightbulb,
    number: "5+",
    label: "Years Experience",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: FaChartLine,
    number: "90%",
    label: "Client Retention",
    color: "from-green-500 to-green-600",
  },
];

const AboutPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 py-24"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-2 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-300">
              About Us
            </span>
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Crafting Digital Excellence Since 2019
            </h2>
            <p className="mb-8 text-lg text-blue-100/80">
              We're more than just a web development company. We're your digital
              transformation partner, committed to turning your vision into
              reality with cutting-edge solutions and unparalleled expertise.
            </p>

            <div className="mb-8 space-y-4">
              {[
                "Innovation at Core",
                "Client-Centric Approach",
                "Result-Driven Solutions",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-full bg-blue-500/20 p-1">
                    <svg
                      className="h-4 w-4 text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition-all hover:bg-blue-700"
              >
                Learn More About Us
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />
                <div className="relative">
                  <stat.icon className="mb-4 h-8 w-8 text-blue-400" />
                  <div className="mb-2 text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
