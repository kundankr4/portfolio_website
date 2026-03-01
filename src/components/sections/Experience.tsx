"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Experience
      </motion.h2>

      <div className="mt-8 space-y-5">
        {profile.experience.map((e) => (
          <motion.div
            key={`${e.company}-${e.role}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="text-lg font-semibold">{e.role}</div>
                <div className="text-sm text-zinc-400">{e.company}</div>
              </div>
              <div className="text-sm text-zinc-400">{e.dates}</div>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-200/90">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {e.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}