'use client';

import Image from 'next/image';
import React from 'react';

export default function ContactHero() {
    return (
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">

            <Image src="/images/hero_section.png" alt="Retro Phone" layout="fill" objectFit="cover" objectPosition="center" className="z-0" priority />

            <div className="absolute inset-0 bg-[#042F2E]/80 z-10 flex items-center justify-center" >
              <div className="text-center text-white px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2"> </h1>
                    <p className="text-lg md:text-xl"> We want to hear from you <p/>
               <div/> 
           <div/>
        </section>
    );
};
