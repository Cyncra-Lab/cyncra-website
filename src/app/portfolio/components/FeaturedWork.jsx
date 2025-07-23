"use client";
import { motion } from "framer-motion";

const portfolioData = [
  {
    id: 1,
    description: "FinTech CRM Dashboard Redesign",
  },
  {
    id: 2,
    description: "E-commerce Platform for Local Artisans",
  },
  {
    id: 3,
    description: "Mobile App for Logistics Tracking",
  },
  {
    id: 4,
    description: "SaaS Website with Booking Flow",
  },
  {
    id: 5,
    description: "Internal HR Portal for Staff Management",
  },
  {
    id: 6,
    description: "NGO Storytelling and Donation Platform",
  },
];

export default function FeaturedWork() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-10 lg:pt-20 text-[#0C120C] flex justify-center"
    >
      <div className="w-full px-5 lg:px-20 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-center text-2xl lg:text-3xl font-bold mb-6">
            Featured Work that Delivers Results
          </h2>
          <p className="text-base lg:text-2xl text-[#727272] font-regular mb-6 tracking-tight leading-[1.4]">
            Explore impactful solutions we built to solve real challenges and
            help clients grow.
          </p>
        </motion.div>

        {/* Portfolio Grid - 2 columns, 3 rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {portfolioData.map((project) => (
            <motion.div
              key={project.id}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Gray placeholder card */}
              <div className="bg-gray-300 h-96 lg:h-[37.5rem] rounded-3xl"></div>

              <div className="flex flex-col items-center justify-center">
                <p className="text-[#727272] text-lg lg:text-2xl my-5 lg:my-9">
                  {project.description}
                </p>

                {/* Button */}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#02353C] text-white h-[55px] px-8 rounded-2xl text-base lg:text-2xl hover:bg-[#119da4] transition-colors duration-300 cursor-pointer"
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
