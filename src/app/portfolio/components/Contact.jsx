"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    email: '',
    phoneNumber: '',
    projectType: '',
    budgetRange: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">
                Let's Create Something Great Together
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Got something in mind? We'd love to help you shape it into something amazing.
              </p>
            </div>

            <div>
              <p className="text-base text-gray-700 mb-8">
                Fill out the form or reach us directly, and someone from our team will get back to you shortly.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-gray-600">📞</div>
                <div>
                  <p className="font-semibold text-black">Phone Number</p>
                  <p className="text-gray-600">+234012345789</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-gray-600">🌐</div>
                <div>
                  <p className="font-semibold text-black">Website</p>
                  <p className="text-gray-600">www.cyncra.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-gray-600">✉️</div>
                <div>
                  <p className="font-semibold text-black">Email Address</p>
                  <p className="text-gray-600">www.cyncra.tech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-gray-600">📍</div>
                <div>
                  <p className="font-semibold text-black">Office Address</p>
                  <p className="text-gray-600">Yaba, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#E6FAFC] p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name and Country */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02353c] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02353c] focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Select</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                    <option value="kenya">Kenya</option>
                    <option value="south-africa">South Africa</option>
                  </select>
                </div>
              </div>

              {/* Email and Phone Number */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02353c] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02353c] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Project Type and Budget Range */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02353c] focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Select Project</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="ecommerce">E-commerce</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02353c] focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Select Range</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us more"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02353c] focus:border-transparent outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#02353c] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#119da4] transition-colors duration-300"
                >
                  Submit Here
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}