"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Education() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Education & Certifications
      </motion.h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
          <div className="text-sm font-semibold text-zinc-200">Education</div>
          <ul className="mt-4 space-y-3 text-zinc-200/90">
            {profile.education.map((e) => (
              <li key={e.school} className="rounded-xl border border-zinc-800 p-4">
                <div className="font-medium">{e.degree}</div>
                <div className="text-sm text-zinc-400">{e.school}</div>
                <div className="text-sm text-zinc-500">{e.dates}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
          <div className="text-sm font-semibold text-zinc-200">Certifications</div>
          <ul className="mt-4 space-y-3 text-zinc-200/90">
            {profile.certifications.map((c) => (
              <li key={c} className="rounded-xl border border-zinc-800 p-4">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}