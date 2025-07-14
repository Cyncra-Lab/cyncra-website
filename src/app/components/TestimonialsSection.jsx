"use client";

import Image from "next/image";

const leftCluster = [
  { src: "/image/avatars1.svg", alt: "Man in maroon agbada" },
  { src: "/image/avatars2.svg", alt: "Woman in hijab" },
  { src: "/image/avatars7.svg", alt: "Woman with hat" },
  { src: "/image/avatars8.svg", alt: "Bald fashion model" },
];
const leftSingles = [{ src: "/image/avatars3.svg", alt: "Man pondering" }];
const leftSingles2 = [{ src: "/image/avatars4.svg", alt: "Woman by car" }];
const feature = {
  src: "/image/avatars10.svg",
  alt: "Engineer on sofa with laptop",
};
const rightSingles = [
  { src: "/image/avatars12.svg", alt: "Woman posing outdoors" },
];
const rightSingles2 = [
  { src: "/image/avatars6.svg", alt: "Girl resting chin on hands" },
];
const rightCluster = [
  { src: "/image/avatars5.svg", alt: "Man in white agbada" },
  { src: "/image/avatars9.svg", alt: "Cyclist with camera" },
  { src: "/image/avatars11.svg", alt: "Smiling entrepreneur" },
  { src: "/image/avatars13.svg", alt: "man" },
];

const TESTIMONIAL = {
  author: "Tobi Bamidele, Founder, QuickCart NG",
  quote:
    "Working with Cyncra felt like having an in-house tech team. They didn’t just build our app; they challenged our thinking, improved the UX, and delivered ahead of schedule.",
};

function Avatar({ src, alt, size = "md" }) {
  const dim = size === "lg" ? "w-36 h-36" : "w-20 h-20";
  return (
    <div className={`${dim} rounded-2xl overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        width={144}
        height={144}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-2xl font-bold md:text-3xl">Testimonials</h2>
      <p className="mt-2 text-sm text-text/70 sm:text-base">
        Hear what our clients are saying about us
      </p>

      <div className="flex flex-wrap items-center justify-center gap-10 px-4 py-8">
        <div className="grid grid-cols-2 gap-4">
          {leftCluster.map((p) => (
            <Avatar key={p.src} {...p} />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {leftSingles.map((p) => (
            <Avatar key={p.src} {...p} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {leftSingles2.map((p) => (
            <Avatar key={p.src} {...p} />
          ))}
        </div>

        <Avatar {...feature} size="lg" />

        <div className="flex flex-col gap-4">
          {rightSingles.map((p) => (
            <Avatar key={p.src} {...p} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {rightSingles2.map((p) => (
            <Avatar key={p.src} {...p} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {rightCluster.map((p) => (
            <Avatar key={p.src} {...p} />
          ))}
        </div>
      </div>

      <p className="mt-14 font-semibold text-text">{TESTIMONIAL.author}</p>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-text/80 sm:text-base">
        “{TESTIMONIAL.quote}”
      </p>
    </section>
  );
}
