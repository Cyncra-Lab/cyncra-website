"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AboutSection() {
  return (
    <section className="my-16">
      <div className="grid items-start gap-10  md:grid-cols-2 ">
        <div className="order-2 overflow-hidden rounded-md md:order-1">
          <Image
            src="/image/about.svg"
            alt="Team collaborating over a laptop"
            width={500}
            height={300}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="order-1 flex h-full flex-col md:order-2">
          <h2 className="mb-4 text-2xl font-bold text-text sm:text-3xl">
            About&nbsp;Cyncra
          </h2>

          <p className="mb-3 max-w-prose text-sm leading-relaxed text-text/90 sm:text-base">
            Cyncra is a digital platform built for Nigeria’s growing community
            of freelancers and entrepreneurs. We provide smart tools and
            seamless solutions to help you manage, grow, and sustain your
            business all in one place.
          </p>

          <p className="max-w-prose text-sm leading-relaxed text-text/90 sm:text-base">
            Whether you’re just starting out or scaling up, Cyncra gives you the
            clarity, control, and confidence to thrive in today’s fast-moving
            digital economy.
          </p>

          <Link
            href="/services"
            className="mt-6 md:mt-auto inline-flex items-center gap-2 text-sm font-semibold
                       text-primary transition-colors hover:text-accent-2 sm:text-base"
          >
            Explore&nbsp;Our&nbsp;Services
            <Icon icon="ic:round-arrow-right-alt" width="18" height="18" />
          </Link>
        </div>
      </div>
    </section>
  );
}
