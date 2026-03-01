"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Projects
      </motion.h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {profile.projects.map((p) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5 transition"
          >
            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl border border-zinc-800">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>

            <div className="text-lg font-semibold group-hover:underline">{p.name}</div>
            <div className="mt-2 text-sm text-zinc-300/90">{p.description}</div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}