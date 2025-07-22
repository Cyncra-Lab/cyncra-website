import Image from "next/image";

export default function Vision() {
  return (
    <section className="bg-[rgb(230,250,252)] min-h-screen pt-11 text-[#0C120C] flex justify-center">
      <div className="w-full px-8 lg:px-20 mx-auto">
        <h2 className="text-center lg:text-3xl text-lg font-bold lg:mb-15 mb-5">Where We're Headed</h2>
        <div className="mb-11">
          <h3 className="lg:text-3xl text-lg font-bold lg:mb-15">Our Vision</h3>
          <p className="lg:text-2xl text-base text-[#727272] font-regular mb-6 tracking-tight leading-[1.4] text-justify">
            To become the trusted digital partner for bold startups and forward-thinking enterprises across Africa and beyond, driving innovation, excellence, and lasting transformation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:my-15 lg:gap-52 gap-10">
            <Image
              src="/aboutImages/Frame 2147226968.webp"
              alt="Vision visual"
              width={545}
              height={350}
              className="rounded-3xl"
            />
          <div className="flex flex-col mb-4 lg:mb-0 lg:gap-6 lg:w-[34.0625rem] lg:h-[21.875rem]">
            <h2 className="lg:text-3xl text-lg font-bold mb-4 lg:mb-12">Vision Pillars</h2>
            <span className="text-2xl lg:text-6xl font-bold text-[#C0BFBF] mb-4">01</span>
            <h3 className="font-bold lg:text-2xl">Reliability First</h3>
            <p className="text-base lg:text-2xl text-[#727272]">
              We align with ambitious brands to build forward-thinking, disruptive digital products that set them apart
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-14">
            <div className="flex flex-col lg:gap-6 lg:w-[34.0625rem] lg:h-[21.875rem]">
              <span className="text-2xl lg:text-6xl font-bold text-[#C0BFBF] mb-4">02</span>
              <h3 className="font-bold lg:text-2xl">Design that Speaks</h3>
              <p className="text-base lg:text-2xl text-[#727272]">
                Our work fuels the next generation of African startups and enterprises to compete and thrive globally.
              </p>
            </div>
            <div className="flex flex-col lg:gap-6 lg:w-[34.0625rem] lg:h-[21.875rem]">
              <span className="text-2xl lg:text-6xl font-bold text-[#C0BFBF] mb-4">03</span>
              <h3 className="font-bold lg:text-2xl">Solutions, Not Just Software</h3>
              <p className="text-base lg:text-2xl text-[#727272]">
                More than a vendor, we aim to be the strategic, long-term partner our clients rely on for growth and clarity.
              </p>
            </div>
            <div className="flex flex-col lg:gap-6 lg:w-[34.0625rem] lg:h-[21.875rem]">
              <span className="text-2xl lg:text-6xl font-bold text-[#C0BFBF] mb-4">04</span>
              <h3 className="font-bold lg:text-2xl">Built for Impact</h3>
              <p className="text-base lg:text-2xl text-[#727272]">
                We are building solutions that don’t just work locally they scale across markets, industries, and continents.
              </p>
            </div>
            
        </div>
      </div>
    </section>
  );
}
