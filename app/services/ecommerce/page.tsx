"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaShoppingCart,
  FaMobile,
  FaLock,
  FaChartLine,
  FaTruck,
  FaSync,
} from "react-icons/fa";

const services = [
  {
    icon: FaShoppingCart,
    title: "Custom E-commerce Development",
    description:
      "Tailored online stores built with cutting-edge technologies for optimal performance.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: FaMobile,
    title: "Mobile Commerce",
    description:
      "Responsive design ensuring seamless shopping experience across all devices.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaLock,
    title: "Secure Payment Integration",
    description: "Multiple payment gateways with top-tier security protocols.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaChartLine,
    title: "Analytics & Reporting",
    description:
      "Comprehensive sales tracking and performance analytics dashboard.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: FaSync,
    title: "Inventory Management",
    description: "Real-time stock tracking and automated inventory updates.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: FaTruck,
    title: "Shipping Integration",
    description:
      "Automated shipping calculations and multiple carrier options.",
    color: "from-teal-500 to-teal-600",
  },
];

const features = [
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "2x", label: "Faster Loading" },
  { number: "50%", label: "Higher Conversion" },
  { number: "24/7", label: "Support Available" },
];

const platforms = [
  { name: "Shopify", expertise: 95 },
  { name: "WooCommerce", expertise: 90 },
  { name: "Magento", expertise: 85 },
  { name: "Custom Solutions", expertise: 92 },
];

// Animated store preview component
const StorePreview = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative mx-auto max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl"
  >
    <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
      <div className="h-3 w-3 rounded-full bg-red-500" />
      <div className="h-3 w-3 rounded-full bg-yellow-500" />
      <div className="h-3 w-3 rounded-full bg-green-500" />
    </div>
    <div className="grid grid-cols-2 gap-4 p-6">
      {[1, 2, 3, 4].map((item) => (
        <motion.div
          key={item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: item * 0.2 }}
          className="aspect-square rounded-lg bg-gray-100"
        >
          <div className="h-full w-full animate-pulse bg-gradient-to-br from-gray-100 to-gray-200" />
        </motion.div>
      ))}
    </div>
    <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-4">
      <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full bg-emerald-500 px-4 py-2 text-sm text-white"
      >
        Add to Cart
      </motion.button>
    </div>
  </motion.div>
);

const EcommercePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-emerald-950 to-gray-900 py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"
          />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-300">
              E-commerce Solutions
            </span>
            <h1 className="mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Transform Your Online Store
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-emerald-100/80">
              Build a powerful e-commerce presence with our cutting-edge
              solutions designed for maximum conversions and growth.
            </p>
          </motion.div>

          <StorePreview />
        </div>
      </section>

      {/* Features Grid */}
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
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
                <service.icon className="mb-6 h-8 w-8 text-emerald-600" />
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-emerald-900 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-emerald-400">
                  {feature.number}
                </div>
                <div className="text-sm text-emerald-200">{feature.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              E-commerce Platforms We Master
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We specialize in multiple e-commerce platforms to provide the best
              solution for your business needs.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-xl bg-gray-50 p-6 shadow-lg"
              >
                <div className="mb-2 flex justify-between">
                  <span className="font-medium text-gray-900">
                    {platform.name}
                  </span>
                  <span className="text-emerald-600">
                    {platform.expertise}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${platform.expertise}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 to-emerald-800 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container relative mx-auto px-4 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Launch Your Online Store?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-emerald-100/80">
            Let's discuss how we can help you create a powerful e-commerce
            presence that drives sales and growth.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-75 blur group-hover:opacity-100" />
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-emerald-700"
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

export default EcommercePage;
