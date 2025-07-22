import Image from "next/image";

export default function Hero() {
  return (
    <section className="relatve w-full  lg:h-[calc(100vh-60px)] aspect-[16/9]">
      <Image
        src="/portfolioImages/Frame 2147227010.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover w-full h-full"
      />

      <div className="absolute inset-0 left-0 w-full bg-gradient-to-r from-black via-[#292929]/40 to-transparent backdrop-blur-xs z-0 lg:z-10" />

      <div className="relative z-10 w-full h-full flex flex-col items-center lg:items-start justify-start py-11 lg:justify-center px-5 lg:px-20 text-white ">
        <h2 className="font-bold text-3xl lg:text-5xl mb-6">
          Our Work Speaks for itself
        </h2>

        <p className="font-regular text-[#AEAEAE] text-base lg:text-2xl leading-relaxed">
          At Cyncra, we turn ideas into digital excellence. Discover <br />
          our top achievements, crafted with precision and purpose
        </p>
      </div>
    </section>
  );
}
