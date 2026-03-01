"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        About
      </motion.h2>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6"
        >
          <p className="text-zinc-200/90">{profile.tagline}</p>
          <p className="mt-4 text-sm text-zinc-400">
            I enjoy translating messy healthcare data into decision-ready insights, and
            shipping dashboards and ML prototypes that actually get used.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {profile.aboutBullets.map((b) => (
            <li
              key={b}
              className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 text-zinc-200/90"
            >
              {b}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}