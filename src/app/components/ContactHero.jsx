"use client";

import Image from "next/image";
import React from "react";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] px-5 lg:px-11 py-7 lg:py-28 mb-8 lg:mb-11">
      <Image
        src="/images/hero_section.svg"
        alt="Retro Phone"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0 rounded-3xl"
        priority
      />

      <div className="absolute inset-0 bg-[#042F2E]/10 z-10 rounded-3xl">
        <div className="text-white  px-5 lg:px-19 py-7 lg:py-28">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Contact us
          </h1>
          <p className="text-lg lg:text-2xl"> We want to hear from you </p>
        </div>
      </div>
    </section>
  );
}
