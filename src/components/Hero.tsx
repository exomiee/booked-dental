"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/50 to-teal-50/30 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Qualified Calls for{" "}
              <span className="text-teal-600">Implant & Veneer</span>{" "}
              Clinics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-6 max-w-xl text-lg text-slate-600"
            >
              We help high-ticket dental practices fill the chair with qualified calls at{" "}
              <strong className="text-slate-800">$20–$30 per call</strong> using high-converting Meta ads powered by authentic UGC.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition-all hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/30"
              >
                Book a Call
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-base font-medium text-teal-600 hover:text-teal-700"
              >
                See how it works
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-14 flex flex-wrap items-center gap-6 border-t border-slate-200/80 pt-10"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-slate-800">$20–30</span>
                <span className="text-sm text-slate-500">/ qualified call</span>
              </div>
              <span className="h-8 w-px bg-slate-300" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-slate-800">Meta</span>
                <span className="text-sm text-slate-500">+ UGC creative</span>
              </div>
              <span className="h-8 w-px bg-slate-300" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-slate-800">Implant & Veneer</span>
                <span className="text-sm text-slate-500">focused</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 shadow-2xl shadow-slate-200/50 aspect-[4/3] max-h-[420px]">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {[
                    { label: "Calls", value: "$24", sub: "avg. cost" },
                    { label: "ROAS", value: "10x+", sub: "meta ads" },
                    { label: "Clinics", value: "50+", sub: "partnered" },
                    { label: "UGC", value: "100%", sub: "creative" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="rounded-xl bg-white/90 p-4 text-center shadow-lg backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold text-teal-700">{stat.value}</div>
                      <div className="text-xs font-medium text-slate-600">{stat.label}</div>
                      <div className="text-xs text-slate-400">{stat.sub}</div>
                    </motion.div>
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
