"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Mission() {
  return (
    <section className="bg-[rgb(230,250,252)] min-h-screen pt-11 text-[#0C120C] flex justify-center">
      <motion.div
        className="w-full px-5 lg:px-20 mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-center lg:text-3xl text-2xl font-bold lg:mb-15 mb-5"
          variants={fadeInUp}
        >
          Who We Are
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <h3 className="lg:text-3xl text-xl font-bold mb-5 lg:mb-15">
            Our Mission
          </h3>
          <p className="lg:text-2xl text-base text-[#727272] font-regular mb-6 tracking-tight leading-[1.4] text-justify">
            At Cyncra, we empower businesses through reliable, beautifully
            crafted digital products that solve real problems and create lasting
            value. We believe in building more than just technology, we create
            digital solutions that make a difference.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:my-15 lg:gap-52 gap-10">
          <motion.div variants={fadeInUp}>
            <Image
              src="/aboutImages/Frame-2147226945.webp"
              alt="Mission visual"
              width={545}
              height={350}
              className="rounded-3xl"
            />
          </motion.div>
          <motion.div
            className="flex flex-col mb-4 lg:mb-0 lg:gap-6 lg:w-[34.0625rem] lg:h-[21.875rem]"
            variants={fadeInUp}
          >
            <h2 className="lg:text-3xl text-xl font-bold mb-3 lg:mb-12">
              What Drives Us
            </h2>
            <span className="text-2xl lg:text-6xl font-bold text-[#C0BFBF] mb-4">
              01
            </span>
            <h3 className="font-bold text-xl lg:text-2xl">Reliability First</h3>
            <p className="text-base lg:text-2xl text-[#727272]">
              We create stable, scalable digital products businesses can count
              on day in, day out.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col lg:flex-row items-center gap-6 lg:gap-14"
          variants={staggerContainer}
        >
          {[
            {
              id: "02",
              title: "Design that Speaks",
              description:
                "Our work is intentional and beautiful. Every pixel, every layout, every interaction crafted to inspire and engage.",
            },
            {
              id: "03",
              title: "Solutions, Not Just Software",
              description:
                "We focus on solving real problems, not just ticking feature boxes. If it doesn’t bring value, it doesn’t make the cut.",
            },
            {
              id: "04",
              title: "Built for Impact",
              description:
                "From strategy to launch, we ensure every product we deliver drives measurable growth and meaningful results.",
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col lg:gap-6 lg:w-[34.0625rem] lg:h-[21.875rem]"
              variants={fadeInUp}
            >
              <span className="text-2xl lg:text-6xl font-bold text-[#C0BFBF] mb-4">
                {item.id}
              </span>
              <h3 className="font-bold lg:text-2xl">{item.title}</h3>
              <p className="text-base lg:text-2xl text-[#727272]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
