"use client";
import { MdOutlineRocketLaunch } from "react-icons/md";

export default function Testimonials() {
  return (
    <section className="pt-20 text-[#0C120C] flex justify-center h-[51.325rem]">
      <div className="w-[80.625rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-center text-5xl font-bold mb-6">
            Trusted by Visionary Clients
          </h2>
          <p className="text-2xl text-[#727272] font-regular mb-6 tracking-tight leading-[1.4]">
            We deliver more than projects, we build lasting partnerships. See what our clients say about working with Cyncra
          </p>
        </div>

        {/* Client Images Grid */}
        <div className="flex justify-center items-center gap-8 mb-12 w-full">
          {/* Left group - 2x2 grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
          </div>

          {/* Center group - 3 */}
          <div className="flex items-center gap-6">
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-41 h-41 bg-gray-200 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
          </div>

          {/* Right group - 2x2 grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Tobi Bamidele, Founder, QuickCart NG</h3>
          <p className="text-[#727272] text-2xl leading-relaxed w-[57.3125rem] mx-auto">
            "Working with Cyncra felt like having an in-house tech team. They didn't just build our<br />app, they challenged our thinking, improved the UX, and delivered ahead of <br /> schedule."
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center flex items-center justify-center gap-2">
          <p className="text-[#727272] text-lg">Ready to write your success story with us</p>
          <button className="bg-[#E6FAFC] px-8 py-4 rounded-lg font-medium hover:bg-[#119da4] transition-colors duration-300 flex items-center gap-2">
            Get Started <MdOutlineRocketLaunch />
          </button>
        </div>
      </div>
    </section>
  );
}
