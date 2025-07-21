"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
