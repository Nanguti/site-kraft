"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaUser, FaClock, FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    title: "10 Essential SEO Strategies for Kenyan Businesses in 2024",
    excerpt:
      "Discover the most effective SEO techniques to improve your website's visibility in Kenya's competitive digital landscape.",
    image: "/blog/seo-strategy.png",
    author: "Patrick Wakasiaka",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "SEO",
    slug: "seo-strategies-2024",
  },
  {
    title: "The Impact of Web Performance on Business Growth",
    excerpt:
      "Learn how website speed and performance can significantly affect your business's online success and user engagement.",
    image: "/blog/impact-of-web-perfomance-to-business.webp",
    author: "Clinton Shiroya",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Development",
    slug: "web-performance-impact",
  },
  {
    title: "E-commerce Trends Shaping Online Retail in East Africa",
    excerpt:
      "Explore the latest e-commerce trends and technologies transforming the online retail landscape in East Africa.",
    image: "/blog/ecommerce-trends.jpg",
    author: "Kevin Wanyonyi",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "E-commerce",
    slug: "ecommerce-trends-2024",
  },
];

const BlogPreview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
            Latest Insights
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            From Our Blog
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-gray-600">
            Stay updated with the latest trends, tips, and insights in web
            development, SEO, and digital marketing.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-blue-600/90 px-3 py-1 text-sm text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaUser className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{post.excerpt}</p>

                  <div className="inline-flex items-center gap-2 text-blue-600">
                    <span>Read More</span>
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-white transition-all hover:bg-blue-700"
          >
            View All Posts
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
