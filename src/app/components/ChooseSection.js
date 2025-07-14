"use client";

import Link from "next/link";

const POINTS = [
  { label: "Web & Mobile Development", dark: true },
  { label: "UI/UX Design", dark: false },
  { label: "Product Strategy & MVPs", dark: false },
  { label: "E-commerce & Support", dark: true },
];

export default function ChooseSection() {
  return (
    <section className="bg-[var(--color-secondary)]/40 py-20">
      <div className="mx-auto grid container gap-14 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">
            Why Freelancers and
            <br />
            Entrepreneurs Choose&nbsp;Cyncra
          </h2>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-text/90 sm:text-base">
            At Cyncra Technologies, we go beyond building digital products; we
            build long-term solutions tailored to your vision. Our team combines
            design thinking, technical expertise, and business insight to help
            you launch faster, scale smarter, and grow confidently in today’s
            digital landscape.
          </p>

          <p className="mb-10 font-semibold">
            Crafted with strategy, design, and code
          </p>

          <Link
            href="/portfolio"
            className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold
                       text-secondary transition hover:bg-accent-2"
          >
            Explore our work
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {POINTS.map(({ label, dark }) => (
            <div
              key={label}
              className={`flex min-h-[140px] items-center justify-center rounded-lg
              text-center  sm:text-base font-medium leading-snug tracking-wide
                          ${
                            dark
                              ? "bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent-2))] text-white"
                              : "bg-white text-text"
                          }`}
            >
              {label.split("\n").map((l) => (
                <p key={l} className="block max-w-[138px]">
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
