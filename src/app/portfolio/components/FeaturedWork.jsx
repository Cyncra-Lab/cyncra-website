"use client";

const portfolioData = [
  {
    id: 1,
    description: "FinTech CRM Dashboard Redesign",
  },
  {
    id: 2,
    description: "E-commerce Platform for Local Artisans",
  },
  {
    id: 3,
    description: "Mobile App for Logistics Tracking",
  },
  {
    id: 4,
    description: "SaaS Website with Booking Flow",
  },
  {
    id: 5,
    description: "Internal HR Portal for Staff Management",
  },
  {
    id: 6,
    description: "NGO Storytelling and Donation Platform",
  },
];

export default function FeaturedWork() {
  return (
    <section className="min-h-screen pt-10 lg:pt-20 text-[#0C120C] flex justify-center">
      <div className="w-full px-5 lg:px-20 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-center text-2xl lg:text-3xl font-bold mb-6">
            Featured Work that Delivers Results
          </h2>
          <p className="text-base lg:text-2xl text-[#727272] font-regular mb-6 tracking-tight leading-[1.4]">
            Explore impactful solutions we built to solve real challenges and
            help clients grow.
          </p>
        </div>

        {/* Portfolio Grid - 2 columns, 3 rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {portfolioData.map((project) => (
            <div key={project.id} className="flex flex-col">
              {/* Gray placeholder card */}
              <div className="bg-gray-300 h-96 lg:h-[37.5rem] rounded-3xl"></div>

              <div className="flex flex-col items-center justify-center">
                <p className="text-[#727272] text-lg lg:text-2xl my-5 lg:my-9">
                  {project.description}
                </p>

                {/* Button */}

                <button className="bg-[#02353C] text-white h-[55px] px-8 rounded-2xl text-base lg:text-2xl hover:bg-[#119da4] transition-colors duration-300 cursor-pointer">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
