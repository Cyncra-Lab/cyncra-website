"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HowItWorks from "../components/HowItWorks";
import Amazing from "../components/Amazing";
import Contact from "../components/Contact";

const services = [
  {
    title: "Website Development",
    img: "/websiteDev.svg",
  },
  {
    title: "Mobile App Development",
    img: "/mobileApp.svg",
  },
  {
    title: "UI/UX Design",
    img: "/ui-ux.svg",
  },
  {
    title: "Ecommerce Solutions",
    img: "/eCommerce.svg",
  },
  {
    title: "Maintenance & Support",
    img: "/maintenance.svg",
  },
  {
    title: "Digital Strategy & Consultation",
    img: "/digitalStrategy.svg",
  },
];

const Services = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section
        className="min-h-[45vh] lg:min-h-[70vh] px-5 py-15 lg:px-20 lg:py-43  bg-cover bg-center"
        style={{
          // backgroundImage: "url('/service.svg')",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/service.svg')`,
        }}
      >
        <motion.div
          className="w-full lg:w-151 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-3xl lg:text-4xl text-center lg:text-left leading-[1.4] tracking-tight mb-8">
            Digital Solutions, Designed to Deliver
          </h1>
          <p className="text-xl lg:text-2xl">
            At Cyncra, we craft modern websites, mobile apps, and digital
            experiences that help businesses grow, scale, and stand out in a
            crowded market.
          </p>
        </motion.div>
      </section>
      <motion.section
        className="py-11 px-5 lg:px-20 flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 className="text-3xl lg:text-4xl text-center lg:text-left font-bold mb-15 lg:mb-20">
          Our Services Includes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-5 lg:gap-x-10 gap-y-8 lg:gap-y-11 w-full">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="w-full h-96 lg:h-120"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              layout
            >
              <Image
                src={service.img}
                alt={service.title}
                width={100}
                height={100}
                loading="lazy"
                className="w-full h-3/4 object-cover rounded-3xl"
              />
              <h3 className="h-1/4 py-6 px-9 text-center font-bold text-2xl lg:text-3xl">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <section className="py-11 lg:py-22 px-5 lg:px-20 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-15"
        >
          HOW IT WORKS
        </motion.h2>
        <HowItWorks />
      </section>
      <Amazing />
      <Contact />
    </div>
  );
};

export default Services;
