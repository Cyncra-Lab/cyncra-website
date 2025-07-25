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
      className="py-10 lg:py-20 text-[#0C120C] flex justify-center lg:h-[51.325rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Left Column - Text Content */}
          <motion.div
            className="flex flex-col justify-center lg:px-8"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl lg:text-4xl text-center lg:text-left text-black mb-4 lg:mb-10">
                Let's Create Something Great Together
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Got something in mind? We'd love to help you shape it into
                something amazing.
              </p>
            </div>

            <div>
              <p className="text-base text-gray-700 mb-10">
                Fill out the form or reach us directly, and someone from our
                team will get back to you shortly.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-gray-600">
                  <FaPhone />
                </div>
                <div>
                  <p className="font-semibold text-black">Phone Number</p>
                  <p className="text-gray-600">+234012345789</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-gray-600">
                  <FaGlobe />
                </div>
                <div>
                  <p className="font-semibold text-black">Website</p>
                  <p className="text-gray-600">www.cyncra.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-gray-600">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold text-black">Email Address</p>
                  <p className="text-gray-600">www.cyncra.tech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-gray-600">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold text-black">Office Address</p>
                  <p className="text-gray-600">Yaba, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="bg-[#E6FAFC] p-4 lg:p-8 rounded-2xl w-full"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name and Country */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg text-[#02353C] mb-2">
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
                  <label className="block text-lg text-[#02353C] mb-2">
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg text-[#02353C] mb-2">
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
                  <label className="block text-lg text-[#02353C] mb-2">
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg text-gray-700 mb-2">
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
                  <label className="block text-lg text-[#02353C] mb-2">
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
                <label className="block text-lg text-[#02353C] mb-2">
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
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#02353c] text-white px-8 h-[55px] w-full lg:w-auto rounded-lg font-medium hover:bg-[#119da4] transition-colors duration-300 cursor-pointer"
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
