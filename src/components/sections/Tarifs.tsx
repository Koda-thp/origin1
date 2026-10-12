"use client";

import { motion } from "framer-motion";
import { PRICING } from "@/data/mock";

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-blush py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-brand-accent uppercase">Nos formules</p>
          <h2 className="mt-4 font-display text-4xl text-brand-900 md:text-5xl">
            Trouve <span className="italic">ta formule</span>
          </h2>
          <p className="mt-4 text-ink-light">Engagement mensuel, résiliable à tout moment.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PRICING.map((plan, i) => {
            const bg = plan.highlighted
              ? "bg-brand-900 text-cream"
              : i % 2 === 0
                ? "bg-cream text-brand-900"
                : "bg-white text-brand-900";

            return (
              <motion.div
                key={plan.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col p-10 ${bg}`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 right-8 bg-brand-accent px-4 py-1 text-[10px] tracking-widest text-cream uppercase">
                    Populaire
                  </span>
                )}

                <h3 className="font-display text-2xl">{plan.name}</h3>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl">{plan.price}</span>
                  <span className="text-sm opacity-70">{plan.period}</span>
                </div>

                <ul className="mt-10 flex-1 space-y-4 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 8l4 4 6-7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-10 inline-block border px-6 py-3 text-center text-xs tracking-widest uppercase transition-colors ${
                    plan.highlighted
                      ? "border-cream text-cream hover:bg-cream hover:text-brand-900"
                      : "border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-cream"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
