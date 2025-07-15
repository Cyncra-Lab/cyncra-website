'use client';

import { LightbulbIcon, HeartIcon, ShieldIcon, RocketIcon } from "lucide-react";

const valuesData = [
  {
    id: 1,
    icon: LightbulbIcon,
    title: "Creative Excellence",
    description: "We think beyond the obvious and deliver remarkable experiences"
  },
  {
    id: 2,
    icon: HeartIcon,
    title: "Purposeful Execution",
    description: "Every action we take is backed by intention and impact"
  },
  {
    id: 3,
    icon: ShieldIcon,
    title: "Agility",
    description: "We adapt quickly and respond with smart, scalable solutions"
  },
  {
    id: 4,
    icon: RocketIcon,
    title: "Partnership",
    description: "We grow with our clients, not just for them"
  }
];

export default function Values() {
  return (
    <section className="h-[48.0625rem] border text-gray-800 flex justify-center py-10">
      <div className="w-[80.625rem] mx-auto">
        <div className="flex flex-col text-center">
        <h2 className="text-3xl font-bold">Our Core Values</h2>
        <p className="text-2xl text-[#727272] my-12">Our values are more than words; they are the foundation of how we think, build, and grow. They guide every project, every partnership, and every decision we make.</p>

        </div>
        {/* cards */}
        <div className="flex items-center" style={{ gap: '44px' }}>
            {valuesData.map((value) => {
                const IconComponent = value.icon;
                return (
                    <div
                        key={value.id}
                        className="w-[17.875rem] h-[25.8125rem] p-10 flex flex-col items-center text-center rounded-2xl border"
                        style={{
                            background: 'linear-gradient(to bottom, #E6FAFC 9%, #FFFFFF 64%)'
                        }}
                    >
                        <IconComponent size={50}/>
                        <h2 className="font-bold text-3xl mt-5 mb-14 h-22">{value.title}</h2>
                        <p className="text-2xl text-[#727272] ">{value.description}</p>
                    </div>
                );
            })}
        </div>

      </div>      
    </section>
  );
}
