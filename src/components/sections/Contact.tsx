"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6"
      >
        <p className="text-zinc-200/90">
          If you’re hiring for healthcare analytics, BI engineering, or applied ML roles, I’d love to connect.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
            href={profile.links.email}
          >
            Email
          </a>
          <a
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
            href={profile.links.resume}
          >
            Resume PDF
          </a>
        </div>
      </motion.div>
    </section>
  );
}