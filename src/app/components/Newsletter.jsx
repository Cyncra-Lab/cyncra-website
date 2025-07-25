"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-white py-10 px-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[20%]"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl lg:text-3xl text-center lg:text-left font-bold mb-4">
          Our Newsletter
        </h2>
        <p className="text-center lg:text-left text-[#727272] mb-6 text-sm lg:text-lg">
          Subscribe to get updates on new features, helpful tips, and fresh
          insights straight to your inbox.
        </p>
      </motion.div>

      {/* Right Form */}
      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        action="#"
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <div className="relative w-full">
          <input
            type="email"
            className="px-4 py-2 w-full h-18  border-none rounded-3xl bg-[#E6FAFC] focus:outline-none"
            placeholder="Type your email here"
            required
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#042F2E] text-white px-7 py-2 rounded-3xl hover:bg-[#064B48] transition"
          >
            Submit
          </button>
        </div>
      </motion.form>
    </motion.section>
  );
}
