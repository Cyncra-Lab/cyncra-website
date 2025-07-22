"use client";

<<<<<<< HEAD
import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';
import { Menu, X} from 'lucide-react';
=======
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
>>>>>>> a7c7035782949f50327d7b55f76149c4681661af

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD
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
                <Link href="/services" className="hover:text-teal-700"> Services</Link>
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
            <Link href="/services" className="block"> Services</Link>
            <Link href="/" className="block"> Portfolio</Link>
            <Link href="/contact" className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full mt-2" > Contact Us </Link>
        </div>
       )}
    </header>
   );
} 
=======
  return (
    <nav className="navbar navbar-expand-lg navbar-light !bg-red-400 shadow-sm py-7 px-20 h-20">
      <div className="container">
        {/*logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            className="me-2"
            height={200}
          />
        </Link>

        {/*hamburger*/}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*navbar-links*/}
        <div className="navbar-collapse show d-flex justify-content-end">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className="btn btn-success ms-lg-3 mt-3 mt-lg-0 rounded-pill"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
>>>>>>> a7c7035782949f50327d7b55f76149c4681661af
