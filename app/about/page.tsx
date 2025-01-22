"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaHeart,
  FaGlobe,
} from "react-icons/fa";

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge solutions and creative problem-solving.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: FaHandshake,
    title: "Partnership",
    description:
      "Building lasting relationships through trust, transparency, and collaboration.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaHeart,
    title: "Passion",
    description:
      "Dedicated to crafting exceptional digital experiences with enthusiasm.",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: FaRocket,
    title: "Excellence",
    description:
      "Committed to delivering outstanding results that exceed expectations.",
    color: "from-violet-500 to-violet-600",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to transform digital landscapes.",
  },
  {
    year: "2020",
    title: "Team Expansion",
    description: "Grew our talented team of digital experts.",
  },
  {
    year: "2021",
    title: "100+ Projects",
    description: "Successfully delivered over 100 client projects.",
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Expanded services to international markets.",
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Recognized for excellence in digital innovation.",
  },
];

const stats = [
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "15+", label: "Team Members" },
  { number: "4+", label: "Years Experience" },
];

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-b from-blue-950 to-gray-900 py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"
          />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Our Story
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100/80">
              We&apos;ve helped numerous businesses achieve their digital goals
              through innovative solutions and dedicated service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                We're on a mission to empower businesses with innovative digital
                solutions that drive growth and success. Through cutting-edge
                technology and creative excellence, we transform ideas into
                impactful digital experiences.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <FaGlobe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Global Impact
                  </h3>
                  <p className="text-gray-600">
                    Serving clients worldwide with local expertise
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              The principles that guide our work and relationships with clients.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
                <value.icon className="mb-6 h-8 w-8 text-blue-600" />
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 py-24">
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">Our Journey</h2>
            <p className="mx-auto max-w-2xl text-blue-100/80">
              The milestones that have shaped our growth and success.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-blue-300/20" />
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-8 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-1/2 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-2 text-2xl font-bold text-blue-300">
                    {milestone.year}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-blue-100/80">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container relative mx-auto px-4 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Work Together?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100/80">
            Let&apos;s discuss how we can help transform your digital presence
            and achieve your business goals.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-75 blur group-hover:opacity-100" />
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get in Touch
              <motion.svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
