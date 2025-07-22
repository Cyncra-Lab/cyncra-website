// components/HeroSection.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import rocketIcon from "@iconify/icons-mdi/rocket-launch";
import compassIcon from "@iconify/icons-mdi/compass";
import StatsSection from "./StatsSection";

export default function HeroSection() {
  return (
    <section className="pt-0 lg:pt-11 px-0 lg:px-20 h-full lg:h-svh w-full">
      <div
        className="relative overflow-hidden rounded-none lg:rounded-3xl py-5 lg:py-12 px-5 lg:px-14 w-full mb-5 lg:mb-11"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--color-primary) 30%, var(--color-secondary) 70%, #ffffff 100%)",
        }}
      >
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
          <div className="pt-5 lg:pt-12 w-full">
            <h1
              className="text-center lg:text-left font-bold leading-tight text-white
              text-2xl lg:text-5xl mb-9"
            >
              Building Scalable Digital{" "}
              <span className="block">Solutions that Drive Growth</span>
            </h1>

            <p className="mb-10 text-base lg:text-lg text-secondary  md:text-lg">
              At Cyncra Technologies, we design, develop, and deliver custom
              websites and mobile applications that power startups, scale-ups,
              and enterprises. Whether you’re launching a new product or
              re-imagining your digital experience, we help you go from idea to
              impact.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className=" gap-2 rounded-xl bg-secondary w-full lg:w-[195px] flex justify-center items-center h-14 font-semibold text-text shadow hover:opacity-90"
              >
                Get Started
                <Icon
                  icon={rocketIcon}
                  width="18"
                  height="18"
                  className="text-text"
                />
              </Link>

              <Link
                href="/services"
                className="flex justify-center items-center w-full lg:w-[195px] h-14 gap-2 rounded-xl border border-secondary px-6 py-3 font-semibold text-secondary hover:bg-white/10"
              >
                Explore Our Services
                <Icon
                  icon="mdi:compass"
                  width="18"
                  height="18"
                  className="text-[var(--color-secondary)]"
                />
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/image/Hero.svg"
                alt="Digital solutions illustration"
                width={600}
                height={450}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <StatsSection />
    </section>
  );
}
