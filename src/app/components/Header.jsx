"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { Nav_Links } from "../data/navData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full  bg-surface/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-8 py-10 md:px-6">
        <Logo />

        <ul className="hidden gap-8 md:flex">
          {Nav_Links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-accent-2" : "text-text hover:text-accent-2"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-accent-2 px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-block"
        >
          Contact&nbsp;Us
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
    </header>
  );
}
