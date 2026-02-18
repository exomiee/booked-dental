"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const checks = [
  "Full-funnel Meta campaigns (awareness → lead → call)",
  "UGC creative tailored to implants & veneers",
  "Call tracking and attribution per campaign",
  "Weekly reporting and optimization",
];

export default function Strategy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-cyan-50/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Strategy Built for High-Ticket Dentistry
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Implant and veneer patients don't convert like commodity dentistry. We use UGC and precise targeting so your ads reach people who are ready to book—and we optimize until cost per qualified call sits in the $20–$30 range.
            </p>
            <ul className="mt-8 space-y-4">
              {checks.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-700">{text}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition-all hover:bg-teal-700"
            >
              Book a Call
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl bg-white/80 shadow-xl ring-1 ring-slate-200/60 backdrop-blur-sm">
              <div className="p-8 sm:p-10">
                <div className="rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 p-6 text-white">
                  <p className="text-sm font-medium uppercase tracking-wider opacity-90">Our focus</p>
                  <p className="mt-2 text-2xl font-bold">$20–$30 per qualified call</p>
                  <p className="mt-2 text-teal-100">
                    Meta ads + UGC creative built for implant & veneer clinics. Transparent tracking, no vanity metrics.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Avg. cost per call", value: "$24" },
                    { label: "Typical ROAS", value: "4x+" },
                    { label: "Call volume", value: "Scalable" },
                    { label: "Creative", value: "UGC-first" },
                  ].map((row) => (
                    <div key={row.label} className="rounded-lg bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-500">{row.label}</p>
                      <p className="mt-1 text-lg font-semibold text-slate-800">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
