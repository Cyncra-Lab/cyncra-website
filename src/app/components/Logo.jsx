"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/image/Logo.svg";

export default function Logo() {
  return (
    <Link href="/" aria-label="Home" className="inline-block">
      <Image
        src={logo}
        alt="Cyncra logo"
        width={40}
        height={40}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}
