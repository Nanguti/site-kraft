"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import PrimaryButton from "../shared/PrimaryButton";

const team = [
  {
    name: "Kevin Wanyonyi",
    role: "Founder & CEO",
    image: "/team/kevin-wanyonyi.jpeg",
    bio: "Visionary leader with 6+ years of experience in web development and digital transformation.",
    social: {
      linkedin: "https://linkedin.com/in/kevin-w-wanyonyi",
      twitter: "https://twitter.com/johnkamau",
      github: "https://github.com/johnkamau",
    },
    expertise: [
      "Strategic Planning",
      "Tech Leadership",
      "Business Development",
    ],
  },
  {
    name: "Clinton Shiroya",
    role: "Lead Developer",
    image: "/team/clinton-shiroya.jpeg",
    bio: "Full-stack developer specializing in scalable web applications and team mentorship.",
    social: {
      linkedin: "https://linkedin.com/in/sarahwanjiku",
      github: "https://github.com/sarahwanjiku",
    },
    expertise: ["React/Next.js", "Node.js", "Cloud Architecture"],
  },
  {
    name: "Patrick Wakasiaka",
    role: "SEO Specialist",
    image: "/team/patrick-wakasiaka.jpeg",
    bio: "Expert in search engine optimization and digital marketing strategies.",
    social: {
      linkedin: "https://linkedin.com/in/davidochieng",
      twitter: "https://twitter.com/davidochieng",
    },
    expertise: ["Technical SEO", "Content Strategy", "Analytics"],
  },
  {
    name: "Johnmark Odoyo",
    role: "UI/UX Designer",
    image: "/team/johnmark-odoyo.jpg",
    bio: "Creative designer focused on building intuitive and beautiful user experiences.",
    social: {
      linkedin: "https://linkedin.com/in/gracemuthoni",
      twitter: "https://twitter.com/gracemuthoni",
    },
    expertise: ["UI Design", "User Research", "Prototyping"],
  },
];

const Team = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">Meet Our Team</h2>
          <p className="mx-auto mb-16 max-w-2xl text-blue-200/80">
            Our talented team brings together years of expertise in web
            development, design, and digital marketing to deliver exceptional
            results.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent 
                opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Image */}
                <div className="aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Social Links Overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-20 translate-y-full p-4 transition-transform
                 duration-300 group-hover:translate-y-0"
                >
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <Link
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
                      >
                        {platform === "linkedin" && (
                          <FaLinkedinIn className="h-5 w-5 text-white" />
                        )}
                        {platform === "twitter" && (
                          <FaTwitter className="h-5 w-5 text-white" />
                        )}
                        {platform === "github" && (
                          <FaGithub className="h-5 w-5 text-white" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mb-2 text-blue-200/80">{member.role}</p>
                <p className="mb-4 text-sm text-gray-300">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-blue-200/80 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <div className="flex justify-center mt-12">
          {" "}
          <PrimaryButton label="Join the Team" href="/contact" />
        </div>
      </div>
    </section>
  );
};

export default Team;
