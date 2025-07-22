"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AboutSection() {
  return (
    <section className="p-10 lg:p-20 w-full">
      <div className="grid items-start gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full h-auto lg:h-[441px]">
        <div className="col-span-2 overflow-hidden h-full">
          <Image
            src="/image/about.svg"
            alt="Team collaborating over a laptop"
            width={500}
            height={300}
            className="h-full w-full object-cover rounded-3xl"
            priority
          />
        </div>

        <div className="col-span-3 flex h-full flex-col py-1">
          <h2 className="mb-11 text-2xl font-bold text-text lg:text-3xl">
            About Cyncra
          </h2>

          <p className="mb-11 text-sm font-light leading-relaxed text-[#727272] lg:text-2xl">
            Cyncra is a digital platform built for Nigeria’s growing community
            of freelancers and entrepreneurs. We provide smart tools and
            seamless solutions to help you manage, grow, and sustain your
            business all in one place.
            <br /> Whether you’re just starting out or scaling up, Cyncra gives
            you the clarity, control, and confidence to thrive in today’s
            fast-moving digital economy.
          </p>

          <Link
            href="/services"
            className="mt-6 md:mt-auto inline-flex items-center gap-2 text-sm font-bold
                       text-[#0C120C] transition-colors hover:text-accent-2 lg:text-lg"
          >
            Explore Our Services
            <Icon icon="ic:round-arrow-right-alt" width="18" height="18" />
          </Link>
        </div>
      </div>
    </section>
  );
}
