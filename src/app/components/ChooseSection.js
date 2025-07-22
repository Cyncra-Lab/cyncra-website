"use client";

import Link from "next/link";

const points = [
  { label: "Web & Mobile Development", dark: true },
  { label: "UI/UX Design", dark: false },
  { label: "Product Strategy & MVPs", dark: false },
  { label: "E-commerce & Support", dark: true },
];

export default function ChooseSection() {
  return (
    <section className="bg-[var(--color-secondary)] py-5 px-0 lg:p-20">
      <div className="grid gap-10 lg:gap-46 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-8 lg:mb-11 text-2xl font-bold md:text-3xl text-center lg:text-left">
            Why Freelancers and
            <br />
            Entrepreneurs Choose Cyncra
          </h2>

          <p className="mb-8 lg:text-2xl leading-relaxed text-text/90 text-sm">
            At Cyncra Technologies, we go beyond building digital products; we
            build long-term solutions tailored to your vision. Our team combines
            design thinking, technical expertise, and business insight to help
            you launch faster, scale smarter, and grow confidently in today’s
            digital landscape.
          </p>

          <p className="mb-10 font-bold text-xl lg:text-2xl">
            Crafted with strategy, design, and code
          </p>

          <Link
            href="/portfolio"
            className="flex justify-center items-center rounded-xl bg-primary px-6 py-3 text-base lg:text-lg font-bold
                       text-secondary transition hover:bg-accent-2 h-14 w-full lg:w-[205px]"
          >
            Explore our work
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 py-10 lg:py-12 h-auto w-full md:h-95 md:w-109 lg:h-120 lg:w-120 ml-auto">
          {points.map(({ label, dark }) => (
            <div
              key={label}
              className={`flex min-h-[140px] h-full items-center justify-center rounded-3xl px-5 lg:px-11 py-16
              text-center  sm:text-sm md:text-lg font-bold leading-snug tracking-wide
                          ${
                            dark
                              ? "bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent-2))] text-white"
                              : "bg-white text-text"
                          }`}
            >
              {label.split("\n").map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
