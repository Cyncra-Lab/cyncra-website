import Image from "next/image";

export default function Vision() {
  return (
    <section className="bg-[#E6FAFC] min-h-screen text-gray-800 flex justify-center">
      <div className="w-[80.625rem] mx-auto">
        <h2 className="text-center text-3xl font-bold mb-6">Where We're Headed</h2>
        <div>
          <h3 className="text-3xl font-bold mb-2">Our Vision</h3>
          <p className="text-2xl text-[#727272] font-regular mb-6 tracking-tight leading-[1.4]">
            To become the trusted digital partner for bold startups and forward-thinking enterprises across Africa and beyond, driving innovation, excellence, and lasting transformation.
          </p>
        </div>

        <div className="flex items-center gap-52 border">
          <div>
            <Image
              src="/aboutImages/Frame 2147226968.webp"
              alt="Vision visual"
              width={545}
              height={350}
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-6 w-[34.0625rem] h-[21.875rem]">
            <h2 className="text-3xl font-bold mb-12">Vision Pillars</h2>
            <span className="text-6xl font-bold text-[#C0BFBF] mb-4">01</span>
            <h3 className="font-bold text-2xl mb-4">Reliability First</h3>
            <p className="text-2xl text-[#727272]">
              We align with ambitious brands to build forward-thinking, disruptive digital products that set them apart
            </p>
          </div>
        </div>

        <div className="flex items- gap-14 border">
            <div className="flex flex-col gap-6 w-[34.0625rem] h-[21.875rem]">
              <span className="text-6xl font-bold text-[#C0BFBF] mb-4">02</span>
              <h3 className="font-bold text-2xl mb-4">Design that Speaks</h3>
              <p className="text-2xl text-[#727272]">
                Our work fuels the next generation of African startups and enterprises to compete and thrive globally.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-[34.0625rem] h-[21.875rem]">
              <span className="text-6xl font-bold text-[#C0BFBF] mb-4">03</span>
              <h3 className="font-bold text-2xl mb-4">Solutions, Not Just Software</h3>
              <p className="text-2xl text-[#727272]">
                More than a vendor, we aim to be the strategic, long-term partner our clients rely on for growth and clarity.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-[34.0625rem] h-[21.875rem]">
              <span className="text-6xl font-bold text-[#C0BFBF] mb-4">04</span>
              <h3 className="font-bold text-2xl mb-4">Built for Impact</h3>
              <p className="text-2xl text-[#727272]">
                We are building solutions that don’t just work locally they scale across markets, industries, and continents.
              </p>
            </div>
            
        </div>
      </div>
    </section>
  );
}
