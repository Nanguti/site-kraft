"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    title: "Real Estate",
    description:
      "Custom property listing platforms and real estate management systems.",
    image: "/industries/real-estate.webp",
    stats: ["200+ Properties Listed", "50+ Active Agents", "24/7 Support"],
    accent: "from-blue-500 to-blue-700",
  },
  {
    title: "Education",
    description: "Comprehensive school management and e-learning solutions.",
    image: "/industries/school-management-systems.png",
    stats: ["98% User Satisfaction", "50+ Schools", "15k+ Students"],
    accent: "from-green-500 to-green-700",
  },
  {
    title: "Healthcare",
    description: "Digital solutions for therapists and healthcare providers.",
    image: "/industries/school-management-systems.png",
    stats: ["100+ Healthcare Providers", "24/7 Support", "HIPAA Compliant"],
    accent: "from-purple-500 to-purple-700",
  },
  {
    title: "NGOs",
    description: "Impact-focused websites and donation management systems.",
    image: "/industries/NGO.jpg",
    stats: ["150% Donation Growth", "30+ NGOs", "Global Reach"],
    accent: "from-red-500 to-red-700",
  },
];

const Industries = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in delivering tailored digital solutions across
            various sectors, helping businesses transform their operations and
            achieve digital excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${industry.accent} opacity-60`}
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-white/90">{industry.description}</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6"
              >
                <div className="grid grid-cols-3 gap-4">
                  {industry.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-medium text-gray-600">
                        {stat}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300">
            Explore All Industries
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
