import { Icon } from "@iconify/react";
import facebook from "@iconify/icons-mdi/facebook";
import instagram from "@iconify/icons-mdi/instagram";
import linkedin from "@iconify/icons-mdi/linkedin";
import xLogo from "@iconify/icons-mdi/twitter";

export const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: instagram, label: "Instagram" },
  { href: "https://x.com", icon: xLogo, label: "X / Twitter" },
  { href: "https://linkedin.com", icon: linkedin, label: "LinkedIn" },
];

export const FOOTER_SECTIONS = [
  {
    title: "About",
    items: [
      { label: "Our Story", href: "/about#story" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Core Values", href: "/about#values" },
      { label: "Meet the Team", href: "/about#team" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Product Strategy", href: "/services#strategy" },
      { label: "UI/UX Design", href: "/services#design" },
      { label: "MVP Development", href: "/services#mvp" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", href: "/support#help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Complaints", href: "/support#complaints" },
    ],
  },
];
