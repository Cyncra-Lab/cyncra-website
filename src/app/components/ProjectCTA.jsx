"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const benefits = [
  "Transparent pricing with the best value",
  "Fast and flexible project delivery",
  "Custom solutions tailored to your business goals",
  "Ongoing support and long-term partnerships",
];

export default function ProjectCTA() {
  return (
    <section className="w-full bg-[#ebfdf2] py-10 lg:py-20 px-5 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-start gap-10"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 py-6"
        >
          <Image
            src="/images/frm-1.svg"
            alt="Team collaboration"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 mt-6 pr-0 lg:pr-5"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-10 text-center lg:text-left">
            Got a project in mind?
          </h2>
          <p className="text-[#727272] text-lg lg:text-2xl mb-6 lg:mb-12 leading-relaxed">
            Consult us for any of our services. <br />
            From Product Design to Development and beyond. <br />
            We are always happy to support your vision.
          </p>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={listVariants}
            className="space-y-3 text-sm lg:text-lg text-gray-800"
          >
            {benefits.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-baseline gap-2 space-y-6"
                variants={itemVariants}
              >
                <Image
                  src={"/images/Vector.svg"}
                  alt="projects"
                  width={20}
                  height={20}
                />
                <span className="font-bold text-sm lg:text-lg">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
