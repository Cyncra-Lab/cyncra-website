"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] px-5 lg:px-11 py-7 lg:py-28 mb-8 lg:mb-11"
    >
      <Image
        src="/images/hero_section.svg"
        alt="Retro Phone"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0 rounded-3xl"
        priority
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute inset-0 bg-[#042F2E]/10 z-10 rounded-3xl"
      >
        <div className="text-white  px-5 lg:px-19 py-7 lg:py-28">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Contact us
          </h1>
          <p className="text-lg lg:text-2xl"> We want to hear from you </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
