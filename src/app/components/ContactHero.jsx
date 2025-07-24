"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center rounded-3xl mb-8 lg:mb-11 px-5 lg:px-11 py-7 lg:py-28"
      style={{
        backgroundImage: "url('/images/hero_section.svg')",
      }}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute inset-0 bg-[#042F2E]/60 rounded-3xl z-10"
      ></motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 text-white px-5 py-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6">
          Contact us
        </h1>
        <p className="text-lg lg:text-3xl">We want to hear from you</p>
      </motion.div>
    </section>
  );
}
