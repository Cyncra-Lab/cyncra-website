"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full !h-[calc(60vh-60px)]  lg:!h-[calc(70vh-60px)] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 inset-0 h-full w-full bg-cover bg-center scale-110 filter blur-[1px] 
             bg-[url('/portfolioImages/Frame_2147227010.png')] 
             sm:bg-center 
             md:bg-top 
             lg:bg-center"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute inset-0  left-0 w-full h-full bg-gradient-to-r from-black via-[#292929]/40 to-transparent backdrop-blur-xs z-0 lg:z-10"
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full h-full flex flex-col items-center lg:items-start justify-center py-11 lg:justify-center px-5 lg:px-20 text-white "
      >
        <h2 className="font-bold text-4xl lg:text-5xl mb-6 ">
          Our Work Speaks for itself
        </h2>

        <p className="font-regular text-[#AEAEAE] text-base lg:text-2xl leading-relaxed">
          At Cyncra, we turn ideas into digital excellence.
          <br /> Discover our top achievements, crafted with precision and
          purpose
        </p>
      </motion.div>
    </section>
  );
}
