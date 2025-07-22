"use client";
import { MdOutlineRocketLaunch } from "react-icons/md";

export default function Testimonials() {
  return (
    <section className="pt-20 text-[#0C120C] flex justify-center lg:h-[51.325rem]">
      <div className="w-full px-8 lg:px-20 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-center text-3xl lg:text-5xl font-bold mb-6">
            Trusted by Visionary Clients
          </h2>
          <p className="text-xl lg:text-2xl text-[#727272] font-regular mb-6 tracking-tight leading-[1.4]">
            We deliver more than projects, we build lasting partnerships. See what our clients say about working with Cyncra
          </p>
        </div>

        {/* Client Images Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12 w-full">
          {/* Left group - 2x2 grid */}
          {/* Remember to create variable for these repetitive classes */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl"></div>
          </div>

          {/* Center group - 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-25 h-25 bg-gray-300 rounded-2xl hidden lg:block"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl hidden lg:block"></div>
            <div className="w-41 h-41 bg-gray-200 rounded-2xl"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl hidden lg:block"></div>
            <div className="w-25 h-25 bg-gray-300 rounded-2xl hidden lg:block"></div>
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
          <p className="text-[#727272] text-xl lg:text-2xl leading-relaxed lg:w-[57.3125rem] mx-auto hidden lg:inline">
            "Working with Cyncra felt like having an in-house tech team. They didn't just build our<br />app, they challenged our thinking, improved the UX, and delivered ahead of <br /> schedule."
          </p>
          <p className="text-[#727272] text-xl lg:text-2xl leading-relaxed lg:w-[57.3125rem] mx-auto text-justify lg:hidden">
            "Working with Cyncra felt like having an in-house tech team. They didn't just build our app, they challenged our thinking, improved the UX, and delivered ahead of schedule."
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center flex flex-col items-center justify-center gap-2">
          <p className="text-[#727272] text-lg">Ready to write your success story with us</p>
          <button className="bg-[#E6FAFC] px-8 py-4 rounded-lg font-medium hover:bg-[#119da4] transition-colors duration-300 flex items-center gap-2 cursor-pointer">
            Get Started <MdOutlineRocketLaunch />
          </button>
        </div>
      </div>
    </section>
  );
}
