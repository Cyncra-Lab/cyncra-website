"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/navData";

export default function MobileMenu({ open, onClose }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-transparent md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* drawer */}
          <motion.aside
            className="fixed right-0 z-50 w-full h-[60vh] bg-white p-6 md:hidden border-l border-accent-2/40"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            <ul className="space-y-12">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <motion.li
                    key={href}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={href}
                      onClick={onClose}
                      className={`block text-center text-lg font-medium transition-colors ${
                        isActive
                          ? "text-accent-2"
                          : "text-text hover:text-shadow-accent-2"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}

              <motion.li whileHover={{ scale: 1.05 }}>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex justify-center items-center rounded-full bg-accent-2 px-5 py-3 h-14 text-center font-bold text-white hover:opacity-90 transition"
                >
                  Contact Us
                </Link>
              </motion.li>
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
