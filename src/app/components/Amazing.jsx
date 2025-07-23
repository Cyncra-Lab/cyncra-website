import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Amazing = () => {
  return (
    <div
      className="px-5 lg:px-20 py-10 flex flex-col items-center justify-center"
      style={{ background: `url('/amazing.svg')` }}
    >
      <motion.h1
        className="font-bold text-4xl lg:text-5xl px-0 lg:px-120 text-center leading-[1.5] mb-9"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-[#FFA629]">Lets Create an</span> Amazing Project
        <span className="text-[#FFA629]"> together</span>
      </motion.h1>
      <motion.button
        className="bg-[#02353C] text-white font-bold text-lg cursor-pointer hover:opacity-80 h-14 w-full lg:w-[383px] flex justify-center items-center rounded-2xl mb-15 lg:mb-31"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Book a Free Call{" "}
        <Image
          src="/call.svg"
          alt="call"
          height={24}
          width={24}
          className="ml-2"
        />
      </motion.button>
    </div>
  );
};

export default Amazing;
