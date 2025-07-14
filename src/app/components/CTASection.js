"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function CallToActionSection() {
  return (
    <section className="py-20 text-center">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">
        Ready to bring your digital ideas to life?
      </h2>

      <p className="mx-auto mb-10 max-w-md text-sm text-text/80 sm:text-base">
        Let’s help you build, launch, and scale with confidence.
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm
                   font-semibold text-secondary transition hover:bg-accent-2"
      >
        Book a Free Call
        <Icon icon="ic:baseline-phone" width="18" height="18" />
      </Link>
    </section>
  );
}
