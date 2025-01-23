// components/AnimatedLinkButton.js
import Link from "next/link";
import { motion } from "framer-motion";

const PrimaryButton = ({ label, href }: { label: string; href: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Link href={href}>
        <motion.span
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r
          from-blue-500 to-purple-600 p-0.5 text-lg font-semibold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span
            className="relative rounded-full bg-black/10 px-8 py-3.5 transition-all duration-300 ease-out 
            group-hover:bg-black/0"
          >
            {label}
            <span className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
              →
            </span>
          </span>
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default PrimaryButton;
