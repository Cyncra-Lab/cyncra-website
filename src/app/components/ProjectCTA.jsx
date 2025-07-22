"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Transparent pricing with the best value",
  "Fast and flexible project delivery",
  "Custom solutions tailored to your business goals",
  "Ongoing support and long-term partnerships",
];

export default function ProjectCTA() {
  return (
    <section className="w-full bg-[#ebfdf2] py-10 lg:py-20 px-5 lg:px-20">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 py-6">
          <Image
            src="/images/frm-1.svg"
            alt="Team collaboration"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 mt-6 pr-0 lg:pr-5">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-10 text-center lg:text-left">
            Got a project in mind?
          </h2>
          <p className="text-[#727272] text-lg lg:text-2xl mb-6 lg:mb-12 leading-relaxed">
            Consult us for any of our services. <br />
            From Product Design to Development and beyond. <br />
            We are always happy to support your vision.
          </p>

          <ul className="space-y-3 text-sm lg:text-lg text-gray-800">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-baseline gap-2 space-y-6">
                <Image
                  src={"/images/Vector.svg"}
                  alt="projects"
                  width={20}
                  height={20}
                />
                <span className="font-bold text-sm lg:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
