"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const caseStudies = [
  {
    title: "Real Estate Platform Transformation",
    client: "PropertyHub Kenya",
    image: "/case-studies/real-estate.webp",
    category: "Web Development",
    results: [
      "200% increase in leads",
      "50% reduction in listing time",
      "35% improvement in user engagement",
    ],
    description:
      "Developed a modern property management platform with virtual tours and advanced search capabilities.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    link: "/case-studies/property-hub",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    title: "School Management System",
    client: "Sunshine Academy",
    image: "/case-studies/school-management-systems.png",
    category: "Custom Software",
    results: [
      "80% reduction in admin work",
      "95% parent satisfaction",
      "40% increase in fee collection",
    ],
    description:
      "Built a comprehensive school management system with fee tracking and academic monitoring.",
    technologies: ["React", "Django", "MySQL", "Docker"],
    link: "/case-studies/sunshine-academy",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    title: "E-commerce Revenue Growth",
    client: "AfriMarket",
    image: "/case-studies/ecommerce.png",
    category: "E-commerce",
    results: [
      "150% increase in sales",
      "65% better conversion rate",
      "45% reduction in cart abandonment",
    ],
    description:
      "Optimized the e-commerce platform for better performance and user experience.",
    technologies: ["Shopify", "React", "Node.js", "Redis"],
    link: "/case-studies/afrimarket",
    color: "from-purple-500/20 to-purple-600/20",
  },
];

const CaseStudies = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute h-full w-full bg-[linear-gradient(30deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0)] bg-[length:8px_14px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
            Case Studies
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Our Success Stories
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-gray-600">
            Explore how we&#39;ve helped businesses across different industries
            achieve their digital transformation goals with innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              {/* Image Section */}
              <div className="relative h-64">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
                    {study.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {study.title}
                  </h3>
                  <p className="text-white/80">{study.client}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="mb-2 font-semibold text-gray-900">Results</h4>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="mr-2 h-4 w-4 text-green-500"
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
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mb-6 text-gray-600">{study.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full bg-gradient-to-r ${study.color} px-3 py-1 text-xs font-medium text-gray-800`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={study.link}
                  className="group/link inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700"
                >
                  <span>View Case Study</span>
                  <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-white transition-all hover:bg-blue-700"
          >
            View All Case Studies
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
