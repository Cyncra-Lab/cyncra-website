'use client';

import Image from "next/image";
import {CheckCircle} from "lucide-react";

export default function ProjectCTA(){
    return (
        <section className="w-full bg-[|f0fff8 py-12 px-4 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                 <div className="w-full md:w-1/2">
                        <Image src="/images/frame_2147226814.png" alt="team" width={600} height={400} className="rounded-lg shodow-md"/>
                 </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Got a project in mind?</h2>
                        <p className="text-gray-700 mb-6">Consult us for any of our services. From product design to development and beyond, we are always happy to support your vision.</p>
                        <ul className="space-y-3 text-sm text-gray-800">
                            {[
                            "Transparent pricing with the best value",
                            "Fast and flexible project delivery",
                            "Custom Solutions tailored to your business goals",
                            "Ongoing support and long-term partnerships"
                            ].map ((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle className="text-emerald-600 mt-1" size={18}/>

                                    <span>{item}</span>
                                    </li>
                            ))}
                        </ul>
                    </div>
            </div>
        </section>
    );
}