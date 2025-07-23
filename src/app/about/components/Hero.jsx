"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageContainerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="text-white w-full h-[calc(100vh-60px)] flex items-start justify-start py-10 lg:py-15 bg-gradient-to-b from-[#023b43] to-[#0595a9]">
      <div className="text-center w-full px-5 lg:px-20 mx-auto">
        <div className="flex flex-col items-start">
          {/* Text Section */}

          <motion.div
            className="w-full h-auto flex flex-col justify-start mb-10 lg:mb-30"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={textVariant}
          >
            <h3 className="lg:mb-10 mb-2 text-2xl lg:text-5xl font-bold tracking-wide">
              ABOUT US
            </h3>
            <h2 className="font-bold text-lg lg:text-4xl mb-2 lg:mb-10">
              Where Innovation Meets Execution
            </h2>

            <p className="font-normal text-[#AEAEAE] lg:text-2xl text-base leading-relaxed mx-auto mb-10 lg:mb-0">
              At Cyncra, we blend creativity, strategy, and technology to help
              brands and businesses unlock their full potential. We don’t just
              build products, we build experiences that drive impact and fuel
              growth. Our team of thinkers, doers, and builders is united by one
              goal: delivering real solutions that move businesses forward.
            </p>
          </motion.div>

          {/* Image Gallery Section */}
          <motion.div
            className="w-full h-[350px] flex items-center justify-center"
            variants={imageContainerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full">
              {/* Responsive Image Gallery */}

              <div className="grid grid-cols-2 md:grid-cols-4 mx-auto place-items-center gap-7">
                {[
                  "/aboutImages/Frame 2147226857.webp",
                  "/aboutImages/Frame 2147226858.webp",
                  "/aboutImages/Frame 2147226859.webp",
                  "/aboutImages/Frame 2147226860.webp",
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    className="w-full"
                    variants={imageVariant}
                  >
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      width={300}
                      height={300}
                      className="w-full object-cover rounded-3xl hover:shadow-xl transition-shadow duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
