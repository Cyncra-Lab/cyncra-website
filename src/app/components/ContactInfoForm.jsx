"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactInfoForm() {
  return (
    <section className="py-10 bg-white text-[#042F2E]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-[20%] items-start"
      >
        {/*left row */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl text-center lg:text-left font-bold mb-4 lg:mb-6">
            We are here to help
          </h2>
          <p className="mb-6 lg:mb-20 text-[#727272] text-lg lg:text-2xl">
            Whether you have a question, need support, or just want to learn
            more about our platform, we'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col items-start lg:items-start space-x-3 space-y-5 lg:space-y-9">
              <div className=" text-gray-600 flex items-center justify-normal gap-x-4 mb-4">
                <FaPhone className="w-4 h-4 rotate-90" />
                <p className="text-[#0C120C]">Phone Number</p>
              </div>

              <a
                href="tel:+234012345789"
                className="text-[#0C120C] text-xl lg:text-2xl font-bold"
              >
                +234012345789
              </a>
            </div>

            <div className="flex flex-col items-start lg:items-end space-x-3">
              <div className="flex items-center justify-normal gap-x-4 text-gray-600 mb-4">
                <FaGlobe className="w-4 h-4 object-cover" />
                <p className=" text-[#0C120C]">Website</p>
              </div>

              <a
                href="https://www.cyncra.com"
                className="text-[#0C120C] text-xl lg:text-2xl font-bold"
              >
                www.cyncra.com
              </a>
            </div>

            <div className="flex flex-col items-start space-x-3">
              <div className="flex items-center justify-normal gap-x-4 text-gray-600 mb-4">
                <FaEnvelope className="w-4 h-4 object-cover" />
                <p className=" text-[#0C120C]">Email Address</p>
              </div>

              <a
                href="mailto:www.cyncra.tech@gmail.com"
                className="text-[#0C120C] text-xl lg:text-2xl font-bold"
              >
                www.cyncra.tech@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-start lg:items-end space-x-3">
              <div className="flex items-center justify-normal gap-x-4 text-gray-600 mb-4">
                <FaMapMarkerAlt className="w-4 h-4 object-cover" />
                <p className="text-[#0C120C]">Office Address</p>
              </div>
              <div>
                <p className="text-[#0C120C] text-xl lg:text-2xl font-bold">
                  Yaba, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/*Right row*/}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=""
        >
          <h2 className="text-lg lg:text-2xl text-[#3F3E3E] leading-[1.3] mb-8">
            Fill out the form or reach us directly, and someone from our team
            will get back to you shortly
          </h2>
          <form className=" bg-[#E6FAFC] lg:py-8 p-4 lg:px-7 rounded-3xl">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-3 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full h-12 lg:h-14 border border-gray-300 px-4 py-4 rounded-2xl outline-none focus:ring-1 focus:ring-[#8acbca]"
                placeholder="Your Name"
                required
              />

              <div className="mt-6">
                <label htmlFor="email" className="block mb-3 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-12 lg:h-14 border border-gray-300 px-4 py-4 rounded-2xl outline-none focus:ring-1 focus:ring-[#8acbca]"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-3 font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 px-4 py-2 rounded-2xl resize-none outline-none focus:ring-2 focus:ring-[#042F2E]"
                placeholder="Your Question/Suggestion"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#042F2E] mt-6 font-bold text-lg w-full h-14 text-white px-6 py-2 rounded-2xl cursor-pointer hover:bg-[#064B4A] transition all"
            >
              Submit Here
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
