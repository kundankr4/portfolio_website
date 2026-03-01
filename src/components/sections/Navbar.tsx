"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const items = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-zinc-50">
              {it.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.links.resume}
          className="rounded-full border border-zinc-700 px-3 py-1 text-sm hover:border-zinc-500"
        >
          Resume
        </a>
      </div>
    </motion.header>
  );
}