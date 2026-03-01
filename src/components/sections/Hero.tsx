"use client";

import { motion } from "framer-motion";
import HeroScene from "@/components/three/HeroScene";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:pt-24">
        <HeroScene />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-zinc-400"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl"
        >
          {profile.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-zinc-200/90"
        >
          {profile.tagline}
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.links.github}
            className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.resume}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
          >
            Download Resume
          </a>
          <a
            href={profile.links.email}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
          >
            Email Me
          </a>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {profile.highlights.map((h) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4"
            >
              <div className="text-2xl font-semibold">{h.value}</div>
              <div className="mt-1 text-sm text-zinc-400">{h.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}