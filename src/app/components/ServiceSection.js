"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    desc: "Custom-built websites with clean design, fast performance, and modern user experience optimised for desktop and mobile",
    img: "/image/web.svg",
    href: "/services/web",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps that are secure, scalable, and designed to deliver intuitive user experiences",
    img: "/image/mobile.svg",
    href: "/services/mobile",
  },
  {
    title: "E-commerce Solutions",
    desc: "Build robust online stores with seamless payment integration, inventory management, and a personalised shopping experience",
    img: "/image/ecommerce.svg",
    href: "/services/ecommerce",
  },
  {
    title: "Product Strategy & MVP Development",
    desc: "Shape and launch proof-of-concept products fast, keeping scope lean while validating your business idea in the market",
    img: "/image/strategy.svg",
    href: "/services/strategy",
  },
  {
    title: "Software Maintenance & Support",
    desc: "Ongoing updates, bug fixes, and performance optimisation to keep your digital products running at peak performance",
    img: "/image/maintenance.svg",
    href: "/services/maintenance",
  },
  {
    title: "UI/UX Design",
    desc: "We design user-first experiences from wireframes to full interfaces that convert visitors into loyal users",
    img: "/image/uiux.svg",
    href: "/services/uiux",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ServicesSection() {
  return (
    <section className="text-center px-5 lg:px-20 py-20 lg:py-25">
      <motion.h2
        className="text-xl font-bold text-text lg:text-3xl mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-base text-[#727272] lg:text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        From strategy to execution, we offer full-stack development and digital
        solutions tailored to your goals.
      </motion.p>

      <div
        className="mt-12 grid grid-flow-row auto-rows-[1fr] gap-y-10
                    sm:grid-cols-2 lg:grid-cols-3 px-0 lg:px-20"
      >
        {services.map(({ title, desc, img, href }, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex h-full min-h-[400px] w-full md:w-[330px] lg:w-[360px] flex-col overflow-hidden
                     rounded-xl lg:rounded-3xl bg-[#F5FCFC] shadow-sm transition
                     hover:shadow-md hover:scale-105 duration-300"
          >
            <Image
              src={img}
              alt={title}
              width={600}
              height={380}
              className="h-auto lg:h-44 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-4 lg:p-6">
              <h3 className="mb-4 text-xl lg:text-2xl font-bold text-text">
                {title}
              </h3>

              <p className="mb-4 text-base lg:text-lg px-2 lg:px-3 h-25 lg:h-[125px] leading-relaxed text-text/80">
                {desc}
              </p>

              <Link
                href={href}
                className="mt-auto inline-flex items-center justify-center gap-1 text-base lg:text-lg font-bold
                         text-primary transition-colors hover:text-accent-2"
              >
                Learn More
                <Icon icon="ic:outline-arrow-forward" width="16" height="16" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
