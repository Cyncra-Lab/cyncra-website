"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../data/navData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <section className="fixed top-0 z-50 w-full bg-surface backdrop-blur-sm shadow">
      <nav className="flex items-center justify-between lg:px-20 py-3 !md:py-5 !lg:py-6 px-2">
        <Logo />

        <ul className="hidden gap-3 md:flex">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                href={href}
                key={href}
                className={`text-sm font-normal transition-colors px-6 py-3 lg:text-lg ${
                  isActive
                    ? "text-[#02353C] !font-bold"
                    : "text-text hover:text-accent-2"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-accent-2 px-10 py-4 h-14 text-lg font-bold cursor-pointer text-white transition-opacity hover:opacity-90 md:flex justify-center items-center"
        >
          Contact Us
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center p-2 md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
