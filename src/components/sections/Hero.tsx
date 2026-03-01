"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroScene from "@/components/three/HeroScene";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <HeroScene />
        {/* extra gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/70 to-zinc-950" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* Left */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1 text-xs text-zinc-300"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              {profile.location}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-3 text-lg md:text-xl text-zinc-200/90"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-5 max-w-xl text-sm md:text-base text-zinc-400 leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-950 hover:bg-white"
              >
                View Projects
              </a>
              <a
                href={profile.links.resume}
                className="rounded-full border border-zinc-700 bg-zinc-900/20 px-5 py-2 text-sm hover:border-zinc-500"
              >
                Download Resume
              </a>
              <a
                href={profile.links.linkedin}
                className="rounded-full border border-zinc-700 bg-zinc-900/20 px-5 py-2 text-sm hover:border-zinc-500"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-5 flex flex-col items-center md:items-end">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/40 to-emerald-400/30 blur-xl opacity-60" />

              <Image
                src="/profile.jpg"
                alt="Kundan Kumar"
                width={320}
                height={400}
                priority
                className="relative rounded-2xl border border-zinc-800 object-cover shadow-2xl"
              />
            </motion.div>

            {/* Highlights */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 w-full">
              {profile.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/25 p-4 backdrop-blur hover:bg-zinc-900/40 transition"
                >
                  <div className="text-2xl font-semibold">{h.value}</div>
                  <div className="mt-1 text-xs text-zinc-400">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/25 p-4 text-sm text-zinc-300/90 w-full">
              <div className="font-medium text-zinc-200">Core Focus</div>
              <div className="mt-2 text-zinc-400">
                Healthcare analytics • Data engineering • ML prototypes • BI
                dashboards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}