"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FONDATRICE } from "@/data/mock";

export default function Fondatrice() {
  return (
    <section id="fondatrice" className="bg-brand-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-brand-accent uppercase">Notre histoire</p>
          <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">La fondatrice</h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <Image
              src={FONDATRICE.images[0]}
              alt={FONDATRICE.name}
              width={1066}
              height={1600}
              className="h-80 w-full object-cover md:h-[450px]"
            />
            <Image
              src={FONDATRICE.images[1]}
              alt={FONDATRICE.name}
              width={1066}
              height={1600}
              className="mt-12 h-80 w-full object-cover md:h-[450px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-cream"
          >
            <p className="text-xs tracking-[0.3em] text-brand-accent uppercase">
              {FONDATRICE.role}
            </p>

            <h3 className="mt-4 font-display text-4xl md:text-5xl">{FONDATRICE.name}</h3>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-cream/80">
              {FONDATRICE.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-10 border-l-2 border-brand-accent pl-6">
              <p className="font-display text-lg italic leading-relaxed text-cream">
                {FONDATRICE.quote}
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
