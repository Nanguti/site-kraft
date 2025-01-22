"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { FaGlobe, FaMobile, FaShoppingCart, FaSearch } from "react-icons/fa";

const categories = ["All", "Web", "E-commerce", "Mobile", "SEO"];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "E-commerce",
    image: "/portfolio/project1.jpg",
    description: "Modern e-commerce platform with advanced features",
    tech: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    icon: FaShoppingCart,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    title: "Corporate Website",
    category: "Web",
    image: "/portfolio/project2.jpg",
    description: "Responsive corporate website with modern design",
    tech: ["React", "Framer Motion", "Node.js", "PostgreSQL"],
    icon: FaGlobe,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile",
    image: "/portfolio/project3.jpg",
    description: "Secure and intuitive mobile banking application",
    tech: ["React Native", "TypeScript", "Firebase", "Redux"],
    icon: FaMobile,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "SEO Optimization",
    category: "SEO",
    image: "/portfolio/project4.jpg",
    description: "Comprehensive SEO strategy and implementation",
    tech: ["Google Analytics", "SEMrush", "Ahrefs", "Schema Markup"],
    icon: FaSearch,
    color: "from-orange-500 to-red-500",
  },
  // Add more projects as needed
];

// Animated background component with floating elements
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient Orbs */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl"
        animate={{
          x: [
            `${Math.random() * 100}%`,
            `${Math.random() * 100}%`,
            `${Math.random() * 100}%`,
          ],
          y: [
            `${Math.random() * 100}%`,
            `${Math.random() * 100}%`,
            `${Math.random() * 100}%`,
          ],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20 + i * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
  </div>
);

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ["start end", "end start"],
  //   });

  //   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-900"
    >
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-32">
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Our Portfolio
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
              Showcasing our best work and the innovative solutions we have
              created for our clients.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-1 backdrop-blur-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  {/* Project Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`}
                    />
                  </div>
                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-white/50" />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-x-4 bottom-4">
                      <h3 className="mb-2 text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container relative mx-auto px-4 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Let us create something amazing together. Get in touch to discuss
            your project requirements.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue-700"
            >
              Start a Project
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

export default PortfolioPage;
