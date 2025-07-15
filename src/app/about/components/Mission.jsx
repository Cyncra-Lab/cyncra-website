import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-[#E6FAFC] min-h-screen text-gray-800 flex justify-center">
      <div className="w-[80.625rem] mx-auto">
        <h2 className="text-center text-3xl font-bold mb-6">Who We Are</h2>
        <div>
          <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
          <p className="text-2xl text-[#727272] font-regular mb-6 tracking-tight leading-[1.4]">
            At Cyncra, we empower businesses through reliable, beautifully
            crafted digital products that solve real problems and create lasting
            value. We believe in building more than just technology, we create
            digital solutions that make a difference.
          </p>
        </div>

        <div className="flex items-center gap-52 border">
          <div>
            <Image
              src="/aboutImages/Frame-2147226945.webp"
              alt="Mission visual"
              width={545}
              height={350}
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-6 w-[34.0625rem] h-[21.875rem]">
            <h2 className="text-3xl font-bold mb-12">What Drives Us</h2>
            <span className="text-6xl font-bold text-[#C0BFBF] mb-4">01</span>
            <h3 className="font-bold text-2xl mb-4">Reliability First</h3>
            <p className="text-2xl text-[#727272]">
              We create stable, scalable digital products businesses can count on
              day in, day out.
            </p>
          </div>
        </div>

        <div className="flex items- gap-14 border">
            <div className="flex flex-col gap-6 w-[34.0625rem] h-[21.875rem]">
              <span className="text-6xl font-bold text-[#C0BFBF] mb-4">02</span>
              <h3 className="font-bold text-2xl mb-4">Design that Speaks</h3>
              <p className="text-2xl text-[#727272]">
                Our work is intentional and beautiful. Every pixel, every layout, every interaction
                crafted to inspire and engage.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-[34.0625rem] h-[21.875rem]">
              <span className="text-6xl font-bold text-[#C0BFBF] mb-4">03</span>
              <h3 className="font-bold text-2xl mb-4">Solutions, Not Just Software</h3>
              <p className="text-2xl text-[#727272]">
                We focus on solving real problems, not just ticking feature boxes. If it doesn’t bring
                value, it doesn’t make the cut.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-[34.0625rem] h-[21.875rem]">
              <span className="text-6xl font-bold text-[#C0BFBF] mb-4">04</span>
              <h3 className="font-bold text-2xl mb-4">Built for Impact</h3>
              <p className="text-2xl text-[#727272]">
                From strategy to launch, we ensure every product we deliver drives measurable growth
                and meaningful results.
              </p>
            </div>
            
        </div>
      </div>
    </section>
  );
}
