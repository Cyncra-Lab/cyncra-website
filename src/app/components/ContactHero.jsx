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
      <div className="absolute inset-0 bg-[#042F2E]/60 rounded-3xl z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white px-5 py-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Contact us
        </h1>
        <p className="text-lg lg:text-2xl">We want to hear from you</p>
      </div>
    </section>
   