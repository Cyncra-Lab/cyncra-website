"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const points = [
  { label: "Web & Mobile Development", dark: true },
  { label: "UI/UX Design", dark: false },
  { label: "Product Strategy & MVPs", dark: false },
  { label: "E-commerce & Support", dark: true },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ChooseSection() {
  return (
    <section className="bg-[var(--color-secondary)] py-5 px-0 lg:p-20">
      <motion.div
        className="grid gap-10 lg:gap-46 px-4 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="mb-8 lg:mb-11 text-2xl font-bold md:text-3xl text-center lg:text-left">
            Why Freelancers and
            <br />
            Entrepreneurs Choose Cyncra
          </h2>

          <motion.p
            className="mb-8 lg:text-2xl leading-relaxed text-text/90 text-sm"
            variants={itemVariants}
          >
            At Cyncra Technologies, we go beyond building digital products; we
            build long-term solutions tailored to your vision. Our team combines
            design thinking, technical expertise, and business insight to help
            you launch faster, scale smarter, and grow confidently in today’s
            digital landscape.
          </motion.p>

          <motion.p
            className="mb-10 font-bold text-xl lg:text-2xl"
            variants={itemVariants}
          >
            Crafted with strategy, design, and code
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="/portfolio"
              className="flex justify-center items-center rounded-xl bg-primary px-6 py-3 text-base lg:text-lg font-bold
                       text-secondary transition hover:bg-accent-2 h-14 w-full lg:w-[205px]"
            >
              Explore our work
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6 py-10 lg:py-12 h-auto w-full md:h-95 md:w-109 lg:h-120 lg:w-120 ml-auto"
          variants={containerVariants}
        >
          {points.map(({ label, dark }, i) => (
            <motion.div
              key={label}
              custom={i}
              className={`flex min-h-[140px] h-full items-center justify-center rounded-3xl px-5 lg:px-11 py-16
              text-center  sm:text-sm md:text-lg font-bold leading-snug tracking-wide
                          ${
                            dark
                              ? "bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent-2))] text-white"
                              : "bg-white text-text"
                          }`}
              variants={itemVariants}
            >
              {label.split("\n").map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
