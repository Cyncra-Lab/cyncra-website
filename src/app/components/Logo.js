"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/image/Logo.svg";

export default function Logo() {
  return (
    <Link href="/" aria-label="Home" className=" w-45 lg:w-65 h-5 lg:h-8">
      <Image
        src={logo}
        alt="Cyncra logo"
        width={40}
        height={40}
        priority
        className="h-full w-full object-cover"
      />
    </Link>
  );
}
