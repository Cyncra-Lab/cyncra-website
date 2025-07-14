"use client";

import Image from "next/image";

const AVATARS = [
  { src: "/image/avatars1.svg", size: "lg" },
  { src: "/image/avatars2.svg", size: "sm" },
  { src: "/image/avatars3.svg" },
  { src: "/image/avatars4.svg" },
  { src: "/image/avatars5.svg" },
  { src: "/image/avatars6.svg" },
  { src: "/image/avatars7.svg" },
  { src: "/image/avatars8.svg" },
  { src: "/image/avatars9.svg" },
  { src: "/image/avatars10.svg" },
  { src: "/image/avatars11.svg" },
  { src: "/image/avatars12.svg" },
];

const TESTIMONIAL = {
  author: "Tobi Bamidele, Founder, QuickCart NG",
  quote:
    "Working with Cyncra felt like having an in-house tech team. They didn’t just build our app; they challenged our thinking, improved the UX, and delivered ahead of schedule.",
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-2xl font-extra]]]bold sm:text-3xl">Testimonials</h2>
      <p className="mt-2 text-sm text-text/70 sm:text-base">
        Hear what our clients are saying about us
      </p>

      <div className="mt-10 flex justify-center gap-3 sm:gap-4">
        {AVATARS.map(({ src, size }, i) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-lg
                        ${
                          size === "lg"
                            ? "w-28 h-28 sm:w-32 sm:h-32"
                            : "w-16 h-16 sm:w-20 sm:h-20"
                        }`}
          >
            <Image
              src={src}
              alt={`Client ${i + 1}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <p className="mt-14 font-semibold text-text">{TESTIMONIAL.author}</p>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-text/80 sm:text-base">
        “{TESTIMONIAL.quote}”
      </p>
    </section>
  );
}
