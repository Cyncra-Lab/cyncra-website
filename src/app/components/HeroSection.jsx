// components/HeroSection.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import rocketIcon from "@iconify/icons-mdi/rocket-launch";
import compassIcon from "@iconify/icons-mdi/compass";

export default function HeroSection() {
  return (
    <section>
      <div
        className="relative flex items-center mx-auto overflow-hidden rounded-3xl min-h-[76vh] p-8"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--color-primary) 30%, var(--color-secondary) 70%, #ffffff 100%)",
        }}
      >
        <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
          <div>
            <h1
              className="mb-6 font-bold leading-tight text-white
              text-xl  md:text-3xl"
            >
              Building Scalable Digital{" "}
              <p className="block">Solutions that Drive Growth</p>
            </h1>

            <p className="mb-10 max-w-xl text-sm text-secondary  md:text-lg">
              At Cyncra Technologies, we design, develop, and deliver custom
              websites and mobile applications that power startups, scale-ups,
              and enterprises. Whether you’re launching a new product or
              re-imagining your digital experience, we help you go from idea to
              impact.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-text shadow hover:opacity-90"
              >
                Get&nbsp;Started
                <Icon
                  icon={rocketIcon}
                  width="18"
                  height="18"
                  className="text-text"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-secondary px-6 py-3 font-semibold text-secondarry hover:bg-white/10"
              >
                Explore&nbsp;Our&nbsp;Services
                <Icon
                  icon="mdi:compass"
                  width="18"
                  height="18"
                  className="text-[var(--color-secondary)]"
                />
              </Link>
            </div>
          </div>

          <div className="mx-auto max-w-md lg:max-w-none">
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
    </section>
  );
}
