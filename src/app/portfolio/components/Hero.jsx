import Image from "next/image";

export default function Hero() {
  return (
    <section className="relatve w-full h-[calc(100vh-60px)]">
      <Image
        src="/portfolioImages/Frame 2147227010.png"
        alt="Hero Background"
        fill
        priority
        className="object-fit"
      />

      <div className="absolute inset-0 left-0 w-full bg-gradient-to-r from-black via-[#292929]/10 to-transparent backdrop-blur-xs z-10"/>

      <div className="relative z-10 w-full h-full flex flex-col items-start justify-center px-20 text-white ">
        <h2 className="font-bold text-4xl mb-6">Our Work Speaks for itself</h2>

        <p className="font-regular text-[#AEAEAE] text-2xl leading-relaxed">
          At Cyncra, we turn ideas into digital excellence. Discover <br />
          our top achievements, crafted with precision and purpose
        </p>
      </div>
    </section>
  );
}
