"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DISCIPLINES } from "@/data/mock";

export default function Disciplines() {
  return (
    <section id="disciplines" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-brand-accent uppercase">Nos disciplines</p>
          <h2 className="mt-4 font-display text-4xl text-brand-900 md:text-5xl">
            Trois façons de <span className="italic">te transformer</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {DISCIPLINES.map((d, i) => (
            <motion.article
              key={d.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group border border-brand-900/10 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-2xl text-brand-900">{d.title}</h3>
                  <span className="text-xs tracking-wider text-brand-accent uppercase">
                    {d.duration}
                  </span>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-ink-light">{d.description}</p>

                <div className="flex items-center justify-between border-t border-brand-900/10 pt-4">
                  <span className="text-xs tracking-wider text-ink-light uppercase">
                    Intensité : {d.intensity}
                  </span>
                  <a
                    href="#tarifs"
                    className="text-xs tracking-wider text-brand-900 uppercase transition-colors hover:text-brand-accent"
                  >
                    Réserver →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
