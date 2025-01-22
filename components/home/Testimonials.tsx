"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Jane Muthoni",
    role: "CEO, Nairobi Real Estate Ltd",
    image: "/images/testimonials/jane.jpg",
    quote:
      "Site Kraft Systems transformed our online presence completely. Our property listings are now more visible, and we've seen a 200% increase in qualified leads.",
    rating: 5,
  },
  {
    name: "David Omondi",
    role: "Director, Sunshine Academy",
    image: "/images/testimonials/david.jpg",
    quote:
      "The school management system has streamlined our operations significantly. Parents love the easy fee payment system and student progress tracking.",
    rating: 5,
  },
  {
    name: "Sarah Hassan",
    role: "Founder, Healing Hands NGO",
    image: "/images/testimonials/sarah.jpg",
    quote:
      "Working with Site Kraft was a pleasure. They understood our mission and created a website that effectively communicates our impact.",
    rating: 5,
  },
  {
    name: "Michael Njoroge",
    role: "Operations Manager, Swift Logistics",
    image: "/images/testimonials/michael.jpg",
    quote:
      "The tracking system has revolutionized our delivery operations. Real-time tracking and automated notifications have improved customer satisfaction.",
    rating: 5,
  },
];

const Testimonials = () => {
  const controls = useAnimation();
  const duplicatedTestimonials = [...testimonials, ...testimonials]; // Duplicate for infinite effect

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, -100 * testimonials.length], // Slide by the width of original testimonials
        transition: {
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        },
      });
    };
    animate();
  }, [controls]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-blue-200/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with Site Kraft Systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              className="flex gap-6 py-8"
              style={{ width: `${duplicatedTestimonials.length * 400}px` }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-[400px] flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-blue-200/80">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>

                    <blockquote>
                      <p className="text-gray-300 italic">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    {/* Decorative Quote Icon */}
                    <div className="absolute top-6 right-6 text-blue-400/20">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C11.482 21.642 9.87 23 8 23v2c3.314 0 6-2.686 6-6V8h-4zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C25.482 21.642 23.87 23 22 23v2c3.314 0 6-2.686 6-6V8h-4z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Start Your Project
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
