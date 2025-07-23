import React, { useRef } from "react";
import { Brain, Palette, Rocket, Compass, Laptop } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  }),
};

const HowItWorks = () => {
  const leftSteps = [
    {
      number: "00",
      title: "Our Process, Your Success",
      description:
        "We follow a proven, collaborative process to bring your digital ideas to life from strategy to launch and beyond.",
    },
    {
      number: "01",
      icon: <Compass className="w-6 h-6" />,
      title: "Discovery & Consultation",
      description:
        "We start by understanding your goals, challenges, and target audience through a deep-dive session. This helps us craft a tailored solution for your needs.",
    },
    {
      number: "02",
      icon: <Brain className="w-6 h-6" />,
      title: "Strategy & Planning",
      description:
        "Next, we define the scope, create wireframes or outlines, and develop a roadmap that aligns with your business objectives.",
    },
    {
      number: "03",
      icon: <Palette className="w-6 h-6" />,
      title: "Design & Prototyping",
      description:
        "We bring ideas to life with user-centered, visually appealing designs. You will see and interact with your project before development begins",
    },
  ];

  const rightSteps = [
    {
      number: "04",
      icon: <Laptop className="w-6 h-6" />,
      title: "Development & Integration",
      description:
        "Our dev team builds fast, secure, and scalable solutions whether it's a website, web app, or mobile application using the latest technologies.",
    },
    {
      number: "05",
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch & Support",
      description:
        "After rigorous testing, we launch your product and stay by your side with post-launch support, updates, and growth insights.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-white py-10 lg:py-20 px-0 lg:px-6 w-full">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-42 items-start">
        {/* Left Side */}
        <div className="space-y-13">
          {leftSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 w-full"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index * 0.2}
            >
              <div className="flex-shrink-0 flex items-center justify-normal gap-3">
                {step.number !== "00" && (
                  <div className="w-8 h-8 border border-black/50 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-medium text-sm">
                      {step.number}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  {step.icon && (
                    <div className="text-gray-600">{step.icon}</div>
                  )}
                  <h3 className="text-2xl font-bold text-[#0C120C]">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed text-xl lg:text-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Image + Remaining Steps */}
        <motion.div
          className="space-y-10"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.4}
        >
          <div className="w-full h-60 lg:h-100 rounded-xl">
            <Image
              src="/howItWorks.svg"
              width={100}
              height={100}
              alt="how it works"
              className="h-full lg:h-auto w-full object-cover rounded-3xl aspect-video"
            />
          </div>

          {/* Steps 04 and 05 */}
          <div className="space-y-13">
            {rightSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 w-full"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={(index + 5) * 0.2}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 flex items-center justify-normal gap-3">
                  <div className="w-8 h-8 border border-black/50 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-medium text-sm">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-0">
                    <div className="text-gray-600">{step.icon}</div>
                    <h3 className=" text-2xl font-bold text-[#0C120C]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed text-xl lg:text-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
