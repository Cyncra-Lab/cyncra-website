// components/footerData.js
import {
  Facebook,
  Instagram,
  Linkedin,
  LineChart as XLogo,
} from "lucide-react";

export const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://x.com", icon: XLogo, label: "X / Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
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
