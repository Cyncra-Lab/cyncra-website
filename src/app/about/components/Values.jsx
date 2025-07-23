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

const valuesData = [
  {
    id: 1,
    icon: "/aboutImages/idea 1.svg",
    title: "Creative Excellence",
    description:
      "We think beyond the obvious and deliver remarkable experiences",
  },
  {
    id: 2,
    icon: "/aboutImages/Compass 1.svg",
    title: "Purposeful Execution",
    description: "Every action we take is backed by intention and impact",
  },
  {
    id: 3,
    icon: "/aboutImages/agility 1.svg",
    title: "Agility",
    description: "We adapt quickly and respond with smart, scalable solutions",
  },
  {
    id: 4,
    icon: "/aboutImages/partnership 1.svg",
    title: "Partnership",
    description: "We grow with our clients, not just for them",
  },
];

export default function Values() {
  return (
    <section className="h-full text-gray-800 flex justify-center pt-11">
      <motion.div
        className="w-full px-5 lg:px-20 mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="flex flex-col text-center">
          <motion.h2
            className="text-xl lg:text-3xl font-bold"
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>
          <motion.p
            className="text-base lg:text-2xl text-[#727272] my-6 lg:my-12"
            variants={fadeInUp}
          >
            Our values are more than words; they are the foundation of how we
            think, build, and grow. They guide every project, every partnership,
            and every decision we make.
          </motion.p>
        </div>
        {/* cards */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-11"
          variants={staggerContainer}
        >
          {valuesData.map((value) => {
            return (
              <motion.div
                key={value.id}
                className="w-full lg:w-[17.875rem] h-[25.8125rem] py-10 px-6 flex flex-col items-center text-center rounded-xl lg:rounded-2xl border lg:border-0"
                style={{
                  background:
                    "linear-gradient(to bottom, #E6FAFC 9%, #FFFFFF 64%)",
                }}
                variants={fadeInUp}
              >
                <div className="w-full lg:w-[60px] h-[60px] bg-white rounded-lg lg:rounded-xl flex items-center justify-center">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h2 className="font-bold text-xl lg:text-3xl mt-5 lg:mb-14 h-22">
                  {value.title}
                </h2>
                <p className="text-base lg:text-2xl text-[#727272] ">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
