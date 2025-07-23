"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="p-5 lg:p-20 text-[#0C120C] flex justify-center h-auto">
      <div className="w-full px-0 lg:px-20 mx-auto">
        <motion.div
          className="text-center mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-2xl lg:text-5xl font-bold mb-2">
            Testimonials
          </h2>
          <p className="text-xl lg:text-2xl text-[#727272] font-regular mb-11 tracking-wider leading-[1.4]">
            Hear what Our Clients are saying about us
          </p>
        </motion.div>

        {/* Client Images Grid */}
        <motion.div
          className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left group - 2x2 grid */}

          <div className="grid grid-cols-2 gap-6">
            {["Frame1", "Frame3", "Frame2", "Frame4"].map((frame, i) => (
              <Image
                key={i}
                src={`/images/${frame}.svg`}
                alt={`Client ${i + 1}`}
                width={100}
                height={100}
                className="w-25 h-25 rounded-2xl object-cover"
              />
            ))}
          </div>

          {/* Center group - 3 */}

          <div className="flex flex-col lg:flex-row items-center gap-6">
            {["Frame5", "Frame6", "Frame7", "Frame8", "Frame9"].map(
              (frame, i) => (
                <Image
                  key={i}
                  src={`/images/${frame}.svg`}
                  alt={`Client ${i + 5}`}
                  width={100}
                  height={100}
                  className={`rounded-2xl object-cover ${
                    frame === "Frame7" ? "w-41 h-41" : "w-25 h-25"
                  }`}
                />
              )
            )}
          </div>

          {/* Right group - 2x2 grid */}

          <div className="grid grid-cols-2 gap-6">
            {["Frame10", "Frame12", "Frame11", "Frame13"].map((frame, i) => (
              <Image
                key={i}
                src={`/images/${frame}.svg`}
                alt={`Client ${i + 10}`}
                width={100}
                height={100}
                className="w-25 h-25 rounded-2xl object-cover"
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl lg:text-2xl font-bold mb-2">
            Tobi Bamidele, Founder, QuickCart NG
          </h3>
          <p className="text-[#727272] text-lg lg:text-2xl leading-relaxed px-0 lg:px-70 mb-20 lg:mb-31">
            "Working with Cyncra felt like having an in-house tech team. They
            didn't just build our app, they challenged our thinking, improved
            the UX, and delivered ahead of schedule."
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center flex flex-col items-center justify-center gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
