"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import FooterList from "./FooterList";
import { SOCIAL_LINKS, FOOTER_SECTIONS } from "../data/footerData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto grid gap-10 px-4 py-14 sm:grid-cols-2 md:grid-cols-4 border-b border-white/30">
        <div>
          <h3 className="mb-4 font-bold uppercase tracking-wide text-sm md:text-base lg:text-lg">
            Contact&nbsp;Us
          </h3>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full p-2 transition-colors hover:bg-[rgba(var(--accent-1)_/_0.2)]"
              >
                <Icon icon={icon} width="18" height="18" />
              </Link>
            ))}
          </div>
        </div>

        {FOOTER_SECTIONS.map(({ title, items }) => (
          <FooterList key={title} title={title} items={items} />
        ))}
      </div>

      <div className="container mx-auto py-6 text-center text-[10px] sm:text-xs md:text-sm">
        © Cyncra · {year}. All&nbsp;rights&nbsp;reserved.
      </div>
    </footer>
  );
}
