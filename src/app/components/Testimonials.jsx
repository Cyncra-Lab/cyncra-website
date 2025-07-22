"use client";
import Image from "next/image";
import { MdOutlineRocketLaunch } from "react-icons/md";

export default function Testimonials() {
  return (
    <section className="p-5 lg:p-20 text-[#0C120C] flex justify-center h-auto">
      <div className="w-full px-0 lg:px-20 mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-center text-2xl lg:text-5xl font-bold mb-2">
            Testimonials
          </h2>
          <p className="text-xl lg:text-2xl text-[#727272] font-regular mb-11 tracking-wider leading-[1.4]">
            Hear what Our Clients are saying about us
          </p>
        </div>

        {/* Client Images Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12 w-full">
          {/* Left group - 2x2 grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame1.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame3.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame2.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame4.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center group - 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame5.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame6.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-41 h-41 rounded-2xl">
              <Image
                src="/images/Frame7.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame8.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame9.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right group - 2x2 grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame10.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame12.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame11.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-25 h-25 rounded-2xl">
              <Image
                src="/images/Frame13.svg"
                alt="Client 1"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center mb-12">
          <h3 className="text-xl lg:text-2xl font-bold mb-2">
            Tobi Bamidele, Founder, QuickCart NG
          </h3>
          <p className="text-[#727272] text-lg lg:text-2xl leading-relaxed px-0 lg:px-70 mb-20 lg:mb-31">
            "Working with Cyncra felt like having an in-house tech team. They
            didn't just build our app, they challenged our thinking, improved
            the UX, and delivered ahead of schedule."
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold mb-6 text-xl lg:text-2xl">
            Ready to bring your digital ideas to life?
          </h1>
          <p className="text-[#727272] text-xl lg:text-2xl mb-8 lg:mb-11">
            Let’s help you build, launch, and scale with confidence.
          </p>
          <button className="bg-[#02353C] text-white px-8 h-14 rounded-2xl font-bold text-lg hover:bg-[#119da4] transition-colors duration-300 flex items-center gap-3 cursor-pointer">
            Book a Free Call{" "}
            <Image src="/call.svg" width={24} height={24} alt="call" />
          </button>
        </div>
      </div>
    </section>
  );
}
