import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full !h-[calc(70vh-60px)]  lg:!h-[calc(70vh-60px)] overflow-hidden">
      <div
        className="absolute top-0 border h-full inset-0 bg-cover bg-center filter blur-[1px] scale-110"
        style={{
          backgroundImage: `url("/portfolioImages/Frame 2147227010.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0  left-0 w-full h-full bg-gradient-to-r from-black via-[#292929]/40 to-transparent backdrop-blur-xs z-0 lg:z-10" />

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
