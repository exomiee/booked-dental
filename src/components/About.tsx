"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We Focus on What Moves the Needle
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Booked.Dental exists to help implant and veneer-focused practices fill the chair with qualified calls—not low-intent leads. We use Meta ads and UGC creative because that's where we consistently hit $20–$30 per call for high-ticket dentistry.
            </p>
            <p className="mt-4 text-slate-600">
              No generic dental marketing. No vanity metrics. Just transparent tracking, clear reporting, and a system built for clinics that know the value of a phone call.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-slate-100 to-teal-50/50 p-8 sm:p-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500 text-white font-bold">
                  $
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Cost per call</p>
                  <p className="text-slate-600">$20–$30 qualified calls, tracked and reported</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Meta + UGC</p>
                  <p className="text-slate-600">Ads and creative built for implants & veneers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Transparent</p>
                  <p className="text-slate-600">Call tracking and attribution on every campaign</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
