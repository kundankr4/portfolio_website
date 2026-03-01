"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Skills
      </motion.h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {Object.entries(profile.skills).map(([group, items]) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6"
          >
            <div className="text-sm font-semibold text-zinc-200">{group}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}