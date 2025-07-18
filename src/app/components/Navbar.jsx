'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';
import { Menu, X} from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

   return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
       <div className="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2"> 
                    <Image src="/images/logo.png" alt="Cyncra Logo" width={40} height={40} priority />
                    <span className="sr-only"> Cyncra Home</span>
                </Link>

            <nav className="hidden md:flex space-x-6 items-center"> 
                <Link href="/" className="hover:text-teal-700"> Home</Link>
                <Link href="/" className="hover:text-teal-700"> About Us</Link>
                <Link href="/" className="hover:text-teal-700"> Services</Link>
                <Link href="/" className="hover:text-teal-700"> Portfolio</Link>
                <Link href="/contact" className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition">Contact Us </Link>
            </nav> 

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
       </div>

       {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
            <Link href="/" className="block"> Home</Link>
            <Link href="/" className="block"> About Us</Link>
            <Link href="/" className="block"> Services</Link>
            <Link href="/" className="block"> Portfolio</Link>
            <Link href="/contact" className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full mt-2" > Contact Us </Link>
        </div>
       )}
       </header>
   );
} 