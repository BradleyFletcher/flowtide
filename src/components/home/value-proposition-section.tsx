"use client";

import { motion } from "framer-motion";

export const ValuePropositionSection = () => {
  return (
    <section className="bg-brand-deep py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            My Vision
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-white/90">
            <p>
              I'm redefining what affordable web solutions mean. By leveraging
              AI alongside my 15 years of development experience, I deliver the
              same caliber of solutions you'd expect from large companies and
              organisations, at rates that make sense for businesses of all
              sizes.
            </p>

            <p>
              My approach combines modern technology with deep expertise gained
              from years of building complex digital products. This means faster
              turnaround times, lower costs, and the same level of quality you'd
              expect from high-end agencies, without the premium price tag.
            </p>

            <p className="font-semibold text-white">
              I believe powerful, scalable, and beautifully crafted websites
              should be accessible to every business ready to make an impact
              online.
            </p>
          </div>

          <p className="mt-8 text-center text-lg text-white/80">
            My Vision,{" "}
            <span style={{ fontFamily: "'Bad Script', cursive" }}>
              Brad Fletcher
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
