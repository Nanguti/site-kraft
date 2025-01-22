"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { FaClock, FaUser, FaArrowRight } from "react-icons/fa";

const categories = ["All", "Development", "Design", "SEO", "Business"];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: 2024 Trends",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to advanced animations.",
    category: "Development",
    author: "John Smith",
    readTime: "5 min read",
    date: "Mar 15, 2024",
    image: "/blog/post1.jpg",
    tags: ["Web Development", "Trends", "Technology"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Mastering UI/UX: A Complete Guide",
    excerpt:
      "Learn the principles and best practices of creating exceptional user experiences in modern web design.",
    category: "Design",
    author: "Sarah Johnson",
    readTime: "7 min read",
    date: "Mar 12, 2024",
    image: "/blog/post2.jpg",
    tags: ["UI/UX", "Design", "User Experience"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "SEO Strategies That Actually Work",
    excerpt:
      "Discover proven SEO techniques that can help your website rank higher in search engine results.",
    category: "SEO",
    author: "Mike Wilson",
    readTime: "6 min read",
    date: "Mar 10, 2024",
    image: "/blog/post3.jpg",
    tags: ["SEO", "Marketing", "Growth"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Building Scalable E-commerce Solutions",
    excerpt:
      "A comprehensive guide to creating robust and scalable e-commerce platforms for modern businesses.",
    category: "Development",
    author: "Alex Brown",
    readTime: "8 min read",
    date: "Mar 8, 2024",
    image: "/blog/post4.jpg",
    tags: ["E-commerce", "Development", "Business"],
    gradient: "from-orange-500 to-red-500",
  },
];

// Animated background component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px]" />
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-900/80 to-gray-900/50" />
  </div>
);

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ["start end", "end start"],
  //   });

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-900">
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
              Our Blog
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
              Insights, tutorials, and updates from our team of digital experts.
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

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                {/* Post Header */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${post.gradient} p-6`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <div className="mb-2 flex items-center gap-2 text-sm text-white/80">
                      <FaUser className="h-4 w-4" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <FaClock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {post.title}
                    </h2>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <p className="mb-4 text-gray-300">{post.excerpt}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.date}</span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-blue-400"
                    >
                      Read More
                      <FaArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container relative mx-auto px-4 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white">Stay Updated</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Subscribe to our newsletter for the latest insights and updates
            delivered straight to your inbox.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-md"
          >
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full bg-white/10 px-6 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;
