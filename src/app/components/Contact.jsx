"use client";

import { useState } from "react";
import {
  FaPhone,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    email: "",
    phoneNumber: "",
    projectType: "",
    budgetRange: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <motion.section
      className="py-11 lg:py-22 text-[#0C120C] flex justify-center h-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column - Text Content */}
          <motion.div
            className="flex flex-col justify-start items-start pr-0 2xl:pr-20"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl text-center lg:text-left text-black mb-10 lg:mb-20 font-bold">
                Let’s Build Something Great Together
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-15 lg:mb-20">
                Have an idea or project in mind? Let’s talk about how we can
                bring it to life with smart, scalable digital solutions tailored
                to your goals.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <motion.div
                className="flex flex-col items-start lg:items-start space-x-3 space-y-5 lg:space-y-9"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
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
              </motion.div>

              <motion.div
                className="flex flex-col items-start lg:items-end space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
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
              </motion.div>

              <motion.div
                className="flex flex-col items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
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
              </motion.div>

              <motion.div
                className="flex flex-col items-start lg:items-end space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center justify-normal gap-x-4 text-gray-600 mb-4">
                  <FaMapMarkerAlt className="w-4 h-4 object-cover" />
                  <p className="text-[#0C120C]">Office Address</p>
                </div>
                <div>
                  <p className="text-[#0C120C] text-xl lg:text-2xl font-bold">
                    Yaba, Lagos, Nigeria
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl lg:text-2xl mb-8 w-full lg:w-3/4">
              Fill out the form or reach us directly, and someone from our team
              will get back to you shortly
            </h4>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-[#E6FAFC] p-5 lg:p-10 rounded-3xl"
            >
              {/* Full Name and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base lg:text-lg text-[#02353C] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block text-base lg:text-lg text-[#02353C] mb-2">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none appearance-none text-gray-400"
                    >
                      <option value="">Select</option>
                      <option value="nigeria">Nigeria</option>
                      <option value="ghana">Ghana</option>
                      <option value="kenya">Kenya</option>
                      <option value="south-africa">South Africa</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Email and Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base lg:text-lg text-[#02353C] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none"
                  />
                </div>
                <div>
                  <label className="block text-base lg:text-lg text-[#02353C] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none"
                  />
                </div>
              </div>

              {/* Project Type and Budget Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base lg:text-lg text-gray-700 mb-2">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none appearance-none text-gray-400"
                    >
                      <option value="">Select Project</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="ecommerce">E-commerce</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-base lg:text-lg text-[#02353C] mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none appearance-none text-gray-400"
                    >
                      <option value="">Select Range</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-base lg:text-lg text-[#02353C] mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us more"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center h-[55px]">
                <button
                  type="submit"
                  className="bg-[#02353c] text-white px-8 h-14 w-full rounded-2xl font-bold hover:bg-[#F9FFFA] hover:text-[#02353c] transition-colors duration-300 cursor-pointer"
                >
                  Submit Here
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
