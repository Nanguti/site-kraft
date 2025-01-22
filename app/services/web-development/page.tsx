"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaRocket,
  FaMobile,
  FaShieldAlt,
  FaTools,
  FaSearch,
} from "react-icons/fa";

const features = [
  {
    icon: FaCode,
    title: "Custom Web Development",
    description:
      "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaMobile,
    title: "Responsive Design",
    description:
      "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Lightning-fast loading speeds and optimized performance for better user experience.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: FaShieldAlt,
    title: "Security & Maintenance",
    description:
      "Robust security measures and regular maintenance to keep your website safe and up-to-date.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FaTools,
    title: "CMS Integration",
    description:
      "Easy content management with popular CMS platforms like WordPress, Strapi, or custom solutions.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: FaSearch,
    title: "SEO Friendly",
    description:
      "Built-in SEO best practices to help your website rank better in search engines.",
    color: "from-cyan-500 to-cyan-600",
  },
];

const technologies = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 88 },
  { name: "TailwindCSS", level: 92 },
  { name: "MongoDB", level: 83 },
];

// Add new process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements and create a detailed roadmap for your project.",
    color: "from-blue-400 to-blue-600",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Creating intuitive interfaces and interactive prototypes for your approval.",
    color: "from-purple-400 to-purple-600",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building your solution using cutting-edge technologies and best practices.",
    color: "from-pink-400 to-pink-600",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "Rigorous testing and smooth deployment of your web application.",
    color: "from-orange-400 to-orange-600",
  },
];

// Add statistics
const statistics = [
  { value: "99%", label: "Client Satisfaction" },
  { value: "100+", label: "Projects Delivered" },
  { value: "85%", label: "Faster Load Times" },
  { value: "24/7", label: "Support Available" },
];

const WebDevelopment = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-blue-950 to-black py-32">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/2 h-full w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"
          />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
          <motion.div
            style={{ y, opacity }}
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
            <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-300">
              Web Development Services
            </span>
            <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Crafting Digital Excellence
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100/80">
              Transform your online presence with our expert web development
              services. We build fast, secure, and scalable web solutions that
              drive results.
            </p>
          </motion.div>

          {/* Animated Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 border-b border-gray-700/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-6">
              <pre className="text-sm text-blue-300">
                <code>{`const WebDevelopment = () => {
  return (
    <div className="future-of-web">
      {/* Your Vision */}
      {/* Our Expertise */}
      {/* Amazing Results */}
    </div>
  );
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Statistics Section */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                    delay: index * 0.2,
                  }}
                  className="mb-2 text-4xl font-bold text-blue-600"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
                <feature.icon className="mb-6 h-8 w-8 text-blue-600" />
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Development Process Section */}
      <section className="relative overflow-hidden bg-gray-50 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
              Our Process
            </span>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              How We Work
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Our proven development process ensures successful project delivery
              and exceeds client expectations.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className="relative z-10 overflow-hidden rounded-2xl bg-white 
                p-8 shadow-lg"
                >
                  <div
                    className={`absolute -right-4 -top-4 h-24 w-24 
                        bg-gradient-to-br ${step.color} opacity-10 blur-2xl`}
                  />
                  <div className="mb-4 text-4xl font-bold text-blue-600/20">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-blue-200 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Improve Technologies Section with 3D cards */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              Our Tech Stack
            </h2>
            <p className="mx-auto max-w-2xl text-blue-100/80">
              We use the latest technologies and frameworks to build modern,
              scalable web applications.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-xl bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-2 flex justify-between">
                  <span className="font-medium text-white">{tech.name}</span>
                  <span className="text-blue-300">{tech.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-blue-900/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep existing CTA Section with improved animation */}
      <section className="relative overflow-hidden bg-white py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container relative mx-auto px-4 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Let&apos;s discuss how we can help bring your vision to life with
            our expert web development services.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur group-hover:opacity-100" />
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get Started
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

export default WebDevelopment;
