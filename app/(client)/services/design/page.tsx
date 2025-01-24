"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaPalette,
  FaMobile,
  FaRegLightbulb,
  FaRegEye,
  FaChartBar,
  FaLayerGroup,
} from "react-icons/fa";

const services = [
  {
    icon: FaPalette,
    title: "UI Design",
    description:
      "Creating visually stunning and intuitive user interfaces that captivate and engage your audience.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: FaRegLightbulb,
    title: "UX Strategy",
    description:
      "Crafting seamless user experiences through research-driven design strategies and user journey mapping.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: FaMobile,
    title: "Responsive Design",
    description:
      "Ensuring your design looks and functions perfectly across all devices and screen sizes.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaRegEye,
    title: "Visual Design",
    description:
      "Creating cohesive visual languages that strengthen your brand identity and message.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: FaLayerGroup,
    title: "Design Systems",
    description:
      "Building scalable and consistent design systems that streamline your product development.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: FaChartBar,
    title: "User Testing",
    description:
      "Conducting thorough usability testing to validate and improve design decisions.",
    color: "from-rose-500 to-rose-600",
  },
];

const designProcess = [
  {
    phase: "01",
    title: "Discovery",
    description: "Understanding your goals, users, and business requirements",
    color: "violet",
  },
  {
    phase: "02",
    title: "Research",
    description: "User research, competitor analysis, and market insights",
    color: "pink",
  },
  {
    phase: "03",
    title: "Design",
    description: "Creating wireframes, prototypes, and visual designs",
    color: "blue",
  },
  {
    phase: "04",
    title: "Testing",
    description: "Usability testing and iterative improvements",
    color: "amber",
  },
];

// Interactive Design Preview Component
const DesignPreview = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative mx-auto max-w-lg"
  >
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: item * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 to-pink-100"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-pink-500/20 opacity-0 
          transition-opacity duration-300 group-hover:opacity-100"
          />
          <div className="absolute inset-4 rounded-xl bg-white/80 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const DesignPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-violet-950 to-gray-900 py-32">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,92,246,0.1)_1px,transparent_1px),
          linear-gradient(-45deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"
          />
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent"
          />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
              UI/UX Design Services
            </span>
            <h1
              className="mb-6 bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text 
            text-5xl font-bold text-transparent md:text-5xl"
            >
              Design That Delights
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-violet-100/80">
              Creating exceptional digital experiences through human-centered
              design and innovative solutions.
            </p>
          </motion.div>

          <DesignPreview />
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 transition-opacity
                     duration-300 group-hover:opacity-5`}
                />
                <service.icon className="mb-6 h-8 w-8 text-violet-600" />
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 to-pink-900 py-24">
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              Our Design Process
            </h2>
            <p className="mx-auto max-w-2xl text-violet-100/80">
              A systematic approach to creating user-centered designs that
              deliver results.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {designProcess.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <div
                    className={`absolute -right-4 -top-4 h-24 w-24 bg-gradient-to-br from-${step.color}-500/30 to-transparent blur-2xl`}
                  />
                  <div className="relative">
                    <div className="mb-4 text-3xl font-bold text-white/20">
                      {step.phase}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-violet-100/80">{step.description}</p>
                  </div>
                </div>
                {index < designProcess.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-violet-500/20 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-white py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container relative mx-auto px-4 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Let us collaborate to create designs that not only look beautiful
            but drive real results for your business.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block"
          >
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 opacity-75 
            blur group-hover:opacity-100"
            />
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-4 text-lg font-medium
               text-white transition-colors hover:bg-violet-700"
            >
              Start Your Project
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

export default DesignPage;
