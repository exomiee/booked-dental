"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cases = [
  {
    title: "Veneer practice: 16x ROAS and $26 cost per qualified call",
    description: "A multi-location veneer-focused group wanted to scale without blowing CPL. We launched UGC-heavy Meta campaigns with call-only objectives and landed at a consistent $26 CPA.",
    metrics: ["16x ROAS", "$26/call", "200+ calls/mo"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Implant clinic: 100+ new patient calls at $22 average",
    description: "Single high-end implant practice needed predictable call volume. We combined lead forms with click-to-call and UGC testimonials to hit $20–$24 per qualified call.",
    metrics: ["100+ calls", "$22 avg", "16x ROAS"],
    gradient: "from-teal-500 to-cyan-600",
  },
];

export default function CaseStudies() {
  return (
    <section id="results" className="bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Results That Speak
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real numbers from implant and veneer clinics running Meta + UGC with us.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/80 transition-all hover:shadow-xl"
            >
              <div className={`h-32 bg-gradient-to-br ${c.gradient} flex items-end justify-end p-6`}>
                <span className="rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                  {c.metrics[0]}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-4 text-slate-600">{c.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {c.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
                >
                  Get similar results
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
