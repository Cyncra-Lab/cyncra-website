"use client";
import Image from "next/image";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section className="pt-20 text-[#0C120C] flex justify-center h-auto lg:h-[51.325rem]">
      <motion.div
        className="w-full px-5 lg:px-20 mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.div className="text-center mb-16" variants={item}>
          <h2 className="text-center text-3xl lg:text-5xl font-bold mb-6">
            Trusted by Visionary Clients
          </h2>
          <p className="text-2xl text-[#727272] font-regular mb-6 tracking-tight leading-[1.4]">
            We deliver more than projects, we build lasting partnerships. See
            what our clients say about working with Cyncra
          </p>
        </motion.div>

        {/* Client Images Grid */}
        <motion.div
          className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12 w-full"
          variants={container}
        >
          {/* Left group - 2x2 grid */}
          {/* Remember to create variable for these repetitive classes */}
          <div className="grid grid-cols-2 gap-6">
            {["1", "3", "2", "4"].map((n) => (
              <motion.div
                key={n}
                className="w-25 h-25 rounded-2xl"
                variants={item}
              >
                <Image
                  src={`/images/Frame${n}.svg`}
                  alt={`Client ${n}`}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Center group - 3 * 3 */}
          <motion.div className="flex items-center gap-6" variants={container}>
            {["5", "6", "7", "8", "9"].map((n) => (
              <motion.div
                key={n}
                className={`w-${n === "7" ? "41" : "25"} h-${
                  n === "7" ? "41" : "25"
                } rounded-2xl ${
                  ["5", "6", "8", "9"].includes(n) ? "hidden lg:block" : ""
                }`}
                variants={item}
              >
                <Image
                  src={`/images/Frame${n}.svg`}
                  alt={`Client ${n}`}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right group - 2x2 grid */}
          <div className="grid grid-cols-2 gap-6">
            {["10", "12", "11", "13"].map((n) => (
              <motion.div
                key={n}
                className="w-25 h-25 rounded-2xl"
                variants={item}
              >
                <Image
                  src={`/images/Frame${n}.svg`}
                  alt={`Client ${n}`}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div className="text-center mb-12" variants={item} animate>
          <h3 className="text-2xl font-bold mb-2">
            Tobi Bamidele, Founder, QuickCart NG
          </h3>
          <p className="text-[#727272] text-2xl leading-relaxed lg:w-[57.3125rem] mx-auto hidden lg:inline">
            "Working with Cyncra felt like having an in-house tech team. They
            didn't just build our
            <br />
            app, they challenged our thinking, improved the UX, and delivered
            ahead of <br /> schedule."
          </p>
          <p className="text-[#727272] text-xl lg:text-2xl leading-relaxed lg:w-[57.3125rem] mx-auto text-justify lg:hidden">
            "Working with Cyncra felt like having an in-house tech team. They
            didn't just build our app, they challenged our thinking, improved
            the UX, and delivered ahead of schedule."
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center flex flex-col lg:flex-row items-center justify-center gap-2"
          variants={item}
        >
          <p className="text-[#727272] text-lg">
            Ready to write your success story with us
          </p>
          <button className="bg-[#E6FAFC] px-8 py-4 rounded-lg font-medium hover:bg-[#119da4] transition-colors duration-300 flex items-center gap-2 cursor-pointer">
            Get Started <MdOutlineRocketLaunch />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
