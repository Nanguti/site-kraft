"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaPhone,
    title: "Phone",
    details: ["+254 712 345 678", "+254 734 567 890"],
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["info@sitekraft.co.ke", "support@sitekraft.co.ke"],
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: ["Nairobi, Kenya", "Available for Remote Work Globally"],
    color: "from-red-400 to-red-600",
  },
  {
    icon: FaClock,
    title: "Business Hours",
    details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 1pm"],
    color: "from-green-400 to-green-600",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    setIsSubmitting(false);
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 mb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute h-full w-full bg-[linear-gradient(30deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0)]
         bg-[length:8px_14px]"
        />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
            Get in Touch
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Let&apos;s Start a Conversation
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-gray-600">
            Ready to transform your digital presence? We&apos;re here to help
            bring your vision to life. Reach out to us for a free consultation.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-1"
          >
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="overflow-hidden rounded-xl bg-white p-6 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-full bg-gradient-to-r ${info.color} p-3 text-white`}
                  >
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700 disabled:bg-blue-400"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="mr-2 h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 100 8H4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
