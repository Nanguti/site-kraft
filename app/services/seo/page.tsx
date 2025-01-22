"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaSearch,
  FaChartLine,
  FaTools,
  FaCogs,
  FaLink,
  FaMobileAlt,
  FaNewspaper,
  FaChartBar,
} from "react-icons/fa";

// Animated gradient background component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      animate={{
        background: [
          "radial-gradient(circle at 0% 0%, #4f46e5 0%, transparent 50%)",
          "radial-gradient(circle at 100% 100%, #4f46e5 0%, transparent 50%)",
          "radial-gradient(circle at 0% 100%, #4f46e5 0%, transparent 50%)",
          "radial-gradient(circle at 100% 0%, #4f46e5 0%, transparent 50%)",
          "radial-gradient(circle at 0% 0%, #4f46e5 0%, transparent 50%)",
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 opacity-30"
    />
    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[length:32px_32px]" />
  </div>
);

const services = [
  {
    icon: FaSearch,
    title: "Keyword Research & Strategy",
    description:
      "Data-driven keyword research and strategic planning to target high-value search terms.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaChartLine,
    title: "Technical SEO Optimization",
    description:
      "Comprehensive technical audits and optimization for peak search engine performance.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaNewspaper,
    title: "Content Strategy & Creation",
    description:
      "SEO-optimized content that engages readers and ranks well in search results.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: FaLink,
    title: "Link Building",
    description:
      "Strategic link building campaigns to boost your site's authority and rankings.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile SEO",
    description:
      "Mobile-first optimization ensuring perfect performance across all devices.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FaChartBar,
    title: "Analytics & Reporting",
    description:
      "Detailed performance tracking and monthly reports on your SEO progress.",
    color: "from-cyan-500 to-cyan-600",
  },
];

const processSteps = [
  {
    icon: FaSearch,
    title: "SEO Audit",
    description:
      "Comprehensive analysis of your current SEO performance and opportunities.",
    duration: "Week 1-2",
  },
  {
    icon: FaCogs,
    title: "Strategy Development",
    description:
      "Custom SEO strategy tailored to your business goals and target audience.",
    duration: "Week 2-3",
  },
  {
    icon: FaTools,
    title: "Implementation",
    description:
      "Executing optimizations and improvements across your website.",
    duration: "Week 3-6",
  },
  {
    icon: FaChartLine,
    title: "Monitoring & Optimization",
    description: "Continuous tracking and refinement of SEO performance.",
    duration: "Ongoing",
  },
];

const results = [
  { metric: "Organic Traffic", increase: "150%", color: "text-blue-500" },
  { metric: "Keyword Rankings", increase: "200+", color: "text-purple-500" },
  { metric: "Conversion Rate", increase: "75%", color: "text-pink-500" },
  { metric: "Domain Authority", increase: "40+", color: "text-orange-500" },
];

// Interactive ROI Calculator Component
const ROICalculator = () => {
  const [monthlyVisitors, setMonthlyVisitors] = useState(1000);
  const [conversionRate, setConversionRate] = useState(2);
  const averageOrderValue = 100;

  const calculateROI = () => {
    const monthlyConversions = (monthlyVisitors * conversionRate) / 100;
    const monthlyRevenue = monthlyConversions * averageOrderValue;
    return monthlyRevenue.toFixed(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white p-8 shadow-xl"
    >
      <h3 className="mb-6 text-2xl font-bold text-gray-900">ROI Calculator</h3>
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Monthly Visitors
          </label>
          <input
            type="range"
            min="100"
            max="10000"
            value={monthlyVisitors}
            onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
            className="w-full"
          />
          <div className="mt-2 text-right text-sm text-gray-600">
            {monthlyVisitors.toLocaleString()}
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Conversion Rate (%)
          </label>
          <input
            type="range"
            min="0.1"
            max="10"
            step="0.1"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="w-full"
          />
          <div className="mt-2 text-right text-sm text-gray-600">
            {conversionRate}%
          </div>
        </div>
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="text-sm text-gray-600">Estimated Monthly Revenue</div>
          <div className="text-3xl font-bold text-blue-600">
            ${calculateROI()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Animated Progress Circle Component
const ProgressCircle = ({ progress }: { progress: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
    className="relative h-40 w-40"
  >
    <svg className="h-full w-full" viewBox="0 0 100 100">
      <circle
        className="stroke-current text-gray-200"
        strokeWidth="10"
        fill="transparent"
        r="40"
        cx="50"
        cy="50"
      />
      <motion.circle
        className="stroke-current text-blue-500"
        strokeWidth="10"
        fill="transparent"
        r="40"
        cx="50"
        cy="50"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: progress }}
        transition={{ duration: 1, ease: "easeOut" }}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
        style={{
          strokeDasharray: "251.2",
          strokeDashoffset: "251.2",
        }}
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-2xl font-bold text-gray-900">
        {Math.round(progress * 100)}%
      </span>
    </div>
  </motion.div>
);

const SEOPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-indigo-950 to-black py-32">
        <AnimatedBackground />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1 text-sm font-semibold text-indigo-300">
              SEO Services
            </span>
            <h1 className="mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Dominate Search Rankings
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-indigo-100/80">
              Drive organic traffic and boost your online visibility with our
              data-driven SEO strategies and proven optimization techniques.
            </p>
          </motion.div>

          {/* Animated Stats */}
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`mb-2 text-4xl font-bold ${result.color}`}>
                  {result.increase}
                </div>
                <div className="text-sm text-indigo-200">{result.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-2 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-800">
              Our Services
            </span>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Comprehensive SEO Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We offer end-to-end SEO services to help your business achieve
              sustainable growth through organic search.
            </p>
          </motion.div>

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
                <service.icon className="mb-6 h-8 w-8 text-indigo-600" />
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 py-24">
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              Our SEO Process
            </h2>
            <p className="mx-auto max-w-2xl text-indigo-100/80">
              A systematic approach to improving your search engine rankings and
              organic visibility.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-indigo-300/20" />
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-8 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-1/2 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-indigo-500/20 p-3">
                      <step.icon className="h-6 w-6 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-indigo-200">{step.duration}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-indigo-100/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="relative bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Calculate Your SEO ROI
              </h2>
              <p className="mb-8 text-gray-600">
                Use our interactive calculator to estimate the potential return
                on investment from our SEO services. See how improved rankings
                and increased organic traffic can impact your bottom line.
              </p>
              <div className="flex flex-wrap gap-6">
                <ProgressCircle progress={0.75} />
                <ProgressCircle progress={0.9} />
              </div>
            </motion.div>
            <ROICalculator />
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
            Ready to Improve Your Search Rankings?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Let's discuss how our SEO services can help your business grow
            through improved organic visibility and targeted traffic.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-75 blur group-hover:opacity-100" />
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Get Free SEO Audit
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

export default SEOPage;
